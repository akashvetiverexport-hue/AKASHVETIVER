begin;
create schema vettiver_private;
revoke all on schema vettiver_private from public, anon, authenticated;

create table public.vettiver_admins (
 user_id uuid primary key references auth.users(id) on delete cascade,
 created_at timestamptz not null default now()
);
alter table public.vettiver_admins enable row level security;
revoke all on public.vettiver_admins from anon, authenticated;

create function public.is_vettiver_admin() returns boolean
language sql stable security definer set search_path = ''
as $$ select exists(select 1 from public.vettiver_admins where user_id = (select auth.uid())); $$;
revoke all on function public.is_vettiver_admin() from public, anon;
grant execute on function public.is_vettiver_admin() to authenticated;

create table public.products (
 id text primary key check (id ~ '^product-[a-z0-9-]{1,90}$'),
 category text not null check (category in ('garland','toran','decor','ceremony')),
 name text not null check (char_length(trim(name)) between 1 and 120),
 description text not null check (char_length(description) between 1 and 1500),
 alt text not null check (char_length(trim(alt)) between 1 and 240),
 image text not null,
 thumbnail text not null,
 status text not null default 'draft' check (status in ('draft','published','archived')),
 sort_order integer not null default 100,
 featured_order integer check (featured_order between 0 and 4),
 version integer not null default 1,
 updated_at timestamptz not null default now(),
 constraint image_path check (image ~ '^images/optimized/[a-zA-Z0-9_./-]+\.webp$' or image ~ '^https://lgkkjubwdxdfpmoxkrmd\.supabase\.co/storage/v1/object/public/product-images/[a-zA-Z0-9_/-]+\.webp$'),
 constraint thumbnail_path check (thumbnail ~ '^images/optimized/[a-zA-Z0-9_./-]+\.webp$' or thumbnail ~ '^https://lgkkjubwdxdfpmoxkrmd\.supabase\.co/storage/v1/object/public/product-images/[a-zA-Z0-9_/-]+\.webp$')
);
create unique index products_unique_name on public.products (lower(trim(name)));
create unique index products_featured_slot on public.products (featured_order) where status='published' and featured_order is not null;
alter table public.products enable row level security;
revoke all on public.products from anon, authenticated;
grant select on public.products to anon;
grant select, insert, update on public.products to authenticated;
create policy products_public_read on public.products for select to anon using (status='published');
create policy products_signed_in_read on public.products for select to authenticated using (status='published' or (select public.is_vettiver_admin()));
create policy products_admin_insert on public.products for insert to authenticated with check ((select public.is_vettiver_admin()));
create policy products_admin_update on public.products for update to authenticated using ((select public.is_vettiver_admin())) with check ((select public.is_vettiver_admin()));

create table vettiver_private.product_audit (
 id bigint generated always as identity primary key,
 product_id text not null, actor uuid, operation text not null,
 old_record jsonb, new_record jsonb, created_at timestamptz not null default now()
);
revoke all on vettiver_private.product_audit from public, anon, authenticated;
create function vettiver_private.audit_product() returns trigger language plpgsql security definer set search_path = '' as $$
begin
 if TG_OP='UPDATE' then
  if new.id <> old.id then raise exception 'Product IDs are immutable'; end if;
  new.version := old.version + 1;
 end if;
 new.updated_at := now();
 insert into vettiver_private.product_audit(product_id,actor,operation,old_record,new_record)
 values(new.id,auth.uid(),TG_OP,case when TG_OP='UPDATE' then to_jsonb(old) else null end,to_jsonb(new));
 return new;
end; $$;
create trigger product_audit before insert or update on public.products for each row execute function vettiver_private.audit_product();

-- Public product photos only. Originals are never uploaded by the admin interface.
insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types)
values ('product-images','product-images',true,524288,array['image/webp']);
create policy product_images_admin_insert on storage.objects for insert to authenticated
with check (bucket_id='product-images' and (select public.is_vettiver_admin()) and storage.extension(name)='webp');
create policy product_images_admin_read on storage.objects for select to authenticated
using (bucket_id='product-images' and (select public.is_vettiver_admin()));
create policy product_images_admin_delete on storage.objects for delete to authenticated
using (bucket_id='product-images' and (select public.is_vettiver_admin()));

-- If the verified owner already exists, grant access to that identity only.
insert into public.vettiver_admins(user_id)
select id from auth.users where lower(email)='akashvetiverexport@gmail.com' and email_confirmed_at is not null
on conflict do nothing;
commit;
