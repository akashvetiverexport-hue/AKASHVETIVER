import { createRoot } from "react-dom/client"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"
import { FeedbackForm } from "@/components/ui/feedback-form"
import BeamWordmarkFooter from "@/components/ui/beam-wordmark-footer"
import { approvedTestimonials } from "./testimonials"
import "./styles.css"
import { ProductShowcase } from "@/components/ui/product-showcase"
import { AnimatedMarqueeHero } from "@/components/ui/hero-3"
import { products } from "./products"
declare global {
  interface Window { VETTIVER_CONFIG?: { whatsappNumber?: string; feedbackEndpoint?: string; requestsEndpoint?: string; businessEmail?: string }; ScrollTrigger?: { refresh: () => void } }
}
function mountSections() {
const showcase = document.getElementById("product-showcase-root")
if (showcase) createRoot(showcase).render(<ProductShowcase />)
const bulk = document.getElementById("bulk-order-root")
if (bulk) createRoot(bulk).render(<AnimatedMarqueeHero title={<>More pieces.<br />One thoughtful gesture.</>} description="For celebrations, gifting and larger orders, bring a little vetiver into every detail. Tell us what you have in mind and we’ll discuss the options with you." ctaText="Request a bulk quote" images={products.slice(0,8).map(product => product.image)} />)
const feedbackEndpoint = window.VETTIVER_CONFIG?.feedbackEndpoint || ""
// Only same-origin endpoints are accepted: customer feedback is not sent to
// an arbitrary third party configured by a copied template.
const endpoint = feedbackEndpoint.startsWith("/") && !feedbackEndpoint.startsWith("//") ? feedbackEndpoint : ""
const reviews = document.getElementById("testimonials-root")
if (reviews) {
  const root = createRoot(reviews)
  const content = <><AnimatedTestimonials testimonials={approvedTestimonials} /><FeedbackForm endpoint={endpoint} /></>
  if (new URLSearchParams(location.search).get("ui-demo") === "testimonials") {
    import("@/components/ui/demo").then(({ AnimatedTestimonialsBasic }) => root.render(<><AnimatedTestimonialsBasic /><FeedbackForm endpoint="" /></>))
  } else root.render(content)
}
const footer = document.getElementById("footer-root")
if (footer) createRoot(footer).render(<BeamWordmarkFooter columns={document.body.classList.contains("catalog-page") ? [
  { title: "Explore", links: [{ label: "Our collection", href: "#products" }, { label: "Our roots", href: "index.html#about" }, { label: "Customer stories", href: "index.html#reviews" }] },
  { title: "Let's talk", links: [{ label: "Make an enquiry", href: "#contact" }, { label: "Share feedback", href: "index.html#reviews" }, { label: "Back home", href: "index.html" }] }
] : undefined} />)
// Keep the host site's scroll measurements current when React mounts or when
// the feedback acknowledgement/validation changes section height.
let refreshFrame = 0
const observer = new ResizeObserver(() => { cancelAnimationFrame(refreshFrame); refreshFrame = requestAnimationFrame(() => window.ScrollTrigger?.refresh()) })
if (reviews) observer.observe(reviews)
if (footer) observer.observe(footer)
if (showcase) observer.observe(showcase)
if (bulk) observer.observe(bulk)
window.addEventListener("pagehide", event => { if (!event.persisted) { observer.disconnect(); cancelAnimationFrame(refreshFrame) } })
}
// DOMContentLoaded follows the host page's deferred site-config.js. A module
// fetched from cache must not read configuration before that script executes.
if (document.readyState === "complete") mountSections()
else document.addEventListener("DOMContentLoaded", mountSections, { once: true })
