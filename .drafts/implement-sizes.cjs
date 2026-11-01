const fs=require('fs');
const edit=(f,fn)=>fs.writeFileSync(f,fn(fs.readFileSync(f,'utf8')));
edit('ui/products.ts',s=>s.replace('price?: number;', 'pricing_unit?: string; size_options?: {id:string;label:string;price:number}[]; price?: number;'));
for(const f of ['catalog.js','server/worker.mjs'])edit(f,s=>s.replace('price,price_is_sample,offers_enabled','price,price_is_sample,pricing_unit,size_options,offers_enabled'));
edit('server/worker.mjs',s=>s.replace("const itemKey=JSON.stringify([item.productId,item.offerType||'']);","if(item.optionId!==undefined&&(typeof item.optionId!=='string'||!/^[a-z0-9-]{1,60}$/.test(item.optionId)))throw new HttpError(422,'Choose a valid size.');\n  const itemKey=JSON.stringify([item.productId,item.offerType||'',item.optionId||'']);").replace('const [productId,offerType]=JSON.parse(key);return {productId,quantity,...(offerType?{offerType}:{})}', 'const [productId,offerType,optionId]=JSON.parse(key);return {productId,quantity,...(offerType?{offerType}:{}),...(optionId?{optionId}:{})}'));
let sql=`begin;
alter table public.products add column pricing_unit text not null default '' check(pricing_unit in ('','piece','pair','pack','foot','inch','kg','g')), add column size_options jsonb not null default '[]';
create function vettiver_private.valid_sizes(options jsonb) returns boolean language plpgsql immutable set search_path='' as $$
declare o jsonb; ids text[]:='{}'; labels text[]:='{}';
begin
 if jsonb_typeof(options)<>'array' or jsonb_array_length(options)>20 then return false;end if;
 for o in select value from jsonb_array_elements(options) loop
 if jsonb_typeof(o)<>'object' or coalesce(o->>'id','') !~ '^[a-z0-9-]{1,60}$' or jsonb_typeof(o->'label') is distinct from 'string' or length(trim(o->>'label')) not between 1 and 60 or jsonb_typeof(o->'price') is distinct from 'number' then return false;end if;
 if (o->>'price')::numeric<=0 or (o->>'price')::numeric>10000000 or round((o->>'price')::numeric,2)<>(o->>'price')::numeric or o->>'id'=any(ids) or lower(trim(o->>'label'))=any(labels) then return false;end if;
 ids:=array_append(ids,o->>'id');labels:=array_append(labels,lower(trim(o->>'label')));
 end loop;return true;
end$$;
alter table public.products add constraint products_valid_sizes check(vettiver_private.valid_sizes(size_options)), add constraint sizes_without_offers check(jsonb_array_length(size_options)=0 or not offers_enabled);
create function vettiver_private.product_quote(p_id text,p_combo boolean,p_option text) returns jsonb language plpgsql set search_path='' as $$
declare p public.products; o jsonb; result jsonb;
begin
 select * into p from public.products where id=p_id and status='published' for share;
 if not found then raise exception 'product_unavailable';end if;
 if jsonb_array_length(p.size_options)>0 then
 if p_combo then raise exception 'offer_unavailable';end if;
 select value into o from jsonb_array_elements(p.size_options) where value->>'id'=p_option;
 if o is null then raise exception 'product_unavailable';end if;
 return jsonb_build_object('name',p.name||' - '||(o->>'label'),'optionId',p_option,'sizeLabel',o->>'label','unitPrice',(o->>'price')::numeric,'currency','INR','samplePrice',p.price_is_sample,'pricingUnit',p.pricing_unit);
 end if;
 if p_option is not null then raise exception 'product_unavailable';end if;
 if p_combo and exists(select 1 from public.products where id=p.combo_product_id and jsonb_array_length(size_options)>0) then raise exception 'offer_unavailable';end if;
 result:=vettiver_private.product_quote(p_id,p_combo);
 return result||jsonb_build_object('pricingUnit',p.pricing_unit)||case when p.pricing_unit<>'' and not p_combo then jsonb_build_object('name',p.name||' (per '||p.pricing_unit||')') else '{}'::jsonb end;
end$$;
revoke all on function vettiver_private.product_quote(text,boolean,text) from public,anon,authenticated;
`;
let original=fs.readFileSync('supabase/migrations/20261025200042_prices_and_festival_offers.sql','utf8');let submit=original.slice(original.indexOf('create or replace function public.vettiver_submit'),original.lastIndexOf('commit;'));
submit=submit.replace("vettiver_private.product_quote(item->>'productId',coalesce(item->>'offerType'='combo',false))","vettiver_private.product_quote(item->>'productId',coalesce(item->>'offerType'='combo',false),item->>'optionId')");
fs.writeFileSync('supabase/migrations/20261031090000_optional_product_sizes.sql',sql+submit+'\ncommit;\n');
