import assert from 'node:assert/strict'
import {sitemapPage} from '../server/sitemap.mjs'
import site from '../server/public-site.mjs'
const rows=[{id:'product-published',status:'published'},{id:'product-draft',status:'draft'},{id:'product-published',status:'published'},{id:'product-<bad>',status:'published'}]
const response=await sitemapPage(async()=>Response.json(rows));const xml=await response.text()
assert.equal(response.status,200);assert.equal((xml.match(/<loc>/g)||[]).length,4);assert.ok(xml.includes(site.origin+'/pieces/product-published'));assert.ok(!xml.includes('draft'));assert.ok(!xml.includes('bad'));assert.equal(response.headers.get('cache-control'),'public, max-age=30')
const removed=await(await sitemapPage(async()=>Response.json([]))).text();assert.ok(!removed.includes('/pieces/'))
for(const load of [async()=>{throw new Error()},async()=>new Response('unavailable',{status:503}),async()=>Response.json({error:'bad'})]){const failed=await sitemapPage(load);assert.equal(failed.status,503);assert.equal(failed.headers.get('cache-control'),'no-store');assert.equal(failed.headers.get('retry-after'),'30')}
console.log('PASS dynamic sitemap: published-only, stable canonical origin, deduplication, safe IDs, removal and outage behavior')
