begin;
insert into public.products (id,category,name,image,thumbnail,alt,description,status,sort_order,featured_order,price,price_is_sample,offers_enabled) values
('product-vetiver-ganesha','ceremony','Vetiver Ganesha','images/optimized/products/studio-v1/vetiver-ganesha.webp','images/optimized/products/studio-v1/vetiver-ganesha-thumb.webp','Handcrafted vetiver Ganesha with red borders, gold crown and green details','Handcrafted vetiver Ganesha decoration with red borders, a gold crown and colourful thread details.','published',12,null,320,false,false),
('product-scrubbers-pack-3','decor','Vetiver Scrubbers (Pack of 3)','images/optimized/products/studio-v1/scrubbers-pack-3.webp','images/optimized/products/studio-v1/scrubbers-pack-3-thumb.webp','Three round vetiver scrubbers with fine white thread mesh, sold together as one pack','One pack contains 3 round vetiver scrubbers with thread mesh. Quantity 2 means 2 packs (6 scrubbers).','published',13,null,99,false,false)
on conflict (id) do nothing;
select id,name,price,price_is_sample,status from public.products where id in ('product-vetiver-ganesha','product-scrubbers-pack-3');
commit;
