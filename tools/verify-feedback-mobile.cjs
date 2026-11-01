const assert=require('node:assert/strict');
const {chromium}=require('C:/Users/avina/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright-core');
const base=process.argv[2]||'http://127.0.0.1:4178';
(async()=>{const browser=await chromium.launch();try{for(const width of [320,390]){
 const page=await browser.newPage({viewport:{width,height:650},isMobile:true,hasTouch:true,reducedMotion:'reduce'});
 await page.route('**/site-config.js',r=>r.fulfill({contentType:'application/javascript',body:'window.VETTIVER_CONFIG={catalogSource:"local",feedbackEndpoint:"/api/feedback"};'}));
 let fail=true,calls=0;
 await page.route('**/api/feedback',r=>{calls++;return r.fulfill({status:fail?503:201,contentType:'application/json',body:fail?'{}':'{"id":"AUDIT-LOCAL-FEEDBACK","status":"pending"}'})});
 await page.goto(base,{waitUntil:'domcontentloaded'});await page.locator('#reviews').evaluate(e=>e.scrollIntoView({behavior:'instant'}));
 await page.getByRole('button',{name:'Add feedback'}).click();
 await page.locator('#feedback-name').fill('Local audit');await page.locator('#feedback-content').fill('Testing the feedback flow without sending a real review.');await page.locator('.vt-feedback-consent input').check();
 await page.getByRole('radio',{name:'5 stars',exact:true}).check();
 await page.getByRole('button',{name:'Send for approval'}).click();await page.waitForFunction(()=>document.querySelector('#feedback-status').classList.contains('is-error'));
 assert.equal(await page.locator('#feedback-name').inputValue(),'Local audit');assert.equal(calls,1);
 fail=false;await page.getByRole('button',{name:'Send for approval'}).click();await page.getByRole('button',{name:'Waiting for approval'}).waitFor();assert.equal(calls,2);
 assert.equal(await page.locator('#feedback-dialog').evaluate(e=>e.scrollWidth>e.clientWidth),false);
 await page.getByRole('button',{name:'Close feedback'}).click();assert.equal(await page.locator('#feedback-dialog').evaluate(e=>e.open),false);
 console.log(`PASS ${width}: feedback modal, mobile fields, failure retains input, retry receives pending approval, close works.`);await page.close();
}}finally{await browser.close()}})().catch(e=>{console.error(e);process.exitCode=1});
