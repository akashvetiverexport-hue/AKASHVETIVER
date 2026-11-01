import assert from 'node:assert/strict';import worker,{deliverNotifications} from '../server/worker.mjs';
const env={ENABLE_SUBMISSIONS:'true',SUPABASE_SERVER_KEY:'test',RATE_LIMIT_SECRET:'x'.repeat(40),ENABLE_CATALOG:'true',SUPABASE_PUBLISHABLE_KEY:'sb_publishable_test'},ctx={waitUntil(){}};
const original=globalThis.fetch;let calls=0,cancelled=false;
try{
 globalThis.fetch=async()=>{calls++;return Response.json([])};
 const slow=new Request('https://example.test/api/requests',{method:'POST',headers:{Origin:'https://example.test','Content-Type':'application/json','CF-Connecting-IP':'192.0.2.1','Idempotency-Key':'11111111-1111-4111-8111-111111111111'},duplex:'half',body:new ReadableStream({start(c){c.enqueue(new TextEncoder().encode('{'))},cancel(){cancelled=true}})});
 const start=Date.now(),res=await worker.fetch(slow,env,ctx);assert.equal(res.status,408);assert.ok(Date.now()-start<11500);assert.ok(cancelled);assert.equal(calls,0);
 const head=await worker.fetch(new Request('https://example.test/sitemap.xml',{method:'HEAD'}),env,ctx);assert.equal(head.status,200);assert.equal(await head.text(),'');assert.equal((await worker.fetch(new Request('https://example.test/sitemap.xml',{method:'POST'}),env,ctx)).status,405);
 globalThis.fetch=async()=>{throw Error('offline')};const outage=await worker.fetch(new Request('https://example.test/api/catalog'),env,ctx);assert.equal(outage.status,503);assert.equal(outage.headers.get('Retry-After'),'60');
 let claims=0,sends=0,finishes=[];globalThis.fetch=async(url,opts)=>{if(url.endsWith('vettiver_claim_notification')){claims++;return Response.json([{id:'job',lease:'lease',subject:'test',body:'details'}])}if(url.includes('api.resend.com')){sends++;return Response.json({error:'busy'},{status:429})}finishes.push(JSON.parse(opts.body));return Response.json(null)};
 await deliverNotifications({...env,ENABLE_NOTIFICATIONS:'true',RESEND_API_KEY:'mock',RESEND_FROM:'test@example.test'},1);assert.equal(claims,1);assert.equal(sends,1);assert.equal(finishes[0].p_email_id,null);assert.equal(finishes[0].p_error,'resend_429');
 const health=await(await worker.fetch(new Request('https://example.test/api/health'),env,ctx)).json();assert.equal(health.notificationsConfigured,false);assert.ok(!JSON.stringify(health).includes('test'));
 console.log('PASS resilience: stalled body cancelled without DB work; sitemap HEAD/methods; retry header; one notification attempt with honest failure; safe setup status.');
}finally{globalThis.fetch=original}
