import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Slot } from "radix-ui"

const buttonVariants = cva(
  "vt:inline-flex vt:shrink-0 vt:items-center vt:justify-center vt:gap-2 vt:rounded-md vt:text-sm vt:font-medium vt:whitespace-nowrap vt:transition-all vt:outline-none vt:focus-visible:border-ring vt:focus-visible:ring-[3px] vt:focus-visible:ring-ring/50 vt:disabled:pointer-events-none vt:disabled:opacity-50 vt:aria-invalid:border-destructive vt:aria-invalid:ring-destructive/20 vt:dark:aria-invalid:ring-destructive/40 vt:[&_svg]:pointer-events-none vt:[&_svg]:shrink-0 vt:[&_svg:not([class*=size-])]:size-4",
  {
    variants: {
      variant: {
        default: "vt:bg-primary vt:text-primary-foreground vt:hover:bg-primary/90",
        destructive:
          "vt:bg-destructive vt:text-white vt:hover:bg-destructive/90 vt:focus-visible:ring-destructive/20 vt:dark:bg-destructive/60 vt:dark:focus-visible:ring-destructive/40",
        outline:
          "vt:border vt:bg-background vt:shadow-xs vt:hover:bg-accent vt:hover:text-accent-foreground vt:dark:border-input vt:dark:bg-input/30 vt:dark:hover:bg-input/50",
        secondary:
          "vt:bg-secondary vt:text-secondary-foreground vt:hover:bg-secondary/80",
        ghost:
          "vt:hover:bg-accent vt:hover:text-accent-foreground vt:dark:hover:bg-accent/50",
        link: "vt:text-primary vt:underline-offset-4 vt:hover:underline",
      },
      size: {
        default: "vt:h-9 vt:px-4 vt:py-2 vt:has-[>svg]:px-3",
        xs: "vt:h-6 vt:gap-1 vt:rounded-md vt:px-2 vt:text-xs vt:has-[>svg]:px-1.5 vt:[&_svg:not([class*=size-])]:size-3",
        sm: "vt:h-8 vt:gap-1.5 vt:rounded-md vt:px-3 vt:has-[>svg]:px-2.5",
        lg: "vt:h-10 vt:rounded-md vt:px-6 vt:has-[>svg]:px-4",
        icon: "vt:size-9",
        "icon-xs": "vt:size-6 vt:rounded-md vt:[&_svg:not([class*=size-])]:size-3",
        "icon-sm": "vt:size-8",
        "icon-lg": "vt:size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
