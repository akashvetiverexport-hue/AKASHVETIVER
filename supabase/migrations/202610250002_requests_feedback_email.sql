begin;
create table public.order_requests (
 id uuid primary key default gen_random_uuid(),
 kind text not null check(kind in ('order','bulk')),
 customer jsonb not null, items jsonb not null,
 message text not null default '' check(char_length(message)<=1500),
 consent_to_contact boolean not null check(consent_to_contact),
 status text not null default 'received' check(status in ('received','contacted','closed')),
 delivery_status text not null default 'pending' check(delivery_status in ('pending','sent','failed')),
 created_at timestamptz not null default now()
);
create table public.customer_feedback (
 id uuid primary key default gen_random_uuid(),
 name text not null check(char_length(trim(name)) between 1 and 80),
 content text not null check(char_length(trim(content)) between 1 and 1200),
 rating integer not null check(rating between 1 and 5),
 consent_to_publish boolean not null check(consent_to_publish),
 status text not null default 'pending' check(status in ('pending','approved','rejected')),
 created_at timestamptz not null default now()
);
alter table public.order_requests enable row level security;
alter table public.customer_feedback enable row level security;
revoke all on public.order_requests, public.customer_feedback from public,anon,authenticated;
grant select on public.order_requests,public.customer_feedback to authenticated;
grant update(status) on public.order_requests,public.customer_feedback to authenticated;
grant all on public.order_requests,public.customer_feedback to service_role;
create policy order_requests_admin_read on public.order_requests for select to authenticated using((select public.is_vettiver_admin()));
create policy order_requests_admin_update on public.order_requests for update to authenticated using((select public.is_vettiver_admin())) with check((select public.is_vettiver_admin()));
create policy feedback_admin_read on public.customer_feedback for select to authenticated using((select public.is_vettiver_admin()));
create policy feedback_admin_update on public.customer_feedback for update to authenticated using((select public.is_vettiver_admin())) with check((select public.is_vettiver_admin()));

create table vettiver_private.submissions (
 kind text not null, retry_key uuid not null, payload_hash text not null,
 reference uuid not null, created_at timestamptz not null default now(), primary key(kind,retry_key)
);
create table vettiver_private.rate_windows (
 rate_key text not null, bucket timestamptz not null, attempts integer not null,
 primary key(rate_key,bucket)
);
create table vettiver_private.email_outbox (
 id uuid primary key default gen_random_uuid(), reference uuid not null unique,
 kind text not null check(kind in ('request','feedback')), subject text not null, body text not null,
 status text not null default 'pending' check(status in ('pending','sending','sent','failed')),
 attempts integer not null default 0, next_attempt timestamptz not null default now(),
 lease uuid, lease_until timestamptz, first_attempt timestamptz,
 provider_id text, last_error text, created_at timestamptz not null default now()
);
revoke all on all tables in schema vettiver_private from public,anon,authenticated;

create function public.vettiver_submit(p_kind text,p_key uuid,p_hash text,p_rate_key text,p_payload jsonb)
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
   normalized:=normalized||jsonb_build_array(jsonb_build_object('productId',item->>'productId','name',product_name,'quantity',(item->>'quantity')::integer));
  end loop;
  insert into public.order_requests(id,kind,customer,items,message,consent_to_contact)
  values(receipt,p_payload->>'kind',p_payload->'customer',normalized,p_payload->>'message',true);
  subject_text:='New '||(p_payload->>'kind')||' enquiry — '||receipt::text;
  body_text:='Reference: '||receipt::text||E'\nName: '||(p_payload#>>'{customer,name}')||E'\nWhatsApp: '||(p_payload#>>'{customer,whatsapp}')||E'\nDelivery: '||(p_payload#>>'{customer,city}')||', '||(p_payload#>>'{customer,postalCode}')||E'\n\nPieces:\n';
  for item in select value from jsonb_array_elements(normalized) loop body_text:=body_text||(item->>'name')||' — quantity '||(item->>'quantity')||E'\n'; end loop;
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

create function public.vettiver_claim_notification()
returns table(id uuid,lease uuid,subject text,body text) language plpgsql security definer set search_path='' as $$
begin
 -- Stop before Resend's 24-hour deduplication window expires; require manual review.
 update vettiver_private.email_outbox o set status='failed',last_error='retry_window_expired'
 where (o.status='pending' or (o.status='sending' and o.lease_until<now())) and (o.attempts>=8 or o.first_attempt<now()-interval '23 hours');
 update public.order_requests r set delivery_status='failed' where exists(select 1 from vettiver_private.email_outbox o where o.reference=r.id and o.status='failed');
 return query
 with candidate as (
  select o.id from vettiver_private.email_outbox o
  where (o.status='pending' and o.next_attempt<=now()) or (o.status='sending' and o.lease_until<now())
  order by o.created_at limit 1 for update skip locked
 ), claimed as (
  update vettiver_private.email_outbox o set status='sending',attempts=o.attempts+1,lease=gen_random_uuid(),lease_until=now()+interval '90 seconds',first_attempt=coalesce(o.first_attempt,now())
  from candidate c where o.id=c.id returning o.*
 ) select c.id,c.lease,c.subject,c.body from claimed c;
end; $$;
revoke all on function public.vettiver_claim_notification() from public,anon,authenticated;
grant execute on function public.vettiver_claim_notification() to service_role;

create function public.vettiver_finish_notification(p_id uuid,p_lease uuid,p_email_id text,p_error text)
returns void language plpgsql security definer set search_path='' as $$
declare job vettiver_private.email_outbox;
begin
 select * into job from vettiver_private.email_outbox where id=p_id and lease=p_lease and status='sending' for update;
 if not found then return; end if;
 update vettiver_private.email_outbox set status=case when p_email_id is not null then 'sent' when attempts>=8 then 'failed' else 'pending' end,
 provider_id=p_email_id,last_error=case when p_email_id is null then left(p_error,80) else null end,
 next_attempt=now()+make_interval(secs=>least(3600,60*power(2,attempts))::integer),lease=null,lease_until=null
 where id=p_id;
 if job.kind='request' then update public.order_requests set delivery_status=case when p_email_id is not null then 'sent' when job.attempts>=8 then 'failed' else 'pending' end where id=job.reference; end if;
end; $$;
revoke all on function public.vettiver_finish_notification(uuid,uuid,text,text) from public,anon,authenticated;
grant execute on function public.vettiver_finish_notification(uuid,uuid,text,text) to service_role;

create table vettiver_private.inbox_audit(id bigint generated always as identity primary key,record_id uuid,record_type text,old_status text,new_status text,actor uuid,created_at timestamptz not null default now());
revoke all on vettiver_private.inbox_audit from public,anon,authenticated;
create function vettiver_private.audit_inbox() returns trigger language plpgsql security definer set search_path='' as $$
begin
 if new.status is distinct from old.status then insert into vettiver_private.inbox_audit(record_id,record_type,old_status,new_status,actor) values(new.id,TG_TABLE_NAME,old.status,new.status,auth.uid()); end if;
 return new;
end; $$;
create trigger order_request_audit before update on public.order_requests for each row execute function vettiver_private.audit_inbox();
create trigger customer_feedback_audit before update on public.customer_feedback for each row execute function vettiver_private.audit_inbox();
commit;
