"use client";

import { useState, useEffect, useRef } from "react";
import { Terminal as TerminalIcon, Maximize2, Minimize2, X, RefreshCw } from "lucide-react";

export function LiveTerminal() {
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<Array<{ text: string; type: "input" | "output" | "system" | "error" }>>([
        { text: "=== FAYIZ CLUSTER CLI [v2.4.0-edge] ===", type: "system" },
        { text: "Type 'help' to see active commands, 'top' for metrics, or 'arch' for infra layout.", type: "system" },
        { text: "cluster status: 99.99% uptime | 0 incidents active | us-east-1", type: "output" }
    ]);
    const bottomRef = useRef<HTMLDivElement>(null);

    const executeCommand = (cmd: string) => {
        const clean = cmd.trim().toLowerCase();
        const newHistory = [...history, { text: `$ ${cmd}`, type: "input" as const }];

        switch (clean) {
            case "help":
                newHistory.push(
                    { text: "AVAILABLE RUNBOOKS & CLI COMMANDS:", type: "system" },
                    { text: "  whoami       - Current role, focus & career profile", type: "output" },
                    { text: "  stack        - Production cloud & observability tooling", type: "output" },
                    { text: "  top          - Live cluster resource metrics simulation", type: "output" },
                    { text: "  arch         - Infrastructure topology schematic", type: "output" },
                    { text: "  experience   - Production incidents, HazerCloud & ISP tracks", type: "output" },
                    { text: "  legacy       - View past AR & experimental AI projects", type: "output" },
                    { text: "  clear        - Wipe terminal buffer", type: "output" },
                    { text: "  contact      - Initiate encrypted ping to engineer", type: "output" }
                );
                break;
            case "whoami":
                newHistory.push(
                    { text: "ID: Muhammed Fayiz V C", type: "output" },
                    { text: "ROLE: Junior Cloud Monitoring & DevOps / SRE Engineer", type: "output" },
                    { text: "FOCUS: AWS Infrastructure, Observability (CloudWatch/Grafana/Prometheus), Incident Response (RCA), Linux Hardening, IaC", type: "output" },
                    { text: "STATUS: Active at HazerCloud (Remote) • Open for High-Impact DevOps / Cloud Roles", type: "output" }
                );
                break;
            case "stack":
                newHistory.push(
                    { text: "CLOUD: AWS (EC2, S3, IAM, CloudWatch, VPC, RDS, Route 53)", type: "output" },
                    { text: "OBSERVABILITY: Prometheus, Grafana, AWS CloudWatch, Synthetic Monitoring", type: "output" },
                    { text: "CONTAINERS & CI/CD: Docker, Docker Compose, GitHub Actions, Linux (Ubuntu, AlmaLinux 9)", type: "output" },
                    { text: "IaC & SCRIPTING: Terraform (IaC Fundamentals), Bash, SQL, Git", type: "output" }
                );
                break;
            case "top":
                newHistory.push(
                    { text: "PID   SERVICE            CPU%    MEM%    STATUS", type: "system" },
                    { text: "104   aws-cloudwatch     0.4%    18MB    HEALTHY (24/7 SLA)", type: "output" },
                    { text: "219   grafana-agent      1.1%    42MB    STREAMING METRICS", type: "output" },
                    { text: "302   docker-daemon      0.8%    88MB    8 CONTAINERS RUNNING", type: "output" },
                    { text: "415   almalinux-hardened 0.2%    12MB    FIREWALL STRICT / SSH KEY-ONLY", type: "output" },
                    { text: "TOTAL MEM USAGE: 18% | LOAD AVG: 0.14, 0.09, 0.05", type: "system" }
                );
                break;
            case "arch":
                newHistory.push(
                    { text: "[Internet] ──> [Route 53 / DNS] ──> [AWS Security Group (Strict)]", type: "output" },
                    { text: "                                   │", type: "output" },
                    { text: "                                   ▼", type: "output" },
                    { text: "                        [EC2 AlmaLinux / Ubuntu]", type: "output" },
                    { text: "                        ├── [Docker Containers (Isolated)]", type: "output" },
                    { text: "                        ├── [CloudWatch & Prometheus Agents]", type: "output" },
                    { text: "                        └── [Grafana Observability Exporter]", type: "output" }
                );
                break;
            case "experience":
                newHistory.push(
                    { text: "1. HAZERCLOUD (Remote) — Junior Cloud Monitoring Engineer (Aug 2026 - Present)", type: "system" },
                    { text: "   • Real-time AWS infrastructure telemetry via CloudWatch (EC2, RDS, VPC).", type: "output" },
                    { text: "   • Alert triage, incident RCA, SLA/SLO uptime tracking & escalation.", type: "output" },
                    { text: "2. KERALA VISION BROADBAND — DevOps Intern (May 2025)", type: "system" },
                    { text: "   • High-traffic ISP Ubuntu server administration & network diagnostics.", type: "output" },
                    { text: "   • Docker workload isolation & deployment reliability.", type: "output" }
                );
                break;
            case "legacy":
                newHistory.push(
                    { text: "PAST AR & AI EXPERIMENTS [ARCHIVED]:", type: "system" },
                    { text: "  • AI AR Memory Palace: Unity 3D & Python/Flask educational spatial anchors.", type: "output" },
                    { text: "  • Hisense TV Remote Emulator: Android Bluetooth HID peripheral driver.", type: "output" },
                    { text: "  • AR Gaming Platform: Edge computer vision drawing-to-game compiler.", type: "output" },
                    { text: "Notice: Primary focus shifted to high-availability Cloud & SRE infrastructure.", type: "output" }
                );
                break;
            case "contact":
                newHistory.push(
                    { text: "DISPATCHING ENCRYPTED SIGNAL...", type: "system" },
                    { text: "Scroll down to the 'Transmit Telemetry' panel to dispatch a direct note.", type: "output" }
                );
                break;
            case "clear":
                setHistory([]);
                return;
            default:
                newHistory.push({
                    text: `Command not recognized: '${cmd}'. Try 'help' for available runbooks.`,
                    type: "error"
                });
                break;
        }

        setHistory(newHistory);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;
        executeCommand(input);
        setInput("");
    };

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [history]);

    return (
        <div className="w-full rounded-2xl border border-emerald-500/30 bg-black/90 font-mono shadow-2xl overflow-hidden backdrop-blur-2xl">
            {/* Terminal Title Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-zinc-950/80 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-2 text-xs text-zinc-400 font-mono flex items-center gap-1.5">
                        <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" />
                        fayiz@aws-prod-telemetry:~
                    </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-zinc-400">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 text-[10px]">
                        LIVE CONNECTED
                    </span>
                </div>
            </div>

            {/* Terminal Body */}
            <div className="p-4 md:p-6 text-xs md:text-sm h-64 md:h-72 overflow-y-auto space-y-1.5 custom-scrollbar text-zinc-300">
                {history.map((line, i) => (
                    <div
                        key={i}
                        className={`${
                            line.type === "system"
                                ? "text-emerald-400 font-semibold"
                                : line.type === "input"
                                ? "text-amber-300"
                                : line.type === "error"
                                ? "text-rose-400"
                                : "text-zinc-300"
                        }`}
                    >
                        {line.text}
                    </div>
                ))}
                <div ref={bottomRef} />
            </div>

            {/* Terminal Prompt Input */}
            <form onSubmit={handleSubmit} className="flex items-center px-4 py-3 bg-zinc-950 border-t border-zinc-800">
                <span className="text-emerald-400 font-mono text-sm mr-2 select-none">$</span>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="type 'help', 'top', 'whoami', or 'arch'..."
                    className="flex-1 bg-transparent text-emerald-300 font-mono text-xs md:text-sm outline-none placeholder:text-zinc-600"
                />
                <button
                    type="submit"
                    className="text-[11px] font-mono px-2.5 py-1 rounded bg-emerald-950/80 border border-emerald-800/50 text-emerald-400 hover:bg-emerald-900/50 transition-colors"
                >
                    RUN
                </button>
            </form>
        </div>
    );
}
