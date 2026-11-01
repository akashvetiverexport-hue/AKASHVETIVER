// Local, isolated admin workspace. Never used by the production build or Worker.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const {chromium}=require(process.env.PLAYWRIGHT_PATH||'C:/Users/avina/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright-core');
const root=path.resolve(__dirname,'..'),origin='http://127.0.0.1:4178',service='https://lgkkjubwdxdfpmoxkrmd.supabase.co',check=process.argv.includes('--check')||process.argv.includes('--studio-check')||process.argv.includes('--audit-check');
const draft=path.join(root,'.drafts',check?'admin-refinement-check.json':'admin-preview.json'),imageRoot=path.join(root,'.drafts','admin-preview-images');
fs.mkdirSync(path.dirname(draft),{recursive:true});
let data=!check&&fs.existsSync(draft)?JSON.parse(fs.readFileSync(draft,'utf8')):{products:JSON.parse(fs.readFileSync(path.join(root,'data/products.json'),'utf8')).map(p=>({...p,version:1})),festival_campaigns:[],order_requests:[],customer_feedback:[]};
data.invoices ??= [];
const save=()=>{fs.writeFileSync(draft+'.tmp',JSON.stringify(data,null,2));fs.renameSync(draft+'.tmp',draft)};
const user={id:'11111111-1111-4111-8111-111111111111',email:'akashvetiverexport@gmail.com',aud:'authenticated',role:'authenticated',app_metadata:{provider:'email'},user_metadata:{},created_at:new Date().toISOString()};
const exp=Math.floor(Date.now()/1000)+86400;
const token=Buffer.from(JSON.stringify({alg:'HS256',typ:'JWT'})).toString('base64url')+'.'+Buffer.from(JSON.stringify({sub:user.id,exp,aud:'authenticated',role:'authenticated'})).toString('base64url')+'.LOCAL_PREVIEW_ONLY';
const active=c=>c.enabled&&Date.parse(c.starts_at)<=Date.now()&&Date.parse(c.ends_at)>Date.now();
const imageFile=key=>{if(!/^[a-zA-Z0-9_/-]+\.webp$/.test(key))throw new Error('Invalid preview image');const file=path.resolve(imageRoot,key);if(!file.startsWith(imageRoot+path.sep))throw new Error('Invalid path');return file};
(async()=>{
 try{await fetch(origin+'/admin.html',{signal:AbortSignal.timeout(2000)})}catch{throw new Error('Start the local website first: npm run preview')}
 const browser=await chromium.launch({headless:check,args:check?[]:['--start-maximized']});
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
  const matches=row=>[...url.searchParams].filter(([key])=>['id','version','status'].includes(key)).every(([key,value])=>value==='eq.'+String(row[key]));
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
  if(table==='invoices'){if(data.invoices.some(i=>i.id!==record.id&&i.number===record.number))return json({code:'23505',message:'Invoice number exists'},409);if(method==='PATCH'&&(existing.status!=='issued'||incoming.status!=='void'||Object.keys(incoming).some(k=>k!=='status')))return json({message:'Saved invoices cannot be edited'},400);record.created_at=existing?.created_at||new Date().toISOString();record.subtotal=record.items.reduce((n,i)=>n+Math.round(i.quantity*i.price*100)/100,0);record.total=record.subtotal+record.shipping;record.balance=record.total-record.advance;}
  if(table==='products'&&data.products.some(p=>p.id!==record.id&&(p.name.trim().toLowerCase()===record.name.trim().toLowerCase()||(record.status==='published'&&record.featured_order!=null&&p.status==='published'&&p.featured_order===record.featured_order))))return json({code:'23505',message:'Name or feature position already used'},409);
  data[table]=data[table].filter(row=>row.id!==record.id);data[table].push(record);save();return json(record);
 });
 const page=await context.newPage();await page.goto(origin+'/admin.html');await page.locator('#admin-workspace').waitFor({state:'visible'});
 if(process.argv.includes('--audit-check')){await require('./verify-admin-audit.cjs')(page,data,draft,origin);await browser.close();return;}
 if(process.argv.includes('--studio-check')){await require('./verify-studio-flow.cjs')(page,data,draft,origin);await browser.close();return;}
 if(check){
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 for(const width of [1440,768,390,320]){
  await page.setViewportSize({width,height:900});
  await page.getByRole('button',{name:'Products',exact:true}).click();
  await page.waitForTimeout(150);
  const nav=page.locator('#admin-products');
  await nav.evaluate(e=>e.scrollTop=0);await nav.hover();
  const before=await page.evaluate(()=>window.scrollY);
  await page.mouse.wheel(0,350);await page.waitForTimeout(200);
  const after=await page.evaluate(()=>({page:scrollY,list:document.querySelector('#admin-products').scrollTop,overflow:document.documentElement.scrollWidth>innerWidth}));
  assert.ok(after.list>0,'Product list must scroll at '+width);assert.equal(after.page,before,'Product wheel must not scroll page at '+width);assert.equal(after.overflow,false);
  await nav.evaluate(e=>e.scrollTop=e.scrollHeight);await page.mouse.wheel(0,500);await page.waitForTimeout(150);assert.equal(await page.evaluate(()=>scrollY),before,'List edge must not chain to page at '+width);
  await nav.evaluate(e=>e.scrollTop=0);
  if(width===390||width===1440)await page.screenshot({path:'C:/Users/avina/admin-refined-products-'+width+'.png'});
 }
 await page.setViewportSize({width:1440,height:1000});
 await page.getByRole('button',{name:'Products',exact:true}).click();await page.locator('.admin-product').first().click();
 assert.equal(await page.locator('.admin-combos #combo-product').count(),1);
 assert.equal(await page.locator('#product-offer-settings #combo-product').count(),0);
 await page.locator('.admin-combos summary').click();await page.locator('#combo-product').selectOption(data.products[1].id);await page.locator('#combo-price').fill('700');
 await page.getByRole('button',{name:'Set offer dates',exact:true}).click();assert.equal(await page.locator('#product-offer-settings').evaluate(e=>e.open),true);
 await page.locator('#product-offers').check();await page.locator('#offer-start').fill('2026-01-01T00:00');await page.locator('#offer-end').fill('2027-12-31T23:59');
 await page.locator('#save-product').click();await page.waitForFunction(()=>document.querySelector('#save-status').textContent.includes('Saved and published'));
 assert.equal(await page.locator('#combo-product').inputValue(),data.products.find(p=>p.combo_price===700).combo_product_id);
 await page.getByRole('button',{name:'Reservations & reviews',exact:true}).click();assert.match(await page.locator('.inbox-source').innerText(),/website form/);assert.equal(await page.getByRole('heading',{name:'Reservations',exact:true}).count(),1);
 assert.deepEqual(errors,[]);console.log('PASS admin refinement: product wheel containment and edge containment at 320/390/768/1440, no page overflow, separate combo controls persist, reservation wording. Isolated fixtures only.');await browser.close();return;
 }
 console.log('LOCAL ADMIN OPEN: use this browser window. Changes persist in .drafts/admin-preview.json; the live website is unchanged. Close the browser to stop.');
 await new Promise(resolve=>browser.on('disconnected',resolve));
})().catch(error=>{console.error(error.message);process.exitCode=1});
