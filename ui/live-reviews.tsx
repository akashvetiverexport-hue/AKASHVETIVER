import { useEffect, useState } from 'react'
import { AnimatedTestimonials, type Testimonial } from '../components/ui/animated-testimonials'
export function LiveReviews({ endpoint, fallback }: { endpoint?: string; fallback: Testimonial[] }) {
 const [reviews,setReviews]=useState(fallback),[error,setError]=useState(''),[loading,setLoading]=useState(Boolean(endpoint))
 useEffect(()=>{
  if(!endpoint||!endpoint.startsWith('/')||endpoint.startsWith('//')){setLoading(false);return}
  setLoading(true);setError('')
  const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),10000)
  let mounted=true
  fetch(endpoint,{signal:controller.signal,cache:'no-store'}).then(async response=>{
   if(!response.ok)throw new Error()
   const rows:unknown=await response.json()
   if(!Array.isArray(rows)||rows.some(row=>typeof row.name!=='string'||typeof row.content!=='string'||!Number.isInteger(row.rating)||row.rating<1||row.rating>5))throw new Error()
   if(mounted)setReviews(rows.map((row,index)=>({id:index,name:row.name,content:row.content,rating:row.rating})))
  }).catch(()=>{if(mounted)setError('Customer stories could not load. Please reload to try again.')}).finally(()=>{clearTimeout(timer);if(mounted)setLoading(false)})
  return()=>{mounted=false;clearTimeout(timer);controller.abort()}
 },[endpoint])
 if(loading)return <section className="vt-testimonials" aria-busy="true" aria-label="Loading customer stories"><div className="wrap review-loading"><div><h2>Customer stories.</h2><p role="status">Loading the latest stories…</p><button type="button" className="text-link" onClick={()=>window.dispatchEvent(new CustomEvent('vettiver:add-feedback'))}>Share your feedback</button></div><div className="review-skeleton" aria-hidden="true"><div className="skeleton-line skeleton-title"/><div className="skeleton-line"/><div className="skeleton-line"/><div className="skeleton-line skeleton-meta"/></div></div></section>
 return <>{error&&<p className="wrap" role="status">{error}</p>}<AnimatedTestimonials testimonials={reviews}/></>
}
