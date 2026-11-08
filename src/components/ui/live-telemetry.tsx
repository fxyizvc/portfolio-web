"use client";

import { motion } from "framer-motion";
import { Server, Activity, HardDrive, Network } from "lucide-react";
import { useState, useEffect } from "react";

export function LiveCloudTelemetry() {
    const [pings, setPings] = useState({
        cloudwatch: "14ms",
        grafana: "22ms",
        almalinux: "11ms",
        loadAvg: "0.18",
        uptime: "99.99%"
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setPings({
                cloudwatch: `${Math.floor(12 + Math.random() * 6)}ms`,
                grafana: `${Math.floor(20 + Math.random() * 8)}ms`,
                almalinux: `${Math.floor(9 + Math.random() * 5)}ms`,
                loadAvg: (0.12 + Math.random() * 0.09).toFixed(2),
                uptime: "99.99%"
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const nodes = [
        {
            name: "AWS EC2 Core Cluster",
            sub: "us-east-1 • AlmaLinux 9 Hardened",
            status: "NOMINAL",
            latency: pings.almalinux,
            icon: Server,
            color: "text-emerald-600 dark:text-emerald-400",
            bg: "bg-emerald-500/5 dark:bg-emerald-500/10 border-emerald-500/20",
        },
        {
            name: "CloudWatch Telemetry Daemon",
            sub: "Metrics Streaming & SLA Runbooks",
            status: "STREAMING",
            latency: pings.cloudwatch,
            icon: Activity,
            color: "text-cyan-600 dark:text-cyan-400",
            bg: "bg-cyan-500/5 dark:bg-cyan-500/10 border-cyan-500/20",
        },
        {
            name: "Grafana & Prometheus Hub",
            sub: "Multi-tenant Dashboards & RCA",
            status: "OBSERVABLE",
            latency: pings.grafana,
            icon: Network,
            color: "text-amber-600 dark:text-amber-400",
            bg: "bg-amber-500/5 dark:bg-amber-500/10 border-amber-500/20",
        },
        {
            name: "Containerized Workloads",
            sub: "Docker Compose & Isolated Nets",
            status: "ACTIVE",
            latency: `Load: ${pings.loadAvg}`,
            icon: HardDrive,
            color: "text-indigo-600 dark:text-indigo-400",
            bg: "bg-indigo-500/5 dark:bg-indigo-500/10 border-indigo-500/20",
        },
    ];

    return (
        <div className="w-full">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600 dark:bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold">
                        Real-time Mesh Telemetry
                    </span>
                </div>
                <div className="text-xs font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/30 dark:border-emerald-800/40 font-semibold">
                    SLA: {pings.uptime}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {nodes.map((node) => {
                    const Icon = node.icon;
                    return (
                        <div
                            key={node.name}
                            className={`p-3.5 rounded-xl border ${node.bg} backdrop-blur-xl flex items-center justify-between transition-all duration-300 hover:scale-[1.01]`}
                        >
                            <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-lg bg-card shadow-sm border border-border/50 ${node.color}`}>
                                    <Icon className="w-4 h-4" />
                                </div>
                                <div className="text-left">
                                    <p className="text-xs font-semibold text-foreground tracking-wide font-sans">{node.name}</p>
                                    <p className="text-[11px] text-muted-foreground font-mono">{node.sub}</p>
                                </div>
                            </div>
                            <div className="text-right pl-2">
                                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full bg-card shadow-xs ${node.color} border border-border/40 font-semibold`}>
                                    {node.status}
                                </span>
                                <p className="text-[10px] text-muted-foreground font-mono mt-1">{node.latency}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export { LiveCloudTelemetry as LiveTelemetry };
