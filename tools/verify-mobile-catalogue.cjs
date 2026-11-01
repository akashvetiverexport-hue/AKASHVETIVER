const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {chromium}=require('C:/Users/avina/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright-core');
const base=process.argv[2]||'http://127.0.0.1:4178';
const fixture=JSON.parse(fs.readFileSync(path.join(__dirname,'../data/products.json'),'utf8'));
const added={...fixture[0],id:'product-audit-new',name:'New audit piece',featured_order:null,sort_order:9999,thumbnail:'images/optimized/products/studio-v1/malai-pair-thumb.webp'};
const rows=[...fixture,added];
(async()=>{const browser=await chromium.launch();try{
 for(const [width,height] of [[320,568],[390,844]]){
  const page=await browser.newPage({viewport:{width,height},hasTouch:true,isMobile:true,reducedMotion:'no-preference'});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.route('**/site-config.js',r=>r.fulfill({contentType:'application/javascript',body:'window.VETTIVER_CONFIG='+JSON.stringify({catalogSource:'supabase',catalogEndpoint:'/api/catalog',supabaseUrl:'https://lgkkjubwdxdfpmoxkrmd.supabase.co',supabasePublishableKey:'sb_publishable_test',requestsEndpoint:'/api/requests',feedbackEndpoint:'/api/feedback'})}));
  await page.route('**/api/catalog',r=>r.fulfill({contentType:'application/json',body:JSON.stringify(rows)}));
  let request;
  await page.route('**/api/requests',r=>{request=r.request().postDataJSON();return r.fulfill({status:201,contentType:'application/json',body:'{"id":"AUDIT-LOCAL-123","status":"received"}'})});
  await page.goto(base,{waitUntil:'domcontentloaded'});await page.locator('#products').evaluate(e=>e.scrollIntoView({behavior:'instant'}));await page.locator('.showcase-inner').waitFor();
  await page.evaluate(()=>document.fonts.ready);await page.waitForTimeout(300);
  assert.equal(await page.locator('.showcase-slide').count(),rows.length,'Unfeatured new product missing from showcase');
  const first=await page.locator('.showcase-inner').getAttribute('data-current');await page.waitForTimeout(5500);assert.equal(await page.locator('.showcase-inner').getAttribute('data-current'),first,'Mobile carousel moved while reading');
  const visibleThumbs=page.locator('.showcase-thumb');
  const index=(Number(first)+1)%rows.length;
  const chosenName=(await visibleThumbs.nth(index).getAttribute('aria-label')).replace(/^Show /,'');
  await visibleThumbs.nth(index).tap();await page.waitForFunction(i=>document.querySelector('.showcase-inner').dataset.current===String(i),index);
  assert.equal(await page.locator('.showcase-detail-slide[aria-hidden="false"] h3').textContent(),chosenName);
  const metrics=await page.evaluate(()=>{
   const box=s=>{const r=document.querySelector(s).getBoundingClientRect();return {top:r.top,bottom:r.bottom,height:r.height}};
   return {intro:box('.showcase-intro'),photo:box('.showcase-main'),details:box('.showcase-details'),thumbs:box('.showcase-thumbnails'),section:box('#products'),header:box('#navbar')};
  });
  assert.ok(metrics.intro.bottom<=metrics.photo.top+1&&metrics.photo.bottom<=metrics.details.top+1&&metrics.details.bottom<=metrics.thumbs.top+1,'Product content order is wrong');
  assert.ok(metrics.section.height<=height-metrics.header.height+40,'Product section still requires excessive scrolling');
  await page.locator('#contact').evaluate(e=>e.scrollIntoView({behavior:'instant'}));await page.locator('.bulk-image-group').first().waitFor();
  assert.equal(await page.locator('.bulk-image-group').first().locator('img').count(),rows.length,'Bulk image strip excludes new products');
  await page.locator('.bulk-cta').click();await page.locator('#enquiry-product').selectOption({label:added.name});
  await page.locator('#request-add').click();assert.equal(await page.locator('.request-item-extra option[data-product-id="product-audit-new"]').count(),1);
  await page.locator('.request-item-extra select').selectOption({label:fixture[0].name});
  await page.locator('#request-name').fill('Local audit');await page.locator('#request-phone').fill('+919000000000');await page.locator('#request-city').fill('Chennai');await page.locator('#request-pin').fill('600001');await page.locator('#request-consent').check();await page.locator('.enquiry-submit').click();await page.locator('#request-success').waitFor({state:'visible'});
  assert.equal(request.items[0].productId,added.id);assert.equal(request.kind,'bulk');
  await page.goto(base+'/products.html#'+added.id,{waitUntil:'domcontentloaded'});await page.waitForFunction(()=>document.querySelector('#product-dialog').open);
  assert.equal(await page.locator('#dialog-title').textContent(),added.name);await page.locator('#dialog-enquire').click();assert.equal(await page.locator('#enquiry-product').inputValue(),added.name);
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);assert.deepEqual(errors,[]);
  console.log(`PASS ${width}: compact ordered product panel, stable mobile selection, all new products in showcase/bulk/catalogue/deep links and multi-piece forms, mocked receipt.`);await page.close();
 }
}finally{await browser.close()}})().catch(e=>{console.error(e);process.exitCode=1});
