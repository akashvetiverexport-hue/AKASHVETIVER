const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require(process.env.PLAYWRIGHT_PATH || 'playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const output = path.resolve(__dirname, '../.impeccable/review/botanical-still-life');
  fs.mkdirSync(output, { recursive: true });
  const errors = [];
  const report = [];
  for (const [width, height] of [[1440,900],[1280,800],[768,1024],[390,844],[320,740]]) {
    const page = await browser.newPage({ viewport: { width, height } });
    page.on('pageerror', error => errors.push(error.message));
    await page.goto('http://127.0.0.1:4178', { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(2600);
    const state = await page.evaluate(() => ({
      overflow: document.documentElement.scrollWidth - innerWidth,
      cta: document.querySelector('.hero-cta').getBoundingClientRect().bottom,
      title: document.querySelector('#hero-title').getBoundingClientRect().right,
      hero: document.querySelector('.hero').getBoundingClientRect().height,
      missing: [...document.querySelectorAll('.hero img,.hero-brand img')].filter(i => !i.complete || !i.naturalWidth).map(i => i.src),
      logo: document.querySelector('.hero-logo image').getAttribute('href'),
    }));
    assert.ok(state.overflow <= 1);
    assert.ok(state.cta > 0 && state.cta <= height);
    assert.ok(state.title <= width);
    assert.deepEqual(state.missing, []);
    assert.equal(state.logo, 'logo.png');
    assert.equal(await page.locator('.scale-stage,.scale-balance').count(), 0);
    assert.equal(await page.locator('.hero-atmosphere>img').getAttribute('src'), 'images/hero/vetiver-still-life.png');
    await page.screenshot({ path: path.join(output, width + '.png') });
    report.push({ width, height, ...state });
    await page.close();
  }
  const reduced = await browser.newPage({ reducedMotion: 'reduce' });
  await reduced.goto('http://127.0.0.1:4178', { waitUntil: 'networkidle' });
  assert.equal(await reduced.locator('.hero-atmosphere>img').evaluate(el => getComputedStyle(el).transform), 'none');
  assert.deepEqual(errors, []);
  fs.writeFileSync(path.join(output, 'report.json'), JSON.stringify({ report, errors }, null, 2));
  console.log(JSON.stringify({ report, errors }, null, 2));
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
