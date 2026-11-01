select id,name,category,price,price_is_sample,sort_order,offers_enabled from public.products where id in ('product-vetiver-ganesha','product-scrubbers-pack-3');
select max(sort_order) as last_sort from public.products;
select pg_get_constraintdef(oid) as definition from pg_constraint where conrelid='public.products'::regclass and contype='c';
