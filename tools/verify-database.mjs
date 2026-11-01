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
 for(const file of ['supabase/migrations/202610250001_catalog_admin.sql','supabase/seed-products.sql','supabase/migrations/202610250002_requests_feedback_email.sql'])await db.exec(await readFile(new URL('../'+file,import.meta.url),'utf8'))
 await role('anon')
 assert.equal((await db.query('select count(*)::int as n from public.products')).rows[0].n,12)
 await assert.rejects(db.exec("update public.products set name='unauthorized'"))
 await assert.rejects(db.exec('select * from public.order_requests'))
 await assert.rejects(db.exec("insert into storage.objects(bucket_id,name)values('product-images','bad.webp')"))
 await assert.rejects(db.query('select public.vettiver_claim_notification()'))
 await role('authenticated',other)
 assert.equal((await db.query('select public.is_vettiver_admin() as ok')).rows[0].ok,false)
 await assert.rejects(db.exec(`insert into public.vettiver_admins(user_id)values('${other}')`))
 assert.equal((await db.query('update public.products set name=name returning id')).rows.length,0)
 await assert.rejects(db.exec("insert into storage.objects(bucket_id,name)values('product-images','bad.webp')"))
 await role('authenticated',owner)
 assert.equal((await db.query('select public.is_vettiver_admin() as ok')).rows[0].ok,true)
 await db.exec("update public.products set status='draft' where id='product-flag';insert into storage.objects(bucket_id,name)values('product-images','good.webp')")
 await assert.rejects(db.exec("insert into storage.objects(bucket_id,name)values('product-images','bad.png')"))
 await role('anon');assert.equal((await db.query('select count(*)::int as n from public.products')).rows[0].n,11)
 await role('service_role')
 const payload={kind:'order',items:[{productId:'product-malai-pair',quantity:2,name:'UNTRUSTED NAME'}],customer:{name:'Test Customer',whatsapp:'+919000000000',city:'Chennai',postalCode:'600001'},message:'Test only',consentToContact:true}
 const submit=(kind,key,hash,rate,body)=>db.query('select public.vettiver_submit($1,$2,$3,$4,$5) as result',[kind,key,hash,rate,JSON.stringify(body)])
 const key=crypto.randomUUID(),rate='a'.repeat(64),hash='b'.repeat(64)
 const receipt=(await submit('request',key,hash,rate,payload)).rows[0].result
 assert.equal(receipt.status,'received')
 assert.deepEqual((await submit('request',key,hash,rate,payload)).rows[0].result,receipt)
 await assert.rejects(submit('request',key,'c'.repeat(64),rate,payload),/idempotency_conflict/)
 await assert.rejects(submit('request',crypto.randomUUID(),hash,rate,{...payload,items:[{productId:'product-flag',quantity:1}]}),/product_unavailable/)
 for(let i=0;i<5;i++)await submit('request',crypto.randomUUID(),hash,rate,payload)
 await assert.rejects(submit('request',crypto.randomUUID(),hash,rate,payload),/rate_limited/)
 const feedback=(await submit('feedback',crypto.randomUUID(),hash,'d'.repeat(64),{name:'Customer',content:'Beautiful craft.',rating:5,consentToPublish:true})).rows[0].result
 assert.equal(feedback.status,'pending')
 const jobs=await db.query('select * from public.vettiver_claim_notification()');assert.equal(jobs.rows.length,1)
 const job=jobs.rows[0];assert.ok(!job.body.includes('UNTRUSTED NAME'));assert.match(job.body,/Wedding Garland Pair/)
 await db.query('select public.vettiver_finish_notification($1,$2,$3,$4)',[job.id,job.lease,'email-test-1',''])
 await role('authenticated',other);assert.equal((await db.query('select * from public.order_requests')).rows.length,0);assert.equal((await db.query('select * from public.customer_feedback')).rows.length,0)
 await role('authenticated',owner)
 assert.equal((await db.query('select * from public.order_requests')).rows.length,6)
 await assert.rejects(db.exec("update public.order_requests set customer='{}'"))
 await db.query("update public.customer_feedback set status='approved' where id=$1",[feedback.id])
 await db.query("update public.order_requests set status='contacted' where id=$1",[receipt.id])
 await db.exec('reset role')
 assert.equal((await db.query('select count(*)::int as n from vettiver_private.email_outbox')).rows[0].n,7)
 assert.equal((await db.query('select count(*)::int as n from vettiver_private.inbox_audit')).rows[0].n,2)
 assert.equal((await db.query('select count(*)::int as n from public.order_requests where delivery_status=\'sent\'')).rows[0].n,1)
 // An in-flight eighth attempt must not be expired by another dispatcher.
 await db.exec("update vettiver_private.email_outbox set status='sending',attempts=8,lease=gen_random_uuid(),lease_until=now()+interval '60 seconds',first_attempt=now() where status='pending'")
 await role('service_role');assert.equal((await db.query('select * from public.vettiver_claim_notification()')).rows.length,0)
 await db.exec('reset role');assert.equal((await db.query("select count(*)::int as n from vettiver_private.email_outbox where status='failed'")).rows[0].n,0)
 console.log('PASS local PostgreSQL: both migrations, seed, anonymous/non-admin denial, admin access, draft privacy, server product names, durable retry receipts, payload conflicts, rate limit, unavailable products, approval, outbox receipt and concurrency guards, audit trail.')
}finally{await db.close()}
