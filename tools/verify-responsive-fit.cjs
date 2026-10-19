const assert = require('node:assert/strict');
const { chromium } = require(process.env.PLAYWRIGHT_PATH || 'playwright');
const base = 'http://127.0.0.1:4178';
(async () => {
  const browser = await chromium.launch();
  try {
    for (const [width, height] of [[1920,900],[1366,768],[1024,768],[768,1024],[390,844],[320,568],[844,390]]) {
      const page = await browser.newPage({ viewport: { width, height }, reducedMotion: 'reduce' });
      const errors = [];
      page.on('pageerror', e => errors.push(e.message));
      await page.goto(base, { waitUntil: 'networkidle' });
      await page.evaluate(() => { document.documentElement.style.scrollBehavior = 'auto'; });
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `Home overflow at ${width}`);
      const heights = {};
      for (const selector of ['.product-showcase','.bulk-marquee','#reviews','.questions']) {
        heights[selector] = Math.round(await page.locator(selector).evaluate(e => e.getBoundingClientRect().height));
      }
      await page.locator('#contact').evaluate(e => e.scrollIntoView({ block: 'start', behavior: 'instant' }));
      await page.waitForTimeout(200);
      const bulk = await page.locator('.bulk-marquee').boundingBox();
      const header = await page.locator('#navbar').boundingBox();
      assert.ok(bulk.y >= header.height && bulk.y <= header.height + 24, 'Single header offset');
      if (width >= 1024 && height >= 768) assert.ok(bulk.y + bulk.height <= height + 1, `Bulk section fits ${width}x${height}`);
      const images = await page.locator('.bulk-image img').evaluateAll(nodes => nodes.map(e => getComputedStyle(e).objectFit));
      assert.ok(images.every(fit => fit === 'contain'), 'Full product image, no cover crop');
      const rotated = await page.locator('.bulk-image-window').evaluate(e => {
        const bounds = e.getBoundingClientRect();
        return [...e.querySelectorAll('.bulk-image')].every(image => {
          const r = image.getBoundingClientRect();
          return r.top >= bounds.top && r.bottom <= bounds.bottom;
        });
      });
      assert.ok(rotated, 'Rotated images do not clip vertically');
      if ([1366,768,390].includes(width)) await page.screenshot({ path: `C:/Users/avina/bulk-after-${width}.png` });
      await page.locator('#products').evaluate(e => e.scrollIntoView({ block: 'start', behavior: 'instant' }));
      await page.waitForTimeout(200);
      if ([1366,768,390].includes(width)) await page.screenshot({ path: `C:/Users/avina/products-after-${width}.png` });
      assert.match(await page.locator('.showcase-intro h2').evaluate(e => getComputedStyle(e).fontFamily), /Outfit/);
      assert.equal(await page.locator('.craft-stage').count(), 5);
      await page.locator('.bulk-cta').click();
      assert.ok(await page.locator('#bulk-enquiry-dialog').isVisible());
      assert.ok(await page.locator('#bulk-enquiry-dialog').evaluate(e => e.scrollWidth <= e.clientWidth + 1));
      await page.keyboard.press('Escape');
      await page.goto(base + '/products.html', { waitUntil: 'networkidle' });
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), 'Catalog has no horizontal overflow');
      assert.deepEqual(errors, []);
      console.log(JSON.stringify({ width, height, sectionHeights: heights, status: 'passed' }));
      await page.close();
    }
    const motion = await browser.newPage({ viewport: { width:1366, height:768 } });
    await motion.goto(base, { waitUntil: 'networkidle' });
    await motion.locator('#products').evaluate(e => e.scrollIntoView({ behavior:'instant' }));
    const first = await motion.locator('.showcase-inner').getAttribute('data-current');
    await motion.waitForTimeout(3400);
    assert.notEqual(await motion.locator('.showcase-inner').getAttribute('data-current'), first, 'Product autoplay remains active');
    await motion.locator('#contact').evaluate(e => e.scrollIntoView({ behavior:'instant' }));
    await motion.waitForTimeout(300);
    assert.equal(await motion.locator('.bulk-image-track').evaluate(e => getComputedStyle(e).animationPlayState), 'running');
    assert.equal(await motion.getByRole('button', {name:/pause|play/i}).count(), 0);
    console.log('Automatic product rotation and marquee verified.');
  } finally { await browser.close(); }
})().catch(e => { console.error(e); process.exit(1); });
