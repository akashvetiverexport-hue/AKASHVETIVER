import Footer from '@/components/ui/beam-wordmark-footer'
import { flushSync } from 'react-dom'
import { createRoot } from "react-dom/client"
import "./styles.css"
import { products as localProducts, type Product } from "./products"

declare global {
  interface Window { VETTIVER_COMMERCE?: { active:(p:Product)=>boolean; money:(value:number)=>string }; VETTIVER_CONFIG?: { whatsappNumber?: string; feedbackEndpoint?: string; requestsEndpoint?: string; reviewsEndpoint?: string; businessEmail?: string; supabaseUrl?: string; supabasePublishableKey?: string; catalogSource?: string }; VETTIVER_CATALOG?: { products: Product[]; ready: Promise<void>; error: string }; ScrollTrigger?: { refresh: (safe?: boolean) => void; update?: () => void } }
}
function mountSections() {
  let frame = 0
  const resize = new ResizeObserver(() => { cancelAnimationFrame(frame); frame = requestAnimationFrame(() => window.VETTIVER_REFRESH?.()) })
  const jobs = new Map<Element, () => Promise<void>>()
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.isIntersecting) {
      observer.unobserve(entry.target)
      const job = jobs.get(entry.target); jobs.delete(entry.target)
      const footerFallback=entry.target.id==='footer-root'?[...entry.target.childNodes].map(node=>node.cloneNode(true)):null
      entry.target.setAttribute('aria-busy', 'true')
      job?.().then(() => { resize.observe(entry.target); entry.target.setAttribute('aria-busy', 'false') }).catch(() => {
        entry.target.setAttribute('aria-busy', 'false')
        if(footerFallback){entry.target.replaceChildren(...footerFallback);return}
        entry.target.querySelectorAll('.section-placeholder').forEach(skeleton => skeleton.remove())
        const message = document.createElement('div'); message.className = 'section-load-error'; message.textContent = 'This section couldn’t load. Your connection may be slow.'; message.setAttribute('role','status'); const retry = document.createElement('button'); retry.type = 'button'; retry.textContent = 'Reload page'; retry.onclick = () => location.reload(); message.append(retry); entry.target.append(message)
      })
    }
  }, { rootMargin: '600px' })
  const near = (id: string, job: (element: HTMLElement) => Promise<void>) => {
    const element = document.getElementById(id)
    if (element) { jobs.set(element, () => job(element)); observer.observe(element) }
  }
  const catalogue = async () => {
    // Module chunks can arrive before deferred catalogue scripts on a warm cache.
    // Never render the local seed while the connected catalogue is still starting.
    if (!window.VETTIVER_CATALOG) await new Promise<void>((resolve,reject) => {
      const ready=()=>{clearTimeout(timer);resolve()}
      const timer=setTimeout(()=>{window.removeEventListener('vettiver:catalog-initialized',ready);reject(new Error('Catalogue did not initialize'))},12000)
      window.addEventListener('vettiver:catalog-initialized',ready,{once:true})
    })
    await window.VETTIVER_CATALOG?.ready
    return window.VETTIVER_CATALOG?.products ?? localProducts
  }
  near('product-showcase-root', async element => {
    const [{ ProductShowcase }, products] = await Promise.all([import('@/components/ui/product-showcase'), catalogue()])
    flushSync(() => createRoot(element).render(<ProductShowcase products={products} />))
  })
  near('bulk-order-root', async element => {
    const [{ AnimatedMarqueeHero }, products] = await Promise.all([import('@/components/ui/hero-3'), catalogue()])
    flushSync(() => createRoot(element).render(<AnimatedMarqueeHero title={<>More pieces.<br />One thoughtful gesture.</>} description="Handcrafted vetiver for weddings, events and gifting." ctaText="Bulk orders" images={products.map(product => product.thumbnail)} />))
  })
  near('testimonials-root', async element => {
    const [{ LiveReviews }, { FeedbackForm }, { approvedTestimonials }] = await Promise.all([import('./live-reviews'), import('@/components/ui/feedback-form'), import('./testimonials')])
    const configured = window.VETTIVER_CONFIG?.feedbackEndpoint || ''
    const endpoint = configured.startsWith('/') && !configured.startsWith('//') ? configured : ''
    const root = createRoot(element)
    if (new URLSearchParams(location.search).get('ui-demo') === 'testimonials') {
      const { AnimatedTestimonialsBasic } = await import('@/components/ui/demo')
      flushSync(() => root.render(<><AnimatedTestimonialsBasic /><FeedbackForm endpoint="" /></>))
    } else flushSync(() => root.render(<><LiveReviews endpoint={window.VETTIVER_CONFIG?.reviewsEndpoint} fallback={approvedTestimonials} /><FeedbackForm endpoint={endpoint} /></>))
  })
  near('footer-root', async element => {
    flushSync(() => createRoot(element).render(<Footer columns={document.body.classList.contains('catalog-page') ? [
      { title: 'Explore', links: [{ label: 'Our collection', href: '#products' }, { label: 'Our roots', href: 'index.html#about' }, { label: 'Customer stories', href: 'index.html#reviews' }] },
      { title: "Let's talk", links: [{ label: 'Reserve a piece', href: '#contact' }, { label: 'Share feedback', href: 'index.html#reviews' }, { label: 'Back home', href: 'index.html' }] }
    ] : undefined} />))
  })
  window.addEventListener('pagehide', event => { if (!event.persisted) { observer.disconnect(); resize.disconnect(); cancelAnimationFrame(frame) } })
}
if (document.readyState !== 'loading') mountSections()
else document.addEventListener('DOMContentLoaded', mountSections, { once: true })
