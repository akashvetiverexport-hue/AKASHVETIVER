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
   normalized:=normalized||jsonb_build_array(jsonb_build_object('productId',item->>'productId','name',product_name,'quantity',(item->>'quantity')::integer) || case when item->>'productId' in ('custom','help-me-choose') then '{}'::jsonb else vettiver_private.size_quote(item) end);
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


