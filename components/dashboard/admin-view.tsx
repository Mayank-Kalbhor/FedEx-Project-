"use client"

import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { OverviewChart } from "@/components/charts/overview-chart"
import {
    TrendingUp,
    Users,
    AlertCircle,
    ArrowRight,
    Activity
} from "lucide-react"
import { PriorityInsights } from "@/components/dashboard/priority-insights"
import { toast } from "sonner"

export function AdminView() {
    const stats = [
        { label: "Active Cases", value: "1,284", change: "+12%", icon: Activity, color: "text-blue-500" },
        { label: "Recovery Rate", value: "48.2%", change: "+5.4%", icon: TrendingUp, color: "text-green-500" },
        { label: "Total Agencies", value: "12", change: "0", icon: Users, color: "text-purple-500" },
        { label: "Compliance Alerts", value: "3", change: "-2", icon: AlertCircle, color: "text-red-500" },
    ]

    const handleReport = () => {
        toast.promise(new Promise(resolve => setTimeout(resolve, 3000)), {
            loading: 'Generating Global System Report...',
            success: 'Global_Report_2026.pdf downloaded',
            error: 'Error generating report'
        })
    }

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400">
                        Dashboard Overview
                    </h1>
                    <p className="text-muted-foreground">
                        Welcome back to your DCA Command Center.
                    </p>
                </div>
                <Button onClick={handleReport} variant="primary" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0">
                    Generate Report
                </Button>
            </div>

            {/* Stats Grid */}
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
                                <span className={stat.change.startsWith('+') ? 'text-green-500' : stat.change.startsWith('-') ? 'text-red-500' : ''}>
                                    {stat.change}
                                </span>
                                {" "} vs last month
                            </div>
                        </div>
                    </GlassCard>
                ))}
            </div>

            {/* Main Content Area */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">

                {/* Recent Activity / Chart Placeholder */}
                <GlassCard className="col-span-4 min-h-[400px]">
                    <div className="mb-4 flex items-center justify-between">
                        <h3 className="font-semibold">Performance Analytics</h3>
                        <Button variant="ghost" size="sm" className="h-8 text-xs" onClick={() => toast.info("Navigating to detailed analytics...")}>View Detailed</Button>
                    </div>
                    <div className="h-[300px] w-full">
                        <OverviewChart />
                    </div>
                </GlassCard>

                {/* AI Priority / Recent Actions */}
                <PriorityInsights />
            </div>

            {/* Quick Actions Row */}
            <div className="grid gap-4 md:grid-cols-3">
                {['Assign New Cases', 'Compliance Audit', 'Manage Agencies'].map((action, i) => (
                    <GlassCard key={i} hoverEffect className="group cursor-pointer" onClick={() => toast.success(`Action initiated: ${action}`, { description: "You have full override authority." })}>
                        <div className="flex items-center justify-between">
                            <h3 className="font-semibold group-hover:text-primary transition-colors">{action}</h3>
                            <ArrowRight className="h-4 w-4 opacity-50 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </GlassCard>
                ))}
            </div>
        </div>
    )
}
