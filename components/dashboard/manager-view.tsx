"use client"

import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { OverviewChart } from "@/components/charts/overview-chart"
import { PriorityInsights } from "@/components/dashboard/priority-insights"
import { TrendingUp, Users, AlertCircle, MapPin, Mail } from "lucide-react"
import { toast } from "sonner"
import { Tag, Tooltip } from "antd"

export function ManagerView() {
    const stats = [
        { label: "Regional Active", value: "324", change: "+4%", icon: Users, color: "text-blue-500" },
        { label: "West Region Recovery", value: "52.1%", change: "+2.1%", icon: TrendingUp, color: "text-green-500" },
        { label: "Assigned Agencies", value: "4", change: "0", icon: MapPin, color: "text-purple-500" },
        { label: "Escalations", value: "1", change: "-1", icon: AlertCircle, color: "text-red-500" },
    ]

    const handleReportGen = () => {
        toast.promise(new Promise((resolve) => setTimeout(resolve, 2000)), {
            loading: 'Generating PDF Report...',
            success: 'Regional_Q1_Report.pdf has been downloaded',
            error: 'Failed to generate report'
        })
    }

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                        West Region Overview
                    </h1>
                    <p className="text-muted-foreground">
                        Regional performance monitoring and agency oversight.
                    </p>
                </div>
                <Button onClick={handleReportGen}>Generate Regional Report</Button>
            </div>

            {/* Stats Grid - Regional Data */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, i) => (
                    <GlassCard key={i} gradient className="flex flex-col justify-between space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
                            <stat.icon className={`h-4 w-4 ${stat.color}`} />
                        </div>
                        <div className="space-y-1">
                            <span className="text-2xl font-bold tabular-nums">{stat.value}</span>
                            <div className="text-xs text-muted-foreground">
                                <span className={stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}>{stat.change}</span> vs last month
                            </div>
                        </div>
                    </GlassCard>
                ))}
            </div>

            {/* SLA & Email Triggers */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <GlassCard className="col-span-full">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold">Case Operations & SLA Monitor</h3>
                        <Tooltip title="Manually trigger email alerts for high-risk cases">
                            <Button onClick={() => toast.success("Email Alerts Triggered for 5 High-Risk Cases")} variant="outline" className="gap-2">
                                <Mail className="h-4 w-4" />
                                Trigger Email Alerts
                            </Button>
                        </Tooltip>
                    </div>
                    <div className="flex gap-4 flex-wrap">
                        <div className="flex items-center gap-2 p-3 rounded-lg border border-white/10 bg-white/5">
                            <span className="text-sm">Risk Level: High</span>
                            <Tag color="red">SLA Breached</Tag>
                            <span className="text-xs text-muted-foreground">Case #9921</span>
                        </div>
                        <div className="flex items-center gap-2 p-3 rounded-lg border border-white/10 bg-white/5">
                            <span className="text-sm">Risk Level: Medium</span>
                            <Tag color="gold">SLA Warning</Tag>
                            <span className="text-xs text-muted-foreground">Case #8823</span>
                        </div>
                        <div className="flex items-center gap-2 p-3 rounded-lg border border-white/10 bg-white/5">
                            <span className="text-sm">Dispute Raised</span>
                            <Tag color="blue">Email Alert Sent</Tag>
                            <span className="text-xs text-muted-foreground">Case #1290</span>
                        </div>
                    </div>
                </GlassCard>
            </div>

            {/* Charts & Priorities */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <GlassCard className="col-span-4 min-h-[400px]">
                    <div className="mb-4 flex items-center justify-between">
                        <h3 className="font-semibold">Regional Performance</h3>
                        <Button variant="ghost" size="sm" onClick={() => toast.info("Filter applied: Showing all regional agencies")}>Filter by Agency</Button>
                    </div>
                    <div className="h-[300px] w-full">
                        <OverviewChart />
                    </div>
                </GlassCard>
                <PriorityInsights />
            </div>
        </div>
    )
}
