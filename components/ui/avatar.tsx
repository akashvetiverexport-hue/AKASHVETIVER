"use client"
import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { cn } from "@/lib/utils"
const Avatar = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Root>, React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>>(({ className, ...props }, ref) => <AvatarPrimitive.Root ref={ref} className={cn("vt:relative vt:flex vt:size-10 vt:shrink-0 vt:overflow-hidden vt:rounded-full", className)} {...props} />)
Avatar.displayName = AvatarPrimitive.Root.displayName
const AvatarImage = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Image>, React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>>(({ className, ...props }, ref) => <AvatarPrimitive.Image ref={ref} className={cn("vt:aspect-square vt:size-full vt:object-cover", className)} {...props} />)
AvatarImage.displayName = AvatarPrimitive.Image.displayName
const AvatarFallback = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Fallback>, React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>>(({ className, ...props }, ref) => <AvatarPrimitive.Fallback ref={ref} className={cn("vt:flex vt:size-full vt:items-center vt:justify-center vt:rounded-full vt:bg-muted", className)} {...props} />)
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName
export { Avatar, AvatarImage, AvatarFallback }
export default Avatar
