"use client"

import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { OverviewChart } from "@/components/charts/overview-chart"
import { Download, Calendar } from "lucide-react"

export default function PerformancePage() {
    return (
        <div className="space-y-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="space-y-1">
                    <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                        Performance Analytics
                    </h1>
                    <p className="text-muted-foreground">
                        Deep dive into recovery metrics and portfolio health.
                    </p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" className="gap-2">
                        <Calendar className="h-4 w-4" /> Last 30 Days
                    </Button>
                    <Button variant="primary" className="gap-2">
                        <Download className="h-4 w-4" /> Export Report
                    </Button>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <GlassCard gradient className="p-6">
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Total Portfolio Value</h3>
                    <p className="text-3xl font-bold">$12,450,000</p>
                    <span className="text-xs text-green-500 flex items-center mt-1">+2.4% vs last period</span>
                </GlassCard>
                <GlassCard gradient className="p-6">
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Recovery Rate</h3>
                    <p className="text-3xl font-bold text-blue-400">24.8%</p>
                    <span className="text-xs text-green-500 flex items-center mt-1">+1.2% target exceeded</span>
                </GlassCard>
                <GlassCard gradient className="p-6">
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Active Lawsuits</h3>
                    <p className="text-3xl font-bold text-purple-400">128</p>
                    <span className="text-xs text-muted-foreground mt-1">Across 12 jurisdictions</span>
                </GlassCard>
            </div>

            <GlassCard className="p-6">
                <div className="mb-6 flex items-center justify-between">
                    <h3 className="font-semibold text-lg">Recovery Trends (Real-time)</h3>
                </div>
                <OverviewChart />
            </GlassCard>

            <div className="grid gap-6 md:grid-cols-2">
                <GlassCard className="p-6">
                    <h3 className="font-semibold mb-4">Agency Leaderboard</h3>
                    <div className="space-y-4">
                        {[
                            { name: 'Alpha Collections', score: 98, val: '$1.2M' },
                            { name: 'Delta Corp', score: 94, val: '$900k' },
                            { name: 'Zeta Group', score: 88, val: '$750k' },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <span className="font-mono text-muted-foreground text-sm">0{i + 1}</span>
                                    <span className="font-medium">{item.name}</span>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-sm">{item.val}</p>
                                    <p className="text-xs text-green-500">Score: {item.score}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </GlassCard>

                <GlassCard className="p-6">
                    <h3 className="font-semibold mb-4">Case Status Distribution</h3>
                    <div className="flex items-center justify-center h-[200px] text-muted-foreground text-sm border-2 border-dashed border-white/5 rounded-lg">
                        Pie Chart Placeholder
                    </div>
                </GlassCard>
            </div>
        </div>
    )
}
