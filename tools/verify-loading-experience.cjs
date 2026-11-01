const assert=require('node:assert/strict');const {chromium}=require('C:/Users/avina/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright-core');
(async()=>{const b=await chromium.launch();try{
 for(const width of [390,1440]){
 const p=await b.newPage({viewport:{width,height:900}}),errors=[],requests=[];p.on('pageerror',e=>errors.push(e.message));p.on('request',r=>requests.push(r.url()));
 await p.route('**/images/optimized/hero/**',async r=>{await new Promise(ok=>setTimeout(ok,2500));await r.continue().catch(()=>{})});
 await p.route('**/assets/react/product-showcase-*.js',async r=>{await new Promise(ok=>setTimeout(ok,2000));await r.continue().catch(()=>{})});
 await p.goto('http://127.0.0.1:4178',{waitUntil:'domcontentloaded'});await p.locator('.brand-intro').waitFor();await p.screenshot({path:`C:/Users/avina/loading-intro-${width}.png`});await p.locator('.brand-intro').waitFor({state:'detached',timeout:3000});
 assert.ok(!requests.some(u=>u.includes('craft-delivery.webp')),'last About image downloads before scroll');
 await p.locator('#products').evaluate(e=>e.scrollIntoView());await p.locator('.showcase-main').waitFor();await p.waitForTimeout(900);assert.equal(await p.locator('#product-showcase-root').getAttribute('aria-busy'),'false');
 await p.locator('.craft-photo').last().evaluate(e=>e.scrollIntoView());await p.waitForFunction(()=>document.querySelector('.craft-photo-delivered img')?.naturalWidth>0);assert.equal(await p.locator('.craft-photo-delivered').evaluate(e=>e.classList.contains('photo-loading')),false);
 await p.locator('.showcase-image-frame img').first().evaluate(e=>{e.src='/missing-test-photo.webp'});await p.locator('.showcase-image-frame.photo-error').first().waitFor();
 assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);assert.deepEqual(errors,[]);
 await p.goto('http://127.0.0.1:4178',{waitUntil:'domcontentloaded'});await p.waitForTimeout(250);assert.equal(await p.locator('.brand-intro').count(),0);
 console.log(`PASS ${width}: bounded intro, repeat visit skips intro, lazy About images, React busy cleared, image failure fallback, no overflow or JS errors`);await p.close();
 }
 const p=await b.newPage({reducedMotion:'reduce'});await p.goto('http://127.0.0.1:4178');assert.equal(await p.locator('.brand-intro').count(),0);console.log('PASS reduced motion: no intro');await p.close();
 }finally{await b.close()}})().catch(e=>{console.error(e);process.exitCode=1});
