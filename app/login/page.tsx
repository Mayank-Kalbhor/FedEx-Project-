"use client"

import { useState } from "react"
import { useAuth, UserRole } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Shield, UserCog, Users, ArrowRight, Lock } from "lucide-react"

export default function LoginPage() {
    const { login, isLoading } = useAuth()
    const [selectedRole, setSelectedRole] = useState<UserRole>("manager")

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        login(selectedRole)
    }

    if (isLoading) return null

    return (
        <div className="flex min-h-screen items-center justify-center p-4">
            <GlassCard className="w-full max-w-lg p-0 overflow-hidden border-white/10">
                <div className="relative p-8 text-center space-y-2 bg-gradient-to-b from-blue-500/10 to-transparent">
                    <div className="absolute top-4 right-4">
                        <Lock className="h-4 w-4 text-white/20" />
                    </div>
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20 mb-6 group">
                        <Shield className="h-8 w-8 text-blue-400 group-hover:scale-110 transition-transform" />
                    </div>
                    <h1 className="text-2xl font-bold tracking-tight">Welcome Back</h1>
                    <p className="text-sm text-muted-foreground">
                        Sign in to the DCA Management Platform
                    </p>
                </div>

                <div className="p-8 pt-0">
                    <Tabs defaultValue="manager" onValueChange={(v) => setSelectedRole(v as UserRole)} className="w-full">
                        <TabsList className="grid w-full grid-cols-3 mb-8 bg-white/5 border border-white/10">
                            <TabsTrigger value="admin" className="text-xs data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-400">
                                Admin
                            </TabsTrigger>
                            <TabsTrigger value="manager" className="text-xs data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400">
                                Manager
                            </TabsTrigger>
                            <TabsTrigger value="dca" className="text-xs data-[state=active]:bg-green-500/20 data-[state=active]:text-green-400">
                                DCA User
                            </TabsTrigger>
                        </TabsList>

                        <form onSubmit={handleLogin} className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-xs font-medium text-muted-foreground">Email</label>
                                <div className="relative">
                                    <Input
                                        type="email"
                                        defaultValue="demo@example.com"
                                        className="bg-white/5 border-white/10 focus:border-blue-500/50 pl-10 h-11"
                                        disabled
                                    />
                                    <UserCog className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground opacity-50" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-medium text-muted-foreground">Password</label>
                                <div className="relative">
                                    <Input
                                        type="password"
                                        defaultValue="password123"
                                        className="bg-white/5 border-white/10 focus:border-blue-500/50 pl-10 h-11"
                                        disabled
                                    />
                                    <Lock className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground opacity-50" />
                                </div>
                            </div>

                            <div className="pt-4">
                                <div className="rounded-md bg-blue-950/30 border border-blue-500/20 p-4 mb-6">
                                    <div className="flex gap-3">
                                        <div className="shrink-0">
                                            {selectedRole === 'admin' && <Shield className="h-5 w-5 text-blue-400" />}
                                            {selectedRole === 'manager' && <UserCog className="h-5 w-5 text-purple-400" />}
                                            {selectedRole === 'dca' && <Users className="h-5 w-5 text-green-400" />}
                                        </div>
                                        <div className="text-xs space-y-1">
                                            <p className="font-medium text-white">
                                                {selectedRole === 'admin' ? 'Enterprise Admin' :
                                                    selectedRole === 'manager' ? 'Regional Manager' : 'DCA User'}
                                            </p>
                                            <p className="text-muted-foreground">
                                                {selectedRole === 'admin' ? 'Full global access and configuration.' :
                                                    selectedRole === 'manager' ? 'Regional oversight and approval authority.' : 'Task-focused view for agency execution.'}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <Button type="submit" className="w-full h-11 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0">
                                    Sign In as {selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)} <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </form>
                    </Tabs>
                </div>
            </GlassCard>
        </div>
    )
}
