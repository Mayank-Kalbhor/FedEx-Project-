"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import {
    LayoutDashboard,
    Users,
    BarChart3,
    Settings,
    Menu,
    X,
    FileText
} from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useAuth, UserRole } from "@/lib/auth-context"

const allSidebarItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/", roles: ['admin', 'manager', 'dca'] },
    { icon: Users, label: "Agencies", href: "/agencies", roles: ['admin'] }, // Managers might see this but requirement says limited. Sticking to Admin for full list. Manager implies regional monitor.
    { icon: BarChart3, label: "Performance", href: "/performance", roles: ['admin', 'manager'] },
    { icon: Settings, label: "Settings", href: "/settings", roles: ['admin'] },
]

export function Sidebar() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(true)
    const { user } = useAuth()

    if (!user) return null

    const filteredItems = allSidebarItems.filter(item => item.roles.includes(user.role))

    return (
        <>
            {/* Mobile Toggle */}
            <div className="lg:hidden fixed top-4 left-4 z-50">
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="bg-black/50 backdrop-blur">
                    {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </Button>
            </div>

            <motion.aside
                initial={{ x: -300 }}
                animate={{ x: isOpen ? 0 : -300, width: isOpen ? 256 : 80 }}
                className={cn(
                    "fixed top-0 left-0 z-40 h-screen border-r border-white/10 bg-black/40 backdrop-blur-xl transition-all lg:translate-x-0 lg:static overflow-hidden box-border"
                )}
            >
                <div className="flex h-full flex-col w-full">
                    <div className={cn("flex h-16 items-center border-b border-white/10 px-6", !isOpen && "justify-center px-2")}>
                        <div className="font-bold text-xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 whitespace-nowrap">
                            {isOpen ? "DCA PLATFORM" : "DCA"}
                        </div>
                    </div>

                    <div className="flex-1 py-6 px-3 space-y-2">
                        {filteredItems.map((item) => {
                            const Icon = item.icon
                            const isActive = pathname === item.href

                            return (
                                <Link key={item.href} href={item.href} className="block group">
                                    <div
                                        className={cn(
                                            "relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 overflow-hidden whitespace-nowrap",
                                            isActive
                                                ? "text-primary-foreground"
                                                : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                                        )}
                                    >
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className="absolute inset-0 bg-primary/20 backdrop-blur-sm border-l-2 border-primary"
                                                initial={false}
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                        <Icon className={cn("w-5 h-5 min-w-[20px] z-10", isActive && "text-primary")} />

                                        <motion.span
                                            animate={{ opacity: isOpen ? 1 : 0, width: isOpen ? "auto" : 0 }}
                                            className="z-10 overflow-hidden"
                                        >
                                            {item.label}
                                        </motion.span>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>

                    <div className="p-4 border-t border-white/10">
                        <div className={cn("flex items-center gap-3", !isOpen && "justify-center")}>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 shrink-0 flex items-center justify-center text-xs font-bold text-white">
                                {user.name.charAt(0)}
                            </div>
                            {isOpen && (
                                <div className="flex flex-col overflow-hidden">
                                    <span className="text-xs font-semibold truncate">{user.name}</span>
                                    <span className="text-[10px] text-muted-foreground truncate capitalize">{user.role}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </motion.aside>
        </>
    )
}
