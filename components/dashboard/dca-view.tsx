"use client"

import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Clock, Phone, FileText, Bell } from "lucide-react"
import { toast } from "sonner"
import { Alert } from "antd"

export function DCAView() {
    const assignedCases = [
        { id: "C-4921", name: "John Doe", amount: "$4,500", status: "New", sla: "2h left", priority: "Critical" },
        { id: "C-8832", name: "Jane Smith", amount: "$12,200", status: "Contacted", sla: "1d left", priority: "High" },
        { id: "C-1293", name: "Robert Johnson", amount: "$3,150", status: "PTP", sla: "3d left", priority: "Medium" },
        { id: "C-5521", name: "Emily White", amount: "$850", status: "New", sla: "4h left", priority: "Low" },
    ]

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <h1 className="text-3xl font-bold tracking-tight text-white">
                        My Active Cases
                    </h1>
                    <p className="text-muted-foreground">
                        Your assigned tasks and priority actions for today.
                    </p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" onClick={() => toast.success("Performance Report: You are in the top 10% this week!")}>My Performance</Button>
                    <Button onClick={() => toast("Interaction Logged", { description: "Call attempt recorded for C-4921" })}>Log Interaction</Button>
                </div>
            </div>

            <div className="space-y-4">
                <Alert
                    message="New Case Assigned"
                    description="Case #C-5521 has been assigned to you. SLA Timer started."
                    type="info"
                    showIcon
                    closable
                />
                <Alert
                    message="SLA Breach Warning"
                    description="Case #C-8832 is approaching SLA breach in 24 hours."
                    type="warning"
                    showIcon
                    closable
                />
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {/* Stats Summary - Simplified for DCA */}
                <GlassCard className="col-span-1 space-y-4">
                    <h3 className="font-semibold text-sm text-muted-foreground">Daily Progress</h3>
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                            <span>Contacts Made</span>
                            <span className="font-bold">12 / 20</span>
                        </div>
                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 w-[60%]" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                            <span>Promises to Pay</span>
                            <span className="font-bold">3</span>
                        </div>
                    </div>
                </GlassCard>

                {/* Task List */}
                <GlassCard className="col-span-2">
                    <div className="mb-4 flex items-center justify-between">
                        <h3 className="font-semibold">Priority Queue</h3>
                        <Badge variant="outline">4 Pending</Badge>
                    </div>
                    <div className="space-y-3">
                        {assignedCases.map((c, i) => (
                            <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-white/5 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                                <div className="flex items-center gap-4">
                                    <div className={`h-2 w-2 rounded-full ${c.priority === 'Critical' ? 'bg-red-500' : c.priority === 'High' ? 'bg-yellow-500' : 'bg-blue-500'}`} />
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className="font-mono text-xs text-muted-foreground">{c.id}</span>
                                            <span className="font-medium text-sm text-white">{c.name}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                                            <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {c.sla}</span>
                                            <span className="flex items-center gap-1"><FileText className="h-3 w-3" /> {c.amount}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                                    <Button size="icon" variant="ghost" onClick={(e) => { e.stopPropagation(); toast.info(`Calling ${c.name}...`); }} className="h-8 w-8 rounded-full border border-white/10 hover:bg-green-500/20 hover:text-green-400">
                                        <Phone className="h-3 w-3" />
                                    </Button>
                                    <Button size="icon" variant="ghost" onClick={(e) => { e.stopPropagation(); toast.success(`Case ${c.id} marked as Resolved`); }} className="h-8 w-8 rounded-full border border-white/10 hover:bg-blue-500/20 hover:text-blue-400">
                                        <CheckCircle2 className="h-3 w-3" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </GlassCard>
            </div>
        </div>
    )
}
