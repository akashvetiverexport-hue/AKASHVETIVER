"use client"
import { useEffect, useMemo, useRef, useState } from "react"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import Autoplay from "embla-carousel-autoplay"
import { useInView } from "framer-motion"
import { useReducedMotion } from "@/lib/use-reduced-motion"
import { ArrowRight } from "lucide-react"
import { products } from "@/ui/products"
import "@/ui/product-showcase.css"

// The supplied hero-section-41's three synchronized Embla tracks,
// adapted as a product section, not as a replacement homepage hero.
const featured = [products[1], products[6], products[5], products[4], products[9]]
export function ProductShowcase() {
  const section = useRef<HTMLDivElement>(null)
  const inView = useInView(section, { amount: .2 })
  const reduced = useReducedMotion()
  const autoplay = useMemo(() => Autoplay({ active: !reduced, delay: 3000, stopOnInteraction: false, stopOnFocusIn: false, stopOnMouseEnter: false, playOnInit: false }), [reduced])
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
    if (!reduced && inView && visible) autoplay.play()
    else autoplay.stop()
  }, [main, reduced, inView, visible, autoplay])
  const select = (index: number) => { main?.scrollTo(index, !!reduced); autoplay.reset() }
  return <div ref={section} className="showcase-inner" data-current={current}>
    <div className="showcase-top">
      <div className="showcase-intro">
        <h2 id="showcase-title">Nature,<br />thoughtfully made.</h2>
        <p>Handcrafted vetiver pieces for the moments you celebrate and the spaces you call home.</p>
        <div className="showcase-actions"><Button asChild size="lg" className="showcase-cta"><a href="products.html">View all pieces <ArrowRight size={20} aria-hidden="true" /></a></Button></div>
      </div>
      <Carousel setApi={setMain} plugins={[autoplay]} opts={{ loop: true, duration: reduced ? 0 : 25 }} className="showcase-main showcase-viewport" aria-roledescription="carousel" aria-label="Featured vetiver products" onKeyDownCapture={event => { if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); select(current + (event.key === "ArrowRight" ? 1 : -1)) } }} tabIndex={0}>
        <CarouselContent className="showcase-track">{featured.map((product, index) => <CarouselItem className="showcase-slide" key={product.id} aria-hidden={current !== index}><img src={product.image} alt={product.alt} width={1024} height={1024} loading="lazy" draggable={false} /></CarouselItem>)}</CarouselContent>
      </Carousel>
    </div>
    <div className="showcase-bottom">
      <div className="showcase-thumbnails">
        <Carousel setApi={setThumbs} opts={{ loop: true, duration: reduced ? 0 : 25 }} className="showcase-thumb-viewport showcase-viewport" aria-label="Choose a featured product"><CarouselContent className="showcase-track">{featured.map((product, index) => <CarouselItem className="showcase-thumb-slide" key={product.id}><button type="button" className="showcase-thumb" aria-label={"Show " + product.name} aria-pressed={current === index} onClick={() => select(index)}>
          <svg viewBox="0 0 161 92" aria-hidden="true"><path d="M0.682517 80.6118L0.501193 39.6946C0.480127 34.9409 3.80852 30.8294 8.46241 29.8603L148.426 0.713985C154.636 -0.579105 160.465 4.16121 160.465 10.504V80.7397C160.465 86.2674 155.98 90.7465 150.453 90.7397L10.6701 90.5674C5.16936 90.5607 0.706893 86.1125 0.682517 80.6118Z" fill="none" stroke="currentColor" /></svg>
          <img src={product.image} alt="" width={100} height={100} loading="lazy" draggable={false} />
        </button></CarouselItem>)}</CarouselContent></Carousel>
      </div>
      <Carousel setApi={setDetails} opts={{ loop: true, duration: reduced ? 0 : 25 }} className="showcase-details showcase-viewport" aria-live={reduced ? "polite" : "off"}><CarouselContent className="showcase-track">{featured.map((product, index) => <CarouselItem key={product.id} className="showcase-detail-slide" aria-hidden={current !== index}><h3>{product.name}</h3><p>{product.description}</p><a href={"products.html#" + product.id} tabIndex={current === index ? 0 : -1}>View product details <ArrowRight size={16} aria-hidden="true" /></a></CarouselItem>)}</CarouselContent></Carousel>
    </div>
  </div>
}

export default ProductShowcase
