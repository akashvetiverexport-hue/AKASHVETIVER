(() => {
 'use strict';
 const money=value=>new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR',minimumFractionDigits:0,maximumFractionDigits:2}).format(Number(value));
 const escape=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const state={campaigns:[],ready:null};
 const active=p=>!!p?.offers_enabled&&Date.parse(p.offer_starts)<=Date.now()&&Date.parse(p.offer_ends)>Date.now()&&(!p.campaign_id||state.campaigns.some(c=>c.id===p.campaign_id&&Date.parse(c.starts_at)<=Date.now()&&Date.parse(c.ends_at)>Date.now()))&&!!(p.sale_price>0||p.gift_name||(p.combo_price>0&&products().some(x=>x.id===p.combo_product_id&&!x.size_options?.length)));
 const products=()=>window.VETTIVER_CATALOG?.products||[];
 const partner=p=>active(p)&&p.combo_price>0?products().find(x=>x.id===p.combo_product_id&&!x.size_options?.length):null;
 const legacyPrice=p=>p?.price>0?`<span class="piece-price">${active(p)&&p.sale_price?`<s>${money(p.price)}</s> `:''}${money(active(p)&&p.sale_price?p.sale_price:p.price)}</span>`:'';
 const sizeList=p=>Array.isArray(p?.size_options)?p.size_options:[];
 const selections=new Map();
 const selected=p=>sizeList(p).find(o=>o.id===selections.get(p.id));
 const unit=p=>p?.pricing_unit?' / '+escape(p.pricing_unit):'';
 const price=p=>sizeList(p).length?'<span class="piece-price">From '+money(Math.min(...sizeList(p).map(o=>o.price)))+'</span>':legacyPrice(p)+(p?.price>0?'<span class="price-unit">'+unit(p)+'</span>':'');
 const badge=p=>active(p)?`<span class="offer-badge">${escape(p.offer_label||'Special offer')}</span>`:'';
 const comboName=p=>p.name+' + '+partner(p)?.name+' — combo';
 const options=()=>products().filter(p=>partner(p)).map(p=>`<option data-product-id="${escape(p.id)}" data-offer-type="combo">${escape(comboName(p))}</option>`).join('');
 const safeImage=value=>typeof value==='string'&&(/^\/api\/media\/[a-zA-Z0-9_/-]+\.webp$/.test(value)||/^images\/optimized\/[a-zA-Z0-9_./-]+\.webp$/.test(value)||value.startsWith('https://lgkkjubwdxdfpmoxkrmd.supabase.co/storage/v1/object/public/product-images/'));
 function detail(id){
  let area=document.getElementById('dialog-commerce');
  if(!area){area=document.createElement('div');area.id='dialog-commerce';document.getElementById('dialog-title')?.after(area)}
  const p=products().find(x=>x.id===id);if(!p){area.replaceChildren();return}
  const other=partner(p);
  area.innerHTML=price(p)+(active(p)?badge(p):'')+(active(p)&&p.gift_name?`<div class="gift-inclusion">${safeImage(p.gift_image)?`<img src="${escape(p.gift_image)}" alt="${escape(p.gift_name)}" width="64" height="64">`:''}<div><small>Free gift</small><strong>${escape(p.gift_name)}</strong><span>Included with each piece or combo set during this offer.</span></div></div>`:'')+(other?`<div class="combo-inclusion"><small>Better together</small><div class="combo-photos"><img src="${escape(p.thumbnail)}" alt="${escape(p.name)}" width="72" height="72"><span>+</span><img src="${escape(other.thumbnail)}" alt="${escape(other.name)}" width="72" height="72"></div><strong>${escape(p.name)} + ${escape(other.name)}</strong><p>${money(p.combo_price)} for the set</p><button type="button" class="text-link" id="enquire-combo">Reserve this combo</button></div>`:'');
  if(p.price_is_sample!==false){const note=document.createElement('p');note.className='price-guide-note';note.textContent='Guide price; confirmed before payment.';area.append(note);}
  if(sizeList(p).length){
   const row=document.createElement('div');row.className='price-size-row';const amount=area.querySelector('.piece-price');const group=document.createElement('div');group.className='inline-size-buttons';group.setAttribute('role','group');group.setAttribute('aria-label','Choose size or weight');
   const output=document.createElement('span');output.className='sr-only';output.setAttribute('aria-live','polite');
   const update=()=>{const o=selected(p);amount.textContent=o?money(o.price):'From '+money(Math.min(...sizeList(p).map(x=>x.price)));output.textContent=o?o.label+', '+money(o.price):'Choose a size to see its price.';group.querySelectorAll('button').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.sizeId===o?.id)));};
   for(const o of sizeList(p)){const button=document.createElement('button');button.type='button';button.textContent=o.label;button.dataset.sizeId=o.id;button.onclick=()=>{selections.set(p.id,o.id);update()};group.append(button)}row.append(amount,group,output);area.prepend(row);update();
  }
  const additions=[...area.querySelectorAll('.combo-inclusion')];if(additions.length){const extras=document.createElement('details');extras.className='product-extras';const summary=document.createElement('summary');summary.textContent='Offers and included extras';extras.append(summary,...additions);area.append(extras);}
  document.getElementById('enquire-combo')?.addEventListener('click',()=>{
   document.getElementById('dialog-enquire').click();
   window.dispatchEvent(new CustomEvent('vettiver:request',{detail:{kind:'order',product:comboName(p)}}));
  });
 }
 function banners(){
  let area=document.getElementById('festival-banners');
  if(!area){area=document.createElement('aside');area.id='festival-banners';area.className='festival-banners wrap';area.setAttribute('aria-label','Festival offers');document.getElementById('products')?.before(area)}
  const now=Date.now();
  area.innerHTML=state.campaigns.filter(c=>Date.parse(c.starts_at)<=now&&Date.parse(c.ends_at)>now).map(c=>{const hasOffers=products().some(p=>p.campaign_id===c.id&&active(p));return `<a class="festival-banner" href="${hasOffers?'products.html?festival='+encodeURIComponent(c.id):'products.html'}">${safeImage(c.image)?`<img src="${escape(c.image)}" alt="" width="160" height="120">`:''}<span><small>Celebrate with Akash Vetiver</small><strong>${escape(c.title)}</strong><span>${escape(c.description)}</span><small>Until ${escape(new Date(c.ends_at).toLocaleDateString('en-IN',{timeZone:'Asia/Kolkata',day:'numeric',month:'short'}))} · ${hasOffers?'Explore offer pieces':'Explore the collection'} →</small></span></a>`}).join('');area.hidden=!area.children.length;
 }
 state.ready=(async()=>{try{
  if(window.VETTIVER_CONFIG?.catalogSource!=='supabase')return;
  const r=await fetch('/api/campaigns',{signal:AbortSignal.timeout(8000)});if(r.ok){const data=await r.json();if(Array.isArray(data))state.campaigns=data}
 }catch{/* Offers are optional; never interrupt the collection. */}})();
 const describe=(p,combo=false,optionId)=>{
  if(!p)return '';
  const other=combo?partner(p):null;
  if(sizeList(p).length){const o=optionId?sizeList(p).find(x=>x.id===optionId):selected(p);return o?money(o.price)+' for '+o.label:'From '+money(Math.min(...sizeList(p).map(x=>x.price)))+' - choose a size';}
  return (p.price>0?money(other?p.combo_price:active(p)&&p.sale_price?p.sale_price:p.price):'Price on enquiry')+(!other?unit(p):'')+(other?' · Includes '+other.name:'')+(active(p)&&p.gift_name?' · Free: '+p.gift_name+' per piece/set':'');
 };
 window.VETTIVER_COMMERCE={...state,ready:state.ready,active,partner,price,badge,options,detail,banners,money,describe,sizeList,selections,selected};
 // Hide offers on an already-open page as soon as their scheduled time expires.
 setInterval(()=>{banners();document.querySelectorAll('.product-card').forEach(card=>{const p=products().find(x=>x.id===card.id);if(!p)return;card.querySelector('.offer-badge')?.remove();const target=card.querySelector('.card-commerce');if(target)target.innerHTML=badge(p)+price(p)});window.dispatchEvent(new Event('vettiver:offers-tick'));const dialog=document.getElementById('product-dialog');if(dialog?.open)detail(location.hash.slice(1));},30000);
})();
