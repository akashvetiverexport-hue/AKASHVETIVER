update public.products set price=100,price_is_sample=true,pricing_unit='pack',size_options='[{"id":"100-g","label":"100 g","price":100},{"id":"1-kg","label":"1 kg","price":600}]'::jsonb,status='published',offers_enabled=false where id='product-raw-vetiver-roots';
select id,name,status,price,pricing_unit,size_options from public.products where id='product-raw-vetiver-roots';
