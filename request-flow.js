(() => {
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
  const options = [...firstSelect.options].map(option => ({ name: option.value, id: option.dataset.productId || '' }));
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
    label.textContent = busy ? 'Sending your request…' : endpoint ? (kind === 'bulk' ? 'Send bulk enquiry' : 'Send order request') : 'Prepare email request';
    $('#request-availability').textContent = endpoint
      ? 'Your request goes to Akash Vetiver Export. We’ll speak with you before any payment.'
      : 'Online submission is not connected yet. Prepare your request below, then send it using your email app.';
  };
  const clearResult = () => {
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
    const name = event.detail?.product;
    if (typeof name === 'string' && options.some(option => option.name === name)) firstSelect.value = name;
    $('#bulk-enquiry-title').textContent = kind === 'bulk' ? 'Let’s plan your bulk order.' : 'Let’s plan your order.';
    $('#request-intro').textContent = kind === 'bulk'
      ? 'Tell us what you need for your occasion or larger order. We’ll discuss the details and prepare a quote with you.'
      : 'Choose your pieces. We’ll discuss availability, pricing and delivery with you on WhatsApp before you pay.';
    firstSelect.required = kind === 'order';
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
    const phone = $('#request-phone').value.trim().replace(/[\s().-]/g, '');
    if (!/^\+[1-9]\d{7,14}$/.test(phone)) return invalid($('#request-phone'), 'Enter a WhatsApp number with country code, starting with +.');
    const city = $('#request-city').value.trim();
    if (!city || city.length > 100) return invalid($('#request-city'), 'Please enter your delivery city.');
    const postalCode = $('#request-pin').value.trim();
    if (!/^[1-9]\d{5}$/.test(postalCode)) return invalid($('#request-pin'), 'Enter a valid six-digit Indian delivery PIN.');
    const lines = [];
    for (const row of items.children) {
      const select = row.querySelector('select');
      const quantityInput = row.querySelector('input');
      const option = options.find(option => option.name === select.value);
      const quantity = Number(quantityInput.value);
      if (!option || (!option.id && (kind === 'order' || row !== items.firstElementChild))) return invalid(select, 'Please choose a piece.');
      if (!Number.isSafeInteger(quantity) || quantity < 1 || quantity > 9999) return invalid(quantityInput, 'Enter a whole quantity from 1 to 9999.');
      lines.push({ productId: option.id || 'help-me-choose', name: option.name || 'Help me choose', quantity });
    }
    const message = $('#enquiry-message').value.trim();
    if (message.length > 1500) return invalid($('#enquiry-message'), 'Please keep your message within 1500 characters.');
    if (!$('#request-consent').checked) return invalid($('#request-consent'), 'Please allow us to contact you about this request.');
    return { kind, items: lines, customer: { name, whatsapp: phone, city, postalCode }, message, consentToContact: true, website: $('#request-company').value };
  };
  const summary = payload => [
    'Hello Akash Vetiver Export,', '',
    payload.kind === 'bulk' ? 'I would like a bulk-order quote.' : 'I would like to request an order.', '',
    ...payload.items.map(item => `${item.name} — quantity: ${item.quantity}`), '',
    `Name: ${payload.customer.name}`, `WhatsApp: ${payload.customer.whatsapp}`,
    `Delivery: ${payload.customer.city}, ${payload.customer.postalCode}`,
    ...(payload.message ? ['', 'Requirements: ' + payload.message] : []), '',
    'Please contact me on WhatsApp to discuss availability, pricing and delivery before I confirm or pay.'
  ].join('\n');
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (busy || received || !form.reportValidity()) return;
    const payload = collect();
    if (!payload) return;
    if (payload.website) { setStatus('We could not process this request. Please contact us by email.', true); return; }
    clearResult();
    if (!endpoint) {
      const message = summary(payload);
      $('#prepared-message').value = message;
      $('#request-email').href = 'mailto:' + support + '?subject=' + encodeURIComponent(kind === 'bulk' ? 'Bulk enquiry — Akash Vetiver Export' : 'Order request — Akash Vetiver Export') + '&body=' + encodeURIComponent(message);
      $('#enquiry-preview').hidden = false;
      setStatus('Your request is prepared, not sent. Open your email app and send it to us, or copy the details.');
      $('#prepared-message').focus();
      return;
    }
    if (!navigator.onLine) { setStatus('You appear to be offline. Your details are still here. Reconnect and try again.', true); return; }
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
      fieldset.hidden = true; submit.hidden = true;
      $('#request-success-title').textContent = kind === 'bulk' ? 'Your bulk enquiry is received.' : 'Your order request is received.';
      $('#request-receipt').textContent = 'Akash Vetiver Export · Reference ' + result.id;
      $('#request-success').hidden = false;
      setStatus('Your request has been received by Akash Vetiver Export. We’ll contact you on WhatsApp.');
      $('#request-success').focus();
    } catch (error) {
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
    try { await navigator.clipboard.writeText($('#prepared-message').value); $('#copy-status').textContent = 'Request copied. It has not been sent.'; }
    catch { $('#prepared-message').focus(); $('#prepared-message').select(); $('#copy-status').textContent = 'Select and copy the request above.'; }
  });
  $('#request-new').addEventListener('click', () => { reset(); updateLabel(); firstSelect.focus(); });
  updateLabel();
})();
