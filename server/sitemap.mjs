import site from './public-site.mjs'
const ID=/^product-[a-z0-9-]{1,90}$/
const esc=value=>String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&apos;')
export async function sitemapPage(loadCatalog){
 try{
  const response=await loadCatalog()
  if(!response.ok)throw new Error('catalog unavailable')
  const rows=await response.json()
  if(!Array.isArray(rows))throw new Error('invalid catalog')
  const ids=[...new Set(rows.filter(p=>p&&p.status==='published'&&ID.test(p.id)).map(p=>p.id))].sort()
  const today=new Date().toISOString().split('T')[0]
  const entries=[
    {path:'/',priority:'1.0',changefreq:'weekly'},
    {path:'/products',priority:'0.9',changefreq:'daily'},
    ...ids.map(id=>({path:'/pieces/'+id,priority:'0.8',changefreq:'weekly'})),
    {path:'/legal',priority:'0.3',changefreq:'monthly'}
  ]
  const xml='<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+entries.map(e=>'  <url>\n    <loc>'+esc(site.origin+e.path)+'</loc>\n    <lastmod>'+today+'</lastmod>\n    <changefreq>'+e.changefreq+'</changefreq>\n    <priority>'+e.priority+'</priority>\n  </url>').join('\n')+'\n</urlset>\n'
  return new Response(xml,{headers:{'Content-Type':'application/xml; charset=utf-8','Cache-Control':'public, max-age=30','X-Content-Type-Options':'nosniff'}})
 }catch{
  return new Response('Sitemap temporarily unavailable. Please retry.',{status:503,headers:{'Content-Type':'text/plain; charset=utf-8','Cache-Control':'no-store','Retry-After':'30','X-Content-Type-Options':'nosniff'}})
 }
}
