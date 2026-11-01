begin;
-- Supabase's automatic RLS event trigger does not need Data API execute access.
do $$begin if to_regprocedure('public.rls_auto_enable()') is not null then execute 'revoke execute on function public.rls_auto_enable() from public, anon, authenticated';end if;end$$;
create table public.festival_campaigns (
 id uuid primary key default gen_random_uuid(),
 title text not null check(char_length(trim(title)) between 1 and 80),
 description text not null default '' check(char_length(description)<=240),
 image text not null default '' check(image='' or image ~ '^https://lgkkjubwdxdfpmoxkrmd\.supabase\.co/storage/v1/object/public/product-images/[a-zA-Z0-9_/-]+\.webp$'),
 starts_at timestamptz not null, ends_at timestamptz not null,
 enabled boolean not null default false, version integer not null default 1,
 check(ends_at>starts_at)
);
alter table public.festival_campaigns enable row level security;
revoke all on public.festival_campaigns from public,anon,authenticated;
grant select on public.festival_campaigns to anon;
grant select,insert,update,delete on public.festival_campaigns to authenticated;
create policy campaigns_read on public.festival_campaigns for select to anon using(enabled and starts_at<=now() and ends_at>now());
create policy campaigns_member_read on public.festival_campaigns for select to authenticated using((enabled and starts_at<=now() and ends_at>now()) or (select public.is_vettiver_admin()));
create policy campaigns_insert on public.festival_campaigns for insert to authenticated with check((select public.is_vettiver_admin()));
create policy campaigns_update on public.festival_campaigns for update to authenticated using((select public.is_vettiver_admin())) with check((select public.is_vettiver_admin()));
create policy campaigns_delete on public.festival_campaigns for delete to authenticated using((select public.is_vettiver_admin()));
create function vettiver_private.campaign_version() returns trigger language plpgsql set search_path='' as $$begin new.version:=old.version+1;return new;end$$;
create trigger campaign_version before update on public.festival_campaigns for each row execute function vettiver_private.campaign_version();

alter table public.products
 add column price numeric(10,2) not null default 350 check(price>0 and price<=10000000),
 add column price_is_sample boolean not null default true,
 add column offers_enabled boolean not null default false,
 add column offer_label text not null default 'Special offer' check(char_length(trim(offer_label)) between 1 and 80),
 add column offer_starts timestamptz,
 add column offer_ends timestamptz,
 add column campaign_id uuid references public.festival_campaigns(id) on delete set null,
 add column sale_price numeric(10,2),
 add column gift_name text not null default '' check(char_length(gift_name)<=160),
 add column gift_image text not null default '' check(gift_image='' or gift_image ~ '^https://lgkkjubwdxdfpmoxkrmd\.supabase\.co/storage/v1/object/public/product-images/[a-zA-Z0-9_/-]+\.webp$'),
 add column combo_product_id text references public.products(id) on delete set null,
 add column combo_price numeric(10,2),
 add constraint sale_price_valid check(sale_price is null or (sale_price>0 and sale_price<price)),
 add constraint combo_price_valid check(combo_price is null or (combo_price>0 and combo_price<=10000000)),
 add constraint combo_not_self check(combo_product_id is null or combo_product_id<>id),
 add constraint offer_dates_valid check(not offers_enabled or (offer_starts is not null and offer_ends is not null and offer_ends>offer_starts)),
 add constraint gift_photo_required check(gift_name='' or gift_image<>'');
update public.products set price=case when category='garland' then 650 when category='toran' then 450 else 350 end;
grant delete on public.products to authenticated;
create policy products_admin_delete on public.products for delete to authenticated using((select public.is_vettiver_admin()));
create function vettiver_private.audit_product_delete() returns trigger language plpgsql security definer set search_path='' as $$
begin insert into vettiver_private.product_audit(product_id,actor,operation,old_record) values(old.id,auth.uid(),'DELETE',to_jsonb(old));return old;end$$;
create trigger product_delete_audit before delete on public.products for each row execute function vettiver_private.audit_product_delete();

-- Disable associated offers before removing a campaign, so they cannot become standalone.
create function vettiver_private.disable_campaign_offers() returns trigger language plpgsql security definer set search_path='' as $$begin update public.products set offers_enabled=false where campaign_id=old.id;return old;end$$;
create trigger campaign_delete_disable before delete on public.festival_campaigns for each row execute function vettiver_private.disable_campaign_offers();
-- Derive offers from current database records, never customer-supplied prices or gifts.
create function vettiver_private.product_quote(p_id text,p_combo boolean) returns jsonb language plpgsql set search_path='' as $$
declare p public.products; partner public.products; active boolean; result jsonb;
begin
 select * into p from public.products where id=p_id and status='published' for share;
 if not found then raise exception 'product_unavailable';end if;
 active:=p.offers_enabled and p.offer_starts<=now() and p.offer_ends>now();
 if p.campaign_id is not null then active:=active and exists(select 1 from public.festival_campaigns where id=p.campaign_id and enabled and starts_at<=now() and ends_at>now());end if;
 result:=jsonb_build_object('unitPrice',case when active and p.sale_price is not null then p.sale_price else p.price end,'currency','INR','samplePrice',p.price_is_sample);
 if active then
  result:=result||jsonb_build_object('offerLabel',p.offer_label);
  if p.gift_name<>'' then result:=result||jsonb_build_object('gift',jsonb_build_object('name',p.gift_name,'image',p.gift_image,'perUnit',true));end if;
 end if;
 if p_combo then
  if not coalesce(active,false) or p.combo_product_id is null or p.combo_price is null then raise exception 'offer_unavailable';end if;
  select * into partner from public.products where id=p.combo_product_id and status='published' for share;
  if not found then raise exception 'offer_unavailable';end if;
  result:=result||jsonb_build_object('offerType','combo','unitPrice',p.combo_price,'combo',jsonb_build_object('productId',partner.id,'name',partner.name,'image',partner.thumbnail,'perUnit',true));
 end if;
 return result;
