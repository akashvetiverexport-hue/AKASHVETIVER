import assert from 'node:assert/strict'
import worker,{validate,deliverNotifications} from '../server/worker.mjs'
const payload={kind:'order',items:[{productId:'product-malai-pair',quantity:2}],customer:{name:'Test',whatsapp:'+919000000000',city:'Chennai',postalCode:'600001'},message:'',consentToContact:true,website:''}
const env={SUPABASE_SERVER_KEY:'sb_secret_test',RATE_LIMIT_SECRET:'a'.repeat(32),ENABLE_SUBMISSIONS:'true',SUPABASE_PUBLISHABLE_KEY:'sb_publishable_test',ASSETS:{fetch:()=>new Response('static')}}
const tasks=[],ctx={waitUntil:promise=>tasks.push(promise)}
const request=(path='/api/requests',body=payload,extra={})=>new Request('https://akashvetiverexport.in'+path,{method:'POST',headers:{Origin:'https://akashvetiverexport.in','Content-Type':'application/json','CF-Connecting-IP':'192.0.2.5','Idempotency-Key':'11111111-1111-4111-8111-111111111111',...extra},body:JSON.stringify(body)})
const original=globalThis.fetch;let calls=[]
try{
 globalThis.fetch=async(url,options)=>{calls.push({url,body:JSON.parse(options.body||'{}'),headers:options.headers});return Response.json({id:'22222222-2222-4222-8222-222222222222',status:'received'})}
 const minimal={...payload,customer:{name:'Test',whatsapp:'+919000000000'}};
 assert.equal(validate('request',minimal).customer.city,'');
 assert.equal(validate('request',minimal).customer.postalCode,'');
 assert.throws(()=>validate('request',{...minimal,customer:{...minimal.customer,postalCode:'wrong'}}));
 assert.throws(()=>validate('request',{...minimal,customer:{...minimal.customer,whatsapp:'123'}}));
 assert.throws(()=>validate('request',{...minimal,consentToContact:false}));
 const result=await worker.fetch(request(),env,ctx);assert.equal(result.status,201);assert.equal((await result.json()).status,'received')
 assert.equal(calls[0].body.p_payload.items[0].name,undefined);assert.equal(calls[0].body.p_rate_key.length,64);assert.ok(!JSON.stringify(calls[0]).includes('192.0.2.5'))
 assert.equal((await worker.fetch(request('/api/requests',payload,{Origin:'https://evil.test'}),env,ctx)).status,403)
 assert.equal((await worker.fetch(request('/api/requests',{...payload,website:'spam'}),env,ctx)).status,422)
 assert.equal((await worker.fetch(request('/api/requests',payload,{'Idempotency-Key':'bad'}),env,ctx)).status,400)
 assert.equal((await worker.fetch(request('/api/requests',payload,{'Content-Type':'text/plain'}),env,ctx)).status,415)
 assert.equal((await worker.fetch(request('/api/requests',{...payload,message:'x'.repeat(17000)}),env,ctx)).status,413)
 assert.equal((await worker.fetch(request(),{},ctx)).status,503)
 assert.equal(calls.length,1)
 assert.equal(validate('request',{...payload,items:[...payload.items,...payload.items]}).items[0].quantity,4)
 globalThis.fetch=async()=>Response.json({message:'product_unavailable'},{status:400});assert.equal((await worker.fetch(request(),env,ctx)).status,422)
 globalThis.fetch=async()=>{throw new Error('network')};assert.equal((await worker.fetch(request(),env,ctx)).status,503)
 const config=await(await worker.fetch(new Request('https://akashvetiverexport.in/site-config.js'),env,ctx)).text();assert.ok(!config.includes('sb_secret_test'));assert.match(config,/\/api\/requests/)
 assert.equal((await worker.fetch(new Request('https://akashvetiverexport.in/site-config.js'),{...env,SUPABASE_PUBLISHABLE_KEY:'sb_secret_accidental'},ctx)).status,503)
 let claims=0,sent=[],finish=[]
 globalThis.fetch=async(url,options)=>{
  if(url.endsWith('vettiver_claim_notification'))return Response.json(claims++===0?[{id:'job-1',lease:'lease-1',subject:'Order enquiry',body:'Customer details'}]:[])
  if(url==='https://api.resend.com/emails'){sent.push(options);return Response.json({id:'email-1'})}
  if(url.endsWith('vettiver_finish_notification')){finish.push(JSON.parse(options.body));return Response.json(null)}
  throw new Error('Unexpected fetch')
 }
 await deliverNotifications({...env,RESEND_API_KEY:'test',RESEND_FROM:'notifications@akashvetiverexport.in',ENABLE_NOTIFICATIONS:'true'})
 assert.equal(sent[0].headers['Idempotency-Key'],'vettiver/job-1');assert.equal(finish[0].p_email_id,'email-1');assert.deepEqual(JSON.parse(sent[0].body).to,['akashvetiverexport@gmail.com'])
 await Promise.all(tasks)
 console.log('PASS Worker: server validation, bounded payloads, origin check, retry keys, rate identity hashing, no false receipt, secret-safe public configuration, fixed-recipient Resend delivery and durable acknowledgement.')
}finally{globalThis.fetch=original}
