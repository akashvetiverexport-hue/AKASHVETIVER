"use client"
import { useEffect, useMemo, useRef, useState } from "react"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import Autoplay from "embla-carousel-autoplay"
import { useInView } from "framer-motion"
import { useReducedMotion } from "@/lib/use-reduced-motion"
import { ArrowRight } from "lucide-react"
import { products as localProducts, type Product } from "@/ui/products"
import "@/ui/product-showcase.css"

// The supplied hero-section-41's three synchronized Embla tracks,
// adapted as a product section, not as a replacement homepage hero.
function ProductPrice({product}:{product:Product}) {
 const [tick,setTick]=useState(0)
 useEffect(()=>{const update=()=>setTick(n=>n+1);window.addEventListener('vettiver:offers-tick',update);return()=>window.removeEventListener('vettiver:offers-tick',update)},[])
 void tick
 const commerce=window.VETTIVER_COMMERCE,active=commerce?.active(product)
 return <div className="showcase-price-row">{product.price && <span>{product.size_options?.length?'From ':''}{commerce?.money(product.size_options?.length?Math.min(...product.size_options.map(o=>o.price)):active&&product.sale_price?product.sale_price:product.price)}{!product.size_options?.length&&product.pricing_unit?' / '+product.pricing_unit:''}</span>}{active&&<span className="offer-badge">{product.offer_label}</span>}</div>
}
export function ProductShowcase({ products = localProducts }: { products?: Product[] }) {
  const featured = useMemo(() => [...products].sort((a,b) => (a.featured_order ?? Number.MAX_SAFE_INTEGER) - (b.featured_order ?? Number.MAX_SAFE_INTEGER) || a.sort_order - b.sort_order), [products])
  const section = useRef<HTMLDivElement>(null)
  const interacted = useRef(false)
  const touchStart = useRef<{ x: number; y: number } | null>(null)
  const inView = useInView(section, { amount: .2 })
  const reduced = useReducedMotion()
  const autoplay = useMemo(() => Autoplay({ active: !reduced, delay: 5000, stopOnInteraction: true, stopOnFocusIn: false, stopOnMouseEnter: false, playOnInit: false }), [reduced])
  const [main, setMain] = useState<CarouselApi>()
  const [thumbs, setThumbs] = useState<CarouselApi>()
  const [details, setDetails] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    const update = () => setVisible(!document.hidden)
    update(); document.addEventListener("visibilitychange", update)
    return () => document.removeEventListener("visibilitychange", update)
  }, [])
  useEffect(() => {
    if (!main || !thumbs || !details) return
    const apis = [main, thumbs, details]
    const handlers = apis.map(source => {
      const sync = () => {
        const selected = source.selectedScrollSnap()
        setCurrent(selected)
        apis.forEach(api => { if (api !== source && api.selectedScrollSnap() !== selected) api.scrollTo(selected, !!reduced) })
      }
      source.on("select", sync)
      return sync
    })
    return () => { apis.forEach((api, i) => { api.off("select", handlers[i]) }) }
  }, [main, thumbs, details, reduced])
  useEffect(() => {
    if (!main) return
    if (!reduced && inView && visible && !interacted.current) autoplay.play()
    else autoplay.stop()
    // Touch-down pauses Embla even for vertical page scrolling. Only
    // resume when the customer has not deliberately selected a product.
    const resume = () => {
      if (!reduced && inView && visible && !interacted.current) autoplay.play()
    }
    main.on("pointerUp", resume)
    return () => { main.off("pointerUp", resume) }
  }, [main, reduced, inView, visible, autoplay])
  const stopForInteraction = () => { interacted.current = true; autoplay.stop() }
  const select = (index: number) => { stopForInteraction(); main?.scrollTo(index, !!reduced) }
  if (!featured.length) return <div className="wrap"><h2 id="showcase-title">Our vetiver collection.</h2><p>{window.VETTIVER_CATALOG?.error || "Explore the available pieces in our collection."}</p><a className="text-link" href="products.html">View all pieces</a></div>
  return <div ref={section} className="showcase-inner" data-current={current} onPointerDownCapture={event => { if (event.pointerType === "mouse") stopForInteraction() }}
    onTouchStartCapture={event => { const touch = event.touches[0]; touchStart.current = touch ? { x: touch.clientX, y: touch.clientY } : null }}
    onTouchMoveCapture={event => {
      const touch = event.touches[0], start = touchStart.current
      if (!touch || !start) return
      const dx = Math.abs(touch.clientX - start.x), dy = Math.abs(touch.clientY - start.y)
      if (dx > 12 && dx > dy) stopForInteraction()
    }}
    onTouchEndCapture={() => { touchStart.current = null }}
    onTouchCancelCapture={() => { touchStart.current = null }}
    onFocusCapture={event => { if (event.target.matches(":focus-visible")) stopForInteraction() }}>
    <div className="showcase-top">
      <div className="showcase-intro">
        <h2 id="showcase-title">Nature, <br />thoughtfully made.</h2>
        <p>Handcrafted vetiver pieces for the moments you celebrate and the spaces you call home.</p>
        <div className="showcase-actions"><Button asChild size="lg" className="showcase-cta"><a href="products.html">View all pieces <ArrowRight size={20} aria-hidden="true" /></a></Button></div>
      </div>
      <Carousel setApi={setMain} plugins={[autoplay]} opts={{ loop: true, duration: reduced ? 0 : 25 }} className="showcase-main showcase-viewport" aria-roledescription="carousel" aria-label="Featured vetiver products" onKeyDownCapture={event => { if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); select(current + (event.key === "ArrowRight" ? 1 : -1)) } }} tabIndex={0}>
        <CarouselContent className="showcase-track">{featured.map((product, index) => <CarouselItem className="showcase-slide" key={product.id} aria-hidden={current !== index}><a className="showcase-image-frame" href={"products.html#" + product.id} aria-label={"View " + product.name} tabIndex={current === index ? 0 : -1}><img src={product.image} alt={product.alt} width={1024} height={1024} loading="lazy" draggable={false} /></a></CarouselItem>)}</CarouselContent>
      </Carousel>
    </div>
    <div className="showcase-bottom">
      <div className="showcase-thumbnails">
        <Carousel setApi={setThumbs} opts={{ loop: true, duration: reduced ? 0 : 25 }} className="showcase-thumb-viewport showcase-viewport" aria-label="Choose a featured product"><CarouselContent className="showcase-track">{featured.map((product, index) => <CarouselItem className="showcase-thumb-slide" key={product.id}><button type="button" className="showcase-thumb" aria-label={"Show " + product.name} aria-pressed={current === index} onClick={() => select(index)}>
          <svg viewBox="0 0 161 92" aria-hidden="true"><path d="M0.682517 80.6118L0.501193 39.6946C0.480127 34.9409 3.80852 30.8294 8.46241 29.8603L148.426 0.713985C154.636 -0.579105 160.465 4.16121 160.465 10.504V80.7397C160.465 86.2674 155.98 90.7465 150.453 90.7397L10.6701 90.5674C5.16936 90.5607 0.706893 86.1125 0.682517 80.6118Z" fill="none" stroke="currentColor" /></svg>
          <img src={product.thumbnail} alt="" width={100} height={100} loading="lazy" draggable={false} />
        </button></CarouselItem>)}</CarouselContent></Carousel>
      </div>
      <Carousel setApi={setDetails} opts={{ loop: true, duration: reduced ? 0 : 25 }} className="showcase-details showcase-viewport" aria-live={reduced ? "polite" : "off"}><CarouselContent className="showcase-track">{featured.map((product, index) => <CarouselItem key={product.id} className="showcase-detail-slide" aria-hidden={current !== index}><h3><a href={"products.html#" + product.id} tabIndex={current === index ? 0 : -1}>{product.name}</a></h3><ProductPrice product={product} /><p>{product.description}</p><a href={"products.html#" + product.id} tabIndex={current === index ? 0 : -1} className="showcase-detail-cta">View product details <ArrowRight size={16} aria-hidden="true" /></a></CarouselItem>)}</CarouselContent></Carousel>
    </div>
  </div>
}

export default ProductShowcase
