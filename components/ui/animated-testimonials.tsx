"use client"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, ArrowRight, Leaf, Quote, Star } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useReducedMotion } from "@/lib/use-reduced-motion"
import { useEffect, useId, useRef, useState } from "react"
import { cn } from "@/lib/utils"
export interface Testimonial { id: number; name: string; content: string; rating: number; role?: string; company?: string; avatar?: string }
export interface AnimatedTestimonialsProps {
  title?: string; subtitle?: string; badgeText?: string; testimonials?: Testimonial[];
  autoRotateInterval?: number; trustedCompanies?: string[]; trustedCompaniesTitle?: string; className?: string
}
export function AnimatedTestimonials({
  title = "Little moments.\nLasting impressions.",
  subtitle = "Stories from the people who bring our vetiver pieces into their homes and celebrations.",
  badgeText = "", testimonials = [], autoRotateInterval = 6000, trustedCompanies = [], trustedCompaniesTitle = "Our community", className
}: AnimatedTestimonialsProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { amount: .15 })
  const reduced = useReducedMotion()
  const [activeIndex, setActiveIndex] = useState(0)
  const [pageVisible, setPageVisible] = useState(true)
  const headingId = useId()
  const index = testimonials.length ? activeIndex % testimonials.length : 0
  useEffect(() => {
    const update = () => setPageVisible(!document.hidden)
    update(); document.addEventListener("visibilitychange", update)
    return () => document.removeEventListener("visibilitychange", update)
  }, [])
  useEffect(() => {
    if (autoRotateInterval <= 0 || testimonials.length <= 1 || reduced || !inView || !pageVisible) return
    const timer = window.setInterval(() => setActiveIndex(current => (current + 1) % testimonials.length), Math.max(3000, autoRotateInterval))
    return () => clearInterval(timer)
  }, [autoRotateInterval, testimonials.length, reduced, inView, pageVisible])
  const choose = (next: number) => { setActiveIndex((next + testimonials.length) % testimonials.length) }
  return <section ref={sectionRef} id="testimonials" aria-labelledby={headingId} className={cn("vt-testimonials", className)}>
    <div className="vt-section-inner vt:grid vt:grid-cols-1 vt:gap-12 vt:md:grid-cols-2 vt:md:gap-16">
      <div className="vt-testimonial-intro">
        {badgeText && <p className="vt-review-badge">{badgeText}</p>}
        <h2 id={headingId}>{title}</h2><p>{subtitle}</p>
        <button type="button" className="vt-primary-button vt-add-feedback" aria-haspopup="dialog" aria-controls="feedback-dialog" onClick={() => window.dispatchEvent(new Event("vettiver:add-feedback"))}>Add feedback <ArrowRight size={18} aria-hidden="true" /></button>
        {testimonials.length > 1 && <div className="vt-review-controls" aria-label="Customer story controls">
          <button type="button" onClick={() => choose(index - 1)} aria-label="Previous review"><ArrowLeft size={19} /></button>
          <span>{String(index + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}</span>
          <button type="button" onClick={() => choose(index + 1)} aria-label="Next review"><ArrowRight size={19} /></button>
        </div>}
      </div>
      <div className="vt-review-stage" aria-roledescription={testimonials.length ? "carousel" : undefined} aria-label="Customer feedback">
        {testimonials.length ? <div className="vt-review-stack" aria-live={reduced ? "polite" : "off"}>
          {testimonials.map((review, i) => <motion.article key={review.id} className="vt-review-card" aria-hidden={i !== index} aria-label={"Review " + (i + 1) + " of " + testimonials.length}
            initial={false} animate={{ opacity: i === index ? 1 : 0, x: reduced ? 0 : i === index ? 0 : 32, scale: reduced ? 1 : i === index ? 1 : .98 }}
            transition={{ duration: reduced ? 0 : .45, ease: "easeInOut" }} style={{ gridArea: "1 / 1", pointerEvents: i === index ? "auto" : "none" }}>
            <div className="vt-review-stars" aria-label={Math.max(1, Math.min(5, Math.round(review.rating || 1))) + " out of 5 stars"}>{Array.from({ length: Math.max(1, Math.min(5, Math.round(review.rating || 1))) }, (_, n) => <Star key={n} size={18} fill="currentColor" aria-hidden="true" />)}</div>
            <Quote size={38} strokeWidth={1.2} className="vt-quote-mark" aria-hidden="true" /><blockquote>{review.content}</blockquote>
            <Separator className="vt:my-6" /><p className="vt-review-name">{review.name}</p>
          </motion.article>)}
        </div> : <div className="vt-review-empty"><Leaf size={38} strokeWidth={1.2} aria-hidden="true" /><h3>Your story belongs here.</h3><p>Our customer stories are just beginning. Once feedback has been reviewed and approved, you can read it here.</p><span>No published reviews yet.</span></div>}
        {testimonials.length > 1 && <div className="vt-review-dots">{testimonials.map((review, i) => <button type="button" key={review.id} onClick={() => choose(i)} aria-label={"Read review by " + review.name} aria-pressed={i === index}><span /></button>)}</div>}
      </div>
    </div>
    {trustedCompanies.length > 0 && <div className="vt-section-inner vt-review-companies"><h3>{trustedCompaniesTitle}</h3><div>{trustedCompanies.map(company => <span key={company}>{company}</span>)}</div></div>}
  </section>
}
