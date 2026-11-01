import {readFile,writeFile} from 'node:fs/promises'
import {fileURLToPath} from 'node:url'
import path from 'node:path'
const root=fileURLToPath(new URL('../',import.meta.url))
const config=JSON.parse(await readFile(path.join(root,'public-site.json'),'utf8'))
const base=new URL(config.origin)
if(base.protocol!=='https:'||base.username||base.password||base.pathname!=='/'||base.search||base.hash)throw new Error('public-site.json origin must be an HTTPS origin without path or credentials')
const origin=base.origin,absolute=p=>new URL(p,origin).href
await writeFile(path.join(root,'server/public-site.mjs'),'// Generated from public-site.json by tools/generate-seo.mjs. Do not edit directly.\nexport default '+JSON.stringify({...config,origin},null,2)+'\n')
const escape=value=>String(value).replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;')
const pages=[
 {file:'index.html',url:'/',title:'Vetiver Garlands & Crafts | Akash Vetiver Cuddalore',description:'Discover vetiver garlands (vettiver malai), door hangings and ceremonial crafts from our family business in Cuddalore, Tamil Nadu.',type:'WebPage'},
 {file:'products.html',url:'/products',title:'Vetiver Malai & Door Hangings | Akash Vetiver',description:'Explore vetiver malai, door hangings and ceremonial pieces from our Cuddalore, Tamil Nadu family business. View prices and send an enquiry. We will contact you to confirm your order.',type:'CollectionPage'},
 {file:'legal.html',url:'/legal',title:'Privacy & Customer Information | Akash Vetiver',description:'Read how Akash Vetiver in Cuddalore handles enquiries, privacy, delivery, returns and customer concerns.',type:'WebPage'}
]

const today = new Date().toISOString().split('T')[0]

