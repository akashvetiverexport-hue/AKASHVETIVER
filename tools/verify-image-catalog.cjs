const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const ts=require('typescript');
const {chromium}=require(process.env.PLAYWRIGHT_PATH||'C:/Users/avina/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright-core');
const origin='http://127.0.0.1:4178';
const root=path.join(__dirname,'..');
const supabase='https://lgkkjubwdxdfpmoxkrmd.supabase.co';
const products=JSON.parse(fs.readFileSync(path.join(root,'data/products.json'),'utf8'));
const config={supabaseUrl:supabase,supabasePublishableKey:'sb_publishable_test',catalogSource:'supabase',requestsEndpoint:'',feedbackEndpoint:''};
const setup=async(page)=>page.route('**/site-config.js',route=>route.fulfill({contentType:'application/javascript',body:'window.VETTIVER_CONFIG='+JSON.stringify(config)}));
(async()=>{
 const browser=await chromium.launch();
 try{
  const page=await browser.newPage({viewport:{width:390,height:844},reducedMotion:'reduce'});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await setup(page);
  let rows=[{...products[0],id:'product-new-piece',name:'New & lovely piece',featured_order:0}];
  let failed=false;
  await page.route(supabase+'/rest/v1/products?*',route=>route.fulfill({status:failed?503:200,contentType:'application/json',body:JSON.stringify(rows)}));
  await page.goto(origin+'/products.html#product-new-piece');
  await page.waitForFunction(()=>document.querySelector('#product-dialog').open);
  assert.equal(await page.locator('.product-card').count(),1);
  assert.equal(await page.locator('#dialog-title').textContent(),'New & lovely piece');
  await page.locator('#dialog-enquire').click();
  assert.equal(await page.locator('#enquiry-product').inputValue(),'New & lovely piece');
  assert.equal(await page.locator('#enquiry-product option[data-product-id="product-new-piece"]').count(),1);
  await page.goto(origin);
  await page.locator('#product-showcase-root').scrollIntoViewIfNeeded();
  await page.locator('.showcase-inner').waitFor();
  assert.match(await page.locator('.showcase-details').textContent(),/New & lovely piece/);
  rows=[];
  await page.evaluate(()=>sessionStorage.clear());
  await page.goto(origin+'/products.html#product-new-piece');
  await page.waitForFunction(()=>window.VETTIVER_CATALOG?.products.length===0);
  assert.equal(await page.locator('.product-card').count(),0);
  assert.equal(await page.locator('#product-dialog').evaluate(x=>x.open),false);
  assert.equal(await page.locator('#enquiry-product option[data-product-id="product-new-piece"]').count(),0);
  failed=true;
  await page.evaluate(()=>sessionStorage.clear());
  await page.goto(origin+'/products.html');
  await page.getByRole('alert').waitFor();
  assert.equal(await page.locator('.product-card').count(),0);
  assert.match(await page.getByRole('alert').textContent(),/could not load/);
  console.log('PASS mocked live catalogue: new product, details/deep link, request selector, featured selection, empty/archive state, failure without stale fallback.');
  await page.close();

  const compress=await browser.newPage();
  const code=ts.transpileModule(fs.readFileSync(path.join(root,'lib/compress-product-image.ts'),'utf8'),{compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.ESNext}}).outputText;
  await compress.route('**/compression-test.js',route=>route.fulfill({contentType:'application/javascript',body:code}));
  await compress.route('**/fixture.png',route=>route.fulfill({contentType:'image/png',body:fs.readFileSync(path.join(root,'images/products/studio-v1/malai-pair.png'))}));
  await compress.goto(origin+'/admin.html');
  const result=await compress.evaluate(async()=>{
   const {compressProductImage}=await import('/compression-test.js');
   const raw=await(await fetch('/fixture.png')).blob();
   const output=await compressProductImage(new File([raw],'photo.png',{type:'image/png'}));
   const thumb=await createImageBitmap(output.thumbnail);
   const invalid=[];
   for(const file of [new File(['<svg/>'],'x.svg',{type:'image/svg+xml'}),new File(['broken'],'x.png',{type:'image/png'}),new File([new Uint8Array(16*1024*1024)],'x.png',{type:'image/png'})]){
    try{await compressProductImage(file);invalid.push(false)}catch{invalid.push(true)}
   }
   return {original:raw.size,full:output.image.size,thumbnail:output.thumbnail.size,width:output.width,height:output.height,thumbWidth:thumb.width,thumbHeight:thumb.height,type:output.image.type,invalid};
  });
  assert.equal(result.type,'image/webp');assert.ok(result.full<=450*1024);assert.ok(result.thumbnail<=64*1024);assert.ok(result.width<=1200&&result.height<=1200);assert.ok(result.thumbWidth<=320&&result.thumbHeight<=320);assert.ok(result.full<result.original);assert.deepEqual(result.invalid,[true,true,true]);
  console.log('PASS browser upload compression and invalid-file guards:',JSON.stringify(result));
  await compress.close();assert.deepEqual(errors,[]);
 }finally{await browser.close()}
})().catch(error=>{console.error(error);process.exitCode=1});
