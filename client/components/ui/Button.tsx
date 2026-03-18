import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean
    variant?: "primary" | "secondary" | "outline" | "ghost" | "glass"
    size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "default", asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"

        const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95"

        // Using objects for variants instead of cva to avoid complexity
        const variantStyles = {
            primary: "bg-primary text-white hover:bg-primary/90 shadow-md",
            secondary: "bg-accent text-white hover:bg-accent/90",
            outline: "border border-primary bg-transparent hover:bg-primary hover:text-white",
            ghost: "hover:bg-accent/10 hover:text-accent",
            glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 shadow-lg",
        }

        const sizeStyles = {
            default: "h-11 px-8 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-14 rounded-md px-10 text-base",
            icon: "h-10 w-10",
        }

        return (
            <Comp
                className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
