import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
const root = fileURLToPath(new URL('../', import.meta.url))
const all = JSON.parse(await readFile(root+'data/products.json','utf8'))
const products = all.filter(p => p.status === 'published').sort((a,b) => a.sort_order-b.sort_order)
const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))
const labels = {garland:'Garlands',toran:'Door hangings',decor:'Décor & crafts',ceremony:'Ceremonial',roots:'Raw vetiver roots'}
const cards = products.map((p,index) => `<article class="product-card" id="${escape(p.id)}" data-category="${escape(p.category)}"><button class="product-image" data-product-open aria-label="View ${escape(p.name)}"><img src="${escape(p.thumbnail)}" data-full="${escape(p.image)}" srcset="${escape(p.thumbnail)} 320w, ${escape(p.image)} 1200w" sizes="(max-width: 700px) calc((100vw - 64px)/2), (max-width: 1100px) 28vw, 300px" alt="${escape(p.alt)}" width="1200" height="1200" loading="${index < 2 ? 'eager' : 'lazy'}" decoding="async"><span class="product-view"><img src="assets/icons/plus.svg" width="21" height="21" alt=""></span></button><div class="product-meta"><span>${labels[p.category]}</span><span>${p.category==='roots'?'Natural vetiver':'Handcrafted'}</span></div><h3><a href="/pieces/${escape(p.id)}" data-product-open>${escape(p.name)}</a></h3><p class="product-description">${escape(p.description)}</p><button class="product-enquire" data-enquire="${escape(p.name)}">Reserve this piece <img src="assets/icons/arrow-up-right.svg" alt="" width="18" height="18"></button></article>`).join('\n')
const options = '<option value="">Help me choose</option>'+products.map(p=>`<option data-product-id="${escape(p.id)}">${escape(p.name)}</option>`).join('')+'<option data-product-id="custom">A custom vetiver piece</option>'
for (const file of ['index.html','products.html']) {
 let html = await readFile(root+file,'utf8')
 html = html.replace(/(<select id="enquiry-product"[^>]*>)[\s\S]*?<\/select>/, `$1${options}</select>`)
 html = html.replace(/(<div class="product-grid" id="product-grid">)[\s\S]*?(\s*<div class="empty-state")/, `$1\n${cards}\n</div>\n$2`)
 html = html.replace(/(data-filter="all"[^>]*>All pieces <span>)\d+/, `$1${products.length}`)
 if (!html.includes('src="catalog-data.js"')) html = html.replace('<script src="catalog.js"', '<script src="catalog-data.js" defer></script>\n  <script src="catalog.js"')
 await writeFile(root+file,html)
}
await writeFile(root+'catalog-data.js', '// Generated from data/products.json. Do not edit.\nwindow.VETTIVER_LOCAL_PRODUCTS = '+JSON.stringify(products)+';\n')
// Seed is deliberately insert-only so rerunning it never overwrites admin edits.
const sql = value => value === null ? 'null' : typeof value === 'number' ? String(value) : "'"+String(value).replaceAll("'","''")+"'"
const columns = ['id','category','name','image','thumbnail','alt','description','status','sort_order','featured_order']
await writeFile(root+'supabase/seed-products.sql', '-- Run after the migration. Existing product rows are preserved.\ninsert into public.products ('+columns.join(',')+') values\n'+all.map(p=>'('+columns.map(k=>sql(p[k])).join(',')+')').join(',\n')+'\non conflict (id) do nothing;\n')
console.log(`Generated catalogue, selectors and seed for ${products.length} products.`)
