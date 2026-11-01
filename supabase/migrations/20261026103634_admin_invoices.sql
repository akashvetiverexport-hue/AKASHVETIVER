-- Permanent invoice snapshots. Only approved administrators may read or create.
create table public.invoices (
 id uuid primary key default gen_random_uuid(),
 number text not null unique check (number ~ '^[-A-Za-z0-9/]{1,48}$'),
 issued_on date not null,
 order_id uuid references public.order_requests(id) on delete restrict,
 seller jsonb not null,
 customer jsonb not null,
 currency text not null default 'INR' check(currency in ('INR','USD','EUR','GBP','AED')),
 items jsonb not null check(jsonb_typeof(items)='array' and jsonb_array_length(items) between 1 and 100),
 shipping numeric(16,2) not null default 0 check(shipping between 0 and 10000000),
 advance numeric(16,2) not null default 0 check(advance>=0),
 subtotal numeric(20,2) not null default 0,
 total numeric(20,2) not null default 0,
 balance numeric(20,2) not null default 0,
 notes text not null default '' check(length(notes)<=2000),
 status text not null default 'issued' check(status in ('issued','void')),
 created_at timestamptz not null default now()
);
alter table public.invoices enable row level security;
revoke all on public.invoices from anon,authenticated;
grant select,insert on public.invoices to authenticated;
grant update(status) on public.invoices to authenticated;
create policy invoices_admin_read on public.invoices for select to authenticated using ((select public.is_vettiver_admin()));
create policy invoices_admin_create on public.invoices for insert to authenticated with check ((select public.is_vettiver_admin()));
create policy invoices_admin_void on public.invoices for update to authenticated using ((select public.is_vettiver_admin())) with check ((select public.is_vettiver_admin()));
create index invoices_created_at_idx on public.invoices(created_at desc);
create index invoices_order_id_idx on public.invoices(order_id) where order_id is not null;
create function vettiver_private.validate_invoice() returns trigger language plpgsql set search_path='' as $$
declare item jsonb; party jsonb; qty numeric; price numeric; amount numeric:=0;
begin
 if TG_OP='UPDATE' then
  if old.status<>'issued' or new.status<>'void' or (to_jsonb(new)-'status') is distinct from (to_jsonb(old)-'status') then
   raise exception 'Saved invoices cannot be edited. Void and create a replacement.';
  end if;
  return new;
 end if;
 if new.status<>'issued' then raise exception 'New invoices must be issued.'; end if;
 foreach party in array array[new.seller,new.customer] loop
  if jsonb_typeof(party) is distinct from 'object' or coalesce(length(trim(party->>'name')),0) not between 1 and 200
    or length(coalesce(party->>'address',''))>1000 or length(coalesce(party->>'email',''))>200
    or length(coalesce(party->>'phone',''))>200 or length(coalesce(party->>'registration',''))>200 then
   raise exception 'Invalid invoice contact details.';
  end if;
 end loop;
 if jsonb_typeof(new.items) is distinct from 'array' or jsonb_array_length(new.items) not between 1 and 100 then raise exception 'Invalid invoice items.';end if;
 for item in select value from jsonb_array_elements(new.items) loop
  if jsonb_typeof(item) is distinct from 'object' or coalesce(length(trim(item->>'name')),0) not between 1 and 240
    or jsonb_typeof(item->'quantity') is distinct from 'number' or jsonb_typeof(item->'price') is distinct from 'number' then raise exception 'Invalid invoice item.';end if;
  qty:=(item->>'quantity')::numeric; price:=(item->>'price')::numeric;
  if qty<>trunc(qty) or qty not between 1 and 100000 or price not between 0 and 10000000 or price<>round(price,2) then raise exception 'Invalid invoice quantity or price.';end if;
  amount:=amount+round(qty*price,2);
 end loop;
 new.subtotal:=amount;new.total:=amount+new.shipping;new.balance:=new.total-new.advance;new.created_at:=now();
 if new.advance>new.total then raise exception 'Advance exceeds invoice total.';end if;
 return new;
end;$$;
revoke all on function vettiver_private.validate_invoice() from public,anon,authenticated;
create trigger validate_invoice before insert or update on public.invoices for each row execute function vettiver_private.validate_invoice();
