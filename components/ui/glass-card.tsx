"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    hoverEffect?: boolean
    gradient?: boolean
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
    ({ className, hoverEffect = true, gradient = false, children, ...props }, ref) => {
        return (
            <motion.div
                ref={ref as any}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={cn(
                    "glass-card rounded-xl p-6 relative overflow-hidden",
                    hoverEffect && "hover:shadow-2xl transition-shadow duration-300",
                    gradient && "before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none",
                    className
                )}
                whileHover={hoverEffect ? { y: -5 } : undefined}
                {...(props as any)}
            >
                {children}
            </motion.div>
        )
    }
)
GlassCard.displayName = "GlassCard"

export { GlassCard }
