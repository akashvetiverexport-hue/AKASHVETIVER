import assert from 'node:assert/strict'
import worker from '../server/worker.mjs'

// All requests and upstream responses are synthetic. No network/database writes.
const original=globalThis.fetch
const context={waitUntil:()=>{}}
const identities=[];let attempts=0,rpcCalls=[]
const env={ENABLE_SUBMISSIONS:'true',ENABLE_EDGE_RATE_LIMIT:'true',SUPABASE_SERVER_KEY:'sb_secret_isolated_test',RATE_LIMIT_SECRET:'x'.repeat(40),SUBMISSION_RATE_LIMITER:{limit:async({key})=>{identities.push(key);return {success:++attempts<=2}}}}
const order={kind:'order',items:[{productId:'product-malai-pair',quantity:1}],customer:{name:'Test',whatsapp:'+919000000000'},consentToContact:true,website:''}
const review={name:'Test',content:'A thoughtful handmade piece.',rating:5,consentToPublish:true,website:''}
const request=(path,body,extra={})=>new Request('https://example.test'+path,{method:'POST',headers:{Origin:'https://example.test','Content-Type':'application/json','CF-Connecting-IP':'192.0.2.23','Idempotency-Key':'11111111-1111-4111-8111-111111111111',...extra},body:JSON.stringify(body)})
try{
 globalThis.fetch=async(url,options)=>{const body=JSON.parse(options.body);rpcCalls.push(body);return Response.json({id:'22222222-2222-4222-8222-222222222222',status:body.p_kind==='feedback'?'pending':'received'})}
 // Cross-origin attempts never reach limiter or DB.
 assert.equal((await worker.fetch(request('/api/requests',order,{Origin:'https://other.test'}),env,context)).status,403)
 assert.equal((await worker.fetch(request('/api/feedback',review,{'Sec-Fetch-Site':'cross-site'}),env,context)).status,403)
 assert.equal(attempts,0);assert.equal(rpcCalls.length,0)
 // Honeypots are independently checked server-side on both endpoints, and attempts count.
 for(const [path,body] of [['/api/requests',order],['/api/feedback',review]]){
  const response=await worker.fetch(request(path,{...body,website:'https://spam.invalid'}),env,context)
  assert.equal(response.status,422);assert.equal(rpcCalls.length,0)
 }
 assert.equal(attempts,2);assert.equal(identities[0],identities[1]);assert.match(identities[0],/^vettiver:submissions:[a-f0-9]{64}$/);assert.ok(!identities[0].includes('192.0.2.23'))
 // The budget is shared across request and review endpoints, and blocks before DB.
 const blocked=await worker.fetch(request('/api/feedback',review),env,context)
 assert.equal(blocked.status,429);assert.equal(blocked.headers.get('retry-after'),'60');assert.equal(rpcCalls.length,0)
 // Missing binding fails closed while feature is enabled.
 assert.equal((await worker.fetch(request('/api/requests',order),{...env,SUBMISSION_RATE_LIMITER:undefined},context)).status,503)
 assert.equal(rpcCalls.length,0)
 // Valid forms still produce their correct receipts and contain no honeypot data.
 attempts=0;const acceptedOrder=await worker.fetch(request('/api/requests',order),env,context);assert.equal(acceptedOrder.status,201);assert.equal((await acceptedOrder.json()).status,'received')
 const acceptedReview=await worker.fetch(request('/api/feedback',review),env,context);assert.equal(acceptedReview.status,201);assert.equal((await acceptedReview.json()).status,'pending')
 assert.equal(rpcCalls.length,2);for(const body of rpcCalls){assert.ok(!('website' in body.p_payload));assert.match(body.p_rate_key,/^[a-f0-9]{64}$/)}
 console.log('PASS anti-spam: request and review server-side honeypots, same-origin checks, shared burst limit, HMAC identity, fail-closed binding and legitimate receipts. Isolated mocks only.')
}finally{globalThis.fetch=original}
