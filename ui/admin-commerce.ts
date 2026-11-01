import {fillSizes,readSizes} from './admin-sizes'
import { registerAdminGuard } from './admin-guards'
import type { SupabaseClient } from '@supabase/supabase-js'
import type { Product } from './products'
import { compressProductImage } from '../lib/compress-product-image'
const field=(id:string)=>document.getElementById(id) as HTMLInputElement
const html=(s:string)=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]!))
const localDate=(value?:string)=>{if(!value)return '';const d=new Date(value);return new Date(d.getTime()-d.getTimezoneOffset()*60000).toISOString().slice(0,16)}
let products:Product[]=[],giftImage=''
type Campaign={id:string;title:string;description:string;image:string;starts_at:string;ends_at:string;enabled:boolean;version:number}
let campaigns:Campaign[]=[]
export function commerceProducts(rows:Product[]){products=rows}
export function fillCommerce(p:Product|null){
 fillSizes(p)
 field('product-price').value=p&&p.price==null?'':String(p?.price??350);field('product-sample').checked=p?.price_is_sample??false
 field('product-offers').checked=p?.offers_enabled??false
 field('offer-label').value=p?.offer_label||'Special offer'
 field('offer-start').value=localDate(p?.offer_starts);field('offer-end').value=localDate(p?.offer_ends)
 field('sale-price').value=p?.sale_price?String(p.sale_price):'';field('gift-name').value=p?.gift_name||'';field('gift-photo').value='';giftImage=p?.gift_image||''
 const preview=document.getElementById('gift-preview') as HTMLImageElement;preview.hidden=!giftImage;preview.src=giftImage
 field('combo-product').innerHTML='<option value="">No combo</option>'+products.filter(x=>x.id!==p?.id&&x.status==='published').map(x=>`<option value="${html(x.id)}">${html(x.name)}</option>`).join('')
 field('combo-product').value=p?.combo_product_id||'';field('combo-price').value=p?.combo_price?String(p.combo_price):''
 refreshCampaignOptions(p?.campaign_id||'')
}
function refreshCampaignOptions(value=field('offer-campaign').value){field('offer-campaign').innerHTML='<option value="">Standalone offer</option>'+campaigns.map(c=>`<option value="${c.id}">${html(c.title)}${c.enabled?'':' (disabled)'}</option>`).join('');field('offer-campaign').value=value}
async function upload(client:SupabaseClient,input:HTMLInputElement,prefix:string){
 const file=input.files?.[0];if(!file)return ''
 const photo=await compressProductImage(file);const key=`${prefix}/${crypto.randomUUID()}.webp`
 const {error}=await client.storage.from('product-images').upload(key,photo.image,{contentType:'image/webp',cacheControl:'31536000',upsert:false})
 if(error)throw new Error('Image upload failed. Your form is preserved; try again.')
 return client.storage.from('product-images').getPublicUrl(key).data.publicUrl
}
export async function commerceRecord(client:SupabaseClient){
 const sizing=readSizes();const unpricedDraft=field('product-status').value!=='published'&&!field('product-price').value&&!sizing.size_options.length
 const price=Number(field('product-price').value),sale=field('sale-price').value?Number(field('sale-price').value):null
 const combo=field('combo-product').value||null,comboPrice=field('combo-price').value?Number(field('combo-price').value):null
 const enabled=field('product-offers').checked,start=field('offer-start').value,end=field('offer-end').value
 if(!unpricedDraft&&!sizing.size_options.length&&(!Number.isFinite(price)||price<=0||price>10000000))throw new Error('Enter a price above zero and no more than ₹1,00,00,000.')
 if(sizing.size_options.length&&enabled&&(sale!==null||combo))throw new Error('For products with sizes, offers can include a free gift; remove the sale price and combo.');
 if(sale!==null&&(!Number.isFinite(sale)||sale<=0||sale>=price))throw new Error('Offer price must be positive and below the regular price.')
 if(combo&&(!comboPrice||comboPrice<=0||comboPrice>10000000))throw new Error('Enter the combined price for one of each product.')
 if(enabled&&(!start||!end||Date.parse(end)<=Date.parse(start)))throw new Error('Choose offer dates with the end after the start.')
 if(enabled&&!sale&&!field('gift-name').value.trim()&&!combo)throw new Error('Add a discounted price, free gift or combo before enabling this offer.')
 const uploaded=await upload(client,field('gift-photo'),'gifts');if(uploaded)giftImage=uploaded
 const gift=field('gift-name').value.trim();if(gift&&!giftImage)throw new Error('Choose an image for the free gift.')
 return {...sizing,price:sizing.size_options.length?Math.min(...sizing.size_options.map(o=>o.price)):(unpricedDraft?null:price),price_is_sample:field('product-sample').checked,offers_enabled:enabled,offer_label:field('offer-label').value.trim()||'Special offer',offer_starts:start?new Date(start).toISOString():null,offer_ends:end?new Date(end).toISOString():null,campaign_id:field('offer-campaign').value||null,sale_price:sale,gift_name:gift,gift_image:gift?giftImage:'',combo_product_id:combo,combo_price:combo?comboPrice:null}
}
let releaseCampaignGuard: (()=>void)|undefined
export function clearCampaigns(){releaseCampaignGuard?.();document.getElementById('admin-campaigns')?.remove();campaigns=[]}
export async function mountCampaigns(client:SupabaseClient){
 clearCampaigns();const area=document.createElement('section');area.id='admin-campaigns';area.className='admin-campaigns'
 area.innerHTML=`<h2>Festival campaigns</h2><p>Set a banner and dates. Choose eligible products under Products → Offers.</p><div class="admin-campaign-list" id="campaign-list"></div><button type="button" class="text-link" id="campaign-new">New campaign</button><form id="campaign-form"><fieldset><legend class="sr-only">Festival campaign</legend><label for="campaign-title">Banner title</label><input id="campaign-title" maxlength="80" required placeholder="Diwali offers"><label for="campaign-description">Banner message</label><textarea id="campaign-description" maxlength="240" rows="2"></textarea><label for="campaign-photo">Banner image (optional)</label><input id="campaign-photo" type="file" accept="image/jpeg,image/png,image/webp"><img id="campaign-preview" class="admin-upload-preview" alt="Current banner image" hidden><label class="admin-checkbox"><input id="campaign-clear-image" type="checkbox">Remove current banner image</label><div class="admin-fields-row"><div><label for="campaign-start">Starts (local time)</label><input id="campaign-start" type="datetime-local" required></div><div><label for="campaign-end">Ends (local time)</label><input id="campaign-end" type="datetime-local" required></div></div><label class="admin-checkbox"><input id="campaign-enabled" type="checkbox">Enable during these dates</label><div class="admin-actions"><button class="button" type="submit">Save campaign</button><button type="button" class="text-link admin-danger" id="campaign-delete" hidden>Delete campaign</button></div></fieldset><p id="campaign-status" role="status"></p></form>`
 document.getElementById('admin-workspace')!.append(area)
 let current:Campaign|null=null,busy=false,dirty=false
 releaseCampaignGuard=registerAdminGuard('campaigns',()=>({dirty,busy}));
 const form=field('campaign-form') as unknown as HTMLFormElement,status=field('campaign-status')
 const fill=(c:Campaign|null)=>{current=c;form.reset();dirty=false;field('campaign-title').value=c?.title||'';field('campaign-description').value=c?.description||'';field('campaign-start').value=localDate(c?.starts_at);field('campaign-end').value=localDate(c?.ends_at);field('campaign-enabled').checked=c?.enabled||false;field('campaign-delete').hidden=!c;const img=field('campaign-preview') as unknown as HTMLImageElement;img.hidden=!c?.image;img.src=c?.image||'';status.textContent=''}
 const load=async()=>{status.textContent='Loading festival offers…';const {data,error}=await client.from('festival_campaigns').select('*').order('starts_at',{ascending:false});if(error)throw new Error('Campaigns could not load. Retry after checking your connection.');if(!area.isConnected)return;campaigns=data;const list=field('campaign-list');list.replaceChildren();for(const c of campaigns){const b=document.createElement('button');b.type='button';b.textContent=c.title+(c.enabled?'':' · disabled');b.onclick=()=>{if(!busy&&(!dirty||confirm('Discard unsaved campaign changes?')))fill(c)};list.append(b)}refreshCampaignOptions();status.textContent=campaigns.length?'':"No campaigns yet. Create your first festival offer below."}
 field('campaign-new').onclick=()=>{if(!busy&&(!dirty||confirm('Discard unsaved campaign changes?')))fill(null)}
 form.oninput=()=>{dirty=true}
 form.onsubmit=async e=>{e.preventDefault();if(busy)return;const start=field('campaign-start').value,end=field('campaign-end').value;if(Date.parse(end)<=Date.parse(start)){status.textContent='End must be after start.';return}busy=true;form.querySelector('fieldset')!.disabled=true;status.textContent='Saving campaign…';try{
  const uploaded=await upload(client,field('campaign-photo'),'campaigns')
  const row={title:field('campaign-title').value.trim(),description:field('campaign-description').value.trim(),image:uploaded||(field('campaign-clear-image').checked?'':current?.image||''),starts_at:new Date(start).toISOString(),ends_at:new Date(end).toISOString(),enabled:field('campaign-enabled').checked}
  const query=current?client.from('festival_campaigns').update(row).eq('id',current.id).eq('version',current.version):client.from('festival_campaigns').insert(row)
  const {data,error}=await query.select('*').single();if(error)throw new Error('Save could not be confirmed. Reload to check for changes before retrying.');current=data;dirty=false;await load();fill(data);status.textContent='Saved. The banner appears only during its enabled dates.'
 }catch(e){status.textContent=(e as Error).message}finally{busy=false;form.querySelector('fieldset')!.disabled=false}}
 field('campaign-delete').onclick=async()=>{if(!current||busy||!confirm(`Delete ${current.title}? Linked product offers will be disabled.`))return;busy=true;try{const {data,error}=await client.from('festival_campaigns').delete().eq('id',current.id).eq('version',current.version).select('id').single();if(error||!data)throw new Error('Deletion could not be confirmed. Reload before retrying.');await load();fill(null);status.textContent='Campaign deleted.'}catch(e){status.textContent=(e as Error).message}finally{busy=false}}
 const retry=document.createElement('button');retry.type='button';retry.className='text-link campaign-refresh';retry.textContent='Refresh campaigns';area.querySelector('h2')?.after(retry);retry.onclick=async()=>{if(busy)return;retry.disabled=true;try{await load()}catch(e){status.textContent=(e as Error).message}finally{retry.disabled=false}};
 try{await load()}catch(e){status.textContent=(e as Error).message}
}
