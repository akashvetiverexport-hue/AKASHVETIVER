const assert=require('node:assert/strict');const {chromium}=require('C:/Users/avina/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright-core');
const base=process.argv[2]||'http://127.0.0.1:4178';
(async()=>{const browser=await chromium.launch();try{for(const [width,height] of [[320,568],[390,844],[1440,900]]){
 const page=await browser.newPage({viewport:{width,height},isMobile:width<700,hasTouch:width<700,reducedMotion:'reduce'}),errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto(base);await page.evaluate(()=>document.fonts.ready);await page.locator('#about').evaluate(e=>e.scrollIntoView());await page.locator('.craft-ribbon[data-ready=true]').waitFor();await page.waitForTimeout(150);
 assert.equal(await page.locator('.craft-stage-copy>p').count(),5);
 const geometry=await page.evaluate(()=>{
  const trail=document.getElementById('craft-trail'),matrix=trail.getScreenCTM(),length=trail.getTotalLength();
  const texts=[...document.querySelectorAll('.craft-stage-copy')].map(e=>e.getBoundingClientRect());let collisions=0,left=Infinity,right=-Infinity;
  for(let n=0;n<=2000;n++){const p=trail.getPointAtLength(length*n/2000);const q=new DOMPoint(p.x,p.y).matrixTransform(matrix);left=Math.min(left,q.x);right=Math.max(right,q.x);if(texts.some(r=>q.x>=r.left-6&&q.x<=r.right+6&&q.y>=r.top-6&&q.y<=r.bottom+6))collisions++}
  return {collisions,left,right};
 });assert.equal(geometry.collisions,0,JSON.stringify(geometry));assert.ok(geometry.left>=1&&geometry.right<=width-1,JSON.stringify(geometry));
 await page.screenshot({path:`C:/Users/avina/vettiver-about-clear-${width}.png`});if(width===390){await page.locator('.craft-packing').evaluate(e=>e.scrollIntoView());await page.screenshot({path:'C:/Users/avina/vettiver-about-last-stages.png'})}
 await page.locator('#footer-root').evaluate(e=>e.scrollIntoView());await page.locator('.bwf-word-in').waitFor();assert.equal((await page.locator('.bwf-word-in').innerText()).replaceAll('\n','').replaceAll('\u00a0',' '),'AKASH VETIVER');
 await page.goto(base+'/products.html#product-vel');await page.locator('#product-dialog[open]').waitFor();await page.locator('#dialog-commerce .piece-price').waitFor();
 assert.doesNotMatch(await page.locator('#product-dialog').innerText(),/sample price|price confirmed|confirm with us/i);
 assert.equal(await page.locator('#dialog-enquire').innerText(),'Reserve this piece');
 const visible=await page.locator('#dialog-enquire').evaluate(e=>{const r=e.getBoundingClientRect(),d=document.querySelector('#product-dialog').getBoundingClientRect();return r.top>=d.top&&r.bottom<=d.bottom&&r.bottom<=innerHeight});assert.equal(visible,true,`Reservation CTA requires scrolling at ${width}`);
 if(width<700)assert.equal(await page.locator('.dialog-more').evaluate(e=>e.open),false);
 await page.screenshot({path:`C:/Users/avina/vettiver-reserve-popup-${width}.png`});
 await page.locator('#dialog-enquire').click();await page.locator('#bulk-enquiry-title').waitFor({state:'visible'});assert.equal(await page.locator('#bulk-enquiry-title').innerText(),'Reserve your piece.');assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);assert.deepEqual(errors,[]);
 console.log(`PASS ${width}: five short descriptions, no text/path collisions, unclipped trail, akashvetiver footer, price and reservation visible without scrolling.`);await page.close();
 }}finally{await browser.close()}})().catch(e=>{console.error(e);process.exitCode=1});
