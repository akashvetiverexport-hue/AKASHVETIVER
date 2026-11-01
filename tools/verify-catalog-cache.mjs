import assert from 'node:assert/strict'
import worker from '../server/worker.mjs'
const originalFetch=globalThis.fetch,originalCaches=globalThis.caches
const env={ENABLE_CATALOG:'true',SUPABASE_PUBLISHABLE_KEY:'sb_publishable_test'}
const pending=[],context={waitUntil:p=>pending.push(p)},entries=new Map()
let requests=0,broken=false
try{
 globalThis.caches={default:{match:async key=>entries.get(key.url)?.clone(),put:async(key,value)=>{entries.set(key.url,value.clone())}}}
 globalThis.fetch=async(url,options)=>{
  requests++;assert.match(url,/status=eq.published/);assert.match(url,/select=id,category,name,image,thumbnail,alt,description,status,sort_order,featured_order/)
  assert.deepEqual(options.headers,{apikey:'sb_publishable_test'})
  return broken?Response.json({error:'offline'},{status:503}):Response.json([{id:'product-test',status:'published'}])
 }
 const request=()=>new Request('https://example.com/api/catalog?select=customer&status=eq.draft',{headers:{Authorization:'Bearer untrusted'}})
 let response=await worker.fetch(request(),env,context);assert.equal(response.status,200);assert.equal(response.headers.get('Cache-Control'),'public, max-age=15');assert.equal((await response.json())[0].id,'product-test');await Promise.all(pending)
 response=await worker.fetch(request(),env,context);assert.equal(response.status,200);assert.equal(requests,1)
 entries.clear();broken=true;response=await worker.fetch(request(),env,context);assert.equal(response.status,503);assert.equal(entries.size,0)
 assert.equal((await worker.fetch(request(),{},context)).status,503)
 console.log('PASS catalogue cache: fixed public projection and published filter, anonymous key, incoming query/auth ignored, 15-second shared cache, no cached errors or stale fallback.')
}finally{globalThis.fetch=originalFetch;if(originalCaches===undefined)delete globalThis.caches;else globalThis.caches=originalCaches}
