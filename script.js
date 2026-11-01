function initSectionNavigation({ menu, closeMenu, reduceMotion }) {
  const header = document.getElementById('navbar');
  const links = [...document.querySelectorAll('.desktop-nav a, #mobile-menu nav a')];
  const ids = ['home', 'products', 'contact', 'about', 'reviews'];
  const sections = ids.map(id => document.getElementById(id)).filter(Boolean);
  let frame = 0, pending = null, expiry = 0, animation = 0;
  const pageKey = path => path.replace(/\/index(?:\.html)?$/, '/').replace(/\.html$/, '').replace(/\/$/, '') || '/';
  const localTarget = link => {
    const url = new URL(link.href, location.href);
    if (url.origin !== location.origin || pageKey(url.pathname) !== pageKey(location.pathname) || url.search !== location.search) return null;
    let id; try { id = decodeURIComponent(url.hash.slice(1)); } catch { return null; }
    return ids.includes(id) || id === 'main' ? document.getElementById(id) : null;
  };
  const headerHeight = () => header.getBoundingClientRect().height;
  const targetTop = target => target.id === 'home' ? 0 : Math.max(0, scrollY + target.getBoundingClientRect().top - headerHeight() - 12);
  const mark = id => links.forEach(link => {
    const active = localTarget(link)?.id === id;
    link.classList.toggle('is-active', active);
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  const update = () => {
    frame = 0;
    document.documentElement.style.setProperty('--header-offset', `${headerHeight()}px`);
    const line = headerHeight() + 24;
    let current = sections[0];
    // Derive the current section from its position, not callback arrival order.
    for (const section of sections) if (section.getBoundingClientRect().top <= line) current = section;
    if (current) mark(current.id);
    const hero = document.getElementById('home');
    header.classList.toggle('is-scrolled', !hero || hero.getBoundingClientRect().bottom <= line);
  };
  const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
  const position = top => {
    if (window.VETTIVER_SCROLL) window.VETTIVER_SCROLL.setPosition(top);
    else window.scrollTo({ top, behavior: 'instant' });
  };
  const cancel = () => { pending = null; clearTimeout(expiry); cancelAnimationFrame(animation); animation = 0; };
  const animateTo = (top, smooth) => {
    cancelAnimationFrame(animation);
    if (!smooth || reduceMotion.matches) { position(top); schedule(); return; }
    const from = scrollY, started = performance.now();
    const duration = Math.min(1000, Math.max(420, Math.sqrt(Math.abs(top - from)) * 14));
    const step = now => {
      if (!pending) return;
      const progress = Math.min(1, (now - started) / duration);
      position(from + (top - from) * (1 - Math.pow(1 - progress, 4)));
      schedule();
      animation = progress < 1 ? requestAnimationFrame(step) : 0;
    };
    animation = requestAnimationFrame(step);
  };
  const go = (target, smooth) => {
    cancel();
    if (menu.open) closeMenu();
    pending = { target, top: targetTop(target), smooth: smooth && !reduceMotion.matches };
    expiry = setTimeout(cancel, 12000);
    window.dispatchEvent(new CustomEvent('vettiver:navigate', { detail: { id: target.id } }));
    if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
    position(scrollY);
    animateTo(pending.top, pending.smooth);
  };
  const resized = () => {
    schedule();
    if (!pending) return;
    const top = targetTop(pending.target);
    if (Math.abs(top - pending.top) > 1) {
      pending.top = top;
      // Retarget gently when deferred content changes the destination.
      animateTo(top, pending.smooth);
    }
  };
  const onClick = event => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || !(event.target instanceof Element)) return;
    const link = event.target.closest('a[href]');
    if (!link || link.download || (link.target && link.target !== '_self')) return;
    const target = localTarget(link); if (!target) return;
    event.preventDefault();
    const url = new URL(link.href, location.href);
    if (location.hash !== url.hash) history.pushState(null, '', url.hash);
    go(target, true);
  };
  const restore = () => {
    const link = document.createElement('a'); link.href = location.href;
    const target = localTarget(link);
    if (target) go(target, false); else { cancel(); schedule(); }
  };
  const keydown = event => { if (['ArrowUp','ArrowDown','PageUp','PageDown','Home','End',' '].includes(event.key)) cancel(); };
  const pointerdown = event => { if (!(event.target instanceof Element) || !event.target.closest('a[href]')) cancel(); };
  const observer = new ResizeObserver(resized);
  observer.observe(header); observer.observe(document.querySelector('main'));
  sections.forEach(section => observer.observe(section));
  document.addEventListener('click', onClick);
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', resized);
  window.addEventListener('wheel', cancel, { passive: true });
  window.addEventListener('touchstart', cancel, { passive: true });
  window.addEventListener('pointerdown', pointerdown, { passive: true });
  window.addEventListener('keydown', keydown);
  window.addEventListener('hashchange', restore);
  window.addEventListener('popstate', restore);
  window.addEventListener('pageshow', schedule);
  reduceMotion.addEventListener('change', () => { if (pending) animateTo(targetTop(pending.target), false); });
  update();
  if (location.hash) restore();
  window.addEventListener('pagehide', event => {
    if (event.persisted) return;
    observer.disconnect(); cancel(); cancelAnimationFrame(frame);
  });
}

