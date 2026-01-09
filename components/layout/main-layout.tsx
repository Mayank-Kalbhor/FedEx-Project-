"use client"

import { usePathname } from "next/navigation"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"

import { Toaster } from "sonner"

export function MainLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const isLoginPage = pathname === "/login"

    if (isLoginPage) {
        return (
            <div className="flex h-screen w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background">
                <main className="flex-1 overflow-auto">
                    {children}
                </main>
                <Toaster position="top-right" theme="dark" />
            </div>
        )
    }

    return (
        <div className="flex h-screen w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background">
            <Sidebar />
            <div className="flex flex-1 flex-col overflow-hidden">
                <Header />
                <main className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                    {children}
                </main>
            </div>
            <Toaster position="top-right" theme="dark" />
        </div>
    )
}
