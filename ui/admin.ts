import { registerAdminGuard, canLeaveAdmin } from './admin-guards'
import './styles.css'
import './banner.css'
import { mountSales, clearSales } from './admin-sales'
import { mountStudio } from './admin-shell'
import { mountInvoices, clearInvoices } from './admin-invoices'
import { createClient, type SupabaseClient } from '@supabase/supabase-js'
import { compressProductImage, type CompressedProductImage } from '../lib/compress-product-image'
import type { Product } from './products'
import { mountInbox, clearInbox } from './admin-inbox'
import { commerceProducts, fillCommerce, commerceRecord, mountCampaigns, clearCampaigns } from './admin-commerce'
type RecordProduct = Product & { version: number }
const el = <T extends HTMLElement = HTMLElement>(id: string) => document.getElementById(id) as T
const field = (id: string) => el<HTMLInputElement>(id)
const message = (id: string, text: string, error = false) => { el(id).textContent = text; el(id).dataset.error = String(error) }
let client: SupabaseClient
let selected: RecordProduct | null = null, compressed: CompressedProductImage | null = null
let photoURL='', photoGeneration=0, busy=false, dirty=false, authGeneration=0, activeUser=''
const cleanPhoto=()=>{photoGeneration++;if(photoURL)URL.revokeObjectURL(photoURL);photoURL='';compressed=null;field('product-photo').value='';field('save-product').disabled=false;message('photo-status','')}
function fill(product:RecordProduct|null){
 if(busy)return
 selected=product;cleanPhoto();dirty=false;el<HTMLFormElement>('product-editor').reset()
 el('editor-title').textContent=product?'Edit product':'Add a product'
 for(const [id,key] of [['product-name','name'],['product-category','category'],['product-description','description'],['product-status','status'],['product-order','sort_order'],['product-featured','featured_order']] as const){field(id).value=product?String(product[key]??''):id==='product-category'?'garland':id==='product-status'?'draft':id==='product-order'?'100':''}
 const preview=el<HTMLImageElement>('photo-preview');preview.hidden=!product;if(product)preview.src=product.image;else preview.removeAttribute('src')
 fillCommerce(product);el('delete-product').hidden=!product;
 el('archive-product').hidden=!product||product.status==='archived';message('save-status','')
 document.querySelectorAll<HTMLButtonElement>('.admin-product').forEach(button=>button.setAttribute('aria-current',String(button.dataset.id===product?.id)))
}
async function list(){
 const rows:RecordProduct[]=[]
 for(let offset=0;;offset+=500){
  const {data,error}=await client.from('products').select('*').order('sort_order').order('id').range(offset,offset+499)
  if(error)throw new Error('Could not load products. Check your connection and retry.')
  rows.push(...data as RecordProduct[]);if(data.length<500)break
 }
 commerceProducts(rows);
 window.dispatchEvent(new CustomEvent('studio:catalog-changed',{detail:rows}));
 const nav=el('admin-products');nav.replaceChildren()
 for(const product of rows){
  const button=document.createElement('button');button.type='button';button.className='admin-product';button.dataset.id=product.id
  const image=document.createElement('img');image.src=product.thumbnail;image.alt='';image.loading='lazy'
  const copy=document.createElement('span');copy.textContent=product.name
  const status=document.createElement('small');status.textContent=product.status;const price=document.createElement('small');price.textContent=product.price==null?'Set price':new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR',maximumFractionDigits:0}).format(product.price||0);copy.append(price,status);button.append(image,copy)
  button.addEventListener('click',()=>{if(busy||(dirty&&!confirm('Discard your unsaved changes?')))return;fill(product)});nav.append(button)
 }
 if(!rows.length)nav.textContent='No products yet. Add your first piece.'
}
async function authenticate(){
 const generation=++authGeneration
 const {data:{session}}=await client.auth.getSession();if(generation!==authGeneration)return
 if(session?.user.id===activeUser&&!el('admin-workspace').hidden)return
 activeUser=session?.user.id||''
 el('admin-workspace').hidden=true;el('admin-login').hidden=!!session;el('sign-out').hidden=!session
 if(!session){clearInbox();clearCampaigns();clearInvoices();clearSales();message('admin-status','Sign in to manage your products.');return}
 const {data:allowed,error}=await client.rpc('is_vettiver_admin');if(generation!==authGeneration)return
 if(error||!allowed){message('admin-status','This account does not have product admin access. Contact the site owner.',true);return}
 try{await list();if(generation!==authGeneration)return;fill(null);el('admin-workspace').hidden=false;void mountCampaigns(client);mountInvoices(client);mountSales(client);mountInbox(client);message('admin-status','Only published pieces appear in your store.');el('admin-products').querySelector<HTMLButtonElement>('button')?.click()}
 catch(error){message('admin-status',(error as Error).message,true)}
}
async function save(){
 if(busy||field('save-product').disabled||!el<HTMLFormElement>('product-editor').reportValidity())return
 if(!selected&&!compressed){message('save-status','Choose a product photo before saving.',true);return}
 const id=selected?.id||'product-'+crypto.randomUUID(),order=Number(field('product-order').value)
 if(!Number.isInteger(order)||order<0||order>100000)return
 if(selected?.status==='published'&&field('product-status').value!=='published'&&!confirm('Hide this published product from customers?'))return
 busy=true;el<HTMLFieldSetElement>('product-fields').disabled=true;message('save-status','Saving…')
 let committed=false
 try{
  let image=selected?.image||'',thumbnail=selected?.thumbnail||''
  if(compressed){
   const revision=crypto.randomUUID()
   for(const [kind,blob] of [['image',compressed.image],['thumb',compressed.thumbnail]] as const){
    const key=`${id}/${revision}-${kind}.webp`
    const {error}=await client.storage.from('product-images').upload(key,blob,{contentType:'image/webp',cacheControl:'31536000',upsert:false})
    if(error)throw new Error('Photo upload failed. Your changes are still here; please retry.')
    const url=client.storage.from('product-images').getPublicUrl(key).data.publicUrl
    if(kind==='image')image=url;else thumbnail=url
   }
  }
  const commerce=await commerceRecord(client);
  const record={...commerce,id,name:field('product-name').value.trim(),category:field('product-category').value,description:field('product-description').value.trim(),alt:selected?.alt&&selected.name===field('product-name').value.trim()&&!compressed?selected.alt:field('product-name').value.trim(),status:field('product-status').value,sort_order:order,featured_order:field('product-featured').value===''?null:Number(field('product-featured').value),image,thumbnail}
  const operation=selected?client.from('products').update(record).eq('id',id).eq('version',selected.version):client.from('products').insert(record)
  const {data,error}=await operation.select('*').single()
  if(error){if(error.code==='23505')throw new Error('That name or homepage position is already in use. Choose another, then save.');if(error.code==='PGRST116')throw new Error('This product changed in another session. Reload before editing it again.');throw new Error('The save could not be confirmed. Reload to check whether it was saved before retrying.')}
  committed=true;selected=data as RecordProduct;dirty=false;cleanPhoto();await list();busy=false;fill(selected)
  message('save-status',record.status==='published'?'Saved and published. Customers will see it when they open or reload the collection.':'Saved. This product is hidden from customers.')
 }catch(error){
  // Keep immutable uploads on ambiguous failures: the database may have accepted them.
  message('save-status',committed?'The product was saved, but the list could not refresh. Reload to see it.':(error as Error).message,true)
 }finally{busy=false;el<HTMLFieldSetElement>('product-fields').disabled=false}
}
async function start(){
 registerAdminGuard('products',()=>({dirty,busy}));
 mountStudio()
 const config=window.VETTIVER_CONFIG
 if(!config?.supabasePublishableKey){message('admin-status','Product administration is not connected yet. Complete Supabase setup before signing in.');return}
 if(config.supabaseUrl!=='https://lgkkjubwdxdfpmoxkrmd.supabase.co'){message('admin-status','Unexpected Supabase project configuration.',true);return}
 client=createClient(config.supabaseUrl,config.supabasePublishableKey)
 client.auth.onAuthStateChange((event)=>{if(['SIGNED_IN','SIGNED_OUT','INITIAL_SESSION'].includes(event))setTimeout(()=>void authenticate(),0)})
 await authenticate()
 el<HTMLFormElement>('admin-login').addEventListener('submit',async event=>{
  event.preventDefault();const button=el('admin-login').querySelector('button')!;button.disabled=true
  try{const {error}=await client.auth.signInWithOtp({email:field('admin-email').value,options:{shouldCreateUser:false,emailRedirectTo:new URL('admin.html',location.href).href}});if(error)throw error;message('admin-status','Check your inbox for a sign-in link. Open it on this device.')}
  catch{message('admin-status','The sign-in email could not be sent. To work without email for now, use the local Workshop preview window. Live sign-in still needs setup.',true)}finally{button.disabled=false}
 })
 el('sign-out').addEventListener('click',async()=>{if(!canLeaveAdmin())return;const {error}=await client.auth.signOut();if(error){message('admin-status','Sign-out failed. Please retry.',true);return}cleanPhoto();selected=null;dirty=false;el('admin-products').replaceChildren();el<HTMLFormElement>('product-editor').reset();await authenticate()})
 el('new-product').addEventListener('click',()=>{if(!busy&&(!dirty||confirm('Discard your unsaved changes?')))fill(null)})
 el('product-editor').addEventListener('input',()=>{dirty=true})
 field('product-photo').addEventListener('change',async()=>{
  const generation=++photoGeneration;compressed=null
  const file=field('product-photo').files?.[0];if(!file){field('save-product').disabled=false;return}
  field('save-product').disabled=true;message('photo-status','Preparing your photo…')
  try{
   const result=await compressProductImage(file);if(generation!==photoGeneration)return
   compressed=result;if(photoURL)URL.revokeObjectURL(photoURL);photoURL=URL.createObjectURL(result.image)
   const preview=el<HTMLImageElement>('photo-preview');preview.src=photoURL;preview.hidden=false
   message('photo-status',`${(file.size/1024/1024).toFixed(2)} MB → ${Math.round(result.image.size/1024)} KB photo + ${Math.round(result.thumbnail.size/1024)} KB thumbnail. Ready to save.`)
  }catch(error){if(generation===photoGeneration){field('product-photo').value='';message('photo-status',(error as Error).message,true)}}
  finally{if(generation===photoGeneration)field('save-product').disabled=false}
 })
 el<HTMLFormElement>('product-editor').addEventListener('submit',async event=>{event.preventDefault();await save()})
 el('delete-product').addEventListener('click',async()=>{
  if(!selected||busy)return
  if(prompt('Permanently delete this product? Existing enquiries are preserved. Type the product name to confirm:')!==selected.name)return
  busy=true;el<HTMLFieldSetElement>('product-fields').disabled=true
  try{const {data,error}=await client.from('products').delete().eq('id',selected.id).eq('version',selected.version).select('id').single();if(error||!data)throw new Error('Deletion could not be confirmed. Reload before trying again.');selected=null;dirty=false;await list();busy=false;fill(null);message('save-status','Product deleted. Existing enquiry records are preserved.')}
  catch(error){message('save-status',(error as Error).message,true)}finally{busy=false;el<HTMLFieldSetElement>('product-fields').disabled=false}
 });
 el('archive-product').addEventListener('click',async()=>{if(!selected||busy||!confirm('Archive this product? It will be hidden from customers. You can publish it again later.'))return;field('product-status').value='archived';await save()})

}
if(document.readyState==='complete')void start();else document.addEventListener('DOMContentLoaded',()=>void start(),{once:true})
