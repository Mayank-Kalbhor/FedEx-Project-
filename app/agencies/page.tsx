"use client"

import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { Input } from "@/components/ui/input" // We need to create this input, but I'll inline a styled input for now to avoid stalling or creating extra files not in plan if possible, OR I should create it. The plan implied generic UI atoms. I'll create a quick Input or use inline.
// Actually, better to stick to standard HTML input with classnames if I haven't made an Input component, or make one.
// I'll make a specialized search bar here properly.
import { Search, Plus, MoreHorizontal, ShieldCheck, AlertTriangle } from "lucide-react"
import Link from "next/link"

const agencies = [
    { id: 1, name: "Alpha Collections", status: "Active", compliance: 98, cases: 450, type: "Legal Recovery" },
    { id: 2, name: "Beta Financial", status: "Active", compliance: 92, cases: 312, type: "Early Stage" },
    { id: 3, name: "Gamma Partners", status: "Under Review", compliance: 78, cases: 156, type: "Field Agents" },
    { id: 4, name: "Delta Corp", status: "Active", compliance: 99, cases: 890, type: "Digital First" },
    { id: 5, name: "Epsilon Recovery", status: "Inactive", compliance: 0, cases: 0, type: "Late Stage" },
    { id: 6, name: "Zeta Group", status: "Active", compliance: 95, cases: 230, type: "Legal Recovery" },
]

export default function AgenciesPage() {
    return (
        <div className="space-y-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                        Agency Partners
                    </h1>
                    <p className="text-muted-foreground">
                        Manage external debt collection agencies and monitor performance.
                    </p>
                </div>
                <Button className="gap-2 bg-primary hover:bg-primary/90">
                    <Plus className="h-4 w-4" /> Add Agency
                </Button>
            </div>

            {/* Filters & Search */}
            <GlassCard className="flex items-center gap-4 p-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <input
                        placeholder="Search agencies..."
                        className="w-full bg-transparent pl-9 text-sm outline-none placeholder:text-muted-foreground"
                    />
                </div>
                <div className="flex gap-2">
                    <Button variant="ghost" size="sm">Filter</Button>
                    <Button variant="ghost" size="sm">Sort</Button>
                </div>
            </GlassCard>

            {/* Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {agencies.map((agency) => (
                    <Link key={agency.id} href={`/agencies/${agency.id}`}>
                        <GlassCard hoverEffect className="h-full flex flex-col justify-between group cursor-pointer">
                            <div className="space-y-4">
                                <div className="flex items-start justify-between">
                                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-lg font-bold text-blue-400">
                                        {agency.name.charAt(0)}
                                    </div>
                                    <Button variant="ghost" size="icon" className="h-8 w-8 -mr-2">
                                        <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{agency.name}</h3>
                                    <p className="text-sm text-muted-foreground">{agency.type}</p>
                                </div>

                                <div className="flex items-center gap-2 text-sm">
                                    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${agency.status === 'Active' ? 'bg-green-500/10 text-green-500' :
                                            agency.status === 'Under Review' ? 'bg-yellow-500/10 text-yellow-500' :
                                                'bg-gray-500/10 text-gray-500'
                                        }`}>
                                        {agency.status}
                                    </span>
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
                                <div>
                                    <p className="text-xs text-muted-foreground">Active Cases</p>
                                    <p className="font-semibold">{agency.cases}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground">Compliance</p>
                                    <div className="flex items-center gap-1">
                                        <span className={`font-semibold ${agency.compliance < 90 ? 'text-yellow-500' : 'text-green-500'}`}>
                                            {agency.compliance}%
                                        </span>
                                        {agency.compliance >= 90 ? <ShieldCheck className="h-3 w-3 text-green-500" /> : <AlertTriangle className="h-3 w-3 text-yellow-500" />}
                                    </div>
                                </div>
                            </div>
                        </GlassCard>
                    </Link>
                ))}
            </div>
        </div>
    )
}