end$$;
revoke all on function vettiver_private.product_quote(text,boolean) from public,anon,authenticated;
create or replace function public.vettiver_submit(p_kind text,p_key uuid,p_hash text,p_rate_key text,p_payload jsonb)
returns jsonb language plpgsql security definer set search_path='' as $$
declare previous vettiver_private.submissions; attempts integer; receipt uuid:=gen_random_uuid();
 normalized jsonb:='[]'; item jsonb; product_name text; body_text text; subject_text text;
begin
 if p_kind not in ('request','feedback') or p_hash !~ '^[a-f0-9]{64}$' or p_rate_key !~ '^[a-f0-9]{64}$' or octet_length(p_payload::text)>16384 then raise exception 'invalid_payload'; end if;
 -- Serialize identical keys; the receipt and notification are committed together.
 perform pg_advisory_xact_lock(hashtextextended(p_kind||p_key::text,0));
 select * into previous from vettiver_private.submissions where kind=p_kind and retry_key=p_key;
 if found then
  if previous.payload_hash<>p_hash then raise exception 'idempotency_conflict'; end if;
  return jsonb_build_object('id',previous.reference,'status',case when p_kind='request' then 'received' else 'pending' end);
 end if;
 insert into vettiver_private.rate_windows(rate_key,bucket,attempts) values(p_rate_key,date_trunc('hour',now()),1)
 on conflict(rate_key,bucket) do update set attempts=vettiver_private.rate_windows.attempts+1 returning rate_windows.attempts into attempts;
 if attempts>6 then raise exception 'rate_limited'; end if;
 delete from vettiver_private.rate_windows where bucket<now()-interval '48 hours';
 if p_kind='request' then
  if p_payload->>'consentToContact'<>'true' or p_payload->>'kind' not in ('order','bulk') or jsonb_array_length(p_payload->'items') not between 1 and 12 then raise exception 'invalid_payload'; end if;
  for item in select value from jsonb_array_elements(p_payload->'items') loop
   if (item->>'quantity')::integer not between 1 and 9999 then raise exception 'invalid_payload'; end if;
   if item->>'productId'='custom' then product_name:='A custom vetiver piece';
   elsif item->>'productId'='help-me-choose' and p_payload->>'kind'='bulk' then product_name:='Help me choose';
   else
    select name into product_name from public.products where id=item->>'productId' and status='published' for share;
    if not found then raise exception 'product_unavailable'; end if;
   end if;
   normalized:=normalized||jsonb_build_array(jsonb_build_object('productId',item->>'productId','name',product_name,'quantity',(item->>'quantity')::integer) || case when item->>'productId' in ('custom','help-me-choose') then '{}'::jsonb else vettiver_private.product_quote(item->>'productId',coalesce(item->>'offerType'='combo',false)) end);
  end loop;
  insert into public.order_requests(id,kind,customer,items,message,consent_to_contact)
  values(receipt,p_payload->>'kind',p_payload->'customer',normalized,p_payload->>'message',true);
  subject_text:='New '||(p_payload->>'kind')||' enquiry — '||receipt::text;
  body_text:='Reference: '||receipt::text||E'\nName: '||(p_payload#>>'{customer,name}')||E'\nWhatsApp: '||(p_payload#>>'{customer,whatsapp}')||E'\nDelivery: '||(p_payload#>>'{customer,city}')||', '||(p_payload#>>'{customer,postalCode}')||E'\n\nPieces:\n';
  for item in select value from jsonb_array_elements(normalized) loop body_text:=body_text||(item->>'name')||' — quantity '||(item->>'quantity')||E'\n'||coalesce('INR '||(item->>'unitPrice')||' per unit/set'||E'\n','')||coalesce('Free gift: '||(item#>>'{gift,name}')||' per unit/set'||E'\n','')||coalesce('Combo includes: '||(item#>>'{combo,name}')||E'\n',''); end loop;
  body_text:=body_text||E'\nMessage: '||(p_payload->>'message')||E'\n\nCustomer permitted contact about this enquiry. No payment or confirmed order.';
 else
  if p_payload->>'consentToPublish'<>'true' then raise exception 'invalid_payload'; end if;
  insert into public.customer_feedback(id,name,content,rating,consent_to_publish)
  values(receipt,p_payload->>'name',p_payload->>'content',(p_payload->>'rating')::integer,true);
  subject_text:='Feedback awaiting review — '||receipt::text;
  body_text:='Reference: '||receipt::text||E'\nName: '||(p_payload->>'name')||E'\nRating: '||(p_payload->>'rating')||E'\n\n'||(p_payload->>'content')||E'\n\nThis feedback is pending. Review it in the admin inbox before publication.';
 end if;
 insert into vettiver_private.submissions(kind,retry_key,payload_hash,reference) values(p_kind,p_key,p_hash,receipt);
 insert into vettiver_private.email_outbox(reference,kind,subject,body) values(receipt,p_kind,subject_text,body_text);
 return jsonb_build_object('id',receipt,'status',case when p_kind='request' then 'received' else 'pending' end);
end; $$;
revoke all on function public.vettiver_submit(text,uuid,text,text,jsonb) from public,anon,authenticated;
grant execute on function public.vettiver_submit(text,uuid,text,text,jsonb) to service_role;


commit;
