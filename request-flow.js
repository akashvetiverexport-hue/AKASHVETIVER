(async () => {
  await window.VETTIVER_CATALOG?.ready;
  'use strict';
  const form = document.getElementById('enquiry-form');
  if (!form) return;
  const $ = selector => form.querySelector(selector);
  const fieldset = $('#request-fields');
  const submit = $('.enquiry-submit');
  const label = $('#enquiry-submit-label');
  const status = $('#request-status');
  const items = $('#request-items');
  const firstSelect = $('#enquiry-product');
  const offerSummary=document.createElement('p');offerSummary.className='offer-request-summary';offerSummary.setAttribute('aria-live','polite');items.after(offerSummary);
  const syncSizes=(row,fromPopup=false)=>{
    const choice=row.querySelector('select');const p=window.VETTIVER_CATALOG?.products.find(p=>p.id===choice.selectedOptions[0]?.dataset.productId);const sizes=window.VETTIVER_COMMERCE?.sizeList(p)||[];
    let group=row.querySelector('.request-size-group');
    if(!sizes.length){group?.remove();return;}
    if(!group||group.dataset.productId!==p.id){group?.remove();group=document.createElement('div');group.className='request-size-group';group.dataset.productId=p.id;const label=document.createElement('label');const select=document.createElement('select');select.className='request-size';select.id=choice.id+'-size';label.htmlFor=select.id;label.textContent='Size / weight';select.required=true;select.add(new Option('Choose a size / weight',''));for(const o of sizes)select.add(new Option(o.label+' - '+window.VETTIVER_COMMERCE.money(o.price),o.id));group.append(label,select);row.append(group);}
    if(fromPopup)group.querySelector('select').value=window.VETTIVER_COMMERCE.selections.get(p.id)||'';
  };
  const refreshOfferSummary=()=>{const summaries=[];for(const row of items.children){syncSizes(row);const option=row.querySelector('select').selectedOptions[0];const product=window.VETTIVER_CATALOG?.products.find(p=>p.id===option?.dataset.productId);if(!product)continue;const size=product.size_options?.find(o=>o.id===row.querySelector('.request-size')?.value);const qty=Number(row.querySelector('input').value)||1;summaries.push(size?size.label+': '+window.VETTIVER_COMMERCE.money(size.price)+' each; '+qty+' = '+window.VETTIVER_COMMERCE.money(size.price*qty):window.VETTIVER_COMMERCE.describe(product,option.dataset.offerType==='combo'));}offerSummary.textContent=summaries.join('\n');};
  items.addEventListener('change',refreshOfferSummary);window.addEventListener('vettiver:offers-tick',()=>{
    items.querySelectorAll('option[data-offer-type="combo"]').forEach(option=>{const product=window.VETTIVER_CATALOG?.products.find(p=>p.id===option.dataset.productId);option.disabled=!window.VETTIVER_COMMERCE?.partner(product);});
    refreshOfferSummary();
  });
  const options = [...firstSelect.options].map(option => ({ name: option.value, id: option.dataset.productId || '', offerType: option.dataset.offerType }));
  const configured = window.VETTIVER_CONFIG?.requestsEndpoint;
  let endpoint = '';
  // This public configuration contains a route, never credentials.
  if (typeof configured === 'string' && configured.startsWith('/') && !configured.startsWith('//')) {
    try {
      const url = new URL(configured, location.href);
      if (url.origin === location.origin && !url.hash && !url.search && !url.username && !url.password) endpoint = url.pathname;
    } catch { /* Keep the explicit email-preparation fallback. */ }
  }
  const support = 'akashvetiverexport@gmail.com';
  let kind = 'bulk';
  let busy = false;
  let received = false;
  let openedAt = Date.now();
  let previousPayload = '';
  let requestKey = '';
  let nextRow = 1;
  const setStatus = (text, error = false) => {
    status.textContent = text;
    status.classList.toggle('is-error', error);
  };
  const updateLabel = () => {
    label.textContent = busy ? 'Sending your request…' : endpoint ? (kind === 'bulk' ? 'Request a bulk order' : 'Reserve this piece') : 'Prepare email request';
    $('#request-availability').hidden = Boolean(endpoint);
    $('#request-availability').textContent = endpoint
      ? 'Your request goes to Akash Vetiver Export. We’ll speak with you before any payment.'
      : 'Online submission is not connected yet. Prepare your request below, then send it using your email app.';
  };
  const clearResult = () => {
    refreshOfferSummary();
    setStatus('');
    $('#enquiry-preview').hidden = true;
    $('#request-success').hidden = true;
    $('#copy-status').textContent = '';
    $('#prepared-message').value = '';
    $('#request-email').href = 'mailto:' + support;
  };
  const reset = () => {
    if (busy) return;
    form.reset();
    items.querySelectorAll('.request-item-extra').forEach(row => row.remove());
    $('#request-add').disabled = false;
    received = false;
    previousPayload = ''; requestKey = '';
    fieldset.disabled = false;
    fieldset.hidden = false;
    submit.hidden = false;
    clearResult();
    openedAt = Date.now();
  };
  window.addEventListener('vettiver:request', event => {
    if (busy) return;
    if (received) reset();
    kind = event.detail?.kind === 'order' ? 'order' : 'bulk';
    $('#request-add').hidden = kind === 'order';
    if (kind === 'order') items.querySelectorAll('.request-item-extra').forEach(row => row.remove());
    const name = event.detail?.product;
    if (typeof name === 'string' && options.some(option => option.name === name)) firstSelect.value = name;
    $('#bulk-enquiry-title').textContent = kind === 'bulk' ? 'Let’s plan your bulk order.' : 'Reserve your piece.';
    $('#request-intro').textContent = kind === 'bulk'
      ? 'Choose your pieces. We’ll reply on WhatsApp.'
      : 'No payment now.';
    firstSelect.required = kind === 'order';
    syncSizes(items.firstElementChild,true);
    clearResult();
    updateLabel();
  });
  $('#request-add').addEventListener('click', () => {
    if (items.children.length >= 12) return;
    const row = document.createElement('div');
    row.className = 'request-item request-item-extra';
    const id = ++nextRow;
    const choiceGroup = document.createElement('div');
    const choiceLabel = document.createElement('label');
    choiceLabel.htmlFor = 'request-piece-' + id;
    choiceLabel.textContent = 'Another piece';
    const select = firstSelect.cloneNode(true);
    select.id = choiceLabel.htmlFor;
    select.name = 'product-' + id;
    select.value = ''; select.required = true;
    choiceGroup.append(choiceLabel, select);
    const quantityGroup = document.createElement('div');
    const quantityLabel = document.createElement('label');
    quantityLabel.htmlFor = 'request-quantity-' + id;
    quantityLabel.textContent = 'Quantity';
    const quantity = $('#enquiry-quantity').cloneNode();
    quantity.id = quantityLabel.htmlFor;
    quantity.name = 'quantity-' + id;
    quantity.value = '1';
    quantityGroup.append(quantityLabel, quantity);
    const remove = document.createElement('button');
    remove.type = 'button'; remove.className = 'text-link request-remove';
    remove.textContent = 'Remove';
    remove.setAttribute('aria-label', 'Remove additional piece');
    remove.addEventListener('click', () => {
      row.remove(); $('#request-add').disabled = false;
      $('#request-add').focus(); clearResult();
    });
    row.append(choiceGroup, quantityGroup, remove);
    items.append(row);
    $('#request-add').disabled = items.children.length >= 12;
    clearResult(); select.focus();
  });
  form.addEventListener('input', event => {
    if (event.target.closest('#request-fields')) {
      event.target.setCustomValidity?.('');
      clearResult();
    }
  });
  const invalid = (input, text) => {
    input.setCustomValidity(text); input.reportValidity();
    setStatus(text, true); return null;
  };
  const collect = () => {
    const name = $('#request-name').value.trim();
    if (!name || name.length > 80) return invalid($('#request-name'), 'Please enter your name, up to 80 characters.');
    let phone = $('#request-phone').value.trim().replace(/[\s().-]/g, '');
    if (/^[6-9]\d{9}$/.test(phone)) phone = '+91' + phone;
    if (!/^\+[1-9]\d{7,14}$/.test(phone)) return invalid($('#request-phone'), 'Enter a WhatsApp number with country code, starting with +.');
    const city = '', postalCode = '';
    const lines = [];
    for (const row of items.children) {
      const select = row.querySelector('select');
      const quantityInput = row.querySelector('input');
      const option = options.find(option => option.name === select.value);
      const quantity = Number(quantityInput.value);
      if (!option || (!option.id && (kind === 'order' || row !== items.firstElementChild))) return invalid(select, 'Please choose a piece.');
      if(option.offerType==='combo'&&!window.VETTIVER_COMMERCE?.partner(window.VETTIVER_CATALOG?.products.find(p=>p.id===option.id)))return invalid(select,'This combo has ended. Choose another piece or reload for current offers.');
      if (!Number.isSafeInteger(quantity) || quantity < 1 || quantity > 9999) return invalid(quantityInput, 'Enter a whole quantity from 1 to 9999.');
      const product=window.VETTIVER_CATALOG?.products.find(p=>p.id===option.id);const sizes=product?.size_options||[];const size=sizes.find(o=>o.id===row.querySelector('.request-size')?.value);if(sizes.length&&!size)return invalid(row.querySelector('.request-size'),'Choose a size / weight.');
      lines.push({ ...(size?{optionId:size.id}:{}), productId: option.id || 'help-me-choose', name: (option.name || 'Help me choose')+(size?' - '+size.label:''), quantity, ...(option.offerType?{offerType:option.offerType}:{}) });
    }
    const message = '';
    return { kind, items: lines, customer: { name, whatsapp: phone, city, postalCode }, message, consentToContact: true, website: $('#request-company').value };
  };
  const summary = payload => [
    'Hello Akash Vetiver Export,', '',
    payload.kind === 'bulk' ? 'I would like a bulk-order quote.' : 'I would like to request an order.', '',
    ...payload.items.map(item => `${item.name} — quantity: ${item.quantity}${window.VETTIVER_COMMERCE?.describe(window.VETTIVER_CATALOG?.products.find(p=>p.id===item.productId),item.offerType==='combo',item.optionId) ? '\n'+window.VETTIVER_COMMERCE.describe(window.VETTIVER_CATALOG.products.find(p=>p.id===item.productId),item.offerType==='combo',item.optionId) : ''}`), '',
    `Name: ${payload.customer.name}`, `WhatsApp: ${payload.customer.whatsapp}`,
    ...(payload.message ? ['', 'Requirements: ' + payload.message] : []), '',
    'Please contact me on WhatsApp to discuss availability, pricing and delivery before I confirm or pay.'
  ].join('\n');
  let receiptUncertain = false;
  const prepareFallback = (payload, uncertain = false) => {
    receiptUncertain = uncertain;
    const message = summary(payload) + (uncertain ? '\n\nThe website could not confirm receipt. Please check before creating a duplicate request. Reference: ' + requestKey : '');
    $('#prepared-message').value = message;
    $('label[for="prepared-message"]').textContent = uncertain ? 'Your details - receipt not confirmed' : 'Your request - not sent yet';
    $('#request-email').href = 'mailto:' + support + '?subject=' + encodeURIComponent('Enquiry - Akash Vetiver Export') + '&body=' + encodeURIComponent(message);
    $('#enquiry-preview').hidden = false;
  };
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (busy || received || !form.reportValidity()) return;
    const payload = collect();
    if (!payload) return;
    if (payload.website) { $('#request-company').value = ''; setStatus('An extra field was filled unexpectedly. We cleared it; please try again.', true); return; }
    clearResult();
    if (!endpoint) {
      receiptUncertain = false;
      $('label[for="prepared-message"]').textContent = 'Your request - not sent yet';
      const message = summary(payload);
      $('#prepared-message').value = message;
      $('#request-email').href = 'mailto:' + support + '?subject=' + encodeURIComponent(kind === 'bulk' ? 'Bulk enquiry — Akash Vetiver Export' : 'Order request — Akash Vetiver Export') + '&body=' + encodeURIComponent(message);
      $('#enquiry-preview').hidden = false;
      setStatus('Your request is prepared, not sent. Open your email app and send it to us, or copy the details.');
      $('#prepared-message').focus();
      return;
    }
    if (!navigator.onLine) { prepareFallback(payload); setStatus('You appear to be offline. Your details are still here. Reconnect and try again.', true); return; }
    // The server must enforce this key and validate every field again.
    const serialized = JSON.stringify(payload);
    if (serialized !== previousPayload || !requestKey) {
      if (!crypto.randomUUID) { setStatus('Please open the secure HTTPS website before sending your request.', true); return; }
      requestKey = crypto.randomUUID(); previousPayload = serialized;
    }
    busy = true; fieldset.disabled = true; submit.disabled = true;
    form.setAttribute('aria-busy', 'true'); updateLabel();
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch(endpoint, {
        method: 'POST', credentials: 'same-origin', redirect: 'error', signal: controller.signal,
        headers: { 'Content-Type': 'application/json', 'Idempotency-Key': requestKey },
        body: JSON.stringify({ ...payload, openedAt })
      });
      if (response.status === 429) throw new Error('Please wait a moment before retrying. Your details are still here.');
      if (!response.ok) throw new Error('We couldn’t confirm receipt. Your details are still here; please retry or email us.');
      const result = await response.json();
      if (result?.status !== 'received' || typeof result.id !== 'string' || !/^[A-Za-z0-9_-]{6,100}$/.test(result.id)) throw new Error('We couldn’t confirm receipt. Please retry or email us before submitting another request.');
      received = true;
      $('#enquiry-preview').hidden = true;
      fieldset.hidden = true; submit.hidden = true;
      $('#request-success-title').textContent = kind === 'bulk' ? 'Your bulk enquiry is received.' : 'Your order request is received.';
      $('#request-receipt').textContent = 'Akash Vetiver Export · Reference ' + result.id;
      $('#request-success').hidden = false;
      setStatus('Your request has been received by Akash Vetiver Export. We’ll contact you on WhatsApp.');
      $('#request-success').focus();
    } catch (error) {
      prepareFallback(payload, true);
      setStatus(error.name === 'AbortError'
        ? 'The confirmation took too long. We can’t confirm receipt yet. Retry this same request or email us; your details are still here.'
        : error instanceof TypeError || error instanceof SyntaxError
          ? 'We couldn’t confirm receipt. Check your connection and retry, or email us.'
          : error.message, true);
    } finally {
      clearTimeout(timeout); busy = false; fieldset.disabled = false; submit.disabled = false;
      form.removeAttribute('aria-busy'); updateLabel();
    }
  });
  $('#copy-enquiry').addEventListener('click', async () => {
    try { await navigator.clipboard.writeText($('#prepared-message').value); $('#copy-status').textContent = receiptUncertain ? 'Details copied. Receipt is still unconfirmed; ask us to check before sending again.' : 'Request copied. It has not been sent.'; }
    catch { $('#prepared-message').focus(); $('#prepared-message').select(); $('#copy-status').textContent = 'Select and copy the request above.'; }
  });
  $('#request-new').addEventListener('click', () => { reset(); updateLabel(); firstSelect.focus(); });
  updateLabel();
})();
