-- Verified local backups are required by the admin UI before this atomic operation.
-- No retention job runs automatically; existing invoice snapshots remain unchanged.
create table vettiver_private.invoice_number_state (
 singleton boolean primary key default true check(singleton),
 highest numeric(48,0) not null default 0 check(highest>=0)
);
alter table vettiver_private.invoice_number_state enable row level security;
revoke all on vettiver_private.invoice_number_state from public,anon,authenticated;
insert into vettiver_private.invoice_number_state(singleton,highest)
select true,coalesce(max(number::numeric) filter(where number ~ '^[0-9]+$'),0) from public.invoices where number ~ '^[0-9]+$';

create function vettiver_private.guard_invoice_number() returns trigger
language plpgsql security definer set search_path='' as $$
declare highest_number numeric;
begin
 if new.number ~ '^[0-9]+$' then
  select highest into highest_number from vettiver_private.invoice_number_state where singleton for update;
  if new.number::numeric<=highest_number then
   raise exception using errcode='23505',message='Invoice number has already been used. Refresh to use the next number.';
  end if;
  update vettiver_private.invoice_number_state set highest=new.number::numeric where singleton;
 end if;
 return new;
end;$$;
revoke all on function vettiver_private.guard_invoice_number() from public,anon,authenticated;
create trigger invoice_number_guard before insert on public.invoices for each row execute function vettiver_private.guard_invoice_number();

create function vettiver_private.next_invoice_number() returns text
language plpgsql security definer set search_path='' as $$
begin
 if auth.uid() is null or public.is_vettiver_admin() is not true then raise exception 'Admin access required' using errcode='42501';end if;
 return (select (highest+1)::text from vettiver_private.invoice_number_state where singleton);
end;$$;
revoke all on function vettiver_private.next_invoice_number() from public,anon,authenticated;
grant execute on function vettiver_private.next_invoice_number() to authenticated;
create function public.vettiver_next_invoice_number() returns text language sql security invoker set search_path='' as $$select vettiver_private.next_invoice_number()$$;
revoke all on function public.vettiver_next_invoice_number() from public,anon;
grant execute on function public.vettiver_next_invoice_number() to authenticated;

create function vettiver_private.delete_exported_invoices(p_snapshots jsonb,p_from date,p_to date) returns integer
language plpgsql security definer set search_path='' as $$
declare snapshot jsonb; current_invoice public.invoices; expected public.invoices; deleted_count integer;
begin
 if auth.uid() is null or public.is_vettiver_admin() is not true then raise exception 'Admin access required' using errcode='42501';end if;
 if p_from is null or p_to is null or p_from>p_to or p_to>=current_date then raise exception 'Choose a completed date range before today';end if;
 if jsonb_typeof(p_snapshots) is distinct from 'array' then raise exception 'Invalid backup';end if;
 if jsonb_array_length(p_snapshots) not between 1 and 5000 or octet_length(p_snapshots::text)>20971520 then raise exception 'Export a smaller date range (up to 5000 invoices)';end if;
 if (select count(distinct x->>'id') from jsonb_array_elements(p_snapshots) x)<>jsonb_array_length(p_snapshots) then raise exception 'Duplicate or missing backup records';end if;
 -- Deterministic lock order. Every selected row is rechecked before any deletion.
 for snapshot in select value from jsonb_array_elements(p_snapshots) order by value->>'id' loop
  if not snapshot ?& array['id','number','issued_on','order_id','seller','customer','currency','items','shipping','advance','subtotal','total','balance','notes','status','created_at'] then raise exception 'Incomplete invoice backup';end if;
  expected:=jsonb_populate_record(null::public.invoices,snapshot);
  select * into current_invoice from public.invoices where id=expected.id for update;
  if not found then raise exception 'Records changed since export. Export and verify again.';end if;
  if current_invoice.issued_on not between p_from and p_to or to_jsonb(current_invoice) is distinct from to_jsonb(expected) then raise exception 'Records changed since export. Export and verify again.';end if;
 end loop;
 delete from public.invoices where id in(select (x->>'id')::uuid from jsonb_array_elements(p_snapshots) x);
 get diagnostics deleted_count=row_count;
 return deleted_count;
end;$$;
revoke all on function vettiver_private.delete_exported_invoices(jsonb,date,date) from public,anon,authenticated;
grant execute on function vettiver_private.delete_exported_invoices(jsonb,date,date) to authenticated;
create function public.vettiver_delete_exported_invoices(p_snapshots jsonb,p_from date,p_to date) returns integer language sql security invoker set search_path='' as $$select vettiver_private.delete_exported_invoices(p_snapshots,p_from,p_to)$$;
revoke all on function public.vettiver_delete_exported_invoices(jsonb,date,date) from public,anon;
grant execute on function public.vettiver_delete_exported_invoices(jsonb,date,date) to authenticated;
-- Trigger routines remain usable by their existing triggers, not direct role calls.
do $$declare routine regprocedure;begin
 for routine in select p.oid::regprocedure from pg_proc p join pg_namespace n on n.oid=p.pronamespace where n.nspname='vettiver_private' and p.prorettype='trigger'::regtype loop
  execute format('revoke all on function %s from public,anon,authenticated',routine);
 end loop;
end;$$;
-- Private functions are not exposed by PostgREST; authenticated wrappers perform an explicit admin check.
grant usage on schema vettiver_private to authenticated;
