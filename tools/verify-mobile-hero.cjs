const assert=require('node:assert/strict');
const {chromium}=require(process.env.PLAYWRIGHT_PATH||'C:/Users/avina/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright-core');
const base=process.argv[2]||'http://127.0.0.1:4178';
(async()=>{const browser=await chromium.launch();try{
 for(const [width,height] of [[320,568],[390,844],[430,932],[768,1024],[844,390],[1440,900]].filter(([width])=>!process.argv[3]||width===Number(process.argv[3]))){
  const page=await browser.newPage({viewport:{width,height},isMobile:width<=700,hasTouch:width<=950,reducedMotion:'reduce'});const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto(base,{waitUntil:'domcontentloaded'});await page.evaluate(()=>document.fonts.ready);
  const metrics=await page.evaluate(()=>{
   const box=selector=>{const r=document.querySelector(selector).getBoundingClientRect();return {x:r.x,y:r.y,width:r.width,height:r.height,bottom:r.bottom}};
   const svg=document.querySelector('.hero-logo').viewBox.baseVal;
   return {overflow:document.documentElement.scrollWidth>innerWidth,hero:box('.hero-cinematic'),brand:box('.hero-brand'),copy:box('.hero-copy'),bottom:box('.hero-bottom'),primary:box('.hero-cta'),secondary:box('.hero-story-link'),logoBottom:svg.y+svg.height,headlineOverflow:document.querySelector('h1').scrollWidth>document.querySelector('h1').clientWidth+1,image:document.querySelector('.hero-atmosphere img').currentSrc,benefits:document.querySelectorAll('.hero-values').length,video:document.querySelector('#hero-video').getAttribute('src')};
  });
  assert.equal(metrics.overflow,false);assert.equal(metrics.headlineOverflow,false);assert.ok(metrics.logoBottom<=700,'Crest crop includes original wordmark');
  assert.ok(metrics.primary.height>=44);assert.ok(metrics.secondary.height>=44);assert.ok(metrics.primary.bottom<=height-4,'Primary action below first viewport');
  assert.equal(metrics.benefits,0,'Unwanted benefits block remains');
  if(width<=700){assert.ok(Math.abs(metrics.copy.x-metrics.brand.x)<2);assert.equal(metrics.bottom.height,0);assert.ok(metrics.image.includes('vetiver-golden-hour-mobile-'));assert.equal(metrics.video,null,'Mobile must not download the desktop video');assert.ok(Math.abs(metrics.primary.x-metrics.secondary.x)<1);assert.ok(Math.abs(metrics.primary.width-metrics.secondary.width)<1);const photo=await page.locator('.hero-atmosphere').boundingBox();assert.ok(Math.abs(photo.y-metrics.hero.y)<1,'Photo must begin at the top of the hero');assert.ok(Math.abs(photo.y+photo.height-metrics.hero.bottom)<1,'Gap below photo');assert.ok(photo.y<metrics.copy.y&&photo.y+photo.height>metrics.secondary.bottom,'Photo must sit behind all the copy and actions');}
  if(width===844)assert.ok(metrics.hero.height<height*1.3,'Landscape hero is excessively tall');
  if(width<=700||width===844){await page.locator('#hamburger').tap();assert.equal(await page.locator('#mobile-menu').evaluate(e=>e.open),true);await page.locator('#mobile-menu nav a[href="#home"]').tap();await page.waitForFunction(()=>!document.getElementById('mobile-menu').open)}
  if([320,390,1440].includes(width))await page.screenshot({path:`C:/Users/avina/vettiver-hero-finished-${width}.png`});
  assert.deepEqual(errors,[]);await page.close();console.log(`PASS ${width}x${height}: hero layout, crest crop, readable hierarchy, visible touch actions, navigation and no overflow.`);
 }
}finally{await browser.close()}})().catch(e=>{console.error(e);process.exitCode=1});
