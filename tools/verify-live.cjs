const assert=require('node:assert/strict');
const {chromium}=require(process.env.PLAYWRIGHT_PATH||'C:/Users/avina/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright-core');
const origin='https://akashvetiver.akashvetiverexport.workers.dev';
(async()=>{
 const health=await fetch(origin+'/api/health');assert.equal(health.status,200);assert.equal((await health.json()).submissionsEnabled,true);
 const raw=await(await fetch(origin+'/site-config.js')).text();const cfg=JSON.parse(raw.match(/Object.freeze\((.*)\);/)[1]);assert.equal(cfg.catalogSource,'supabase');
 const headers={apikey:cfg.supabasePublishableKey,Authorization:'Bearer '+cfg.supabasePublishableKey};
 const response=await fetch(cfg.supabaseUrl+'/rest/v1/products?select=id,image,thumbnail',{headers});assert.equal(response.status,200);const products=await response.json();assert.ok(products.length>=12&&products.length<=20);
 for(const table of ['order_requests','customer_feedback','vettiver_admins']){const r=await fetch(cfg.supabaseUrl+'/rest/v1/'+table+'?select=*',{headers});assert.ok(r.status>=400,'Private table accessible: '+table)}
 const denied=await fetch(cfg.supabaseUrl+'/rest/v1/products?id=eq.product-malai-pair',{method:'PATCH',headers:{...headers,'Content-Type':'application/json'},body:JSON.stringify({name:'Unauthorized test'})});assert.ok(denied.status>=400);
 const browser=await chromium.launch();try{
 for(const width of [390,1440]){
  const page=await browser.newPage({viewport:{width,height:900}});const errors=[];page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text())});
  for(const path of ['/','/products.html','/admin.html']){
   const r=await page.goto(origin+path,{waitUntil:'domcontentloaded',timeout:60000});assert.equal(r.status(),200);await page.waitForTimeout(4000);
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'Overflow '+path+' '+width);
  }
  assert.deepEqual(errors,[]);await page.close();
 }
 }finally{await browser.close()}
 console.log('PASS live deployment: healthy Worker, 12 Supabase products, anonymous private-data/write denial, homepage/catalogue/admin at mobile and desktop without browser errors or overflow.');
})().catch(e=>{console.error(e);process.exitCode=1});
