"use client"

import { Bell, Search, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/lib/auth-context"
import { Badge } from "@/components/ui/badge"

export function Header() {
    const { user, logout } = useAuth()

    return (
        <header className="sticky top-0 z-30 flex h-16 w-full items-center gap-4 border-b border-white/10 bg-black/20 backdrop-blur-lg px-6">
            <div className="flex flex-1 items-center gap-4">
                <div className="relative w-full max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <input
                        type="search"
                        placeholder="Search cases, agencies..."
                        className="w-full rounded-lg border border-white/10 bg-white/5 py-2 pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                </div>
            </div>
            <div className="flex items-center gap-4">
                {user && (
                    <div className="flex items-center gap-3 border-r border-white/10 pr-4">
                        <div className="text-right hidden md:block">
                            <p className="text-sm font-medium leading-none">{user.name}</p>
                            <p className="text-xs text-muted-foreground mt-1">
                                {user.role === 'admin' ? 'Global Admin' : user.jurisdiction}
                            </p>
                        </div>
                        <Badge variant="outline" className="capitalize">
                            {user.role}
                        </Badge>
                    </div>
                )}
                <Button variant="ghost" size="icon" className="text-muted-foreground">
                    <Bell className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" onClick={logout} title="Sign out" className="text-muted-foreground hover:text-red-400">
                    <LogOut className="h-5 w-5" />
                </Button>
            </div>
        </header>
    )
}
