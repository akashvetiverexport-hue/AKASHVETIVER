const assert = require('node:assert/strict');
const { chromium } = require(process.env.PLAYWRIGHT_PATH || 'playwright');
(async () => {
  const browser = await chromium.launch();
  try {
    const errors = [];
    const page = await browser.newPage({viewport:{width:1440,height:1000}});
    page.on('pageerror', error => errors.push(error.message));
    const noToggles = async p => assert.equal(await p.getByRole('button', {name:/play|pause|resume/i}).count(), 0);
    const current = p => p.locator('.showcase-inner').getAttribute('data-current');
    const advances = async p => {
      const before = await current(p);
      await p.waitForFunction(index => document.querySelector('.showcase-inner').dataset.current !== index, before, {timeout:6000});
      const indices = await p.evaluate(() => ({
        main: [...document.querySelectorAll('.showcase-slide')].findIndex(e => e.getAttribute('aria-hidden') === 'false'),
        thumb: [...document.querySelectorAll('.showcase-thumb')].findIndex(e => e.getAttribute('aria-pressed') === 'true'),
        details: [...document.querySelectorAll('.showcase-detail-slide')].findIndex(e => e.getAttribute('aria-hidden') === 'false')
      }));
      assert.equal(indices.main, indices.thumb); assert.equal(indices.main, indices.details);
    };
    await page.goto('http://127.0.0.1:4178', {waitUntil:'networkidle'});
    await noToggles(page);
    await page.waitForFunction(() => { const v = document.querySelector('#hero-video'); return !v.paused && v.currentTime > 0; }, null, {timeout:15000});
    await page.locator('#products').scrollIntoViewIfNeeded();
    await page.locator('.showcase-main').hover();
    await advances(page);
    await page.getByRole('button',{name:'Next product',exact:true}).click();
    await advances(page);
    await page.getByRole('button',{name:'Show Vetiver Peacock (Mayil)',exact:true}).click();
    await advances(page);
    await page.locator('.showcase-main').focus();
    await page.keyboard.press('ArrowRight');
    await advances(page);
    const box = await page.locator('.showcase-main').boundingBox();
    await page.mouse.move(box.x+box.width*.8,box.y+box.height*.5);
    await page.mouse.down();
    await page.mouse.move(box.x+box.width*.2,box.y+box.height*.5,{steps:12});
    await page.mouse.up();
    await advances(page);
    await page.locator('#contact').scrollIntoViewIfNeeded();
    await page.waitForFunction(() => getComputedStyle(document.querySelector('.bulk-image-track')).animationPlayState === 'running');
    await page.locator('.bwf').scrollIntoViewIfNeeded();
    await page.waitForFunction(() => document.querySelector('.bwf').dataset.motion === 'running');
    const beam = await page.locator('.bwf').evaluate(e=>e.style.getPropertyValue('--bwf-b'));
    await page.waitForTimeout(500);
    assert.notEqual(await page.locator('.bwf').evaluate(e=>e.style.getPropertyValue('--bwf-b')), beam);
    await page.goto('http://127.0.0.1:4178/?ui-demo=testimonials',{waitUntil:'networkidle'});
    await noToggles(page);
    await page.locator('#testimonials').scrollIntoViewIfNeeded();
    await page.getByRole('button',{name:'Next review',exact:true}).click();
    const review = await page.locator('.vt-review-card[aria-hidden=false]').getAttribute('aria-label');
    await page.waitForFunction(label=>document.querySelector('.vt-review-card[aria-hidden=false]')?.getAttribute('aria-label') !== label,review,{timeout:9000});
    await page.goto('http://127.0.0.1:4178/products.html',{waitUntil:'networkidle'});
    await noToggles(page);
    const mobile = await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
    await mobile.goto('http://127.0.0.1:4178',{waitUntil:'networkidle'});
    await mobile.locator('#products').scrollIntoViewIfNeeded();
    await noToggles(mobile); await advances(mobile);
    await mobile.getByRole('button',{name:'Next product',exact:true}).tap();
    await advances(mobile);
    assert.ok(await mobile.evaluate(()=>document.documentElement.scrollWidth <= innerWidth + 1));
    await mobile.emulateMedia({reducedMotion:'reduce'});
    await mobile.waitForTimeout(300);
    const still = await current(mobile);
    await mobile.waitForTimeout(3500);
    assert.equal(await current(mobile),still);
    await mobile.locator('#contact').scrollIntoViewIfNeeded();
    assert.equal(await mobile.locator('.bulk-image-track').evaluate(e=>getComputedStyle(e).animationName),'none');
    await mobile.locator('.bwf').scrollIntoViewIfNeeded();
    assert.equal(await mobile.locator('.bwf').getAttribute('data-motion'),'paused');
    await mobile.locator('#home').scrollIntoViewIfNeeded();
    assert.ok(await mobile.locator('#hero-video').evaluate(e=>e.paused));
    assert.deepEqual(errors,[]);
    console.log('PASS: no Play/Pause buttons on either page or review demo; hero plays; products advance while hovered/focused and after clicks/swipes; synchronized tracks; ribbon/footer animate; reviews rotate; mobile autoplay; reduced motion respected.');
  } finally { await browser.close(); }
})().catch(error=>{console.error(error);process.exit(1)});
