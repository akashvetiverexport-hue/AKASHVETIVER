// Local, isolated admin workspace. Never used by the production build or Worker.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const {chromium}=require(process.env.PLAYWRIGHT_PATH||'C:/Users/avina/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright-core');
const root=path.resolve(__dirname,'..'),origin='http://127.0.0.1:4178',service='https://lgkkjubwdxdfpmoxkrmd.supabase.co',check=process.argv.includes('--sizes-check')||process.argv.includes('--check')||process.argv.includes('--studio-check')||process.argv.includes('--audit-check')||process.argv.includes('--archive-check');
const draft=path.join(root,'.drafts',check?'admin-preview-check.json':'admin-preview.json'),imageRoot=path.join(root,'.drafts','admin-preview-images');
fs.mkdirSync(path.dirname(draft),{recursive:true});
let data=!check&&fs.existsSync(draft)?JSON.parse(fs.readFileSync(draft,'utf8')):{products:JSON.parse(fs.readFileSync(path.join(root,'data/products.json'),'utf8')).map(p=>({...p,version:1})),festival_campaigns:[],order_requests:[],customer_feedback:[]};
data.invoices ??= [];
data.invoice_highest ??= data.invoices.reduce((n,i)=>/^\d+$/.test(i.number)&&BigInt(i.number)>BigInt(n)?i.number:n,'0');
const save=()=>{fs.writeFileSync(draft+'.tmp',JSON.stringify(data,null,2));fs.renameSync(draft+'.tmp',draft)};
const user={id:'11111111-1111-4111-8111-111111111111',email:'akashvetiverexport@gmail.com',aud:'authenticated',role:'authenticated',app_metadata:{provider:'email'},user_metadata:{},created_at:new Date().toISOString()};
const exp=Math.floor(Date.now()/1000)+86400;
const token=Buffer.from(JSON.stringify({alg:'HS256',typ:'JWT'})).toString('base64url')+'.'+Buffer.from(JSON.stringify({sub:user.id,exp,aud:'authenticated',role:'authenticated'})).toString('base64url')+'.LOCAL_PREVIEW_ONLY';
const active=c=>c.enabled&&Date.parse(c.starts_at)<=Date.now()&&Date.parse(c.ends_at)>Date.now();
const imageFile=key=>{if(!/^[a-zA-Z0-9_/-]+\.webp$/.test(key))throw new Error('Invalid preview image');const file=path.resolve(imageRoot,key);if(!file.startsWith(imageRoot+path.sep))throw new Error('Invalid path');return file};
(async()=>{
 try{await fetch(origin+'/admin.html',{signal:AbortSignal.timeout(2000)})}catch{throw new Error('Start the local website first: npm run preview')}
 const browser=await chromium.launch({channel:"chrome",headless:check,args:check?[]:['--start-maximized']});
 const context=await browser.newContext({viewport:check?{width:1440,height:1000}:null});
 await context.addInitScript(({user,token,exp})=>{
  if(location.hostname!=='127.0.0.1')return;
  localStorage.setItem('sb-lgkkjubwdxdfpmoxkrmd-auth-token',JSON.stringify({access_token:token,refresh_token:'LOCAL_PREVIEW_ONLY',expires_at:exp,expires_in:86400,token_type:'bearer',user}));
  const banner=()=>{const note=document.createElement('aside');note.id='local-preview-note';note.setAttribute('role','note');note.style.cssText='position:relative;z-index:100;padding:12px 20px;background:#f5e7b9;color:#403117;font:14px/1.5 system-ui;text-align:center';note.textContent='LOCAL PREVIEW — changes are saved on this computer only. No login, emails or live website changes.';document.body.prepend(note);document.title='Local preview · '+document.title;const out=document.getElementById('sign-out');if(out)out.style.display='none'};
  document.addEventListener('DOMContentLoaded',banner,{once:true});
 },{user,token,exp});
 await context.route('**/*',async route=>{
  const request=route.request(),url=new URL(request.url()),method=request.method();
  const json=(body,status=200)=>route.fulfill({status,contentType:'application/json',body:JSON.stringify(body),headers:{'Cache-Control':'no-store'}});
  if(url.origin===origin){
   if(url.pathname==='/site-config.js')return route.fulfill({contentType:'application/javascript',body:'window.VETTIVER_CONFIG='+JSON.stringify({supabaseUrl:service,supabasePublishableKey:'sb_publishable_local_preview',catalogSource:'supabase',catalogEndpoint:'/api/catalog',requestsEndpoint:'/api/requests',feedbackEndpoint:'/api/feedback',reviewsEndpoint:'/api/reviews'})});
   if(url.pathname==='/api/catalog')return json(data.products.filter(p=>p.status==='published').sort((a,b)=>a.sort_order-b.sort_order));
   if(url.pathname==='/api/campaigns')return json(data.festival_campaigns.filter(active));
   if(url.pathname==='/api/reviews')return json([]);
   if(url.pathname.startsWith('/api/'))return json({error:'Local preview does not send customer requests or emails.'},503);
   return route.continue();
  }
  // No real Supabase request is allowed out of this preview browser.
  if(url.origin!==service)return route.abort();
  if(url.pathname==='/rest/v1/rpc/is_vettiver_admin')return json(true);
  if(url.pathname==='/rest/v1/rpc/vettiver_next_invoice_number'){data.invoice_highest=data.invoices.reduce((n,i)=>/^\d+$/.test(i.number)&&BigInt(i.number)>BigInt(n)?i.number:n,data.invoice_highest);return json(String(BigInt(data.invoice_highest)+1n));}
  if(url.pathname==='/rest/v1/rpc/vettiver_delete_exported_invoices'){
   const {p_snapshots:rows,p_from:from,p_to:to}=request.postDataJSON();
   const canonical=v=>Array.isArray(v)?'['+v.map(canonical).join(',')+']':v&&typeof v==='object'?'{'+Object.entries(v).sort(([a],[b])=>a.localeCompare(b)).map(([k,x])=>JSON.stringify(k)+':'+canonical(x)).join(',')+'}':JSON.stringify(v);
   const clean=i=>Object.fromEntries(Object.entries(i).filter(([k])=>k!=='version'));
   if(!Array.isArray(rows)||!rows.length||rows.length>5000||new Set(rows.map(i=>i.id)).size!==rows.length||from>to||to>=new Date().toISOString().slice(0,10))return json({message:'Invalid archive range'},400);
   if(rows.some(i=>{const current=data.invoices.find(x=>x.id===i.id);return !current||i.issued_on<from||i.issued_on>to||canonical(clean(current))!==canonical(clean(i))}))return json({message:'Records changed since export'},409);
   const ids=new Set(rows.map(i=>i.id));data.invoices=data.invoices.filter(i=>!ids.has(i.id));save();return json(rows.length);
  }

  if(url.pathname==='/auth/v1/user')return json(user);
  if(url.pathname==='/auth/v1/token')return json({user,access_token:token,refresh_token:'LOCAL_PREVIEW_ONLY',expires_in:86400,token_type:'bearer'});
  if(url.pathname.startsWith('/auth/'))return json({error:'Email login is disabled in local preview.'},400);
  const publicPrefix='/storage/v1/object/public/product-images/',uploadPrefix='/storage/v1/object/product-images/';
  if(url.pathname.startsWith(publicPrefix)){
   try{return route.fulfill({contentType:'image/webp',body:fs.readFileSync(imageFile(url.pathname.slice(publicPrefix.length)))})}catch{return route.fulfill({status:404,body:'Preview image not found'})}
  }
  if(method==='POST'&&url.pathname.startsWith(uploadPrefix)){
   const file=imageFile(url.pathname.slice(uploadPrefix.length)),raw=request.postDataBuffer();let bytes=raw;
   const type=request.headers()['content-type']||'';
   if(type.startsWith('multipart/form-data')){const form=await new Response(raw,{headers:{'Content-Type':type}}).formData();const image=[...form.values()].find(v=>typeof v!=='string'&&v.type==='image/webp');if(!image)return json({message:'Expected WebP photo'},400);bytes=Buffer.from(await image.arrayBuffer())}
   if(!bytes||bytes.length>524288)return json({message:'Photo is too large'},400);
   fs.mkdirSync(path.dirname(file),{recursive:true});fs.writeFileSync(file,bytes);return json({Key:url.pathname});
  }
  const table=url.pathname.split('/').pop();if(!Object.hasOwn(data,table)||!url.pathname.startsWith('/rest/v1/'))return json({message:'Unavailable in local preview'},404);
  const matches=row=>[...url.searchParams].filter(([key])=>['id','version','status','issued_on'].includes(key)).every(([key,value])=>value.startsWith('gte.')?String(row[key])>=value.slice(4):value.startsWith('lte.')?String(row[key])<=value.slice(4):value==='eq.'+String(row[key]));
  if(method==='GET'){const rows=data[table].filter(matches);const offset=Number(url.searchParams.get('offset')||0),limit=Number(url.searchParams.get('limit')||500);return json(rows.slice(offset,offset+limit))}
  const existing=data[table].find(matches);
  if(method!=='POST'&&!existing)return json({code:'PGRST116',message:'Record changed; reload before retrying.'},406);
  if(method==='DELETE'){
   data[table]=data[table].filter(row=>row.id!==existing.id);
   if(table==='products')for(const p of data.products)if(p.combo_product_id===existing.id){p.combo_product_id=null;p.version++}
   if(table==='festival_campaigns')for(const p of data.products)if(p.campaign_id===existing.id){p.campaign_id=null;p.offers_enabled=false;p.version++}
   save();return json({id:existing.id});
  }
  if(!['POST','PATCH'].includes(method))return json({message:'Unsupported preview action'},400);
  const incoming=request.postDataJSON();const record={...(method==='PATCH'?existing:{}),...incoming,id:incoming.id||(method==='PATCH'?existing.id:crypto.randomUUID()),version:(method==='PATCH'?existing.version:0)+1};
  if(table==='invoices'){if(method==='POST'&&/^\d+$/.test(record.number)&&BigInt(record.number)<=BigInt(data.invoice_highest))return json({code:'23505',message:'Invoice number already used'},409);if(data.invoices.some(i=>i.id!==record.id&&i.number===record.number))return json({code:'23505',message:'Invoice number exists'},409);if(method==='PATCH'&&(existing.status!=='issued'||incoming.status!=='void'||Object.keys(incoming).some(k=>k!=='status')))return json({message:'Saved invoices cannot be edited'},400);record.created_at=existing?.created_at||new Date().toISOString();record.subtotal=record.items.reduce((n,i)=>n+Math.round(i.quantity*i.price*100)/100,0);record.total=record.subtotal+record.shipping;record.balance=record.total-record.advance;if(method==='POST'&&/^\d+$/.test(record.number))data.invoice_highest=record.number;}
  if(table==='products'&&data.products.some(p=>p.id!==record.id&&(p.name.trim().toLowerCase()===record.name.trim().toLowerCase()||(record.status==='published'&&record.featured_order!=null&&p.status==='published'&&p.featured_order===record.featured_order))))return json({code:'23505',message:'Name or feature position already used'},409);
  data[table]=data[table].filter(row=>row.id!==record.id);data[table].push(record);save();return json(record);
 });
 const page=await context.newPage();await page.goto(origin+'/admin.html');await page.locator('#admin-workspace').waitFor({state:'visible'});
 if(process.argv.includes('--sizes-check')){await require('./verify-admin-sizes.cjs')(page,data,draft);await browser.close();return;}
 if(process.argv.includes('--archive-check')){await require('./verify-invoice-archive-ui.cjs')(page,data,draft,origin);await browser.close();return;}
 if(process.argv.includes('--audit-check')){await require('./verify-admin-audit.cjs')(page,data,draft,origin);await browser.close();return;}
 if(process.argv.includes('--studio-check')){await require('./verify-studio-flow.cjs')(page,data,draft,origin);await browser.close();return;}
 if(check){
  await page.getByRole('button',{name:'Products',exact:true}).click();const id=data.products[0].id;await page.locator(`.admin-product[data-id="${id}"]`).click();await page.locator('#product-price').fill('777');await page.locator('#save-product').click();await page.waitForFunction(()=>document.querySelector('#save-status').textContent.includes('Saved and published'));await page.reload();await page.getByRole('button',{name:'Products',exact:true}).click();await page.locator(`.admin-product[data-id="${id}"]`).click();assert.equal(await page.locator('#product-price').inputValue(),'777');assert.equal(JSON.parse(fs.readFileSync(draft,'utf8')).products.find(p=>p.id===id).price,777);await page.screenshot({path:'C:/Users/avina/vettiver-local-admin-preview.png'});await browser.close();console.log('PASS local preview: no login, editable product price, persistence after reload, all Supabase requests intercepted. Live data unchanged.');return;
 }
 console.log('LOCAL ADMIN OPEN: use this browser window. Changes persist in .drafts/admin-preview.json; the live website is unchanged. Close the browser to stop.');
 await new Promise(resolve=>browser.on('disconnected',resolve));
})().catch(error=>{console.error(error.message);process.exitCode=1});
