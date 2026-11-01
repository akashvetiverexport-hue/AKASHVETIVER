import type {Product} from './products'
let area:HTMLElement
export function fillSizes(p:Product|null){
 if(!document.getElementById('product-sizing')){
 area=document.createElement('section');area.id='product-sizing';area.innerHTML='<label for="pricing-unit">Price is for</label><select id="pricing-unit"><option value="">Not specified</option><option value="piece">One piece</option><option value="pair">One pair</option><option value="pack">One pack</option><option value="foot">One foot</option><option value="inch">One inch</option><option value="kg">One kilogram</option><option value="g">One gram</option></select><label class="admin-checkbox"><input type="checkbox" id="sizes-enabled">Offer sizes or weights (optional)</label><div id="sizes-editor" hidden><p>Add each available size and its full price, for example 2 feet or 500 g. Size prices replace the normal price. Free gifts can be added under Offers. Discounts and combos are not available with sizes.</p><div id="size-rows"></div><button type="button" id="add-size" class="text-link">Add size / weight</button></div>';
 document.getElementById('product-price')!.closest('.admin-fields-row')!.after(area);
 document.getElementById('sizes-enabled')!.addEventListener('change',()=>{document.getElementById('sizes-editor')!.hidden=!(document.getElementById('sizes-enabled') as HTMLInputElement).checked;sync()});
 document.getElementById('add-size')!.onclick=()=>{if(document.getElementById('size-rows')!.children.length<20)add();sync();area.dispatchEvent(new Event('input',{bubbles:true}))};
 }
 (document.getElementById('pricing-unit') as HTMLSelectElement).value=p?.pricing_unit||'';
 (document.getElementById('sizes-enabled') as HTMLInputElement).checked=!!p?.size_options?.length;
 document.getElementById('sizes-editor')!.hidden=!p?.size_options?.length;
 document.getElementById('size-rows')!.replaceChildren();(p?.size_options||[]).forEach(add);sync();
}
function sync(){const enabled=(document.getElementById('sizes-enabled') as HTMLInputElement).checked;document.querySelectorAll<HTMLInputElement>('#size-rows input').forEach(e=>{e.required=enabled;e.disabled=!enabled})}
function add(o?:{id:string;label:string;price:number}){const row=document.createElement('div');row.className='admin-fields-row';row.dataset.sizeId=o?.id||crypto.randomUUID();const label=document.createElement('label');label.textContent='Size / weight';const input=document.createElement('input');input.className='size-label';input.maxLength=60;input.placeholder='2 feet or 500 g';input.value=o?.label||'';label.append(input);const cost=document.createElement('label');cost.textContent='Price (INR)';const price=document.createElement('input');price.className='size-price';price.type='number';price.min='0.01';price.max='10000000';price.step='0.01';price.value=o?String(o.price):'';cost.append(price);const remove=document.createElement('button');remove.type='button';remove.className='text-link';remove.textContent='Remove size';remove.onclick=()=>{row.remove();area.dispatchEvent(new Event('input',{bubbles:true}))};row.append(label,cost,remove);document.getElementById('size-rows')!.append(row)}
export function readSizes(){const enabled=(document.getElementById('sizes-enabled') as HTMLInputElement).checked;const size_options=enabled?[...document.querySelectorAll<HTMLElement>('#size-rows > div')].map(row=>({id:row.dataset.sizeId!,label:row.querySelector<HTMLInputElement>('.size-label')!.value.trim(),price:Number(row.querySelector<HTMLInputElement>('.size-price')!.value)})):[];
 if(enabled&&(!size_options.length||size_options.length>20))throw new Error('Add between 1 and 20 sizes, or turn off size options.');
 if(size_options.some(o=>!o.label||o.label.length>60||!Number.isFinite(o.price)||o.price<=0||o.price>10000000||Math.abs(o.price*100-Math.round(o.price*100))>0.000001)||new Set(size_options.map(o=>o.label.toLowerCase())).size!==size_options.length)throw new Error('Give every size a different label and a valid price with up to two decimal places.');

 return {pricing_unit:(document.getElementById('pricing-unit') as HTMLSelectElement).value,size_options};}
