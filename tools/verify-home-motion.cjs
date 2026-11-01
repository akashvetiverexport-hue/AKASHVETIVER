const assert=require('node:assert/strict');
const {chromium}=require('C:/Users/avina/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright-core');
const base=process.argv[2]||'http://127.0.0.1:4178';
(async()=>{const browser=await chromium.launch();try{
for(const [width,height,reducedMotion] of [[390,844,'no-preference'],[1440,900,'no-preference'],[320,568,'reduce']]){
 const page=await browser.newPage({viewport:{width,height},isMobile:width<700,hasTouch:width<700,reducedMotion});const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto(base,{waitUntil: 'domcontentloaded', timeout:60000});await page.waitForFunction(()=>window.gsap&&window.ScrollTrigger);await page.waitForTimeout(1800);
 for(const [section,ready] of [['#home','.hero-actions'],['#products','.showcase-main'],['#contact','.bulk-copy'],['#about','.craft-stage-copy'],['#reviews','.vt-review-stage'],['.questions','.question-list'],['#footer-root','.bwf-brand-line']]){
   await page.locator(section).evaluate(e=>e.scrollIntoView({behavior:'instant',block:'start'}));await page.locator(ready).first().waitFor({timeout:20000});
   await page.locator(ready).first().evaluate(e=>e.scrollIntoView({behavior:'instant',block:'center'}));await page.waitForTimeout(1300);
   assert.ok(await page.locator(ready).first().evaluate(e=>Number(getComputedStyle(e).opacity)>.99),`${section} stays hidden`);
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,`Overflow ${section} at ${width}`);
 }
 const count=await page.evaluate(()=>ScrollTrigger.getAll().filter(t=>t.vars.id==='chapter-reveal').length);
 if(reducedMotion==='reduce')assert.equal(count,0);
 else {await page.emulateMedia({reducedMotion:'reduce'});await page.waitForTimeout(200);assert.equal(await page.evaluate(()=>ScrollTrigger.getAll().filter(t=>t.vars.id==='chapter-reveal').length),0);assert.ok(await page.locator('.craft-photo').first().evaluate(e=>Number(getComputedStyle(e).opacity)===1));}
 // The trail starts/ends within the first/last image, including mobile.
 assert.equal(await page.evaluate(()=>{const p=document.querySelector('#craft-trail'),m=p.getScreenCTM(),photos=[...document.querySelectorAll('.craft-photo')];return [0,p.getTotalLength()].every((length,i)=>{const pt=p.getPointAtLength(length),q=new DOMPoint(pt.x,pt.y).matrixTransform(m),r=photos[i?photos.length-1:0].getBoundingClientRect();return q.x>=r.left&&q.x<=r.right&&q.y>=r.top&&q.y<=r.bottom})}),true);
 await page.emulateMedia({reducedMotion});await page.locator('#about').evaluate(e=>e.scrollIntoView({behavior:'instant'}));await page.waitForTimeout(1200);await page.screenshot({path:`C:/Users/avina/gsap-about-${width}.png`});
 assert.deepEqual(errors,[]);console.log(`PASS ${width} ${reducedMotion}: all seven sections visible, no overflow/errors, preference change cleans up GSAP, trail endpoints connected`);await page.close();
}
}finally{await browser.close()}})().catch(e=>{console.error(e);process.exitCode=1});


