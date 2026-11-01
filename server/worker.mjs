import {productPage} from './product-pages.mjs'
import {sitemapPage} from './sitemap.mjs'
const PROJECT = 'https://lgkkjubwdxdfpmoxkrmd.supabase.co'
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
const json = (body, status=200) => new Response(JSON.stringify(body), {status,headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff',...([429,503].includes(status)?{'Retry-After':'60'}:{})}})
class HttpError extends Error { constructor(status,message){super(message);this.status=status} }
const text = (value,max,label,min=1) => {if(typeof value!=='string'||value.trim().length<min||value.length>max)throw new HttpError(422,`Check ${label}.`);return value.trim()}
const dbReady = env => Boolean(env.SUPABASE_SERVER_KEY)
const notificationsConfigured = env => Boolean(dbReady(env)&&env.RESEND_API_KEY&&env.RESEND_FROM&&env.ENABLE_NOTIFICATIONS==='true')
const submissionsReady = env => env.ENABLE_SUBMISSIONS==='true'&&dbReady(env)&&env.RATE_LIMIT_SECRET?.length>=32&&(env.ENABLE_EDGE_RATE_LIMIT!=='true'||typeof env.SUBMISSION_RATE_LIMITER?.limit==='function')
export function validate(kind,body){
 if(!body||typeof body!=='object'||Array.isArray(body))throw new HttpError(400,'Expected request details.')
 if(body.website!==''&&body.website!==undefined)throw new HttpError(422,'Please retry without autofilling the extra field.')
 if(kind==='feedback'){
  if(body.consentToPublish!==true||!Number.isInteger(body.rating)||body.rating<1||body.rating>5)throw new HttpError(422,'Check your rating and publication permission.')
  return {name:text(body.name,80,'your name'),content:text(body.content,1200,'your feedback'),rating:body.rating,consentToPublish:true}
 }
 if(!['order','bulk'].includes(body.kind)||body.consentToContact!==true)throw new HttpError(422,'Check your request and contact permission.')
 const customer=body.customer||{},whatsapp=text(customer.whatsapp,16,'your WhatsApp number'),postalCode=text(customer.postalCode??'',6,'your delivery PIN',0)
 if(!/^\+[1-9]\d{7,14}$/.test(whatsapp)||(postalCode&&!(/^[1-9]\d{5}$/).test(postalCode)))throw new HttpError(422,'Check your WhatsApp number and delivery PIN.')
 if(!Array.isArray(body.items)||body.items.length<1||body.items.length>12)throw new HttpError(422,'Choose between one and twelve pieces.')
 const items=new Map()
 for(const item of body.items){
  if(!item||typeof item.productId!=='string'||!(/^product-[a-z0-9-]{1,90}$/.test(item.productId)||item.productId==='custom'||item.productId==='help-me-choose'&&body.kind==='bulk')||!Number.isInteger(item.quantity)||item.quantity<1||item.quantity>9999)throw new HttpError(422,'Check your pieces and quantities.')
  if(item.offerType!==undefined&&item.offerType!=='combo')throw new HttpError(422,'Check the selected offer.');
  if(item.optionId!==undefined&&(typeof item.optionId!=='string'||!/^[a-z0-9-]{1,60}$/.test(item.optionId)))throw new HttpError(422,'Choose a valid size.');
  const itemKey=JSON.stringify([item.productId,item.offerType||'',item.optionId||'']);
  const quantity=(items.get(itemKey)||0)+item.quantity
  if(quantity>9999)throw new HttpError(422,'The total quantity for a piece cannot exceed 9999.')
  items.set(itemKey,quantity)
 }
 return {kind:body.kind,items:[...items].sort(([a],[b])=>a.localeCompare(b)).map(([key,quantity])=>{const [productId,offerType,optionId]=JSON.parse(key);return {productId,quantity,...(offerType?{offerType}:{}),...(optionId?{optionId}:{})}}),customer:{name:text(customer.name,80,'your name'),whatsapp,city:text(customer.city??'',100,'your delivery city',0),postalCode},message:text(body.message??'',1500,'your message',0),consentToContact:true}
}
async function readBody(request){
 if(!/^application\/json(?:\s*;|$)/i.test(request.headers.get('Content-Type')||''))throw new HttpError(415,'Send JSON request details.')
 if(Number(request.headers.get('Content-Length'))>16384)throw new HttpError(413,'The request is too large.')
 const reader=request.body?.getReader();if(!reader)throw new HttpError(400,'Request details are missing.')
 const chunks=[];let length=0,timer
 const deadline=new Promise((_,reject)=>{timer=setTimeout(()=>{reject(new HttpError(408,'The connection was too slow. Your details are still here; please retry.'));void reader.cancel().catch(()=>{})},10000)})
 try{for(;;){const {done,value}=await Promise.race([reader.read(),deadline]);if(done)break;length+=value.length;if(length>16384){await reader.cancel();throw new HttpError(413,'The request is too large.')}chunks.push(value)}}finally{clearTimeout(timer);reader.releaseLock()}
 const bytes=new Uint8Array(length);let offset=0;for(const chunk of chunks){bytes.set(chunk,offset);offset+=chunk.length}
 try{return JSON.parse(new TextDecoder().decode(bytes))}catch{throw new HttpError(400,'Request details could not be read.')}
}
async function digest(value){return [...new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(value)))].map(x=>x.toString(16).padStart(2,'0')).join('')}
async function rateKey(request,env){
 const ip=request.headers.get('CF-Connecting-IP');if(!ip)throw new HttpError(503,'Please try the public website.')
 const key=await crypto.subtle.importKey('raw',new TextEncoder().encode(env.RATE_LIMIT_SECRET),{name:'HMAC',hash:'SHA-256'},false,['sign'])
 return [...new Uint8Array(await crypto.subtle.sign('HMAC',key,new TextEncoder().encode(ip)))].map(x=>x.toString(16).padStart(2,'0')).join('')
}
function headers(env){const key=env.SUPABASE_SERVER_KEY;return {'Content-Type':'application/json',apikey:key,...(key?.startsWith('sb_secret_')?{}:{Authorization:'Bearer '+key})}}
async function rpc(env,name,payload){
 let response
 try{response=await fetch(PROJECT+'/rest/v1/rpc/'+name,{method:'POST',headers:headers(env),body:JSON.stringify(payload),signal:AbortSignal.timeout(10000)})}catch{throw new HttpError(503,'Could not confirm receipt. Your details are still here; retry the same request.')}
 const result=await response.json().catch(()=>null)
 if(!response.ok){
  const mapping={size_unavailable:[422,'This size or measurement has changed. Reload the collection and choose again.'],offer_unavailable:[422,'This offer has ended or changed. Reload the collection and choose again.'],rate_limited:[429,'Please wait before sending another request.'],idempotency_conflict:[409,'This retry key was already used for different details. Start a new request.'],product_unavailable:[422,'A selected piece is no longer available. Reload the collection and choose again.']}
  if(mapping[result?.message])throw new HttpError(...mapping[result.message])
  throw new HttpError(503,'Could not confirm receipt. Your details are still here; retry the same request.')
 }
 return result
}
function publicConfig(env){
 return {whatsappNumber:env.WHATSAPP_NUMBER||'',supabaseUrl:PROJECT,supabasePublishableKey:env.SUPABASE_PUBLISHABLE_KEY||'',catalogSource:env.ENABLE_CATALOG==='true'&&env.SUPABASE_PUBLISHABLE_KEY?'supabase':'local',catalogEndpoint:'/api/catalog',requestsEndpoint:submissionsReady(env)?'/api/requests':'',feedbackEndpoint:submissionsReady(env)?'/api/feedback':'',reviewsEndpoint:submissionsReady(env)?'/api/reviews':'',businessEmail:'akashvetiverexport@gmail.com'}
}
function publicMedia(value){if(typeof value!=='string')return value;const prefix=PROJECT+'/storage/v1/object/public/product-images/';return value.startsWith(prefix)?'/api/media/'+value.slice(prefix.length):value}
function publicPictures(row){return {...row,...Object.fromEntries(['image','thumbnail','gift_image'].filter(key=>key in row).map(key=>[key,publicMedia(row[key])]))}}
async function cachedPublic(request,context,ttl,load){const cache=globalThis.caches?.default,key=new Request(new URL(new URL(request.url).pathname,request.url));const hit=await cache?.match(key);if(hit)return hit;const result=new Response(JSON.stringify(await load()),{headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'public, max-age='+ttl,'X-Content-Type-Options':'nosniff'}});if(cache)context.waitUntil(cache.put(key,result.clone()));return result}
async function readPhotoBytes(response){
 const reader=response.body?.getReader();if(!reader)throw new HttpError(502,'Invalid photo.')
 const chunks=[];let total=0
 try{for(;;){const {done,value}=await reader.read();if(done)break;total+=value.byteLength;if(total>524288){await reader.cancel();throw new HttpError(413,'Photo too large.')}chunks.push(value)}}finally{reader.releaseLock()}
 const bytes=new Uint8Array(total);let offset=0;for(const chunk of chunks){bytes.set(chunk,offset);offset+=chunk.byteLength}return bytes
}
async function publicPhoto(request,context){
 const key=new URL(request.url).pathname.slice('/api/media/'.length);if(!/^[a-zA-Z0-9_/-]{1,240}\.webp$/.test(key))throw new HttpError(404,'Photo not found.')
 const cache=globalThis.caches?.default,cacheKey=new Request(new URL('/api/media/'+key,request.url));const hit=await cache?.match(cacheKey);if(hit)return hit;
 const upstream=await fetch(PROJECT+'/storage/v1/object/public/product-images/'+key,{redirect:'error',signal:AbortSignal.timeout(8000)});if(!upstream.ok)throw new HttpError(404,'Photo unavailable.');if(!upstream.headers.get('Content-Type')?.startsWith('image/webp'))throw new HttpError(502,'Invalid photo.');if(Number(upstream.headers.get('Content-Length'))>524288)throw new HttpError(413,'Photo too large.');const bytes=await readPhotoBytes(upstream);const result=new Response(bytes,{headers:{'Content-Type':'image/webp','Cache-Control':'public, max-age=31536000, immutable','X-Content-Type-Options':'nosniff'}});if(cache)context.waitUntil(cache.put(cacheKey,result.clone()));return result
}
async function catalogue(request,env,context){
 if(env.ENABLE_CATALOG!=='true'||!env.SUPABASE_PUBLISHABLE_KEY)throw new HttpError(503,'The collection is unavailable.')
 const cache=globalThis.caches?.default
 const key=new Request(new URL('/api/catalog',request.url))
 const cached=await cache?.match(key)
 if(cached)return cached
 const products=[]
 // Use the public key and an explicit field list: this cache can never contain private records.
 for(let offset=0;offset<10000;offset+=500){
  const response=await fetch(PROJECT+'/rest/v1/products?select=id,category,name,image,thumbnail,alt,description,status,sort_order,featured_order,price,price_is_sample,pricing_unit,size_options,offers_enabled,offer_label,offer_starts,offer_ends,campaign_id,sale_price,gift_name,gift_image,combo_product_id,combo_price&status=eq.published&order=sort_order.asc,id.asc&limit=500&offset='+offset,{headers:{apikey:env.SUPABASE_PUBLISHABLE_KEY},signal:AbortSignal.timeout(8000)})
  if(!response.ok)throw new HttpError(503,'The collection could not load. Please try again.')
  const page=await response.json();if(!Array.isArray(page))throw new HttpError(503,'The collection could not load.')
  products.push(...page.map(publicPictures))
  if(page.length<500){
   const result=new Response(JSON.stringify(products),{headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'public, max-age=30','X-Content-Type-Options':'nosniff'}})
   if(cache)context.waitUntil(cache.put(key,result.clone()))
   return result
  }
 }
 throw new HttpError(503,'The collection is too large to load.')
}
export async function deliverNotifications(env, maxJobs=10){
 if(!notificationsConfigured(env))return
 // Sequential claims keep each 90-second lease safely above the request timeout.
 for(let i=0;i<maxJobs;i++){
  const jobs=await rpc(env,'vettiver_claim_notification',{});if(!Array.isArray(jobs)||!jobs.length)return
  const job=jobs[0];let emailId=null,errorCode='delivery_failed'
  try{
   const response=await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:'Bearer '+env.RESEND_API_KEY,'Content-Type':'application/json','Idempotency-Key':'vettiver/'+job.id},body:JSON.stringify({from:env.RESEND_FROM,to:['akashvetiverexport@gmail.com'],subject:job.subject,text:job.body}),signal:AbortSignal.timeout(10000)})
   const result=await response.json().catch(()=>null)
   if(response.ok&&typeof result?.id==='string')emailId=result.id
   else errorCode='resend_'+response.status
  }catch{errorCode='delivery_timeout'}
  await rpc(env,'vettiver_finish_notification',{p_id:job.id,p_lease:job.lease,p_email_id:emailId,p_error:errorCode})
 }
}
export default {
 async fetch(request,env,context){
  const url=new URL(request.url)
  if(url.pathname==='/site-config.js'){
   const config=publicConfig(env)
   // Reject accidental privileged credentials instead of serializing them.
   if(config.supabasePublishableKey&&!config.supabasePublishableKey.startsWith('sb_publishable_')){
    try{if(JSON.parse(atob(config.supabasePublishableKey.split('.')[1].replace(/-/g,'+').replace(/_/g,'/'))).role!=='anon')throw new Error()}catch{return json({error:'Public configuration is invalid.'},503)}
   }
   return new Response('window.VETTIVER_CONFIG=Object.freeze('+JSON.stringify(config)+');',{headers:{'Content-Type':'application/javascript; charset=utf-8','Cache-Control':'public, max-age=30','X-Content-Type-Options':'nosniff'}})
  }
  if(url.pathname==='/sitemap.xml'||url.pathname.startsWith('/pieces/')){
   if(!['GET','HEAD'].includes(request.method))return new Response('Method not allowed',{status:405,headers:{'Allow':'GET, HEAD','Cache-Control':'no-store'}})
   const result=await (url.pathname==='/sitemap.xml'?sitemapPage(()=>catalogue(request,env,context)):productPage(url.pathname.slice('/pieces/'.length),()=>catalogue(request,env,context)))
   return request.method==='HEAD'?new Response(null,{status:result.status,headers:result.headers}):result
  }
  if(!url.pathname.startsWith('/api/'))return env.ASSETS.fetch(request)
  try{
   if(url.pathname.startsWith('/api/media/')&&request.method==='GET')return await publicPhoto(request,context)
   if(url.pathname==='/api/campaigns'&&request.method==='GET')return await cachedPublic(request,context,15,async()=>{
    const response=await fetch(PROJECT+'/rest/v1/festival_campaigns?select=id,title,description,image,starts_at,ends_at&order=starts_at.desc&limit=20',{headers:{apikey:env.SUPABASE_PUBLISHABLE_KEY},signal:AbortSignal.timeout(8000)});
    if(!response.ok)throw new HttpError(503,'Festival offers could not load.');
    const rows=await response.json();return rows.map(publicPictures);
   })
   if(url.pathname==='/api/catalog'&&request.method==='GET')return await catalogue(request,env,context)
   if(url.pathname==='/api/health'&&request.method==='GET')return json({service:'vettiver',submissionsEnabled:submissionsReady(env),notificationsConfigured:notificationsConfigured(env)})
   if(url.pathname==='/api/reviews'&&request.method==='GET')return await cachedPublic(request,context,15,async()=>{
    if(!submissionsReady(env))throw new HttpError(503,'Reviews are not connected yet.')
    const response=await fetch(PROJECT+'/rest/v1/customer_feedback?select=id,name,content,rating&status=eq.approved&consent_to_publish=eq.true&order=created_at.desc&limit=30',{headers:headers(env),signal:AbortSignal.timeout(10000)})
    if(!response.ok)throw new HttpError(503,'Reviews could not be loaded.')
    return await response.json()
   })
   if(!['/api/requests','/api/feedback'].includes(url.pathname))throw new HttpError(404,'Not found.')
   if(request.method!=='POST')throw new HttpError(405,'Use POST to submit this form.')
   if(!submissionsReady(env))throw new HttpError(503,'Online submission is not connected yet.')
   if(request.headers.get('Origin')!==url.origin||request.headers.get('Sec-Fetch-Site')==='cross-site')throw new HttpError(403,'Submit this form from our website.')
   // Independent of the database transaction: invalid attempts also consume the burst limit.
   const identity=await rateKey(request,env)
   if(env.ENABLE_EDGE_RATE_LIMIT==='true'){
    const {success}=await env.SUBMISSION_RATE_LIMITER.limit({key:'vettiver:submissions:'+identity})
    if(!success){const blocked=json({error:'Too many attempts. Wait a minute, then retry your request.'},429);blocked.headers.set('Retry-After','60');return blocked}
   }
   const kind=url.pathname.endsWith('feedback')?'feedback':'request',key=request.headers.get('Idempotency-Key')
   if(!key||!UUID.test(key))throw new HttpError(400,'A valid retry key is required.')
   const payload=validate(kind,await readBody(request))
   const result=await rpc(env,'vettiver_submit',{p_kind:kind,p_key:key,p_hash:await digest(JSON.stringify(payload)),p_rate_key:identity,p_payload:payload})
   if(!result||typeof result.id!=='string'||result.status!==(kind==='request'?'received':'pending'))throw new HttpError(503,'Could not confirm receipt. Retry the same request.')
   context.waitUntil(deliverNotifications(env,1).catch(()=>{console.error('Notification dispatch deferred to scheduled retry.')}))
   return json(result,201)
  }catch(error){return json({error:error instanceof HttpError?error.message:'The service is temporarily unavailable. Please retry.'},error instanceof HttpError?error.status:503)}
 },
 async scheduled(_event,env,context){context.waitUntil(deliverNotifications(env).catch(()=>{console.error('Scheduled notification delivery failed.')}))}
}
