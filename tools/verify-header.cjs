const assert = require('node:assert/strict');
const { chromium } = require(process.env.PLAYWRIGHT_PATH || 'playwright');
(async () => {
  const browser = await chromium.launch();
  for (const width of [1440, 390]) {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    await page.goto('http://127.0.0.1:4178', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1800);
    for (const y of [0, 1200, 0]) {
      await page.evaluate(y => scrollTo({ top: y, behavior: 'instant' }), y);
      await page.waitForTimeout(500);
      const state = await page.evaluate(() => ({
        brand: getComputedStyle(document.querySelector('.hero-brand')).color,
        crest: getComputedStyle(document.querySelector('.hero-logo rect')).fill,
        background: getComputedStyle(document.querySelector('#navbar')).backgroundColor,
        box: getComputedStyle(document.querySelector('.hero-brand')).backgroundColor
      }));
      const ink = y ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)';
      assert.equal(state.brand, ink);
      assert.equal(state.crest, ink);
      assert.equal(state.background, y ? 'rgb(246, 251, 243)' : 'rgba(0, 0, 0, 0)');
      assert.equal(state.box, 'rgba(0, 0, 0, 0)');
      await page.locator('#navbar').screenshot({ path: '.impeccable/review/header-state-' + width + '-' + y + '.png' });
    }
    await page.close();
  }
  await browser.close();
  console.log('PASS: white/transparent at top, black/light after scrolling, restored on return; desktop and mobile.');
})().catch(error => { console.error(error); process.exit(1); });
