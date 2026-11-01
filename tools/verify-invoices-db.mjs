import {PGlite} from '@electric-sql/pglite'
import fs from 'node:fs/promises'
import assert from 'node:assert/strict'
const db=new PGlite(),owner='11111111-1111-4111-8111-111111111111',other='22222222-2222-4222-8222-222222222222'
const original=await fs.readFile(new URL('./verify-commerce-database.mjs',import.meta.url),'utf8')
const setup=original.match(/const setup=`([\s\S]*?)`/)[1].replaceAll('${owner}',owner).replaceAll('${other}',other)
async function role(name,user=''){await db.exec('reset role');await db.query("select set_config('request.jwt.claim.sub',$1,false)",[user]);await db.exec('set role '+name)}
const input={number:'AV-TEST-001',issued_on:'2026-09-01',seller:{name:'Akash Vetiver Export'},customer:{name:'Invoice test'},items:[{name:'Garland',quantity:2,price:650.25},{name:'Complimentary roots',quantity:2,price:0}],shipping:75.50,advance:400}
const insert=(i=input)=>db.query('insert into public.invoices(number,issued_on,seller,customer,items,shipping,advance,subtotal,total,balance) values ($1,$2,$3,$4,$5,$6,$7,1,1,1) returning *',[i.number,i.issued_on,JSON.stringify(i.seller),JSON.stringify(i.customer),JSON.stringify(i.items),i.shipping,i.advance])
try{
 await db.exec(setup)
 for(const file of ['202610250001_catalog_admin.sql','202610250002_requests_feedback_email.sql','20261025200042_prices_and_festival_offers.sql','20261026103634_admin_invoices.sql'])await db.exec(await fs.readFile(new URL('../supabase/migrations/'+file,import.meta.url),'utf8'))
 await role('anon');await assert.rejects(db.exec('select * from public.invoices'));await assert.rejects(insert())
 await role('authenticated',other);assert.equal((await db.query('select * from public.invoices')).rows.length,0);await assert.rejects(insert())
 await role('authenticated',owner);const row=(await insert()).rows[0];assert.equal(Number(row.subtotal),1300.5);assert.equal(Number(row.total),1376);assert.equal(Number(row.balance),976)
 await assert.rejects(insert());await assert.rejects(insert({...input,number:'BAD-PRICE',items:[{name:'Bad',price:-1,quantity:1}]}));await assert.rejects(insert({...input,number:'BAD-QTY',items:[{name:'Bad',price:5,quantity:1.5}]}));await assert.rejects(insert({...input,number:'BAD-ADVANCE',advance:9999}));await assert.rejects(insert({...input,number:'BAD-NAME',customer:{}}));
 await assert.rejects(db.query('update public.invoices set items=$1 where id=$2',[JSON.stringify([{name:'Changed',price:1,quantity:1}]),row.id]));await assert.rejects(db.query('delete from public.invoices where id=$1',[row.id]));
 // Model an invoice created over a month ago; no application expiry or cleanup removes it.
 await role('postgres');await db.exec('alter table public.invoices disable trigger validate_invoice');await db.query("update public.invoices set created_at=now()-interval '45 days' where id=$1",[row.id]);await db.exec('alter table public.invoices enable trigger validate_invoice');
 await role('authenticated',owner);const older=(await db.query('select * from public.invoices where created_at<now()-interval \'1 month\'')).rows[0];assert.equal(older.number,input.number);assert.deepEqual(older.items,input.items)
 await role('authenticated',other);assert.equal((await db.query("update public.invoices set status='void' where id=$1 returning id",[row.id])).rows.length,0)
 await role('authenticated',owner);await db.query("update public.invoices set status='void' where id=$1",[row.id]);await assert.rejects(db.query("update public.invoices set status='issued' where id=$1",[row.id]));
 console.log('PASS invoices: admin-only access, server-calculated totals, validation, immutable snapshots, unique numbers, void-only updates, no deletion, history retained beyond one month.')
}finally{await db.close()}
