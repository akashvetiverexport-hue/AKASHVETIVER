const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {chromium}=require('C:/Users/avina/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright-core');
const origin=process.argv[2]||'http://127.0.0.1:4178',root=path.join(__dirname,'..'),service='https://lgkkjubwdxdfpmoxkrmd.supabase.co';
const campaign={id:'33333333-3333-4333-8333-333333333333',title:'Diwali offers',description:'A gift with your celebration.',image:'',starts_at:'2020-01-01T00:00:00Z',ends_at:'2099-01-01T00:00:00Z'};
const rows=JSON.parse(fs.readFileSync(path.join(root,'data/products.json'),'utf8'));const p=rows.find(p=>p.id==='product-vel');Object.assign(p,{offers_enabled:true,offer_label:'Diwali gift',offer_starts:campaign.starts_at,offer_ends:campaign.ends_at,campaign_id:campaign.id,sale_price:300,gift_name:'50g vetiver roots',gift_image:service+'/storage/v1/object/public/product-images/gifts/test.webp',combo_product_id:'product-peacock',combo_price:600});
(async()=>{const browser=await chromium.launch();try{for(const width of [390,1440]){
 const page=await browser.newPage({viewport:{width,height:900},isMobile:width<700,hasTouch:width<700,reducedMotion:'reduce'}),errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.route('**/site-config.js',r=>r.fulfill({contentType:'application/javascript',body:'window.VETTIVER_CONFIG='+JSON.stringify({supabaseUrl:service,supabasePublishableKey:'sb_publishable_test',catalogSource:'supabase',catalogEndpoint:'/api/catalog',requestsEndpoint:'/api/requests'})}));
 await page.route('**/api/catalog',r=>r.fulfill({json:rows}));await page.route('**/api/campaigns',r=>r.fulfill({json:[campaign]}));
 await page.route('**/catalog.js',async r=>{await new Promise(resolve=>setTimeout(resolve,600));await r.continue()});
 await page.route(service+'/storage/**',r=>r.fulfill({contentType:'image/webp',body:fs.readFileSync(path.join(root,rows[0].thumbnail))}));
 let payload;await page.route('**/api/requests',r=>{payload=r.request().postDataJSON();return r.fulfill({status:201,json:{id:'AUDIT-COMBO-TEST',status:'received'}})});
 await page.goto(origin+'/products.html?festival='+campaign.id);await page.locator('.festival-banner').waitFor();
 assert.equal(await page.locator('.product-card:visible').count(),1);await page.locator('#product-vel [data-product-open]').first().click();
 await page.locator('.gift-inclusion').waitFor();assert.match(await page.locator('.gift-inclusion').innerText(),/50g vetiver roots/);assert.equal(await page.locator('.combo-photos img').count(),2);assert.match(await page.locator('.combo-inclusion').innerText(),/600/);
 await page.screenshot({path:`C:/Users/avina/vettiver-commerce-popup-${width}.png`});
 await page.locator('#enquire-combo').click();assert.match(await page.locator('#enquiry-product').inputValue(),/combo/);assert.match(await page.locator('.offer-request-summary').innerText(),/50g vetiver roots/);
 await page.locator('#request-name').fill('Mock customer');await page.locator('#request-phone').fill('+91 90000 00000');await page.locator('#request-city').fill('Chennai');await page.locator('#request-pin').fill('600001');await page.locator('#request-consent').check();await page.locator('.enquiry-submit').click();await page.locator('#request-success').waitFor({state:'visible'});assert.equal(payload.items[0].offerType,'combo');assert.equal(payload.items[0].productId,'product-vel');
 await page.goto(origin+'/');await page.locator('#products').evaluate(e=>e.scrollIntoView());await page.locator('.showcase-inner').waitFor();await page.locator('.showcase-thumb[aria-label="Show Vetiver Vel (Spear)"]').click();await page.waitForTimeout(100);assert.match(await page.locator('.showcase-detail-slide[aria-hidden=false]').innerText(),/Diwali gift/);
 if(width<700)assert.equal(await page.locator('.showcase-detail-cta:visible').count(),0);
 await page.screenshot({path:`C:/Users/avina/vettiver-commerce-products-${width}.png`});
 await page.locator('#about').evaluate(e=>e.scrollIntoView());await page.waitForTimeout(150);const bounds=await page.locator('#craft-trail').evaluate(e=>{const box=e.getBoundingClientRect();return {left:box.left,right:box.right}});assert.ok(bounds.left>=0&&bounds.right<=width,JSON.stringify(bounds));await page.screenshot({path:`C:/Users/avina/vettiver-commerce-about-${width}.png`});
 await page.locator('#footer-root').evaluate(e=>e.scrollIntoView());await page.locator('.bwf-word-in').waitFor();assert.equal((await page.locator('.bwf-word-in').innerText()).replaceAll('\n',''),'akashvetiver');await page.screenshot({path:`C:/Users/avina/vettiver-commerce-footer-${width}.png`});
 if(width<700){await page.locator('.menu-toggle').click();assert.match(await page.locator('.menu-brand').innerText(),/AKASH VETIVER/);await page.screenshot({path:`C:/Users/avina/vettiver-commerce-menu-${width}.png`})}
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);assert.deepEqual(errors,[]);
 // Expiry checked against clock on the same loaded records, without a reload.
 await page.evaluate(()=>{const p=window.VETTIVER_CATALOG.products.find(p=>p.id==='product-vel');p.offer_ends='2020-01-01T00:00:00Z';if(window.VETTIVER_COMMERCE.active(p)||window.VETTIVER_COMMERCE.partner(p))throw new Error('Expired offer remained active')});
 console.log(`PASS ${width}: festival banner/filter, gift image, combo detail/request and summary, homepage price/badge, expired offers hidden, branding, trail bounds and overflow.`);await page.close();
 }}finally{await browser.close()}})().catch(e=>{console.error(e);process.exitCode=1});
