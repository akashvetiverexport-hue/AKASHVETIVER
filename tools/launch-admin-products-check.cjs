// Mocked service checks. Live RLS/storage authorization must also be tested after connection.
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {chromium}=require(process.env.PLAYWRIGHT_PATH||'C:/Users/avina/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright-core');
const root=path.join(__dirname,'..'),origin='http://127.0.0.1:4178',service='https://lgkkjubwdxdfpmoxkrmd.supabase.co';
const products=JSON.parse(fs.readFileSync(path.join(root,'data/products.json'),'utf8')).map(p=>({...p,version:1}));
const user={id:'11111111-1111-4111-8111-111111111111',email:'akashvetiverexport@gmail.com',aud:'authenticated',role:'authenticated',app_metadata:{provider:'email'},user_metadata:{},created_at:new Date().toISOString()};
const exp=Math.floor(Date.now()/1000)+3600;
const token=Buffer.from(JSON.stringify({alg:'HS256',typ:'JWT'})).toString('base64url')+'.'+Buffer.from(JSON.stringify({sub:user.id,exp,aud:'authenticated',role:'authenticated'})).toString('base64url')+'.test';
(async()=>{const browser=await chromium.launch();try{
 for(const width of [1440,390]){
  const page=await browser.newPage({viewport:{width,height:900}});page.on('dialog',dialog=>dialog.accept());
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.addInitScript(({user,token,exp})=>localStorage.setItem('sb-lgkkjubwdxdfpmoxkrmd-auth-token',JSON.stringify({access_token:token,refresh_token:'test',expires_at:exp,expires_in:3600,token_type:'bearer',user})),{user,token,exp});
  await page.route('**/site-config.js',route=>route.fulfill({contentType:'application/javascript',body:'window.VETTIVER_CONFIG='+JSON.stringify({supabaseUrl:service,supabasePublishableKey:'sb_publishable_test',catalogSource:'local'})}));
  let rows=structuredClone(products),writes=[],uploads=[],allowed=true;
  await page.route(service+'/**',async route=>{
   const request=route.request(),url=new URL(request.url());
   const json=body=>route.fulfill({contentType:'application/json',body:JSON.stringify(body)});
   if(url.pathname==='/rest/v1/rpc/is_vettiver_admin')return json(allowed);
   if(url.pathname==='/auth/v1/user')return json(user);
   if(url.pathname==='/auth/v1/logout')return json({});
   if(url.pathname.startsWith('/storage/v1/object/public/'))return route.fulfill({contentType:'image/webp',body:fs.readFileSync(path.join(root,products[0].thumbnail))});
   if(url.pathname.startsWith('/storage/v1/object/')&&request.method()==='POST'){
    uploads.push({length:request.postDataBuffer()?.length||0,path:url.pathname});return json({Key:url.pathname});
   }
   if(url.pathname==='/rest/v1/products'){
    if(request.method()==='GET')return json(rows);
    const record=request.postDataJSON();writes.push(record);
    const existing=rows.find(p=>p.id===record.id),saved={...record,version:(existing?.version||0)+1};rows=rows.filter(p=>p.id!==record.id);rows.push(saved);return json(saved);
   }
   return route.fulfill({status:404,body:'Unexpected mock route'});
  });
  await page.goto(origin+'/admin.html');await page.locator('#admin-workspace').waitFor({state:'visible'});
  assert.equal(await page.locator('.admin-product').count(),12);
  await page.getByRole('button',{name:'Products',exact:true}).click();await page.locator('#product-name').fill('Admin upload test');await page.locator('#product-description').fill('A test product for checking the upload pipeline.');assert.equal(await page.locator('#product-alt').count(),0);await page.locator('#product-category').selectOption('roots');
  await page.locator('#product-photo').setInputFiles(path.join(root,'images/products/studio-v1/malai-pair.png'));
  await page.waitForFunction(()=>document.querySelector('#photo-status').textContent.includes('Ready to save'));
  await page.locator('#product-status').selectOption('published');await page.locator('#save-product').click();
  await page.waitForFunction(()=>document.querySelector('#save-status').textContent.includes('Saved and published'));
  assert.equal(uploads.length,2);assert.ok(uploads[0].length<460*1024);assert.ok(uploads[1].length<70*1024);
  assert.equal(writes[0].category,'roots');assert.equal(writes[0].alt,'Admin upload test');assert.equal(writes[0].status,'published');assert.equal(writes[0].featured_order,null);assert.match(writes[0].image,/\.webp$/);assert.match(writes[0].thumbnail,/-thumb\.webp$/);
  assert.equal(await page.locator('.admin-product').count(),13);
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1),false);
  await page.locator('#admin-workspace').scrollIntoViewIfNeeded();await page.screenshot({path:`C:/Users/avina/vettiver-admin-${width}.png`,fullPage:true});
  await page.locator('#archive-product').click();await page.waitForFunction(()=>document.querySelector('#save-status').textContent.includes('hidden from customers'));
  assert.equal(writes[1].status,'archived');assert.equal(uploads.length,2);
  allowed=false;await page.reload();await page.waitForFunction(()=>document.querySelector('#admin-status').textContent.includes('does not have'));
  assert.equal(await page.locator('#admin-workspace').isVisible(),false);assert.deepEqual(errors,[]);
  console.log(`PASS ${width}: authenticated admin UI, image compression before upload, publish, archive, no automatic homepage feature, unauthorized UI denied.`);await page.close();
 }
}finally{await browser.close()}})().catch(error=>{console.error(error);process.exitCode=1});

