import type { SupabaseClient } from '@supabase/supabase-js'
type Item={name:string;quantity:number;unitPrice?:number;gift?:{name:string};combo?:{name:string}}
type Entry={id:string;status:string;created_at:string;name?:string;rating?:number;content?:string;consent_to_publish?:boolean;kind?:string;message?:string;delivery_status?:string;customer?:{name:string;whatsapp?:string;city?:string;postalCode?:string};items?:Item[]}
let generation=0
export function clearInbox(){generation++;document.getElementById('admin-inbox')?.remove()}
export function mountInbox(client:SupabaseClient){
 clearInbox();const ticket=generation
 const section=document.createElement('section');section.id='admin-inbox';section.className='admin-inbox'
 const status=document.createElement('p');status.setAttribute('role','status');status.className='inbox-status'
 const refresh=document.createElement('button');refresh.type='button';refresh.className='text-link';refresh.textContent='Refresh inbox'
 const explanation=document.createElement('p');explanation.className='inbox-source';explanation.textContent='Sent through the website form. Confirm the purchase on WhatsApp, then create an invoice.';section.append(explanation,refresh,status);
 const emailNotice=document.createElement('p');emailNotice.className='inbox-source';emailNotice.setAttribute('role','status');section.append(emailNotice);
 const checkEmail=()=>fetch('/api/health',{signal:AbortSignal.timeout(8000)}).then(async response=>{if(!response.ok)throw new Error();const health=await response.json();if(ticket===generation)emailNotice.textContent=health.notificationsConfigured===false?'Email alerts are not enabled. Check this inbox for every enquiry.':health.notificationsConfigured===true?'Email alerts are configured. Check individual enquiry statuses below.':'Email setup could not be checked. Check this inbox for enquiries.'}).catch(()=>{if(ticket===generation)emailNotice.textContent='Email setup could not be checked. Check this inbox for enquiries.'});document.getElementById('admin-workspace')!.append(section)
 const lists=[{table:'order_requests',heading:'Reservations',states:['received','contacted','closed']},{table:'customer_feedback',heading:'Customer reviews',states:['pending','approved','rejected']}].map(config=>{
  const area=document.createElement('section');area.className='inbox-list'
  const h=document.createElement('h3');h.textContent=config.heading
  const body=document.createElement('div');const notice=document.createElement('p');notice.setAttribute('role','status')
  const more=document.createElement('button');more.type='button';more.className='text-link';more.textContent=config.table==='order_requests'?'Load older requests':'Load older reviews';more.hidden=true
  area.append(h,notice,body,more);section.append(area)
  return {...config,body,notice,more,offset:0,loading:false}
 })
 function card(row:Entry,table:string,states:string[]){
  const article=document.createElement('article');article.className='inbox-record';article.dataset.recordId=row.id
  const name=document.createElement('h4');name.textContent=row.customer?.name||row.name||'Customer'
  const details=document.createElement('p');details.className='inbox-details'
  if(table==='order_requests'){
   const customer=row.customer||{name:'Customer'}
   const delivery = row.delivery_status === 'sent' ? 'Email: accepted by email provider. Check your inbox.' : row.delivery_status === 'failed' ? 'Email: delivery failed. Contact this customer from here.' : 'Email: waiting to send. This enquiry is saved here.'
   details.textContent=[delivery,`Reference: ${row.id}`,`${row.kind==='bulk'?'Bulk request':'Reservation'} · ${new Date(row.created_at).toLocaleString()}`,`WhatsApp: ${customer.whatsapp||'Not provided'}`,`Delivery: ${[customer.city,customer.postalCode].filter(Boolean).join(', ')||'Discuss on WhatsApp'}`,...(row.items||[]).map(item=>`${item.name} × ${item.quantity}${item.unitPrice?` · ₹${item.unitPrice} per unit/set`:''}${item.gift?` · Free: ${item.gift.name}`:''}${item.combo?` · Includes ${item.combo.name}`:''}`),row.message||''].filter(Boolean).join('\n')
  }else details.textContent=[`${row.rating}/5 stars · ${new Date(row.created_at).toLocaleString()}`,row.content,'Publication permission: '+(row.consent_to_publish?'given':'not given')].join('\n')
  const controls=document.createElement('div');controls.className='inbox-record-actions'
  const label=document.createElement('label');label.textContent='Status';label.htmlFor='inbox-'+row.id
  const select=document.createElement('select');select.id=label.htmlFor
  for(const value of states){const option=document.createElement('option');option.value=value;option.textContent=value[0].toUpperCase()+value.slice(1);select.append(option)}select.value=row.status
  select.addEventListener('change',async()=>{
   const next=select.value
   if(table==='customer_feedback'&&next==='approved'&&!confirm('Publish this customer’s name, rating and feedback on the website?')){select.value=row.status;return}
   select.disabled=true;status.textContent='Saving status…'
   try{const {data,error}=await client.from(table).update({status:next}).eq('id',row.id).eq('status',row.status).select('id,status').single();if(error||!data)throw new Error();row.status=next;status.textContent='Status saved.'}catch{select.value=row.status;status.textContent='Could not save. Refresh the inbox before retrying.'}finally{select.disabled=false}
  })
  label.append(select);controls.append(label)
  if(table==='order_requests'){
   const phone=row.customer?.whatsapp||''
   if(/^\+[1-9]\d{7,14}$/.test(phone)){const chat=document.createElement('a');chat.className='text-link';chat.textContent='Open WhatsApp';chat.href='https://wa.me/'+phone.slice(1);chat.target='_blank';chat.rel='noopener noreferrer';controls.append(chat)}
   const create=document.createElement('button');create.type='button';create.className='button button-small invoice-order';create.textContent='Create invoice';create.onclick=()=>window.dispatchEvent(new CustomEvent('studio:invoice-order',{detail:row}));controls.append(create)
  }
  article.append(name,details,controls);return article
 }
 async function load(list:typeof lists[number],reset=false){
  if(list.loading)return;list.loading=true;list.more.disabled=true;list.notice.textContent='Loading…'
  const offset=reset?0:list.offset
  try{
   const {data,error}=await client.from(list.table).select('*').order('created_at',{ascending:false}).order('id').range(offset,offset+49)
   if(ticket!==generation)return;if(error)throw new Error()
   if(reset)list.body.replaceChildren()
   for(const row of data as Entry[])if(![...list.body.children].some(node=>(node as HTMLElement).dataset.recordId===row.id))list.body.append(card(row,list.table,list.states))
   list.offset=offset+data.length;list.more.hidden=data.length<50
   list.notice.textContent=list.offset?`${list.offset} ${list.table==='order_requests'?'requests':'reviews'} loaded.`:list.table==='order_requests'?'No reservations yet. New website requests will appear here.':'No reviews to approve.'
  }catch{list.notice.textContent='Could not load this list. Refresh the inbox to retry.'}finally{list.loading=false;list.more.disabled=false}
 }
 const refreshAll=async()=>{refresh.disabled=true;await Promise.all([checkEmail(),...lists.map(list=>load(list,true))]);refresh.disabled=false}
 lists.forEach(list=>list.more.onclick=()=>void load(list));refresh.onclick=()=>void refreshAll();void refreshAll()
}
