const assert = require('node:assert/strict');
const { chromium } = require('C:/Users/avina/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright-core');
const origin = process.env.TEST_ORIGIN || 'http://127.0.0.1:4178';
(async () => {
 const browser = await chromium.launch();
 try {
  for (const reducedMotion of ['no-preference', 'reduce']) {
   const page = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, reducedMotion });
   await page.goto(origin + '/#products');
   const carousel = page.locator('.showcase-inner');
   await carousel.waitFor();
   await page.locator('.showcase-main').scrollIntoViewIfNeeded();
   await page.waitForTimeout(700);
   const box = await page.locator('.showcase-main').boundingBox();
   const client = await page.context().newCDPSession(page);
   const x = box.x + box.width / 2, y = Math.min(650, Math.max(200, box.y + box.height / 2));
   await client.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x, y }] });
   for (let step = 1; step <= 5; step++) {
    await client.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x, y: y - step * 12 }] });
    await page.waitForTimeout(40);
   }
   await client.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
   const before = await carousel.getAttribute('data-current');
   await page.waitForTimeout(5800);
   const after = await carousel.getAttribute('data-current');
   if (reducedMotion === 'reduce') assert.equal(after, before, 'reduced motion stays still');
   else {
    assert.notEqual(after, before, 'mobile vertical touch scroll must not disable autoplay');
    await page.locator('.showcase-thumb').nth(2).tap();
    await page.waitForTimeout(600);
    assert.equal(await carousel.getAttribute('data-current'), '2');
    await page.waitForTimeout(5800);
    assert.equal(await carousel.getAttribute('data-current'), '2', 'intentional choice stays');
   }
   console.log('PASS mobile touch carousel: ' + reducedMotion);
   await page.close();
  }
 } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
