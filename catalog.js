(() => {
  'use strict';
  const config = window.VETTIVER_CONFIG || {};
  const commerce = window.VETTIVER_COMMERCE;
  const state = window.VETTIVER_CATALOG = { products: window.VETTIVER_LOCAL_PRODUCTS || [], error: '', ready: null };
  const labels = { garland: 'Garlands', toran: 'Door hangings', decor: 'Décor & crafts', ceremony: 'Ceremonial', roots: 'Raw vetiver roots' };
  const escape = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const allowedImage = value => {
    if (typeof value !== 'string') return false;
    if (/^\/api\/media\/[a-zA-Z0-9_/-]+\.webp$/.test(value)) return true;
    if (/^images\/optimized\/[a-zA-Z0-9_./-]+\.webp$/.test(value) && !value.includes('..')) return true;
    try { const url = new URL(value); return url.origin === config.supabaseUrl && url.pathname.startsWith('/storage/v1/object/public/product-images/') && url.pathname.endsWith('.webp') && !url.search && !url.hash; } catch { return false; }
  };
  const valid = product => product && /^product-[a-z0-9-]{1,90}$/.test(product.id) && Object.hasOwn(labels,product.category) && typeof product.name === 'string' && product.name.length > 0 && product.name.length <= 120 && typeof product.description === 'string' && typeof product.alt === 'string' && allowedImage(product.image) && allowedImage(product.thumbnail) && product.status === 'published' && (product.featured_order === null || Number.isInteger(product.featured_order));
  const render = () => {
    commerce?.banners();
    const grid = document.getElementById('product-grid');
    if (grid) grid.innerHTML = state.products.map((product,index) => `<article class="product-card" id="${escape(product.id)}" data-category="${escape(product.category)}"><button class="product-image" data-product-open aria-label="View ${escape(product.name)}"><img src="${escape(product.thumbnail)}" data-full="${escape(product.image)}" srcset="${escape(product.thumbnail)} 320w, ${escape(product.image)} 1200w" sizes="(max-width: 700px) calc((100vw - 64px)/2), (max-width: 1100px) 28vw, 300px" alt="${escape(product.alt)}" width="1200" height="1200" loading="${index < 2 ? 'eager' : 'lazy'}" decoding="async"><span class="product-view"><img src="assets/icons/plus.svg" width="21" height="21" alt=""></span></button><div class="product-meta"><span>${labels[product.category]}</span><span>${product.category==='roots'?'Natural vetiver':'Handcrafted'}</span></div><h3><a href="/pieces/${escape(product.id)}" data-product-open>${escape(product.name)}</a></h3><p class="product-description">${escape(product.description)}</p><div class="card-commerce">${commerce?.badge(product)||''}${commerce?.price(product)||''}</div><button class="product-enquire" data-enquire="${escape(product.name)}">Reserve this piece <img src="assets/icons/arrow-up-right.svg" alt="" width="18" height="18"></button></article>`).join('');
    document.documentElement.classList.remove('catalog-pending');
    const count = document.querySelector('[data-filter="all"] span');
    if (count) count.textContent = String(state.products.length);
    const select = document.getElementById('enquiry-product');
    if (select) select.innerHTML = '<option value="">Help me choose</option>' + state.products.map(product => `<option data-product-id="${escape(product.id)}">${escape(product.name)}</option>`).join('') + (commerce?.options()||'') + '<option data-product-id="custom">A custom vetiver piece</option>';
  };
  state.ready = (async () => {
    if (config.catalogSource !== 'supabase') { await commerce?.ready; render(); return; }
    const grid = document.getElementById('product-grid');
    const cacheKey = 'vettiver:catalog:v3:' + config.supabaseUrl;
    try {
      const saved = JSON.parse(sessionStorage.getItem(cacheKey));
      if (saved && Date.now() >= saved.at && Date.now() - saved.at < 15000 && Array.isArray(saved.products) && saved.products.every(valid)) {
        state.products = saved.products; await commerce?.ready; render(); return;
      }
    } catch { /* Storage is optional. */ }
    // Match the real cards while loading, without offering unverified products.
    const placeholders = Math.min(12, Math.max(4, state.products.length || 12));
    state.products = [];
    if (grid) {
      grid.setAttribute('aria-busy','true');
      grid.innerHTML = Array.from({length:placeholders},()=>'<article class="product-card catalog-skeleton" aria-hidden="true"><div class="product-image skeleton-surface"></div><div class="skeleton-line skeleton-meta"></div><div class="skeleton-line skeleton-title"></div><div class="skeleton-line skeleton-action"></div></article>').join('');
    }
    const controls = [...document.querySelectorAll('.filter-button, #product-search, [data-bulk-enquiry]')];
    controls.forEach(control => { control.disabled = true; });
    const filterStatus = document.getElementById('filter-status');
    if (filterStatus) filterStatus.textContent = 'Loading pieces…';
    const count = document.querySelector('[data-filter="all"] span');
    if (count) count.textContent = '…';
    const loading = document.createElement('p'); loading.className = 'catalog-loading'; loading.setAttribute('role','status'); loading.textContent = 'Loading the collection…';
    if (filterStatus) loading.hidden = true;
    grid?.before(loading);
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 12000);
    try {
      if (!config.supabasePublishableKey || !/^https:\/\/[a-z0-9]+\.supabase\.co$/.test(config.supabaseUrl)) throw new Error('Missing configuration');
      const products = [];
      for (let offset = 0; ; offset += 500) {
        if (offset >= 10000) throw new Error('Catalogue too large');
        const edge = config.catalogEndpoint === '/api/catalog';
        const response = await fetch(edge ? '/api/catalog' : config.supabaseUrl + '/rest/v1/products?select=id,category,name,image,thumbnail,alt,description,status,sort_order,featured_order,price,price_is_sample,pricing_unit,size_options,offers_enabled,offer_label,offer_starts,offer_ends,campaign_id,sale_price,gift_name,gift_image,combo_product_id,combo_price&status=eq.published&order=sort_order.asc,id.asc&limit=500&offset=' + offset, { headers: edge ? {} : { apikey: config.supabasePublishableKey }, signal: controller.signal });
        if (!response.ok) throw new Error('Catalogue unavailable');
        const page = await response.json();
        if (!Array.isArray(page) || page.some(product => !valid(product))) throw new Error('Invalid catalogue');
        products.push(...page);
        if (edge || page.length < 500) break;
      }
      await commerce?.ready;
      state.products = products;
      try { sessionStorage.setItem(cacheKey, JSON.stringify({at:Date.now(),products})); } catch { /* Storage is optional. */ }
      render();
    } catch {
      render();
      state.error = 'The collection could not load. Please reload to try again, or email us.';
      const heading = document.querySelector('.collection-heading');
      if (heading) { const message = document.createElement('p'); message.setAttribute('role','alert'); message.textContent = state.error; heading.append(message); }
    } finally { clearTimeout(timeout); loading.remove(); controls.forEach(control => { control.disabled = false; }); if (grid) grid.removeAttribute('aria-busy'); }
  })();
  window.dispatchEvent(new Event('vettiver:catalog-initialized'));
})();
