import { createRoot } from 'react-dom/client'
import { useEffect, useState } from 'react'
import { Package, Gift, Inbox, FileText, ArrowUpRight, Search, ChartNoAxesCombined } from 'lucide-react'
import { Banner } from '@/components/ui/banner'
type View='sales'|'products'|'campaigns'|'inbox'|'invoices'
const sections=[['sales','Sales',ChartNoAxesCombined],['products','Products',Package],['campaigns','Festival offers',Gift],['inbox','Reservations & reviews',Inbox],['invoices','Invoices',FileText]] as const
const titles:Record<View,[string,string]>={sales:['Your sales','See what your customers buy and how your business grows.'],products:['Your collection','Thoughtfully made. Beautifully presented.'],campaigns:['Festival offers','Create a season worth celebrating.'],inbox:['Reservations & reviews','Website requests and customer feedback.'],invoices:['Invoice studio','From your workshop to their home. Make it official.']}
function Shell(){
 const [view,setView]=useState<View>('sales'),[ready,setReady]=useState(false)
 useEffect(()=>{const note=document.getElementById('local-preview-note');if(note)document.querySelector('.studio-heading-top')?.after(note);const target=document.getElementById('admin-workspace')!;const sync=()=>setReady(!target.hidden);const observer=new MutationObserver(sync);observer.observe(target,{attributes:true,attributeFilter:['hidden']});sync();const nav=(e:Event)=>choose((e as CustomEvent).detail);window.addEventListener('studio:navigate',nav);return()=>{observer.disconnect();window.removeEventListener('studio:navigate',nav)}},[])
 function choose(next:View){setView(next);document.getElementById('admin-workspace')!.dataset.view=next;window.scrollTo({top:0,behavior:'instant'})}
 return <><aside className="studio-sidebar"><a className="studio-brand" href="index.html"><img src="logo-transparent.png" width="32" height="40" alt=""/><span>AKASH VETIVER<small>EXPORT</small></span></a><nav aria-label="Admin sections">{sections.map(([id,label,Icon])=><button key={id} aria-label={id === 'inbox' ? 'Requests: Reservations & reviews' : label} disabled={!ready} aria-current={view===id?'page':undefined} onClick={()=>choose(id)}><Icon size={19}/><span className="studio-nav-full">{label}</span><span className="studio-nav-short">{id==='campaigns'?'Offers':id==='inbox'?'Requests':label}</span></button>)}</nav><div className="studio-sidebar-foot"><p>Made with care.<br/>Managed with ease.</p><a href="index.html" target="_blank" rel="noopener">Visit your website <ArrowUpRight size={17}/></a></div></aside><div className="studio-heading"><div className="studio-heading-top"><span>Akash Vetiver / {ready?sections.find(x=>x[0]===view)?.[1]:'Welcome'}</span><a href="index.html" target="_blank" rel="noopener">View store <ArrowUpRight size={16}/></a></div><Banner id="studio-welcome-v1" changeLayout={false} variant="rainbow" height="2.25rem" message="Your collection, requests and invoices, together."/><div className="studio-page-title"><h1>{ready?titles[view][0]:'Your workshop awaits.'}</h1><p>{ready?titles[view][1]:'Sign in to care for your collection and customers.'}</p></div></div></>
}
export function mountStudio(){
 const root=document.createElement('div');root.id='studio-shell';document.body.prepend(root);createRoot(root).render(<Shell/>);
 const nav=document.getElementById('admin-products')!;const search=document.createElement('div');search.className='studio-product-search';const mount=document.createElement('span');search.append(mount);createRoot(mount).render(<Search size={17}/>);const input=document.createElement('input');input.type='search';input.placeholder='Find a product';input.setAttribute('aria-label','Find a product');const empty=document.createElement('p');empty.className='studio-search-empty';empty.hidden=true;empty.setAttribute('role','status');empty.textContent='No matching products. Try another name.';const filter=()=>{const q=input.value.trim().toLocaleLowerCase();let count=0;nav.querySelectorAll<HTMLElement>('.admin-product').forEach(e=>{e.hidden=!e.textContent?.toLocaleLowerCase().includes(q);if(!e.hidden)count++});empty.hidden=!q||count>0};input.oninput=filter;new MutationObserver(filter).observe(nav,{childList:true});nav.after(empty);search.append(input);const rail=document.createElement('div');rail.className='studio-product-rail';nav.before(rail);rail.append(search,nav,empty);

 // Keep the picker inside the visible viewport, including before it becomes sticky.
 const fitRail=()=>{
  if(matchMedia('(max-width:700px)').matches){rail.style.removeProperty('--studio-rail-height');return}
  const top=Math.max(24,rail.getBoundingClientRect().top);
  rail.style.setProperty('--studio-rail-height',Math.max(180,window.innerHeight-top-24)+'px');
 };
 let frame=0;
 const scheduleRail=()=>{if(!frame)frame=requestAnimationFrame(()=>{frame=0;fitRail()})};
 window.addEventListener('scroll',scheduleRail,{passive:true});window.addEventListener('resize',scheduleRail,{passive:true});
 new ResizeObserver(scheduleRail).observe(root);
 new MutationObserver(scheduleRail).observe(document.getElementById('admin-workspace')!,{attributes:true,attributeFilter:['hidden','data-view']});
 scheduleRail();
 document.getElementById('combo-schedule')!.addEventListener('click',()=>{
  document.getElementById('product-offer-settings')!.setAttribute('open','');
  document.getElementById('product-offers')!.focus();
 });
 document.getElementById('admin-workspace')!.dataset.view='sales';
 document.getElementById('product-editor')!.addEventListener('invalid',e=>{(e.target as HTMLElement).closest('details')?.setAttribute('open','')},true)
}
