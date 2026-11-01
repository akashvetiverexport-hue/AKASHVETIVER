import assert from 'node:assert/strict'
import worker from '../server/worker.mjs'
import site from '../server/public-site.mjs'
import {createHash} from 'node:crypto'
const env={ENABLE_CATALOG:'true',SUPABASE_PUBLISHABLE_KEY:'sb_publishable_test',ASSETS:{fetch:()=>new Response('asset')}}
const context={waitUntil() {}}
const fetch0=globalThis.fetch
const product={id:'product-test',status:'published',name:'A <script>alert(1)</script>',description:'Handmade & natural',alt:'Roots "natural"',image:'images/optimized/products/studio-v1/malai-pair.webp'}
const draft={...product,id:'product-draft',status:'draft'}
try {
 globalThis.fetch=async url=>{assert.ok(String(url).includes('status=eq.published'));return Response.json([product,draft])}
 const get=id=>worker.fetch(new Request(site.origin+'/pieces/'+id),env,context)
 const response=await get('product-test');assert.equal(response.status,200);assert.match(response.headers.get('content-security-policy'),/default-src 'self'/);const html=await response.text();assert.ok(html.includes('A &lt;script&gt;alert(1)&lt;/script&gt;'));assert.ok(!html.includes('<script>alert(1)</script>'));assert.ok(html.includes('rel="canonical" href="'+site.origin+'/pieces/product-test"'));assert.match(html,/\/products#product-test/)
 const raw=html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1];assert.ok(response.headers.get('content-security-policy').includes("'sha256-"+createHash('sha256').update(raw).digest('base64')+"'"));assert.equal(JSON.parse(raw)['@graph'][0].name,product.name);assert.match(html,/twitter:card/);assert.match(html,/No payment is collected here/);
 for(const id of ['product-draft','product-missing','not-valid']){const r=await get(id);assert.equal(r.status,404);assert.equal(r.headers.get('x-robots-tag'),'noindex')}
 globalThis.fetch=async()=>new Response('down',{status:503});const failed=await get('product-test');assert.equal(failed.status,503);assert.equal(failed.headers.get('x-robots-tag'),'noindex')
 globalThis.fetch=async()=>Response.json([{...product,image:'https://evil.test/x.webp'}]);assert.equal((await get('product-test')).status,503)
 for(const [fields,expected] of [[{price:650,price_is_sample:false,offers_enabled:false},true],[{price:650,price_is_sample:true,offers_enabled:false},true],[{price:650,price_is_sample:false,offers_enabled:true},true],[{price:-1,price_is_sample:false,offers_enabled:false},false]]){
  globalThis.fetch=async()=>Response.json([{...product,...fields}]);const page=await (await get('product-test')).text();assert.equal(page.includes('class="piece-price"'),expected);const raw=page.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1];const schema=JSON.parse(raw);const item=schema['@graph'].find(x=>x['@type']==='Product');assert.equal(!!item.offers,fields.price>0&&fields.price_is_sample===false&&fields.offers_enabled===false);assert.equal('availability' in (item.offers||{}),false);assert.equal('aggregateRating' in item,false);assert.ok(schema['@graph'].some(x=>x['@type']==='BreadcrumbList'));if(fields.price_is_sample)assert.match(page,/Guide price/);if(fields.offers_enabled)assert.match(page,/Regular price/)
 }
 console.log('PASS dynamic product pages: published-only, current catalog, escaped text, restricted images, canonical, existing reservation link, missing and unavailable responses')
}finally{globalThis.fetch=fetch0}