(async () => {
  'use strict';
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const heroVideo = $('#hero-video');
  if (heroVideo) {
    const desktopHero = window.matchMedia('(min-width: 701px)');
    const canPlay = () => desktopHero.matches && !reduceMotion.matches && !navigator.connection?.saveData && (!navigator.connection || (navigator.connection.effectiveType === '4g' && navigator.connection.downlink >= 2));
    let wanted = canPlay();
    let visible = false;
    heroVideo.muted = true;
    const syncVideo = () => {
      if (!wanted || !visible || document.hidden) { heroVideo.pause(); return; }
      if (!heroVideo.hasAttribute('src')) heroVideo.src = heroVideo.dataset.src;
      heroVideo.play().catch(() => { heroVideo.classList.remove('is-ready'); });
    };
    heroVideo.addEventListener('playing', () => { heroVideo.classList.add('is-ready'); });
    heroVideo.addEventListener('error', () => { heroVideo.classList.remove('is-ready'); });
    reduceMotion.addEventListener('change', () => { wanted = canPlay(); syncVideo(); });
    desktopHero.addEventListener('change', () => { wanted = canPlay(); syncVideo(); });
    document.addEventListener('visibilitychange', syncVideo);
    const videoObserver = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; syncVideo(); }, { threshold: .05 });
    videoObserver.observe($('.hero-cinematic'));
  }
  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  const Flip = window.Flip;
  const refreshScroll = () => { if (window.VETTIVER_REFRESH) window.VETTIVER_REFRESH(); else ScrollTrigger?.refresh(true); };
  if (gsap && ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
  if (gsap && Flip) gsap.registerPlugin(Flip);
  const menu = $('#mobile-menu');
  const menuButton = $('#hamburger');
  const productDialog = $('#product-dialog');
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

  // Navigation remains usable while the live catalogue is loading.
  initSectionNavigation({ menu, closeMenu, reduceMotion });
  await window.VETTIVER_CATALOG?.ready;
  const cards = $$('.product-card');
  let activeFestival = new URL(location.href).searchParams.get('festival') || '';


  const updateFilters = (animate = true) => {
    if (filterTween) filterTween.progress(1).kill();
    const hasFestivalOffers = !!activeFestival && window.VETTIVER_CATALOG?.products.some(p=>p.campaign_id===activeFestival&&window.VETTIVER_COMMERCE?.active(p));
    let note = $('.festival-filter-note');
    if (activeFestival && !note) { note=document.createElement('p');note.className='festival-filter-note';$('.collection-heading')?.append(note); }
    if (note) { note.hidden=!activeFestival;note.replaceChildren(document.createTextNode(hasFestivalOffers?'Showing festival offer pieces. ':'Festival offers are not available yet. Explore our full collection below. '));if(hasFestivalOffers){const all=document.createElement('a');all.href='products.html';all.textContent='View all pieces';note.append(all);} }
    const query = search.value.trim().toLocaleLowerCase();
    const state = animate && gsap && Flip && !reduceMotion.matches ? Flip.getState(cards) : null;
    let count = 0;
    cards.forEach(card => {
      const product = window.VETTIVER_CATALOG?.products.find(p=>p.id===card.id);
      const inFestival = !hasFestivalOffers || (product?.campaign_id===activeFestival && window.VETTIVER_COMMERCE?.active(product));
      card.hidden = !(inFestival && (activeCategory === 'all' || card.dataset.category === activeCategory) && card.textContent.toLocaleLowerCase().includes(query));
      if (!card.hidden) count++;
    });
    filters.forEach(button => { const active = button.dataset.filter === activeCategory; button.classList.toggle('is-active', active); button.setAttribute('aria-pressed', String(active)); });
    const empty = $('#empty-state');
    empty.hidden = count !== 0;
    const unlisted = !query && !hasFestivalOffers && activeCategory !== 'all';
    $('h3',empty).textContent = unlisted ? (activeCategory === 'roots' ? 'Raw vetiver roots' : 'No pieces listed yet.') : 'No pieces found.';
    $('p',empty).textContent = unlisted ? (activeCategory === 'roots' ? 'Raw roots are not listed yet. Contact us for availability.' : 'Explore the full collection for available pieces.') : 'Try another name or explore the full collection.';
    let availability = $('#roots-availability');
    if (!availability) { availability=document.createElement('a');availability.id='roots-availability';availability.className='text-link';availability.href='mailto:akashvetiverexport@gmail.com?subject=Raw%20vetiver%20roots%20availability';availability.textContent='Email us about raw roots';empty.append(availability); }
    availability.hidden=!(unlisted && activeCategory==='roots');
    $('#filter-status').textContent = count ? `Showing ${count} ${count === 1 ? 'piece' : 'pieces'}.` : unlisted ? 'No pieces listed in this category yet.' : 'No pieces found. Try another search or show all pieces.';
    if (state) {
      filterTween = Flip.from(state, {
        duration: .55, ease: 'power3.inOut', scale: true, absoluteOnLeave: true,
        onEnter: elements => gsap.fromTo(elements, { opacity: 0, scale: .95 }, { opacity: 1, scale: 1, duration: .4, delay: .12, clearProps: 'opacity,transform' }),
        onComplete: refreshScroll
      });
    } else refreshScroll();
  };
  const writeFilters = (replace = false) => {
    const url = new URL(location.href);
    if (!activeFestival) url.searchParams.delete('festival');
    if (activeCategory === 'all') url.searchParams.delete('category');
    else url.searchParams.set('category', activeCategory);
    const query = search.value.trim().slice(0, 120);
    if (query) url.searchParams.set('q', query);
    else url.searchParams.delete('q');
    if (url.href !== location.href) history[replace ? 'replaceState' : 'pushState'](null, '', url);
  };
  window.addEventListener('vettiver:offers-tick',()=>{if(search&&activeFestival)updateFilters(false);});
  filters.forEach(button => button.addEventListener('click', () => { searchEditing = false; activeCategory = button.dataset.filter; updateFilters(); writeFilters(); }));
  search?.addEventListener('input', () => { updateFilters(); writeFilters(searchEditing); searchEditing = true; });
  search?.addEventListener('blur', () => { searchEditing = false; });
  $('#clear-filters')?.addEventListener('click', () => { searchEditing = false; activeCategory = 'all'; activeFestival = ''; search.value = ''; updateFilters(); writeFilters(); filters[0].focus({ preventScroll: true }); });
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
  };
  $$('[data-enquire]').forEach(button => button.addEventListener('click', () => startEnquiry(button.dataset.enquire)));
  const openProduct = (card, record = true) => {
    const image = $('.product-image>img', card);
    activeProductId = card.id;
    activeProduct = $('h3', card).textContent.trim();
    $('#dialog-title').textContent = activeProduct;
    const description = $('.dialog-more',productDialog);
    if(description)description.open=innerWidth>700;
    $('#dialog-description').textContent = $('.product-description', card).textContent;
    $('#dialog-category').textContent = $('.product-meta span', card).textContent;
    window.VETTIVER_COMMERCE?.detail(card.id);
    $('#dialog-image').src = image.dataset.full || image.getAttribute('src');
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
  $$('[data-product-open]').forEach(button => button.addEventListener('click', event => { if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return; event.preventDefault(); openProduct(button.closest('.product-card')); }));
  $('#close-product').addEventListener('click', () => closeProduct());
  productDialog.addEventListener('cancel', event => { event.preventDefault(); closeProduct(); });
  productDialog.addEventListener('close', () => { document.body.classList.remove('dialog-open'); if (!productDialog.open) document.title = pageTitle; });
  productDialog.addEventListener('click', event => { if (event.target !== productDialog) return; const rect = productDialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeProduct(); });
  $('#dialog-enquire').addEventListener('click', () => startEnquiry(activeProduct));

  const restoreCatalog = () => {
    if (!search) return;
    searchEditing = false;
    const url = new URL(location.href);
    activeFestival = url.searchParams.get('festival') || '';
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
    refreshScroll();
    target.scrollIntoView({ behavior: reduceMotion.matches ? 'instant' : 'smooth', block: 'start' });
  });

  const yearLabel = $('#year');
  if (yearLabel) yearLabel.textContent = new Date().getFullYear();


  // Route the decorative trail through actual row gaps, never through copy.
  // offset measurements ignore the temporary GSAP reveal translations.
  const craftFlow = $('.craft-flow');
  if (craftFlow) {
    const ribbon = $('.craft-ribbon', craftFlow);
    const trail = $('#craft-trail', craftFlow);
    const stages = $$('.craft-stage', craftFlow);
    let craftFrame = 0;
    const drawTrail = () => {
      const width = craftFlow.clientWidth;
      const height = craftFlow.clientHeight;
      if (!width || !height || !stages.length) return;
      let d;
      if (window.innerWidth > 700) {
      const rows = stages.map(stage => ({
        top: stage.offsetTop,
        bottom: stage.offsetTop + stage.offsetHeight - parseFloat(getComputedStyle(stage).paddingBottom)
      }));
      // Broad alternating Bezier sweeps preserve the original ribbon character.
      // Row gaps provide the crossing points; no straight vertical segments.
      const centre = width * .5;
      const side = index => index % 2 === 0 ? width + 28 : -28;
      const anchor = stage => {
        const photo = $('.craft-photo', stage);
        return { x: photo.offsetLeft + photo.offsetWidth / 2,
          y: stage.offsetTop + photo.offsetTop + photo.offsetHeight / 2 };
      };
      const firstImage = anchor(stages[0]);
      const lastImage = anchor(stages[stages.length - 1]);
      d = `M ${firstImage.x} ${firstImage.y}`;
      rows.forEach((row, index) => {
        const next = rows[index + 1];
        const start = index ? (rows[index - 1].bottom + row.top) / 2 : row.top;
        const end = next ? (row.bottom + next.top) / 2 : row.bottom - 4;
        const middle = (start + end) / 2;
        const shoulder = (end - start) * .36;
        if (!next) return; // The preceding sweep lands inside the last image.
        if (!index) {
          // Leave the first photograph above the copy, then join the wide sweep.
          d += ` C ${firstImage.x} ${row.top - 48}, ${side(index)} ${row.top - 48}, ${side(index)} ${middle}`;
        } else d += ` C ${side(index)} ${start}, ${side(index)} ${middle - shoulder}, ${side(index)} ${middle}`;
        if (index === rows.length - 2) {
          // Turn directly into the final image. Returning to the centre first
          // would reverse the tangent and leave a pointed hairpin in the gap.
          d += ` C ${side(index)} ${middle + shoulder}, ${lastImage.x} ${end}, ${lastImage.x} ${lastImage.y}`;
        } else d += ` C ${side(index)} ${middle + shoulder}, ${side(index)} ${end}, ${centre} ${end}`;
      });
      } else {
      // Connect the images with one soft ribbon. Cross the copy columns only
      // in the empty space between rows, with vertical tangents at each image.
      const photos = stages.map(stage => {
        const photo = $('.craft-photo', stage);
        return { x: photo.offsetLeft + photo.offsetWidth * .5,
          top: stage.offsetTop + photo.offsetTop,
          bottom: stage.offsetTop + photo.offsetTop + photo.offsetHeight,
          rowBottom: stage.offsetTop + stage.offsetHeight - parseFloat(getComputedStyle(stage).paddingBottom),
          rowTop: stage.offsetTop };
      });
      d = 'M ' + photos[0].x + ' ' + (photos[0].top + (photos[0].bottom-photos[0].top)*.5);
      photos.forEach((photo, index) => {
        const next = photos[index+1];
        if (!next) return;
        const gap = (photo.rowBottom + next.rowTop)*.5;
        const startY = photo.bottom - (photo.bottom-photo.top)*.18;
        const endY = next.top + (next.bottom-next.top)*.18;
        d += ' L ' + photo.x + ' ' + startY;
        d += ' C ' + photo.x + ' ' + gap + ', ' + next.x + ' ' + gap + ', ' + next.x + ' ' + endY;
      });
      const last = photos[photos.length-1];
      d += ' L ' + last.x + ' ' + (last.top+(last.bottom-last.top)*.5);
      }
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
    media.add('(prefers-reduced-motion: no-preference)', context => {
      const compact = matchMedia('(max-width: 700px)').matches;
      // The critical intro owns the hero entrance, including when GSAP arrives late.

      // Only animate stable wrappers: Embla owns its tracks and Framer owns
      // review changes/button feedback. Never transform either of those twice.
      const seen = new WeakSet();
      const reveal = (element, options = {}) => {
        if (seen.has(element)) return;
        seen.add(element);
        // Already visible content must never disappear when late JavaScript mounts.
        if (performance.now() > 900 && element.getBoundingClientRect().top < innerHeight) return;
        gsap.from(element, {
          y: compact ? 12 : 22, opacity: 0, duration: compact ? .55 : .75,
          ease: 'power3.out', clearProps: 'transform,opacity', ...options,
          scrollTrigger: { id: 'chapter-reveal', trigger: element, start: 'top 96%', once: true },
        });
      };
      context.add('scanChapters', () => {
        $$('[data-reveal], .questions-intro, .question-list details, .showcase-intro, .showcase-main, .showcase-bottom, .bulk-copy, .bulk-image-window, .vt-testimonial-intro, .vt-review-stage, .bwf-brand-line').forEach(element => reveal(element));
        $$('.craft-photo').forEach(element => reveal(element, { y: 0, scale: .975, duration: .85 }));
        $$('.bwf-rule').forEach(element => reveal(element, { y: 0, scaleX: 0, transformOrigin: 'left center', duration: 1 }));
      });
      context.scanChapters();
      // Lazy React roots commit after their import resolves. Observe additions,
      // not animated style attributes; coalesce them into one scan per frame.
      let scanFrame = 0;
      const additions = new MutationObserver(records => {
        if (!records.some(record => record.addedNodes.length) || scanFrame) return;
        scanFrame = requestAnimationFrame(() => {
          scanFrame = 0; context.scanChapters(); refreshScroll();
        });
      });
      ['product-showcase-root', 'bulk-order-root', 'testimonials-root', 'footer-root'].forEach(id => {
        const root = document.getElementById(id);
        if (root) additions.observe(root, { childList: true, subtree: true });
      });
      return () => { additions.disconnect(); cancelAnimationFrame(scanFrame); };
    });
    media.add('(min-width: 901px) and (prefers-reduced-motion: no-preference)', () => {
      if ($('.occasion-grid')) gsap.from('.occasion-home', { y: 55, ease: 'none', scrollTrigger: { trigger: '.occasion-grid', start: 'top bottom', end: 'bottom bottom', scrub: .9 } });
      // A gentle shift through the craft photos echoes the hand-to-hand journey.
      // Only the image moves: the dotted trail and its geometry remain untouched.
      $$('.craft-photo > img').forEach(image => {
        gsap.fromTo(image, { yPercent: -3, scale: 0.98 }, {
          yPercent: 3, scale: 1.02, ease: 'none',
          scrollTrigger: { id: 'craft-image-drift', trigger: image.parentElement, start: 'top bottom', end: 'bottom top', scrub: 1 }
        });
      });
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
    document.fonts.ready.then(refreshScroll);
    $$('img').forEach(image => { if (!image.complete) image.addEventListener('load', refreshScroll, { once: true }); });
    $$('.question-list details').forEach(detail => detail.addEventListener('toggle', refreshScroll));
    window.addEventListener('pagehide', event => { if (!event.persisted) media.revert(); });
  }
})();

