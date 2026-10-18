"use client"
import * as React from "react"
import { ArrowUpRight } from "lucide-react"
import { approach, baselineAt, beamTarget, drift, fitSize, hexToRgb, wordHeight } from "@/lib/beam"
export { clamp, hexToRgb, fitSize, beamTarget, drift, approach, baselineAt, wordHeight } from "@/lib/beam"
export type SocialIcon = "x" | "linkedin" | "youtube" | "instagram" | "github" | "dribbble"
export type FooterSocial = { label: string; href?: string; icon: SocialIcon | React.ReactNode }
export type FooterLink = { label: string; href?: string }
export type FooterColumn = { title: string; links: FooterLink[] }
export type FooterCredit = { lead?: string; label: string; href?: string; tail?: string }
export type BeamWordmarkFooterProps = {
  brand?: string; wordmark?: string; company?: string; year?: number; socials?: FooterSocial[];
  credits?: FooterCredit[]; columns?: FooterColumn[]; onLinkClick?: (label: string, href?: string) => void;
  cut?: number; background?: string; ink?: string; muted?: string; accent?: string; wordTop?: string;
  wordFoot?: string; fontSans?: string; wordWeight?: number; animate?: boolean; className?: string
}
const ICONS: Record<SocialIcon, React.ReactNode> = {
  x: <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M17.6 3.5h2.9l-6.3 7.2 7.4 9.8h-5.8l-4.5-5.9-5.2 5.9H3.2l6.7-7.7L2.8 3.5h5.9l4.1 5.4 4.8-5.4Zm-1 15.3h1.6L7.9 5.1H6.2l10.4 13.7Z"/></svg>,
  linkedin: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="2.5"/><path d="M8 10.5V16M12 16v-5.5M12 13c0-1.6 1-2.6 2.4-2.6s2.1.9 2.1 2.4V16"/><circle cx="8" cy="7.7" r=".55" fill="currentColor"/></svg>,
  youtube: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><rect x="2.75" y="5.5" width="18.5" height="13" rx="4"/><path d="M10.2 9.3v5.4l4.6-2.7-4.6-2.7Z"/></svg>,
  instagram: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="3.9"/><circle cx="17.1" cy="6.9" r=".6" fill="currentColor"/></svg>,
  github: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg>,
  dribbble: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M8.6 4.2c3.4 4.4 5.4 9.6 6.1 15.6M3.6 10.6c5.6.3 10.4-1 13.9-4.4M5.6 17.6c3.4-4.2 8.6-5.6 14.8-3.6"/></svg>
}
const DEFAULT_COLUMNS: FooterColumn[] = [
  { title: "Explore", links: [{ label: "Our collection", href: "#products" }, { label: "Our roots", href: "#about" }, { label: "Customer stories", href: "#reviews" }] },
  { title: "Let's talk", links: [{ label: "Make an enquiry", href: "#contact" }, { label: "Share feedback", href: "#feedback-form" }, { label: "Good to know", href: "#questions-title" }, { label: "Back to the top", href: "#home" }] }
]
export default function BeamWordmarkFooter({
  brand = "Vettiver", wordmark, company = "Akash Vetiver Export", year = new Date().getFullYear(),
  socials = [], credits = [{ label: "Natural roots. Thoughtful hands." }, { lead: "Handcrafted in ", label: "Tamil Nadu, India" }],
  columns = DEFAULT_COLUMNS, onLinkClick, cut = .1, background = "#08170f", ink = "#f4f8ef",
  muted = "#bacbb5", accent = "#b1cd8b", wordTop = "#668b54", wordFoot = "#152d1c",
  fontSans = "Outfit, sans-serif", wordWeight = 600, animate = true, className = ""
}: BeamWordmarkFooterProps) {
  const word = (wordmark ?? brand).trim() || brand
  const letters = React.useMemo(() => Array.from(word), [word])
  const rootRef = React.useRef<HTMLElement>(null), innerRef = React.useRef<HTMLDivElement>(null)
  const [size, setSize] = React.useState(0), [base, setBase] = React.useState(.8)
  const [seen, setSeen] = React.useState(false), [visible, setVisible] = React.useState(false)
  const [reduced, setReduced] = React.useState(false)
  const [pageVisible, setPageVisible] = React.useState(true)
  const ptr = React.useRef({ u: .5, x: 0, y: 0, inside: false })
  React.useLayoutEffect(() => {
    const root = rootRef.current, inner = innerRef.current
    if (!root || !inner) return
    let frame = 0, alive = true
    const fit = () => {
      const box = inner.parentElement!
      const style = getComputedStyle(box)
      const target = box.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight)
      inner.style.fontSize = "100px"
      const next = fitSize(inner.getBoundingClientRect().width, target, target * .42)
      inner.style.fontSize = next + "px"; setSize(next)
      const ctx = document.createElement("canvas").getContext("2d")
      if (ctx) { ctx.font = wordWeight + " 100px " + fontSans; const m = ctx.measureText(word); setBase(baselineAt(m.fontBoundingBoxAscent, m.fontBoundingBoxDescent)) }
      const rect = root.getBoundingClientRect()
      root.style.setProperty("--bwf-rw", rect.width + "px"); root.style.setProperty("--bwf-rh", rect.height + "px")
      inner.querySelectorAll<HTMLElement>(".bwf-l").forEach(span => {
        let x = 0, y = 0, el: HTMLElement | null = span
        while (el && el !== root) { x += el.offsetLeft; y += el.offsetTop; el = el.offsetParent as HTMLElement | null }
        span.style.setProperty("--bwf-x", x + "px"); span.style.setProperty("--bwf-y", y + "px")
      })
    }
    const schedule = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(fit) }
    fit()
    const observer = new ResizeObserver(schedule); observer.observe(root)
    document.fonts.ready.then(() => { if (alive) schedule() })
    return () => { alive = false; cancelAnimationFrame(frame); observer.disconnect() }
  }, [word, fontSans, wordWeight])
  React.useEffect(() => {
    const mq = matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => setReduced(mq.matches)
    const visibility = () => setPageVisible(!document.hidden)
    update(); visibility(); mq.addEventListener("change", update); document.addEventListener("visibilitychange", visibility)
    const observer = new IntersectionObserver(([entry]) => { setVisible(entry.isIntersecting); if (entry.isIntersecting) setSeen(true) }, { threshold: .1 })
    if (rootRef.current) observer.observe(rootRef.current)
    return () => { observer.disconnect(); mq.removeEventListener("change", update); document.removeEventListener("visibilitychange", visibility) }
  }, [])
  React.useEffect(() => {
    const root = rootRef.current
    if (!root) return
    if (reduced || !animate || !visible || !pageVisible) { root.style.setProperty("--bwf-g", "0"); return }
    let raf = 0, last = performance.now(), t = last / 1000, beam = 58, x = 0, y = 0, glow = 0
    const tick = (now: number) => {
      const dt = Math.min(.1, (now - last) / 1000); last = now; t += dt
      const p = ptr.current
      beam = approach(beam, p.inside ? beamTarget(p.u) * .75 + drift(t) * .25 : drift(t), .035, dt)
      x = approach(x, p.x, .16, dt); y = approach(y, p.y, .16, dt); glow = approach(glow, p.inside ? 1 : 0, .06, dt)
      root.style.setProperty("--bwf-b", beam.toFixed(2) + "%")
      root.style.setProperty("--bwf-px", x.toFixed(1) + "px"); root.style.setProperty("--bwf-py", y.toFixed(1) + "px"); root.style.setProperty("--bwf-g", glow.toFixed(3))
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [reduced, animate, visible, pageVisible])
  const pointer = (event: React.PointerEvent<HTMLElement>) => {
    if (event.pointerType === "touch" || reduced) return
    const rect = event.currentTarget.getBoundingClientRect()
    ptr.current = { x: event.clientX - rect.left, y: event.clientY - rect.top, u: (event.clientX - rect.left) / rect.width, inside: event.type !== "pointerleave" }
  }
  const follow = (event: React.MouseEvent<HTMLAnchorElement>, label: string, href?: string) => {
    if (href === "#feedback-form") {
      event.preventDefault(); event.stopPropagation()
      window.dispatchEvent(new Event("vettiver:add-feedback"))
    }
    if (!href || href === "#") event.preventDefault()
    onLinkClick?.(label, href)
  }
  const vars = {
    "--bwf-bg": background, "--bwf-bg-rgb": hexToRgb(background), "--bwf-ink": ink, "--bwf-muted": muted,
    "--bwf-acc": hexToRgb(accent), "--bwf-wt": wordTop, "--bwf-wf": wordFoot, "--bwf-sans": fontSans, "--bwf-ww": wordWeight,
    "--bwf-b": "58%", "--bwf-px": "50%", "--bwf-py": "50%", "--bwf-g": "0"
  } as React.CSSProperties
  return <footer ref={rootRef} className={"bwf " + className} style={vars} data-in={seen || reduced ? "true" : "false"} data-motion={reduced || !animate ? "paused" : visible && pageVisible ? "running" : "idle"} onPointerMove={pointer} onPointerEnter={pointer} onPointerLeave={pointer}>
    <div className="bwf-rule" aria-hidden="true" /><div className="bwf-sky" aria-hidden="true"><div className="bwf-wash" /><div className="bwf-beam" /><div className="bwf-glow" /></div>
    <div className="bwf-inner">
      <div className="bwf-col"><p className="bwf-label">© {year} {company || brand}</p>
        <p className="bwf-brand-line">From our roots.<br />To your rituals.</p>
        {socials.length > 0 && <ul className="bwf-socials">{socials.map((social, i) => <li key={social.label + i}><a href={social.href || "#"} className="bwf-soc" aria-label={social.label} onClick={e => follow(e, social.label, social.href)} {...(social.href?.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{typeof social.icon === "string" && social.icon in ICONS ? ICONS[social.icon as SocialIcon] : social.icon}</a></li>)}</ul>}
        <div className="bwf-credits">{credits.map((credit, i) => <p key={i}>{credit.lead}{credit.href ? <a href={credit.href} onClick={e => follow(e, credit.label, credit.href)}>{credit.label}</a> : <b>{credit.label}</b>}{credit.tail}</p>)}</div>
      </div>
      {columns.map((column, i) => <nav className="bwf-col" aria-label={column.title} key={column.title + i}><p className="bwf-label">{column.title}</p><ul className="bwf-links">{column.links.map((link, j) => <li key={link.label + j}><a className="bwf-link" href={link.href || "#"} onClick={e => follow(e, link.label, link.href)}><span>{link.label}</span><ArrowUpRight size={16} aria-hidden="true" /></a></li>)}</ul></nav>)}
    </div>
    <div className="bwf-word" style={{ height: size ? wordHeight(size, base, cut) : "26vw" }}><p className="vt:sr-only">{word}</p><div className="bwf-word-box"><div ref={innerRef} className="bwf-word-in" aria-hidden="true">
      {letters.map((char, i) => <span className="bwf-lw" key={i} style={{ "--bwf-d": 180 + i * 65 + "ms" } as React.CSSProperties}><span className="bwf-l" onClick={event => { if (!reduced) { const el = event.currentTarget; el.classList.remove("is-hop"); void el.offsetWidth; el.classList.add("is-hop") } }} onAnimationEnd={event => event.currentTarget.classList.remove("is-hop")}>{char === " " ? "\u00a0" : char}</span></span>)}
    </div></div><div className="bwf-foot" aria-hidden="true" /></div>
  </footer>
}
