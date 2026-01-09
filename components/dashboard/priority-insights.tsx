"use client"

import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import {
    Brain,
    TrendingUp,
    AlertCircle,
    DollarSign,
    Calendar,
    ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"

const priorityCases = [
    {
        id: "C-4921",
        score: 98,
        priority: "Critical",
        reason: "High recovery probability with expiring SOL",
        factors: [
            { label: "Propensity", value: 95, type: "positive", icon: TrendingUp },
            { label: "Value", value: 80, type: "positive", icon: DollarSign },
            { label: "Urgency", value: 90, type: "warning", icon: Calendar }, // SOL expiration
        ]
    },
    {
        id: "C-8832",
        score: 85,
        priority: "High",
        reason: "Recent large payment, settlement offer pending",
        factors: [
            { label: "Engagement", value: 88, type: "positive", icon: TrendingUp },
            { label: "Offer", value: 100, type: "positive", icon: DollarSign },
        ]
    },
    {
        id: "C-1293",
        score: 72,
        priority: "Medium",
        reason: "Consistent partial payments, low risk",
        factors: [
            { label: "Stability", value: 75, type: "positive", icon: TrendingUp },
            { label: "Value", value: 40, type: "neutral", icon: DollarSign },
        ]
    }
]

export function PriorityInsights() {
    return (
        <GlassCard className="col-span-full lg:col-span-3 min-h-[400px]">
            <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/20">
                        <Brain className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">AI Priority Focus</h3>
                        <p className="text-xs text-muted-foreground">Top recommended actions</p>
                    </div>
                </div>
                <Button variant="ghost" size="sm" className="h-8 text-xs">Run Analysis</Button>
            </div>

            <div className="space-y-4">
                {priorityCases.map((item, i) => (
                    <div key={i} className="group relative rounded-lg border border-white/5 bg-white/5 p-4 transition-all hover:bg-white/10 hover:border-purple-500/20">
                        <div className="flex items-start justify-between mb-3">
                            <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                    <span className="font-mono text-sm font-medium text-muted-foreground h-6 flex items-center">{item.id}</span>
                                    <Badge variant={
                                        item.priority === 'Critical' ? 'danger' :
                                            item.priority === 'High' ? 'warning' : 'default'
                                    } className="uppercase text-[10px] tracking-wider">
                                        {item.priority}
                                    </Badge>
                                </div>
                                <p className="text-sm font-medium pr-8">{item.reason}</p>
                            </div>
                            <div className="flex flex-col items-end">
                                <div className="text-2xl font-bold text-purple-400">{item.score}</div>
                                <div className="text-[10px] text-muted-foreground uppercase tracking-widest">Score</div>
                            </div>
                        </div>

                        {/* Explainability Visuals */}
                        <div className="grid grid-cols-3 gap-2 mt-4">
                            {item.factors.map((factor, idx) => (
                                <div key={idx} className="flex flex-col gap-1.5">
                                    <div className="flex items-center justify-between text-[10px] text-muted-foreground">
                                        <span className="flex items-center gap-1">
                                            <factor.icon className="h-3 w-3" />
                                            {factor.label}
                                        </span>
                                    </div>
                                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-black/20">
                                        <div
                                            className={`h-full rounded-full ${factor.type === 'positive' ? 'bg-green-500' :
                                                    factor.type === 'warning' ? 'bg-orange-500' :
                                                        'bg-blue-500'
                                                }`}
                                            style={{ width: `${factor.value}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">
                            <Button variant="ghost" size="icon" className="rounded-full bg-white/10 hover:bg-purple-500 hover:text-white">
                                <ArrowRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </GlassCard>
    )
}
