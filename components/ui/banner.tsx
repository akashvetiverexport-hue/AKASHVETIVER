'use client'
import { type HTMLAttributes, type ReactElement, useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

export interface BannerProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'rainbow' | 'normal'; changeLayout?: boolean; message?: string; height?: string
}
export function Banner({ id, variant='normal', changeLayout=true, message, height='3rem', children, className, style, ...props }: BannerProps): ReactElement | null {
  const [open,setOpen]=useState(true)
  const key=id?`banner-${id}`:undefined
  useEffect(()=>{try{setOpen(!key||localStorage.getItem(key)!=='true')}catch{setOpen(true)}},[key])
  useEffect(()=>{
    if(!changeLayout||!open)return
    const root=document.documentElement, previous=root.style.getPropertyValue('--banner-height')
    root.style.setProperty('--banner-height',height)
    return ()=>{if(previous)root.style.setProperty('--banner-height',previous);else root.style.removeProperty('--banner-height')}
  },[changeLayout,open,height])
  if(!open)return null
  return <div {...props} id={id} role={props.role??'note'} style={{...style,minHeight:height}} className={cn('studio-banner',variant==='rainbow'&&'studio-banner-rainbow',className)}>
    {variant==='rainbow'&&<><div aria-hidden className="rainbow-banner-gradient-1"/><div aria-hidden className="rainbow-banner-gradient-2"/></>}
    <span>{message||children}</span>
    {id&&<button type="button" aria-label="Close banner" className={cn(buttonVariants({variant:'ghost',size:'icon'}),'studio-banner-close')} onClick={()=>{setOpen(false);try{if(key)localStorage.setItem(key,'true')}catch{/* Storage may be unavailable. */}}}><X size={16}/></button>}
  </div>
}
