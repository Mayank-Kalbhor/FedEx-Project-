"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Bell, Shield, Save } from "lucide-react"

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState("general")
    const [emailNotifs, setEmailNotifs] = useState(true)
    const [smsNotifs, setSmsNotifs] = useState(false)
    const [twoFactor, setTwoFactor] = useState(true)

    const tabs = [
        { id: "general", label: "General" },
        { id: "notifications", label: "Notifications" },
        { id: "security", label: "Security" },
    ]

    return (
        <div className="space-y-8 max-w-4xl mx-auto">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="space-y-1">
                    <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                        Settings
                    </h1>
                    <p className="text-muted-foreground">
                        Manage your account preferences and system configurations.
                    </p>
                </div>
                <Button className="gap-2 bg-primary hover:bg-primary/90">
                    <Save className="h-4 w-4" /> Save Changes
                </Button>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList>
                    {tabs.map((tab) => (
                        <TabsTrigger key={tab.id} value={tab.id}>
                            {tab.label}
                        </TabsTrigger>
                    ))}
                </TabsList>
            </Tabs>

            <div className="grid gap-6">
                {activeTab === "general" && (
                    <GlassCard className="p-6 space-y-6">
                        <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                            <div className="h-20 w-20 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-3xl font-bold text-white shadow-xl">
                                U
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-lg font-medium">User Admin</h3>
                                <p className="text-sm text-muted-foreground">admin@dcaplatform.com</p>
                                <Button variant="ghost" size="sm" className="h-8 -ml-2 text-blue-400">Change Avatar</Button>
                            </div>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Full Name</label>
                                <Input defaultValue="User Admin" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Email Address</label>
                                <Input defaultValue="admin@dcaplatform.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Role</label>
                                <Input defaultValue="System Administrator" disabled />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Company</label>
                                <Input defaultValue="DCA Platform Inc." />
                            </div>
                        </div>
                    </GlassCard>
                )}

                {activeTab === "notifications" && (
                    <GlassCard className="p-6 space-y-6">
                        <div className="space-y-1 mb-4">
                            <h3 className="text-lg font-medium flex items-center gap-2"><Bell className="h-4 w-4" /> Email Notifications</h3>
                            <p className="text-sm text-muted-foreground">Manage what emails you receive.</p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <label className="text-sm font-medium">Daily Reports</label>
                                    <p className="text-xs text-muted-foreground">Receive a daily summary of agency performance.</p>
                                </div>
                                <Switch checked={emailNotifs} onCheckedChange={setEmailNotifs} />
                            </div>
                            <div className="flex items-center justify-between border-t border-white/5 pt-4">
                                <div className="space-y-0.5">
                                    <label className="text-sm font-medium">Compliance Alerts</label>
                                    <p className="text-xs text-muted-foreground">Immediate notification for compliance breaches.</p>
                                </div>
                                <Switch checked={true} onCheckedChange={() => { }} disabled />
                            </div>
                        </div>

                        <div className="space-y-1 mb-4 pt-6">
                            <h3 className="text-lg font-medium flex items-center gap-2"><User className="h-4 w-4" /> SMS Notifications</h3>
                            <p className="text-sm text-muted-foreground">Get urgent alerts on your phone.</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <label className="text-sm font-medium">Critical System Alerts</label>
                                <p className="text-xs text-muted-foreground">Server downtime or security breaches.</p>
                            </div>
                            <Switch checked={smsNotifs} onCheckedChange={setSmsNotifs} />
                        </div>
                    </GlassCard>
                )}

                {activeTab === "security" && (
                    <GlassCard className="p-6 space-y-6">
                        <div className="space-y-1 mb-4">
                            <h3 className="text-lg font-medium flex items-center gap-2"><Shield className="h-4 w-4" /> Account Security</h3>
                            <p className="text-sm text-muted-foreground">Manage your password and 2FA settings.</p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <label className="text-sm font-medium">Two-Factor Authentication</label>
                                    <p className="text-xs text-muted-foreground">Secure your account with 2FA.</p>
                                </div>
                                <Switch checked={twoFactor} onCheckedChange={setTwoFactor} />
                            </div>
                            <div className="flex items-center justify-between border-t border-white/5 pt-4">
                                <div className="space-y-0.5">
                                    <label className="text-sm font-medium">Password</label>
                                    <p className="text-xs text-muted-foreground">Last changed 3 months ago.</p>
                                </div>
                                <Button variant="outline" size="sm">Change Password</Button>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-white/10">
                            <h4 className="text-sm font-medium text-red-500 mb-4">Danger Zone</h4>
                            <Button variant="destructive" size="sm">Delete Account</Button>
                        </div>
                    </GlassCard>
                )}
            </div>
        </div>
    )
}
