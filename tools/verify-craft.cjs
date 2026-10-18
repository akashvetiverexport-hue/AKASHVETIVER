const assert = require('node:assert/strict');
const { chromium } = require(process.env.PLAYWRIGHT_PATH || 'playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ reducedMotion: 'reduce' });
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.goto('http://127.0.0.1:4178', { waitUntil: 'networkidle' });
  await page.addStyleTag({content: '.site-header,.skip-link{visibility:hidden!important}'});
  for (const width of [1440, 390, 320]) {
    await page.setViewportSize({width, height: 900});
    await page.locator('#about').scrollIntoViewIfNeeded();
    await page.locator('#about').screenshot({path: '.impeccable/review/craft-' + width + '.png'});
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), 'No horizontal overflow at ' + width);
    assert.equal(await page.locator('.craft-stage').count(), 3);
    assert.ok(await page.locator('.craft-stage-copy').first().isVisible());
  }
  await page.locator('.craft-closing a').click();
  assert.equal(await page.evaluate(() => location.hash), '#products');
  assert.deepEqual(errors, []);
  console.log('PASS: 3 stages, responsive layout at 1440/390/320, reduced motion, collection link, no JS errors');
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
