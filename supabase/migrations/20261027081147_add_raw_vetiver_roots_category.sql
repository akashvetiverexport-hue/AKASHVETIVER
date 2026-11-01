-- Add the raw-root category without changing existing products or access policies.
alter table public.products
  drop constraint products_category_check,
  add constraint products_category_check check (category in ('garland','toran','decor','ceremony','roots'));
