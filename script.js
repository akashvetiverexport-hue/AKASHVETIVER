(() => {
  'use strict';
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const heroVideo = $('#hero-video');
  if (heroVideo) {
    let wanted = !reduceMotion.matches && !navigator.connection?.saveData;
    let visible = false;
    heroVideo.muted = true;
    const syncVideo = () => {
      if (!wanted || !visible || document.hidden) { heroVideo.pause(); return; }
      if (!heroVideo.hasAttribute('src')) heroVideo.src = heroVideo.dataset.src;
      heroVideo.play().catch(() => { heroVideo.classList.remove('is-ready'); });
    };
    heroVideo.addEventListener('playing', () => { heroVideo.classList.add('is-ready'); });
    heroVideo.addEventListener('error', () => { heroVideo.classList.remove('is-ready'); });
    reduceMotion.addEventListener('change', () => { wanted = !reduceMotion.matches && !navigator.connection?.saveData; syncVideo(); });
    document.addEventListener('visibilitychange', syncVideo);
    const videoObserver = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; syncVideo(); }, { threshold: .05 });
    videoObserver.observe($('.hero-cinematic'));
  }
  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  const Flip = window.Flip;
  if (gsap && ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
  if (gsap && Flip) gsap.registerPlugin(Flip);
  const menu = $('#mobile-menu');
  const menuButton = $('#hamburger');
  const productDialog = $('#product-dialog');
  const cards = $$('.product-card');
  const filters = $$('.filter-button');
  const search = $('#product-search');
  const enquiryProduct = $('#enquiry-product');
  const enquiryDialog = $('#bulk-enquiry-dialog');
  document.addEventListener('click', event => {
    if (event.target instanceof Element && event.target.closest('[data-bulk-enquiry]')) {
      window.dispatchEvent(new CustomEvent('vettiver:request', { detail: { kind: 'bulk' } }));
      if (!enquiryDialog?.open) enquiryDialog?.showModal();
    }
  });
  $('.bulk-enquiry-close')?.addEventListener('click', () => enquiryDialog.close());
  enquiryDialog?.addEventListener('click', event => {
    if (event.target !== enquiryDialog) return;
    const rect = enquiryDialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) enquiryDialog.close();
  });
  let activeCategory = 'all';
  let filterTween;
  let toastTimeout;
  let activeProduct = '';
  let activeProductId = '';
  let searchEditing = false;
  const pageTitle = document.title;
  const sessionKey = String(Date.now()) + Math.random().toString(36).slice(2);

  const closeMenu = () => menu.close();
  menuButton.addEventListener('click', () => {
    menu.showModal();
    menuButton.setAttribute('aria-expanded', 'true');
    document.body.classList.add('dialog-open');
    if (gsap && !reduceMotion.matches) {
      gsap.fromTo(menu, { xPercent: 100 }, { xPercent: 0, duration: .6, ease: 'power4.out', clearProps: 'transform' });
      gsap.fromTo($$('nav a', menu), { x: 25, opacity: 0 }, { x: 0, opacity: 1, duration: .55, stagger: .05, delay: .12, ease: 'power3.out', clearProps: 'all' });
    }
  });
  $('[data-close-menu]').addEventListener('click', closeMenu);
  menu.addEventListener('close', () => {
    document.body.classList.remove('dialog-open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
  menu.addEventListener('click', event => { if (event.target === menu && event.clientX < menu.getBoundingClientRect().left) closeMenu(); });
  window.matchMedia('(min-width: 701px)').addEventListener('change', event => { if (event.matches && menu.open) closeMenu(); });

  const updateFilters = (animate = true) => {
    if (filterTween) filterTween.progress(1).kill();
    const query = search.value.trim().toLocaleLowerCase();
    const state = animate && gsap && Flip && !reduceMotion.matches ? Flip.getState(cards) : null;
    let count = 0;
    cards.forEach(card => {
      card.hidden = !((activeCategory === 'all' || card.dataset.category === activeCategory) && card.textContent.toLocaleLowerCase().includes(query));
      if (!card.hidden) count++;
    });
    filters.forEach(button => { const active = button.dataset.filter === activeCategory; button.classList.toggle('is-active', active); button.setAttribute('aria-pressed', String(active)); });
    $('#empty-state').hidden = count !== 0;
    $('#filter-status').textContent = count ? `Showing ${count} ${count === 1 ? 'piece' : 'pieces'}.` : 'No pieces found. Try another search or show all pieces.';
    if (state) {
      filterTween = Flip.from(state, {
        duration: .55, ease: 'power3.inOut', scale: true, absoluteOnLeave: true,
        onEnter: elements => gsap.fromTo(elements, { opacity: 0, scale: .95 }, { opacity: 1, scale: 1, duration: .4, delay: .12, clearProps: 'opacity,transform' }),
        onComplete: () => ScrollTrigger?.refresh()
      });
    } else ScrollTrigger?.refresh();
  };
  const writeFilters = (replace = false) => {
    const url = new URL(location.href);
    if (activeCategory === 'all') url.searchParams.delete('category');
    else url.searchParams.set('category', activeCategory);
    const query = search.value.trim().slice(0, 120);
    if (query) url.searchParams.set('q', query);
    else url.searchParams.delete('q');
    if (url.href !== location.href) history[replace ? 'replaceState' : 'pushState'](null, '', url);
  };
  filters.forEach(button => button.addEventListener('click', () => { searchEditing = false; activeCategory = button.dataset.filter; updateFilters(); writeFilters(); }));
  search?.addEventListener('input', () => { updateFilters(); writeFilters(searchEditing); searchEditing = true; });
  search?.addEventListener('blur', () => { searchEditing = false; });
  $('#clear-filters')?.addEventListener('click', () => { searchEditing = false; activeCategory = 'all'; search.value = ''; updateFilters(); writeFilters(); filters[0].focus({ preventScroll: true }); });
  $$('[data-category-link]').forEach(link => {
    if (!search) { link.href = 'products.html?category=' + encodeURIComponent(link.dataset.categoryLink); return; }
    link.addEventListener('click', () => { activeCategory = link.dataset.categoryLink; search.value = ''; updateFilters(); writeFilters(); });
  });
  const showToast = message => { const toast = $('#toast'); clearTimeout(toastTimeout); toast.textContent = message; toast.classList.add('is-visible'); toastTimeout = setTimeout(() => toast.classList.remove('is-visible'), 3200); };
  const startEnquiry = name => {
    if (productDialog.open) closeProduct(true);
    enquiryProduct.value = name;
    window.dispatchEvent(new CustomEvent('vettiver:request', { detail: { kind: 'order', product: name } }));
    if (enquiryDialog) enquiryDialog.showModal();
    else $('#contact').scrollIntoView({ behavior: reduceMotion.matches ? 'instant' : 'smooth', block: 'start' });
    enquiryProduct.focus({ preventScroll: true });
    showToast(`${name} selected. No payment is needed to request an order.`);
  };
  $$('[data-enquire]').forEach(button => button.addEventListener('click', () => startEnquiry(button.dataset.enquire)));
  const openProduct = (card, record = true) => {
    const image = $('.product-image>img', card);
    activeProductId = card.id;
    activeProduct = $('h3', card).textContent.trim();
    $('#dialog-title').textContent = activeProduct;
    $('#dialog-description').textContent = $('.product-description', card).textContent;
    $('#dialog-category').textContent = $('.product-meta span', card).textContent;
    $('#dialog-image').src = image.getAttribute('src');
    $('#dialog-image').alt = image.alt;
    document.title = activeProduct + ' | Akash Vetiver Export';
    $('#product-share-fallback')?.setAttribute('hidden', '');
    if ($('#product-share-status')) $('#product-share-status').textContent = '';
    if (record) {
      const url = new URL(location.href);
      url.hash = card.id;
      history.pushState({ productSession: sessionKey, returnUrl: location.href }, '', url);
    }
    if (!productDialog.open) productDialog.showModal();
    document.body.classList.add('dialog-open');
    if (gsap && !reduceMotion.matches) gsap.fromTo(productDialog, { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: .45, ease: 'power3.out', clearProps: 'all' });
  };
  const closeProduct = (replace = false) => {
    if (!replace && history.state?.productSession === sessionKey) { history.back(); return; }
    const url = new URL(history.state?.productSession === sessionKey ? history.state.returnUrl : location.href);
    if (url.hash.startsWith('#product-')) url.hash = '';
    history.replaceState(null, '', url);
    productDialog.close();
    document.title = pageTitle;
  };
  $$('[data-product-open]').forEach(button => button.addEventListener('click', () => openProduct(button.closest('.product-card'))));
  $('#close-product').addEventListener('click', () => closeProduct());
  productDialog.addEventListener('cancel', event => { event.preventDefault(); closeProduct(); });
  productDialog.addEventListener('close', () => { document.body.classList.remove('dialog-open'); if (!productDialog.open) document.title = pageTitle; });
  productDialog.addEventListener('click', event => { if (event.target !== productDialog) return; const rect = productDialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeProduct(); });
  $('#dialog-enquire').addEventListener('click', () => startEnquiry(activeProduct));

  const restoreCatalog = () => {
    if (!search) return;
    searchEditing = false;
    const url = new URL(location.href);
    const category = url.searchParams.get('category');
    activeCategory = filters.some(button => button.dataset.filter === category) ? category : 'all';
    search.value = (url.searchParams.get('q') || '').slice(0, 120);
    updateFilters(false);
    let id = '';
    try { id = decodeURIComponent(url.hash.slice(1)); } catch { /* Invalid fragments are ignored. */ }
    const card = cards.find(item => item.id === id);
    if (card) openProduct(card, false);
    else {
      if (productDialog.open) productDialog.close();
      document.title = pageTitle;
      if (id.startsWith('product-')) showToast('This piece could not be found. Browse the collection below.');
    }
  };
  window.addEventListener('popstate', restoreCatalog);
  window.addEventListener('hashchange', () => {
    if (search && (!productDialog.open || location.hash !== '#' + activeProductId)) restoreCatalog();
  });
  restoreCatalog();

  const shareLink = async (kind, button) => {
    const url = new URL('products.html', location.href);
    if (kind === 'product') url.hash = activeProductId;
    else {
      if (activeCategory !== 'all') url.searchParams.set('category', activeCategory);
      if (search.value.trim()) url.searchParams.set('q', search.value.trim().slice(0, 120));
    }
    const status = $('#' + kind + '-share-status');
    const fallback = $('#' + kind + '-share-fallback');
    const input = $('input', fallback);
    status.textContent = '';
    fallback.hidden = true;
    button.disabled = true;
    try {
      if (navigator.share) {
        try { await navigator.share({ title: kind === 'product' ? activeProduct : 'Akash Vetiver collection', url: url.href }); return; }
        catch (error) { if (error.name === 'AbortError') return; }
      }
      await navigator.clipboard.writeText(url.href);
      status.textContent = 'Link copied. Ready to share.';
    } catch {
      fallback.hidden = false;
      input.value = url.href;
      input.focus(); input.select();
      status.textContent = 'Copy the selected link to share it.';
    } finally { button.disabled = false; }
  };
  $('#share-product')?.addEventListener('click', event => shareLink('product', event.currentTarget));
  $('#share-collection')?.addEventListener('click', event => shareLink('collection', event.currentTarget));

  document.addEventListener('click', event => {
    if (!(event.target instanceof Element)) return;
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const target = document.getElementById(link.getAttribute('href').slice(1));
    if (!target) return;
    event.preventDefault();
    if (menu.open) closeMenu();
    if (target.classList.contains('product-card')) { openProduct(target); return; }
    if (target.tagName === 'DETAILS') target.open = true;
    if (location.hash !== link.hash) history.pushState(null, '', link.getAttribute('href'));
    if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
    ScrollTrigger?.refresh();
    target.scrollIntoView({ behavior: reduceMotion.matches ? 'instant' : 'smooth', block: 'start' });
  });

  const yearLabel = $('#year');
  if (yearLabel) yearLabel.textContent = new Date().getFullYear();

  const navLinks = $$('.desktop-nav a');
  const navObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => { const active = link.hash === `#${entry.target.id}`; link.classList.toggle('is-active', active); if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); });
    });
  }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
  ['home', 'products', 'about', 'contact', 'reviews'].forEach(id => { const section = document.getElementById(id); if (section) navObserver.observe(section); });
  const headerObserver = new IntersectionObserver(([entry]) => $('#navbar').classList.toggle('is-scrolled', !entry.isIntersecting), { rootMargin: '-95px 0px 0px 0px' });
  if ($('.hero-copy')) headerObserver.observe($('.hero-copy'));
  else $('#navbar').classList.add('is-scrolled');

  // Route the decorative trail through actual row gaps, never through copy.
  // offset measurements ignore the temporary GSAP reveal translations.
  const craftFlow = $('.craft-flow');
  if (craftFlow) {
    const ribbon = $('.craft-ribbon', craftFlow);
    const trail = $('#craft-trail', craftFlow);
    const stages = $$('.craft-stage', craftFlow);
    let craftFrame = 0;
    const drawTrail = () => {
      if (window.innerWidth <= 700) { ribbon.removeAttribute('data-ready'); return; }
      const width = craftFlow.clientWidth;
      const height = craftFlow.clientHeight;
      if (!width || !height || !stages.length) return;
      const rows = stages.map(stage => ({
        top: stage.offsetTop,
        bottom: stage.offsetTop + stage.offsetHeight - parseFloat(getComputedStyle(stage).paddingBottom)
      }));
      // Broad alternating Bezier sweeps preserve the original ribbon character.
      // Row gaps provide the crossing points; no straight vertical segments.
      const centre = width * .5;
      const side = index => index % 2 === 0 ? width + 28 : -28;
      let d = `M ${width * .98} ${rows[0].top + 16}`;
      rows.forEach((row, index) => {
        const next = rows[index + 1];
        const start = index ? (rows[index - 1].bottom + row.top) / 2 : row.top;
        const end = next ? (row.bottom + next.top) / 2 : row.bottom - 4;
        const middle = (start + end) / 2;
        const shoulder = (end - start) * .36;
        d += ` C ${side(index)} ${start}, ${side(index)} ${middle - shoulder}, ${side(index)} ${middle}`;
        d += ` C ${side(index)} ${middle + shoulder}, ${side(index)} ${end}, ${next ? centre : width * .15} ${end}`;
      });
      ribbon.setAttribute('viewBox', `0 0 ${width} ${height}`);
      trail.setAttribute('d', d);
      ribbon.setAttribute('data-ready', 'true');
    };
    const scheduleTrail = () => { cancelAnimationFrame(craftFrame); craftFrame = requestAnimationFrame(drawTrail); };
    const craftObserver = new ResizeObserver(scheduleTrail);
    craftObserver.observe(craftFlow);
    stages.forEach(stage => craftObserver.observe(stage));
    window.addEventListener('resize', scheduleTrail);
    document.fonts.ready.then(scheduleTrail);
    scheduleTrail();
    window.addEventListener('pagehide', event => {
      if (event.persisted) return;
      craftObserver.disconnect(); cancelAnimationFrame(craftFrame);
      window.removeEventListener('resize', scheduleTrail);
    });
  }

  // Progressive enhancement: content remains visible when animation scripts cannot load.
  if (gsap && ScrollTrigger) {
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      if ($('.hero-copy')) {
      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
      intro.from('.headline-line>span', { yPercent: 110, duration: 1.15, stagger: .12 }, .05)
        .from('.hero-description', { y: 18, opacity: 0, duration: .8 }, .3)
        .from('.hero-actions', { y: 16, opacity: 0, duration: .7, clearProps: 'transform,opacity' }, .45)
        .from('.hero-atmosphere>img', { scale: 1.045, duration: 1.8, ease: 'power2.out', clearProps: 'transform' }, 0)
        .from('.hero-values>span', { y: 12, opacity: 0, duration: .7, stagger: .08 }, .65);
      }
      $$('[data-reveal]').forEach(element => gsap.from(element, { y: 28, opacity: 0, duration: .9, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 93%', once: true } }));
      if ($('.occasion-grid')) gsap.from('.occasion-card', { y: 36, opacity: 0, duration: .95, stagger: .15, ease: 'power3.out', scrollTrigger: { trigger: '.occasion-grid', start: 'top 88%', once: true } });
    });
    media.add('(min-width: 901px) and (prefers-reduced-motion: no-preference)', () => {
      if ($('.occasion-grid')) gsap.from('.occasion-home', { y: 55, ease: 'none', scrollTrigger: { trigger: '.occasion-grid', start: 'top bottom', end: 'bottom bottom', scrub: .9 } });
    });
    media.add('(min-width: 901px) and (pointer: fine) and (prefers-reduced-motion: no-preference)', () => {
      const hero = $('.hero-cinematic');
      if (!hero) return;
      const sceneX = gsap.quickTo('.hero-atmosphere', 'x', { duration: 1, ease: 'power3.out' });
      const sceneY = gsap.quickTo('.hero-atmosphere', 'y', { duration: 1, ease: 'power3.out' });
      const move = event => {
        const bounds = hero.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - .5;
        const y = (event.clientY - bounds.top) / bounds.height - .5;
        sceneX(x * -8); sceneY(y * -6);
      };
      const reset = () => { sceneX(0); sceneY(0); };
      hero.addEventListener('pointermove', move);
      hero.addEventListener('pointerleave', reset);
      return () => { hero.removeEventListener('pointermove', move); hero.removeEventListener('pointerleave', reset); };
    });
    document.fonts.ready.then(() => ScrollTrigger.refresh());
    $$('img').forEach(image => { if (!image.complete) image.addEventListener('load', () => ScrollTrigger.refresh(), { once: true }); });
    $$('.question-list details').forEach(detail => detail.addEventListener('toggle', () => ScrollTrigger.refresh()));
    window.addEventListener('pagehide', event => { if (!event.persisted) { media.revert(); navObserver.disconnect(); headerObserver.disconnect(); } });
  }
})();
