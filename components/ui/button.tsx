"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

// Since we are not using Radix UI primitives for everything yet, 
// I will implement a standard button with motion support.
// Ideally usage of `cva` requires installing `class-variance-authority`.
// I missed adding `class-variance-authority` to the install list.
// I will use standard prop types for now or quickly install it if I want to be robust.
// For now, I'll stick to manual class logic or basic CVA if installed (it wasn't).
// So I will implement it without CVA for now to avoid another install step blocking me,
// or I can check if I can just install it quickly. 
// The plan didn't mention CVA. I'll write a simple capable component.

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost" | "glass" | "destructive" | "outline"
    size?: "sm" | "md" | "lg" | "icon"
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", asChild = false, ...props }, ref) => {

        const baseStyles = "inline-flex items-center justify-center rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

        const variants = {
            primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_-5px_rgba(var(--primary),0.5)]",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            glass: "glass hover:bg-white/20 text-foreground border-white/10",
        }

        const sizes = {
            sm: "h-9 px-3",
            md: "h-10 px-4 py-2",
            lg: "h-11 px-8",
            icon: "h-10 w-10",
        }

        const Comp = motion.button

        return (
            <Comp
                ref={ref as any}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                {...(props as any)} // type casting for motion props compat
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
