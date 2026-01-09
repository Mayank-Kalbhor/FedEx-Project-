"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { AdminView } from "@/components/dashboard/admin-view"
import { ManagerView } from "@/components/dashboard/manager-view"
import { DCAView } from "@/components/dashboard/dca-view"

export default function Home() {
    const { user, isLoading } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (!isLoading && !user) {
            router.push("/login")
        }
    }, [user, isLoading, router])

    if (isLoading) return null
    if (!user) return null

    if (user.role === 'manager') return <ManagerView />
    if (user.role === 'dca') return <DCAView />

    // Default to Admin view
    return <AdminView />
}
