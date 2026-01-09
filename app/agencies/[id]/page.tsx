"use client"

import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { OverviewChart } from "@/components/charts/overview-chart"
import { ArrowLeft, Mail, Phone, ExternalLink, ShieldCheck } from "lucide-react"
import Link from "next/link"

export default function AgencyDetailPage({ params }: { params: { id: string } }) {
    // In a real app, fetch data based on params.id

    return (
        <div className="space-y-8">
            {/* Breadcrumb / Back */}
            <div className="flex items-center gap-2">
                <Link href="/agencies">
                    <Button variant="ghost" size="sm" className="pl-0 gap-1 text-muted-foreground hover:text-foreground">
                        <ArrowLeft className="h-4 w-4" /> Back to Agencies
                    </Button>
                </Link>
            </div>

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex items-start gap-4">
                    <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-blue-900/20">
                        A
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold">Alpha Collections</h1>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="inline-flex items-center rounded-full bg-green-500/10 px-2.5 py-0.5 text-xs font-medium text-green-500 ring-1 ring-inset ring-green-500/20">
                                Active Partner
                            </span>
                            <span className="text-sm text-muted-foreground">ID: #{params.id}</span>
                        </div>
                    </div>
                </div>

                <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-2">
                        <Mail className="h-4 w-4" /> Message
                    </Button>
                    <Button variant="primary" size="sm">
                        View Contract
                    </Button>
                </div>
            </div>

            {/* Stats Overview */}
            <div className="grid gap-4 md:grid-cols-4">
                <GlassCard className="space-y-1">
                    <p className="text-xs text-muted-foreground">Total Recovered</p>
                    <p className="text-2xl font-bold">$2.4M</p>
                </GlassCard>
                <GlassCard className="space-y-1">
                    <p className="text-xs text-muted-foreground">Active Cases</p>
                    <p className="text-2xl font-bold">450</p>
                </GlassCard>
                <GlassCard className="space-y-1">
                    <p className="text-xs text-muted-foreground">Compliance Score</p>
                    <div className="flex items-center gap-2">
                        <p className="text-2xl font-bold text-green-500">98%</p>
                        <ShieldCheck className="h-4 w-4 text-green-500" />
                    </div>
                </GlassCard>
                <GlassCard className="space-y-1">
                    <p className="text-xs text-muted-foreground">Avg. Resolution</p>
                    <p className="text-2xl font-bold">14 Days</p>
                </GlassCard>
            </div>

            {/* Performance Chart */}
            <GlassCard className="p-6">
                <h3 className="font-semibold mb-6">Recovery Performance (YTD)</h3>
                <OverviewChart />
            </GlassCard>

            {/* Contact/Info Grid */}
            <div className="grid gap-6 md:grid-cols-2">
                <GlassCard>
                    <h3 className="font-semibold mb-4">Contact Information</h3>
                    <div className="space-y-4 text-sm">
                        <div className="flex items-center gap-3 text-muted-foreground">
                            <Mail className="h-4 w-4" />
                            <span>support@alphacollections.com</span>
                        </div>
                        <div className="flex items-center gap-3 text-muted-foreground">
                            <Phone className="h-4 w-4" />
                            <span>+1 (555) 123-4567</span>
                        </div>
                        <div className="flex items-center gap-3 text-muted-foreground">
                            <ExternalLink className="h-4 w-4" />
                            <Link href="#" className="hover:text-primary transition-colors">www.alphacollections.com</Link>
                        </div>
                    </div>
                </GlassCard>
                <GlassCard>
                    <h3 className="font-semibold mb-4">Current SLA Status</h3>
                    <div className="space-y-4">
                        <div className="space-y-1">
                            <div className="flex justify-between text-sm">
                                <span>First Contact Resolution</span>
                                <span className="text-green-500">92%</span>
                            </div>
                            <div className="h-2 w-full rounded-full bg-white/5">
                                <div className="h-2 w-[92%] rounded-full bg-green-500/50" />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <div className="flex justify-between text-sm">
                                <span>Compliance Audits</span>
                                <span className="text-green-500">100%</span>
                            </div>
                            <div className="h-2 w-full rounded-full bg-white/5">
                                <div className="h-2 w-full rounded-full bg-green-500/50" />
                            </div>
                        </div>
                    </div>
                </GlassCard>
            </div>
        </div>
    )
}
