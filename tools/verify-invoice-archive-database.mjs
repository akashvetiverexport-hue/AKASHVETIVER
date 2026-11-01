import {PGlite} from '@electric-sql/pglite'
import {readFile} from 'node:fs/promises'
import assert from 'node:assert/strict'
const db=new PGlite(),owner='11111111-1111-4111-8111-111111111111',other='22222222-2222-4222-8222-222222222222'
async function role(name,user=''){await db.exec('reset role');await db.query("select set_config('request.jwt.claim.sub',$1,false)",[user]);await db.exec('set role '+name)}
const payload={number:'17',issued_on:'2025-01-02',seller:{name:'Akash Vetiver',address:'',email:'',phone:''},customer:{name:'Customer',address:'',email:'',phone:''},currency:'INR',items:[{name:'Garland',quantity:2,price:650}],shipping:30,advance:200,notes:'',status:'issued'}
const insert=async number=>(await db.query(`insert into public.invoices(number,issued_on,seller,customer,currency,items,shipping,advance,notes,status) select number,issued_on,seller,customer,currency,items,shipping,advance,notes,status from jsonb_populate_record(null::public.invoices,$1) returning id`,[JSON.stringify({...payload,number})])).rows[0].id
const get=async()=> (await db.query('select to_jsonb(i) as row from public.invoices i order by number')).rows.map(x=>x.row)
const remove=async rows=>db.query('select public.vettiver_delete_exported_invoices($1,$2,$3) as count',[JSON.stringify(rows),'2025-01-01','2025-12-31'])
try{
await db.exec(`create role anon;create role authenticated;create schema auth;create schema vettiver_private;create function auth.uid() returns uuid language sql stable as $$select nullif(current_setting('request.jwt.claim.sub',true),'')::uuid$$;grant usage on schema public,auth to authenticated,anon;create function public.is_vettiver_admin() returns boolean language sql stable as $$select auth.uid()='${owner}'::uuid$$;create table public.order_requests(id uuid primary key);`)
await db.exec(await readFile('supabase/migrations/20261026103634_admin_invoices.sql','utf8'))
await insert('17')
await db.exec(await readFile('supabase/migrations/20261029082709_invoice_archive_and_numbering.sql','utf8'))
await role('anon');await assert.rejects(db.query('select public.vettiver_next_invoice_number()'));await assert.rejects(remove([]));await assert.rejects(db.query('select * from vettiver_private.invoice_number_state'))
await role('authenticated',other);await assert.rejects(remove([]),/Admin access required/);await assert.rejects(db.query('select public.vettiver_next_invoice_number()'),/Admin access required/);await assert.rejects(db.query('select * from vettiver_private.invoice_number_state'))
await role('authenticated',owner);assert.equal((await db.query('select public.vettiver_next_invoice_number() n')).rows[0].n,'18');await insert('18')
let rows=await get();assert.equal(rows.length,2)
await assert.rejects(db.exec('delete from public.invoices'),/permission denied/)
await assert.rejects(remove([{...rows[0],advance:0},rows[1]]),/Records changed/);assert.equal((await get()).length,2)
await assert.rejects(remove([rows[0],rows[0]]),/Duplicate/)
await assert.rejects(remove([{id:rows[0].id}]),/Incomplete/)
await assert.rejects(db.query('select public.vettiver_delete_exported_invoices($1,$2,$3)',[JSON.stringify(rows),'2025-01-01','2999-12-31']),/completed date/)
await db.query("update public.invoices set status='void' where id=$1",[rows[1].id]);await assert.rejects(remove(rows),/Records changed/);assert.equal((await get()).length,2)
rows=await get();assert.equal((await remove(rows)).rows[0].count,2);assert.equal((await get()).length,0)
assert.equal((await db.query('select public.vettiver_next_invoice_number() n')).rows[0].n,'19');await assert.rejects(insert('1'),/already been used/);await insert('19');assert.equal((await db.query('select public.vettiver_next_invoice_number() n')).rows[0].n,'20')
console.log('PASS archive database: anon/non-admin denied, direct deletion denied, full snapshot/range/duplicate checks, changed-record rejection with atomic rollback, valid deletion and permanent number high-water.')
}finally{await db.close()}
