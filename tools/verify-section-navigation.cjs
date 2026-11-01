const assert=require('node:assert/strict');
const fs=require('node:fs');const path=require('node:path');
const {chromium}=require(process.env.PLAYWRIGHT_PATH||'C:/Users/avina/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright-core');
const origin=process.argv[2]||'http://127.0.0.1:4178';
async function aligned(page,id){
 await page.waitForFunction(id=>{
  const section=document.getElementById(id),header=document.getElementById('navbar');
  const expected=id==='home'?0:header.getBoundingClientRect().height+12;
  const actual=id==='home'?scrollY:section.getBoundingClientRect().top;
  return Math.abs(actual-expected)<3&&document.querySelector('.desktop-nav a.is-active')?.hash==='#'+id;
 },id,{timeout:15000}).catch(async error=>{
  console.error('Navigation mismatch',await page.evaluate(id=>({id,scrollY,top:document.getElementById(id)?.getBoundingClientRect().top,header:document.getElementById('navbar')?.getBoundingClientRect().height,active:document.querySelector('.desktop-nav a.is-active')?.hash,hash:location.hash}),id));throw error;
 });
 assert.equal(await page.locator('.desktop-nav a[aria-current="location"]').count(),1);
 assert.equal(await page.locator('#mobile-menu nav a[aria-current="location"]').count(),1);
}
async function clickNav(page,id,width){
 if(width<=700){await page.locator('#hamburger').tap();await page.locator(`#mobile-menu nav a[href="#${id}"]`).tap()}
 else await page.locator(`.desktop-nav a[href="#${id}"]`).click();
}
(async()=>{const browser=await chromium.launch();try{
 for(const width of process.argv[3]?[Number(process.argv[3])]:[1440,390]){
  const context=await browser.newContext({viewport:{width,height:900},reducedMotion:'reduce',hasTouch:width<=700,isMobile:width<=700});const page=await context.newPage();const errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  await page.goto(origin+'/',{waitUntil:'domcontentloaded'});await aligned(page,'home');
  for(const id of ['products','contact','about','reviews','home','home']){
   await clickNav(page,id,width);await aligned(page,id);
   const ready={products:'.showcase-inner',contact:'.bulk-marquee',reviews:'#feedback-form'}[id];
   if(ready){await page.locator(ready).waitFor({state:'attached'}).catch(async error=>{console.error('Section load mismatch',await page.evaluate(id=>({id,text:document.getElementById(id)?.innerText,roots:[...document.querySelectorAll('[id$="-root"]')].map(e=>({id:e.id,top:e.getBoundingClientRect().top,height:e.getBoundingClientRect().height})),resources:performance.getEntriesByType('resource').filter(r=>r.name.includes('/assets/react/')).map(r=>({url:r.name.split('/').pop(),duration:r.duration}))}),id),errors);throw error});await aligned(page,id)}
  }
  await page.emulateMedia({reducedMotion:'no-preference'});
  await clickNav(page,'contact',width);await aligned(page,'contact');
  // Simulate an animation refresh interrupting the next smooth scroll midway.
  // The destination must still be reached after scrolling settles.
  await page.evaluate(()=>{
   const original=window.scrollTo.bind(window);let interrupt=true;
   window.scrollTo=(options,...rest)=>{
    if(interrupt&&options?.behavior==='smooth'){interrupt=false;return original({top:(scrollY+options.top)/2,behavior:'instant'})}
    return original(options,...rest);
   };
  });
  await clickNav(page,'home',width);await aligned(page,'home');
  await page.locator('#navbar').screenshot({path:`C:/Users/avina/vettiver-nav-home-${width}.png`});
  await page.goto(origin+'/products.html',{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>document.querySelector('.desktop-nav a.is-active')?.hash==='#products');
  if(width<=700){await page.locator('#hamburger').tap();await page.locator('#mobile-menu nav a[href="index.html#about"]').tap()}
  else await page.locator('.desktop-nav a[href="index.html#about"]').click();
  await page.waitForURL(url=>url.hash==='#about',{waitUntil:'domcontentloaded'});await aligned(page,'about');
  await page.reload({waitUntil:'domcontentloaded'});await aligned(page,'about');
  await page.evaluate(()=>{document.dispatchEvent(new WheelEvent('wheel',{bubbles:true}));window.scrollTo({top:0,behavior:'instant'})});await aligned(page,'home');
  assert.deepEqual(errors,[]);await context.close();
  console.log(`PASS ${width}: all header destinations, current-link reset, mobile menu, smooth/reduced motion, repeated Home, catalogue-to-home section links, hash reload and manual scroll.`);
 }
 // The header must work before the database is ready, and stay aligned when
 // content above the clicked destination changes height later.
 const page=await browser.newPage({viewport:{width:1440,height:900},reducedMotion:'reduce'});
 const products=JSON.parse(fs.readFileSync(path.join(__dirname,'../data/products.json'),'utf8'));let release;
 await page.route('**/site-config.js',route=>route.fulfill({contentType:'application/javascript',body:'window.VETTIVER_CONFIG='+JSON.stringify({catalogSource:'supabase',supabaseUrl:'https://lgkkjubwdxdfpmoxkrmd.supabase.co',supabasePublishableKey:'sb_publishable_test'})}));
 await page.route('**/rest/v1/products?*',async route=>{await new Promise(resolve=>release=resolve);await route.fulfill({contentType:'application/json',body:JSON.stringify(products)})});
 await page.goto(origin+'/',{waitUntil:'domcontentloaded'});await aligned(page,'home');
 await clickNav(page,'about',1440);await aligned(page,'about');
 assert.equal(await page.evaluate(()=>window.VETTIVER_CATALOG.products.length),0);
 await page.evaluate(()=>document.getElementById('products').style.paddingBottom='420px');await aligned(page,'about');
 release();await page.evaluate(async()=>await window.VETTIVER_CATALOG.ready);await aligned(page,'about');await page.close();
 console.log('PASS delayed database and late layout growth: navigation is immediately usable and destination remains correctly aligned.');
}finally{await browser.close()}})().catch(e=>{console.error(e);process.exitCode=1});
