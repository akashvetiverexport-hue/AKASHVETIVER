begin;
alter table public.products drop constraint sizes_without_offers;
alter table public.products add constraint sized_offers_gift_only check (jsonb_array_length(size_options)=0 or not offers_enabled or (sale_price is null and combo_product_id is null));
create or replace function vettiver_private.product_quote(p_id text,p_combo boolean,p_option text) returns jsonb language plpgsql set search_path='' as $$
declare p public.products; o jsonb; result jsonb; active boolean;
begin
 select * into p from public.products where id=p_id and status='published' for share;
 if not found then raise exception 'product_unavailable'; end if;
 if jsonb_array_length(p.size_options)>0 then
  if p_combo then raise exception 'offer_unavailable'; end if;
  select value into o from jsonb_array_elements(p.size_options) where value->>'id'=p_option;
  if o is null then raise exception 'product_unavailable'; end if;
  result:=jsonb_build_object('name',p.name||' - '||(o->>'label'),'optionId',p_option,'sizeLabel',o->>'label','unitPrice',(o->>'price')::numeric,'currency','INR','samplePrice',p.price_is_sample,'pricingUnit',p.pricing_unit);
  active:=p.offers_enabled and p.offer_starts<=now() and p.offer_ends>now();
  if p.campaign_id is not null then active:=active and exists(select 1 from public.festival_campaigns where id=p.campaign_id and enabled and starts_at<=now() and ends_at>now()); end if;
  if active and p.gift_name<>'' then result:=result||jsonb_build_object('offerLabel',p.offer_label,'gift',jsonb_build_object('name',p.gift_name,'image',p.gift_image,'perUnit',true)); end if;
  return result;
 end if;
 if p_option is not null then raise exception 'product_unavailable'; end if;
 if p_combo and exists(select 1 from public.products where id=p.combo_product_id and jsonb_array_length(size_options)>0) then raise exception 'offer_unavailable';end if;
 result:=vettiver_private.product_quote(p_id,p_combo);
 return result||jsonb_build_object('pricingUnit',p.pricing_unit)||case when p.pricing_unit<>'' and not p_combo then jsonb_build_object('name',p.name||' (per '||p.pricing_unit||')') else '{}'::jsonb end;
end$$;
revoke all on function vettiver_private.product_quote(text,boolean,text) from public,anon,authenticated;
commit;