for(const page of pages){
 let html=await readFile(path.join(root,page.file),'utf8')
 html=html.replace(/<!-- SEO:START -->[\s\S]*?<!-- SEO:END -->\s*/g,'').replace(/<title>[\s\S]*?<\/title>\s*/g,'').replace(/<meta\s+(?:name="(?:description|twitter:[^"]+)"|property="og:[^"]+")[^>]*>\s*/g,'').replace(/<link\s+rel="canonical"[^>]*>\s*/g,'')
 const url=absolute(page.url),image=absolute('/images/optimized/products/studio-v1/malai-pair.webp')
 
 const org = {
   '@type': ['Organization', 'LocalBusiness'],
   '@id': origin+'/#organization',
   name: config.name,
   url: absolute('/'),
   logo: absolute('/logo.png'),
   email: config.email,
   priceRange: '₹₹',
   founder: [
     {'@type': 'Person', 'name': 'Avinash'},
     {'@type': 'Person', 'name': 'Mathivanan'}
   ],
   address: {
     '@type': 'PostalAddress',
     streetAddress: 'Cuddalore',
     addressLocality: 'Cuddalore',
     addressRegion: 'Tamil Nadu',
     postalCode: '608801',
     addressCountry: 'IN'
   },
   geo: {
     '@type': 'GeoCoordinates',
     latitude: 11.748,
     longitude: 79.768
   },
   areaServed: [
     'Cuddalore', 'Chennai', 'Madurai', 'Coimbatore', 'Salem', 'Tiruchirappalli', 'Tirunelveli', 'Erode', 'Vellore', 'Thanjavur', 'Tamil Nadu', 'India'
   ],
   openingHoursSpecification: [
     {
       '@type': 'OpeningHoursSpecification',
       dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
       opens: '09:00',
       closes: '18:00'
     }
   ]
 }

 const graph=[
   org,
   {'@type':'WebSite','@id':origin+'/#website',name:config.name,url:absolute('/'),publisher:{'@id':origin+'/#organization'},inLanguage:'en-IN','potentialAction':{'@type':'SearchAction','target':absolute('/products')+'?q={search_term_string}','query-input':'required name=search_term_string'}},
   {'@type':page.type,'@id':url+'#webpage',url,name:page.title,description:page.description,isPartOf:{'@id':origin+'/#website'},about:{'@id':origin+'/#organization'},inLanguage:'en-IN'}
 ]

 if(page.file==='index.html'){
   graph.push({
     '@type': 'FAQPage',
     '@id': absolute('/') + '#faq',
     'mainEntity': [
       {
         '@type': 'Question',
         'name': 'What are vetiver garlands made from?',
         'acceptedAnswer': {
           '@type': 'Answer',
           'text': 'Our vetiver garlands (vettiver malai) are handcrafted from 100% pure, natural vetiver roots (vilamichai / khus) freshly harvested in Cuddalore, Tamil Nadu. We never mix coir, artificial fillers, or synthetic fragrances.'
         }
       },
       {
         '@type': 'Question',
         'name': 'How do I place an order?',
         'acceptedAnswer': {
           '@type': 'Answer',
           'text': 'Browse our collection, select your desired piece or garland, and submit your reservation details. We will directly contact you via WhatsApp to confirm dimensions, personalization, availability, and delivery schedule.'
         }
       },
       {
         '@type': 'Question',
         'name': 'Can I place a bulk order?',
         'acceptedAnswer': {
           '@type': 'Answer',
           'text': 'Yes. We specialize in bulk orders for weddings, temple festivals, corporate gifts, and spiritual ceremonies with tiered source pricing direct from our Cuddalore craft studio.'
         }
       },
       {
         '@type': 'Question',
         'name': 'When do I pay?',
         'acceptedAnswer': {
           '@type': 'Answer',
           'text': 'No payment is taken on this website. Payment is only arranged directly via WhatsApp or bank transfer after your order specifics and delivery timeline have been personally verified.'
         }
       },
       {
         '@type': 'Question',
         'name': 'Do you deliver outside Cuddalore?',
         'acceptedAnswer': {
           '@type': 'Answer',
           'text': 'Yes. We deliver across all Tamil Nadu districts (including Chennai, Madurai, Coimbatore, Cuddalore, Trichy, Salem) as well as pan-India shipping with protective craft packaging.'
         }
       },
       {
         '@type': 'Question',
         'name': 'What makes your vetiver different from others?',
         'acceptedAnswer': {
           '@type': 'Answer',
           'text': 'We are the primary grower and artisan family in Cuddalore. You get authentic, unadulterated pure root craftsmanship without middleman markups or synthetic adulteration.'
         }
       }
     ]
   })
 }

 const json=JSON.stringify({'@context':'https://schema.org','@graph':graph}).replaceAll('<','\\u003c')
 const lines=['<!-- SEO:START -->','<title>'+escape(page.title)+'</title>','<meta name="description" content="'+escape(page.description)+'">','<link rel="canonical" href="'+url+'">','<meta property="og:type" content="website">','<meta property="og:site_name" content="'+escape(config.name)+'">','<meta property="og:title" content="'+escape(page.title)+'">','<meta property="og:description" content="'+escape(page.description)+'">','<meta property="og:url" content="'+url+'">','<meta property="og:locale" content="en_IN">','<meta property="og:image" content="'+image+'">','<meta property="og:image:alt" content="Handcrafted vetiver wedding garland pair with decorative thread">','<meta name="twitter:card" content="summary_large_image">','<meta name="twitter:title" content="'+escape(page.title)+'">','<meta name="twitter:description" content="'+escape(page.description)+'">','<meta name="twitter:image" content="'+image+'">','<meta name="twitter:image:alt" content="Handcrafted vetiver wedding garland pair">','<script type="application/ld+json">'+json+'</script>','<!-- SEO:END -->'].join('\n  ')
 html=html.replace('</head>',lines+'\n</head>')
 await writeFile(path.join(root,page.file),html)
}

const robotsTxt = `User-agent: *
Allow: /
Disallow: /api/

User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: CCBot
Allow: /

User-agent: ChatGPT-User
Allow: /

Sitemap: ${absolute('/sitemap.xml')}
`
await writeFile(path.join(root,'robots.txt'), robotsTxt)

await writeFile(path.join(root,'sitemap.xml'),'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+pages.map(p=>'  <url>\n    <loc>'+absolute(p.url)+'</loc>\n    <lastmod>'+today+'</lastmod>\n    <priority>'+(p.url==='/'?'1.0':(p.url==='/products'?'0.9':'0.3'))+'</priority>\n  </url>').join('\n')+'\n</urlset>\n')

await writeFile(path.join(root,'llms.txt'),'# Akash Vetiver Export\n\n> Handcrafted vetiver garlands (vettiver malai), door hangings and ceremonial crafts from our family business in Cuddalore, Tamil Nadu.\n\n## Public pages\n- [Home]('+absolute('/')+'): Brand, craftsmanship, bulk orders and contact.\n- [Collection]('+absolute('/products')+'): Current published pieces, prices and enquiries.\n\nCustomers send their details through the enquiry form. The business receives the enquiry and contacts the customer to confirm products, availability, price and delivery. Submitting an enquiry does not confirm an order. No payment is collected on the website. Contact: '+config.email+'.\n')
console.log('SEO metadata, sitemap and crawler files generated for '+origin)
