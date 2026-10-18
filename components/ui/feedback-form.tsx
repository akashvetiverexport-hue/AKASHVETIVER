"use client"
import { useEffect, useRef, useState, type FormEvent } from "react"
import { ArrowUpRight, Star, X } from "lucide-react"
export interface FeedbackDraft { name: string; content: string; rating: number }
export const FEEDBACK_DRAFT_KEY = "vettiver-feedback-draft-v1"
export function FeedbackForm({ endpoint = "" }: { endpoint?: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const submittingRef = useRef(false)
  const requestRef = useRef<AbortController | null>(null)
  const mountedRef = useRef(true)
  useEffect(() => {
    mountedRef.current = true
    return () => { mountedRef.current = false; requestRef.current?.abort() }
  }, [])
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    const open = () => { if (!dialog.open) dialog.showModal() }
    window.addEventListener("vettiver:add-feedback", open)
    return () => { window.removeEventListener("vettiver:add-feedback", open); dialog.close() }
  }, [])
  const [name, setName] = useState(""), [content, setContent] = useState("")
  const [rating, setRating] = useState(0), [busy, setBusy] = useState(false)
  const [message, setMessage] = useState(""), [error, setError] = useState(false)
  const [consent, setConsent] = useState(false), [submitted, setSubmitted] = useState(false)
  const [website, setWebsite] = useState("")
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (submitted || submittingRef.current) return
    setError(false); setMessage("")
    const fail = (text: string) => { setError(true); setMessage(text) }
    if (typeof name !== "string" || !name.trim() || name.length > 80) { fail("Enter your name using 1–80 characters."); return }
    if (typeof content !== "string" || !content.trim() || content.length > 1200) { fail("Enter your feedback using 1–1,200 characters."); return }
    if (!Number.isInteger(rating) || rating < 1 || rating > 5) { fail("Choose a rating from 1 to 5 stars."); return }
    if (typeof website !== "string" || website.length > 200 || website.trim()) { setWebsite(""); fail("An extra field was filled unexpectedly. We have cleared it; please try again without autofilling the form."); return }
    const draft: FeedbackDraft = { name: name.trim(), content: content.trim(), rating }
    if (!endpoint) {
      try { localStorage.setItem(FEEDBACK_DRAFT_KEY, JSON.stringify(draft)); setMessage("Draft saved only on this device. It has not been sent or published.") }
      catch { setError(true); setMessage("Your browser could not save the draft. Please copy your feedback to keep it.") }
      return
    }
    if (consent !== true) { fail("Please agree to publication after review before sending your feedback."); return }
    let target: URL
    try {
      if (typeof endpoint !== "string" || !endpoint.trim()) throw new Error("Invalid endpoint")
      target = new URL(endpoint, window.location.href)
      if (target.origin !== window.location.origin || !["https:", "http:"].includes(target.protocol) || target.username || target.password || target.hash) throw new Error("Invalid endpoint")
    } catch { fail("Feedback submission is not configured correctly. Your feedback remains here; please try again later."); return }
    submittingRef.current = true
    setBusy(true)
    const controller = new AbortController()
    requestRef.current = controller
    let timedOut = false
    const timeout = window.setTimeout(() => { timedOut = true; controller.abort() }, 15000)
    try {
      // The honeypot and client validation are NOT server protection. The future
      // endpoint must independently validate these fields and enforce spam limits.
      const response = await fetch(target.href, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ ...draft, consentToPublish: consent, website }), credentials: "same-origin", redirect: "error", signal: controller.signal })
      if (!mountedRef.current) return
      if (!response.ok) {
        fail(response.status === 429 ? "Too many attempts. Please wait a few minutes before trying again. Your feedback is still here." : response.status === 400 || response.status === 422 ? "The service could not accept these details. Check your name, rating, feedback and consent, then try again." : "The feedback service is unavailable. Your feedback is still here; please try again later.")
        return
      }
      const result: unknown = await response.json()
      if (!result || typeof result !== "object" || !("id" in result) || typeof result.id !== "string" || !result.id.trim() || result.id.length > 200 || !("status" in result) || result.status !== "pending") throw new Error("Invalid acknowledgement")
      if (!mountedRef.current) return
      setSubmitted(true); setMessage("Thank you. Your feedback was received and is waiting for approval. It is not public yet.")
    } catch {
      if (mountedRef.current) fail(timedOut ? "The request timed out. We could not confirm receipt. Your feedback is still here; please try again later." : "We could not confirm receipt of your feedback. Check your connection and try again. Your text is still here.")
    } finally {
      window.clearTimeout(timeout)
      requestRef.current = null
      submittingRef.current = false
      if (mountedRef.current) setBusy(false)
    }
  }
  function restore() {
    setError(false)
    try {
      const saved = JSON.parse(localStorage.getItem(FEEDBACK_DRAFT_KEY) || "null") as FeedbackDraft | null
      if (!saved || typeof saved.name !== "string" || typeof saved.content !== "string" || !Number.isInteger(saved.rating) || saved.rating < 1 || saved.rating > 5) { setMessage("No saved draft on this device."); return }
      setName(saved.name.slice(0, 80)); setContent(saved.content.slice(0, 1200)); setRating(saved.rating); setMessage("Your draft is restored. It has not been sent.")
    } catch { setMessage("No readable draft on this device.") }
  }
  return <dialog ref={dialogRef} id="feedback-dialog" className="vt-feedback-dialog" aria-labelledby="feedback-dialog-title" aria-describedby="feedback-dialog-description" onKeyDown={event => {
    if (event.key !== "Tab") return
    const elements = Array.from(event.currentTarget.querySelectorAll<HTMLElement>('button:not(:disabled), input:not(:disabled), textarea:not(:disabled)')).filter(element => element.tabIndex >= 0 && !element.closest('[aria-hidden="true"]'))
    const first = elements[0], last = elements[elements.length - 1]
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus() }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus() }
  }} onClick={event => {
    if (event.target !== event.currentTarget) return
    const rect = event.currentTarget.getBoundingClientRect()
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) event.currentTarget.close()
  }}>
    <button type="button" className="vt-feedback-close" aria-label="Close feedback" onClick={() => dialogRef.current?.close()}><X size={22} aria-hidden="true" /></button>
    <div className="vt-feedback-heading"><h2 id="feedback-dialog-title">A few words mean a lot.</h2><p id="feedback-dialog-description">Tell us about your Vettiver experience.</p></div>
    <form id="feedback-form" className="vt-feedback-form" onSubmit={submit} aria-label="Share customer feedback" aria-busy={busy} aria-describedby="feedback-status">
      {/* Hidden from assistive technology and keyboard navigation, not a real customer field. */}
      <div aria-hidden="true" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clipPath: "inset(50%)", whiteSpace: "nowrap" }}>
        <label htmlFor="feedback-website">Leave this field empty</label>
        <input id="feedback-website" name="website" type="text" tabIndex={-1} autoComplete="off" maxLength={200} value={website} onChange={e => setWebsite(e.target.value)} disabled={busy || submitted} />
      </div>
      <div className="vt-feedback-fields">
        <div><label htmlFor="feedback-name">Your name</label><input id="feedback-name" name="name" autoComplete="name" maxLength={80} required value={name} onChange={e => setName(e.target.value)} disabled={busy || submitted} /></div>
        <fieldset><legend>Your rating</legend><div className="vt-rating-input">{[1, 2, 3, 4, 5].map(value => <label key={value} className={value <= rating ? "is-selected" : ""}><input type="radio" name="rating" value={value} required checked={rating === value} onChange={() => setRating(value)} disabled={busy || submitted} /><Star size={25} fill={value <= rating ? "currentColor" : "none"} aria-hidden="true" /><span className="vt:sr-only">{value} {value === 1 ? "star" : "stars"}</span></label>)}</div></fieldset>
      </div>
      <label htmlFor="feedback-content">Your feedback</label><textarea id="feedback-content" name="content" rows={3} maxLength={1200} required value={content} onChange={e => setContent(e.target.value)} disabled={busy || submitted} placeholder="What did you choose, and how was your experience?" />
      {endpoint ? <label className="vt-feedback-consent"><input type="checkbox" required checked={consent} onChange={e => setConsent(e.target.checked)} disabled={busy || submitted} /> I agree that my name, rating and feedback may be published after review.</label> : <p className="vt-feedback-note">Review submissions will open when our approval system is ready. For now, save a draft on this device. Nothing is sent to us.</p>}
      <div className="vt-feedback-actions"><button className="vt-primary-button" type="submit" disabled={busy || submitted}>{busy ? "Sending…" : submitted ? "Waiting for approval" : endpoint ? "Send for approval" : "Save feedback draft"}<ArrowUpRight size={18} aria-hidden="true" /></button>{!endpoint && <><button className="vt-text-link" type="button" onClick={restore}>Restore draft</button><button className="vt-text-link" type="button" onClick={() => { try { localStorage.removeItem(FEEDBACK_DRAFT_KEY); setMessage("Saved draft removed from this device.") } catch { setMessage("Could not remove the saved draft.") } }}>Delete saved draft</button></>}</div>
      <p id="feedback-status" className={"vt-feedback-status" + (error ? " is-error" : "")} role="status" aria-live="polite" aria-atomic="true">{message}</p>
    </form>
  </dialog>
}
