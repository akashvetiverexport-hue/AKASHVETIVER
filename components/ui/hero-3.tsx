"use client"
import { useEffect, useRef, useState, type ReactNode } from "react"
import { motion, useInView } from "framer-motion"
import { useReducedMotion } from "@/lib/use-reduced-motion"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import "@/ui/bulk-orders.css"

interface AnimatedMarqueeHeroProps {
  tagline?: string
  title: ReactNode
  description: string
  ctaText: string
  images: string[]
  className?: string
}
export function AnimatedMarqueeHero({ tagline, title, description, ctaText, images, className }: AnimatedMarqueeHeroProps) {
  const section = useRef<HTMLElement>(null)
  const inView = useInView(section, { amount: .15 })
  const reduced = useReducedMotion()
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    const update = () => setVisible(!document.hidden)
    update(); document.addEventListener("visibilitychange", update)
    return () => document.removeEventListener("visibilitychange", update)
  }, [])
  return <section ref={section} className={cn("bulk-marquee",className)} aria-labelledby="bulk-title">
    <motion.div className="bulk-copy" initial={false} animate={{ y: reduced || inView ? 0 : 16 }} transition={{duration: reduced ? 0 : .6, ease:[.22,1,.36,1]}}>
      {tagline && <p>{tagline}</p>}
      <h2 id="bulk-title">{title}</h2>
      <p>{description}</p>
      <motion.button type="button" data-bulk-enquiry aria-haspopup="dialog" aria-controls="bulk-enquiry-dialog" className="bulk-cta" whileHover={reduced ? {} : {y:-2}} whileTap={reduced ? {} : {scale:.98}}>{ctaText}<ArrowUpRight size={20} aria-hidden="true" /></motion.button>
      <span className="bulk-note">Share your occasion, quantity and delivery location.</span>
    </motion.div>
    <div className="bulk-image-window" aria-hidden="true"><div className="bulk-image-track" style={{animationPlayState: reduced || !inView || !visible ? "paused" : "running"}}>{[0,1].map(copy => <div className="bulk-image-group" key={copy}>{images.map((src,index) => <div className="bulk-image" key={src+index} style={{rotate:(index%2===0 ? -3 : 4)+"deg"}}><img src={src} alt="" width={1024} height={1024} loading="lazy" draggable={false} /></div>)}</div>)}</div></div>
  </section>
}
