import { PGlite } from '@electric-sql/pglite'
import { readFile } from 'node:fs/promises'
import assert from 'node:assert/strict'
const db=new PGlite()
const owner='11111111-1111-4111-8111-111111111111',other='22222222-2222-4222-8222-222222222222'
const setup=`create role anon;create role authenticated;create role service_role bypassrls;
create schema auth;create table auth.users(id uuid primary key,email text,email_confirmed_at timestamptz);
create function auth.uid() returns uuid language sql stable as $$select nullif(current_setting('request.jwt.claim.sub',true),'')::uuid$$;
create schema storage;create table storage.buckets(id text primary key,name text,public boolean,file_size_limit bigint,allowed_mime_types text[]);
create table storage.objects(id uuid default gen_random_uuid(),bucket_id text,name text);alter table storage.objects enable row level security;
grant usage on schema public,auth,storage to anon,authenticated,service_role;
grant all on storage.objects to anon,authenticated,service_role;
create function storage.extension(name text) returns text language sql immutable as $$select reverse(split_part(reverse(name),'.',1))$$;
insert into auth.users values('${owner}','akashvetiverexport@gmail.com',now()),('${other}','other@example.test',now());`
async function role(name,user=''){await db.exec('reset role');await db.query("select set_config('request.jwt.claim.sub',$1,false)",[user]);await db.exec('set role '+name)}
try{
 await db.exec(setup)
 for(const file of ['supabase/migrations/202610250001_catalog_admin.sql','supabase/seed-products.sql','supabase/migrations/202610250002_requests_feedback_email.sql','supabase/migrations/20261025200042_prices_and_festival_offers.sql','supabase/migrations/20261026103634_admin_invoices.sql','supabase/migrations/20261029082709_invoice_archive_and_numbering.sql'])await db.exec(await readFile(new URL('../'+file,import.meta.url),'utf8'))
 const campaign='33333333-3333-4333-8333-333333333333'
 await role('authenticated',other)
 await assert.rejects(db.exec("insert into public.festival_campaigns(title,starts_at,ends_at)values('Invalid',now(),now()+interval '1 day')"))
 assert.equal((await db.query("delete from public.products where id='product-flag' returning id")).rows.length,0)
 await role('anon');await assert.rejects(db.exec("update public.products set price=1"));await assert.rejects(db.exec('delete from public.products'))
 await role('authenticated',owner)
 await db.query("insert into public.festival_campaigns(id,title,starts_at,ends_at,enabled)values($1,'Diwali',now()-interval '1 day',now()+interval '1 day',true)",[campaign])
 await db.query("update public.products set offers_enabled=true,offer_starts=now()-interval '1 day',offer_ends=now()+interval '1 day',campaign_id=$1,sale_price=300,gift_name='50g roots',gift_image='https://lgkkjubwdxdfpmoxkrmd.supabase.co/storage/v1/object/public/product-images/gifts/test.webp',combo_product_id='product-peacock',combo_price=600 where id='product-vel'",[campaign])
 await assert.rejects(db.exec("update public.products set price=-1 where id='product-vel'"))
 await assert.rejects(db.exec("update public.products set sale_price=9999 where id='product-vel'"))
 await assert.rejects(db.exec("update public.products set combo_product_id=id where id='product-vel'"))
 await assert.rejects(db.exec("update public.products set gift_image='' where id='product-vel'"))
 await role('anon');assert.equal((await db.query('select * from public.festival_campaigns')).rows.length,1)
 await role('service_role')
 const payload={kind:'order',items:[{productId:'product-vel',quantity:2,offerType:'combo',unitPrice:1,gift:{name:'Fake'}}],customer:{name:'Test',whatsapp:'+919000000000',city:'Chennai',postalCode:'600001'},message:'',consentToContact:true}
 const submit=()=>db.query('select public.vettiver_submit($1,$2,$3,$4,$5) as result',['request',crypto.randomUUID(),'b'.repeat(64),crypto.randomUUID().replaceAll('-','').repeat(2),JSON.stringify(payload)])
 const result=(await submit()).rows[0].result
 await role('authenticated',owner)
 const saved=(await db.query('select items from public.order_requests where id=$1',[result.id])).rows[0].items[0]
 assert.equal(saved.unitPrice,600);assert.equal(saved.gift.name,'50g roots');assert.equal(saved.combo.name,'Vetiver Peacock (Mayil)');assert.equal(saved.quantity,2)
 await db.exec("update public.festival_campaigns set ends_at=now()-interval '1 minute' where title='Diwali'")
 await role('anon');assert.equal((await db.query('select * from public.festival_campaigns')).rows.length,0)
 await role('service_role');await assert.rejects(submit(),/offer_unavailable/)
 payload.items[0].offerType=undefined;const expired=(await submit()).rows[0].result
 await role('authenticated',owner);const plain=(await db.query('select items from public.order_requests where id=$1',[expired.id])).rows[0].items[0];assert.equal(plain.unitPrice,350);assert.equal(plain.gift,undefined)
 await db.exec("update public.festival_campaigns set ends_at=now()+interval '1 day' where title='Diwali'")
 await db.exec("update public.products set status='archived' where id='product-peacock'")
 await role('service_role');payload.items[0].offerType='combo';await assert.rejects(submit(),/offer_unavailable/)
 await role('authenticated',owner)
 await db.exec("delete from public.festival_campaigns where title='Diwali'")
 assert.equal((await db.query("select offers_enabled from public.products where id='product-vel'")).rows[0].offers_enabled,false)
 await db.exec("delete from public.products where id='product-peacock'")
 assert.equal((await db.query("select combo_product_id from public.products where id='product-vel'")).rows[0].combo_product_id,null)
 await db.exec("delete from public.products where id='product-vel'")
 assert.deepEqual((await db.query('select items from public.order_requests where id=$1',[result.id])).rows[0].items[0],saved)
 await db.exec('reset role');assert.equal((await db.query("select count(*)::int n from vettiver_private.product_audit where operation='DELETE'")).rows[0].n,2)
 console.log('PASS offer database: admin-only prices/campaigns/deletion, invalid input constraints, trusted price/gift/combo snapshots, expiry, archived/deleted combo partner, campaign deletion disables offers, enquiry history survives deletion.')
}finally{await db.close()}
