"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
    Cloud, 
    Server, 
    Shield, 
    Terminal, 
    Layers, 
    Activity, 
    CheckCircle2, 
    ExternalLink, 
    Github, 
    History, 
    Lock, 
    ArrowUpRight,
    Cpu,
    GitBranch
} from "lucide-react";

// Production DevOps & Cloud Infrastructure Work
const cloudSystems = [
    {
        id: "sys-1",
        title: "AWS Multi-Tenant Web Host & Linux Hardening",
        role: "Architecture, Hardening & TLS Automation",
        category: "Cloud Infrastructure & Security",
        summary: "Hardened AlmaLinux 9 EC2 infrastructure with strict Security Groups, isolated virtual hosts, automated Let's Encrypt TLS renewal, and Route 53 DNS routing.",
        highlights: [
            "AlmaLinux 9 OS-level hardening & IP-restricted SSH perimeter",
            "Multi-tenant file permission isolation with dedicated Linux system users",
            "Certbot TLS lifecycle automation with automated HTTP-to-HTTPS redirects",
            "Diagnosed & mitigated dynamic-IP failures and OOM memory pressures"
        ],
        tags: ["AWS EC2", "AlmaLinux 9", "Apache", "Route 53", "Certbot", "Linux Hardening"],
        architecture: "Client ──> Route 53 ──> EC2 Security Group (Strict) ──> Apache VirtualHost ──> PHP-FPM",
        status: "Production Hardened",
        codeLink: "https://github.com/fxyizvc",
    },
    {
        id: "sys-2",
        title: "Zero-Downtime Cloud-Native CI/CD Pipeline",
        role: "DevOps & Pipeline Automation",
        category: "CI/CD & Container Orchestration",
        summary: "Automated end-to-end containerized deployment workflow on AWS EC2 leveraging GitHub Actions, least-privilege IAM policies, and Docker networks.",
        highlights: [
            "Automated test, build, and zero-touch release on every git push",
            "Granular AWS IAM roles minimizing permissions on compute instances",
            "Docker Compose multi-container networking with volume persistence",
            "Drastically reduced manual deployment cycles and release failure risk"
        ],
        tags: ["Docker", "Docker Compose", "GitHub Actions", "AWS IAM", "AWS EC2", "Bash"],
        architecture: "Git Push ──> GitHub Actions Runner ──> Lint & Test ──> Docker Build ──> EC2 Container Swap",
        status: "Automated Pipeline",
        codeLink: "https://github.com/fxyizvc",
    },
    {
        id: "sys-3",
        title: "Production Observability & SLA Incident Response",
        role: "Cloud Monitoring Engineer (HazerCloud)",
        category: "SRE & Telemetry",
        summary: "Live infrastructure monitoring across AWS EC2, RDS, and VPC endpoints. Driving alert triage, root-cause analysis (RCA), and metric tuning to maintain 99.9% availability.",
        highlights: [
            "CloudWatch alert threshold tuning to eliminate alert fatigue",
            "Deep-dive RCA documentation coordinating with DevOps and Security teams",
            "Triage for CPU saturation, memory exhaustion, and latency spikes",
            "Maintained strict 24/7 on-call shift handover protocol and SLA compliance"
        ],
        tags: ["AWS CloudWatch", "Grafana", "Prometheus", "Incident RCA", "SLA Tracking", "VPC"],
        architecture: "Workloads ──> CloudWatch / Prometheus ──> Grafana Dashboards ──> Runbook Alert Escalation",
        status: "Active Production",
        codeLink: "https://github.com/fxyizvc",
    },
    {
        id: "sys-4",
        title: "High-Traffic ISP Core Network Systems",
        role: "DevOps Intern (Kerala Vision)",
        category: "Network Systems & ISP Infrastructure",
        summary: "Managed high-load Ubuntu Linux servers, automated network diagnostics, and resolved recurring packet drops and downtime tickets.",
        highlights: [
            "Network bottleneck diagnosis with ping, traceroute, and netstat",
            "Containerized service deployments and centralized syslog management",
            "Tuned filesystem permissions and core system resource limits"
        ],
        tags: ["Ubuntu Server", "Networking", "TCP/IP & DNS", "Docker Logs", "Diagnostics"],
        architecture: "Core ISP Node ──> Ubuntu Gateway ──> Network Diagnostics ──> Container Logs",
        status: "Completed Internship",
        codeLink: "https://github.com/fxyizvc",
    }
];

// The "Past Archive" (Your former life building AR, AI, and Mobile experiments)
const legacyProjects = [
    {
        id: "leg-1",
        title: "AI AR Memory Palace (Final Year Capstone)",
        era: "2024",
        type: "Spatial AI & Computer Vision",
        description: "Pioneered interactive 3D associative learning spaces on physical blackboards using Unity ARCore, edge ML models, and a Python/Flask document ingestion API.",
        tech: ["Unity 3D", "ARCore", "Python / Flask", "Google Drive API", "HCI"],
        link: "https://github.com/fxyizvc/ai-ar-memory-palace",
    },
    {
        id: "leg-2",
        title: "AI-Driven Realtime AR Game Generator",
        era: "2024",
        type: "Spatial XR Prototyping",
        description: "Transforming physical marker sketches into live physics-colliding AR game arenas in real time via TensorFlow Lite edge segmentation.",
        tech: ["TensorFlow Lite", "Unity", "C#", "Computer Vision"],
        link: "https://github.com/fayizvc/AI-AR-Gaming-Platform",
    },
    {
        id: "leg-3",
        title: "Hisense Tornado 3.0 Bluetooth HID Emulator",
        era: "2023",
        type: "Hardware & Mobile Systems",
        description: "Reverse-engineered Bluetooth Human Interface Device (HID) wireless protocols to emulate TV remotes directly on low-latency Android NDK runtimes.",
        tech: ["Android NDK", "Bluetooth HID", "Kotlin", "Hardware Protocols"],
        link: "https://github.com/fxyizvc/bluetooth-remote-app",
    }
];

export function CaseStudies() {
    const [selectedTab, setSelectedTab] = useState<"current" | "past">("current");
    const [activeSystem, setActiveSystem] = useState<string>("sys-1");

    return (
        <section className="py-28 relative overflow-hidden" id="infrastructure">
            {/* Ambient Lighting */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none -z-10" />
            <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

            <div className="container max-w-7xl mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 text-emerald-400 text-xs font-mono tracking-widest uppercase mb-4">
                        <Activity className="w-3.5 h-3.5" />
                        <span>Systems & Infrastructure</span>
                    </div>

                    <h3 className="text-4xl md:text-6xl font-bold font-heading tracking-tight">
                        Cloud Systems & <span className="text-gradient">Production Work</span>
                    </h3>

                    <p className="text-muted-foreground mt-4 text-lg">
                        High-availability architecture, Linux hardening, automated pipelines, and telemetry.
                    </p>

                    {/* Mode Switcher: Current Production vs Past Archive Vault */}
                    <div className="inline-flex p-1.5 rounded-2xl bg-zinc-900/80 border border-white/10 mt-8 backdrop-blur-xl">
                        <button
                            onClick={() => setSelectedTab("current")}
                            className={`px-5 py-2.5 rounded-xl text-xs font-mono transition-all duration-200 flex items-center gap-2 ${
                                selectedTab === "current"
                                    ? "bg-emerald-500 text-black font-bold shadow-lg shadow-emerald-500/20"
                                    : "text-zinc-400 hover:text-white"
                            }`}
                        >
                            <Server className="w-3.5 h-3.5" />
                            <span>Cloud & DevOps Architecture</span>
                        </button>
                        <button
                            onClick={() => setSelectedTab("past")}
                            id="past-vault"
                            className={`px-5 py-2.5 rounded-xl text-xs font-mono transition-all duration-200 flex items-center gap-2 ${
                                selectedTab === "past"
                                    ? "bg-amber-400 text-black font-bold shadow-lg shadow-amber-400/20"
                                    : "text-zinc-400 hover:text-white"
                            }`}
                        >
                            <History className="w-3.5 h-3.5" />
                            <span>The Past Vault (AI / AR Experiments)</span>
                        </button>
                    </div>
                </div>

                {/* Tab 1: Current Cloud & DevOps Architecture */}
                {selectedTab === "current" && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                    >
                        {cloudSystems.map((sys) => (
                            <div
                                key={sys.id}
                                className="p-8 rounded-3xl border border-white/10 bg-card/40 backdrop-blur-2xl shadow-xl flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300 group"
                            >
                                <div className="space-y-6">
                                    {/* Top Bar */}
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-800/40 text-emerald-400">
                                            {sys.category}
                                        </span>
                                        <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                                            <Shield className="w-3.5 h-3.5 text-emerald-400" />
                                            {sys.status}
                                        </span>
                                    </div>

                                    <div>
                                        <h4 className="text-2xl font-bold font-heading group-hover:text-emerald-400 transition-colors">
                                            {sys.title}
                                        </h4>
                                        <p className="text-xs text-emerald-400/90 font-mono mt-1 font-semibold">{sys.role}</p>
                                        <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                                            {sys.summary}
                                        </p>
                                    </div>

                                    {/* Architecture Flow Box */}
                                    <div className="p-3.5 rounded-xl bg-black/60 border border-zinc-800 text-[11px] font-mono text-zinc-300 overflow-x-auto whitespace-nowrap">
                                        <span className="text-emerald-400 font-bold mr-2">FLOW:</span>
                                        {sys.architecture}
                                    </div>

                                    {/* Key Engineering Highlights */}
                                    <div className="space-y-2">
                                        <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">Key Implementations:</p>
                                        <ul className="space-y-1.5">
                                            {sys.highlights.map((h, i) => (
                                                <li key={i} className="text-xs text-zinc-300 flex items-start gap-2">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                                                    <span>{h}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Tech Pills & Action */}
                                <div className="pt-6 border-t border-white/10 mt-6 flex flex-col gap-4">
                                    <div className="flex flex-wrap gap-1.5">
                                        {sys.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/5 border border-white/10 text-zinc-300"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex justify-end">
                                        <a
                                            href={sys.codeLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
                                        >
                                            <Github className="w-3.5 h-3.5" />
                                            <span>Inspect Repositories</span>
                                            <ArrowUpRight className="w-3.5 h-3.5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                )}

                {/* Tab 2: The Past Vault (AI & AR Heritage) */}
                {selectedTab === "past" && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-6"
                    >
                        {/* Notice Banner */}
                        <div className="p-6 rounded-2xl border border-amber-500/30 bg-amber-950/20 backdrop-blur-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 shrink-0">
                                    <History className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-base font-bold text-amber-300 font-heading">
                                        The Origin Story: Developer & AR Creator Past
                                    </h4>
                                    <p className="text-xs text-amber-200/80 mt-1 max-w-2xl leading-relaxed">
                                        Before focusing full-time on AWS infrastructure, Linux administration, and SRE operations, I spent years researching Augmented Reality, edge machine learning models, and low-level mobile hardware bridges. Here is the curated archive of those builds.
                                    </p>
                                </div>
                            </div>
                            <span className="px-3 py-1 rounded-full text-xs font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30 shrink-0">
                                ARCHIVED ARTIFACTS
                            </span>
                        </div>

                        {/* Past Project Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {legacyProjects.map((leg) => (
                                <div
                                    key={leg.id}
                                    className="p-6 rounded-3xl border border-zinc-800 bg-zinc-950/60 backdrop-blur-xl flex flex-col justify-between hover:border-amber-500/40 transition-all duration-300"
                                >
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-950/60 border border-amber-800/40 text-amber-300">
                                                {leg.era}
                                            </span>
                                            <span className="text-xs font-mono text-zinc-500">{leg.type}</span>
                                        </div>

                                        <h4 className="text-xl font-bold font-heading text-zinc-200">
                                            {leg.title}
                                        </h4>

                                        <p className="text-xs text-zinc-400 leading-relaxed">
                                            {leg.description}
                                        </p>
                                    </div>

                                    <div className="pt-6 border-t border-zinc-900 mt-6 space-y-4">
                                        <div className="flex flex-wrap gap-1.5">
                                            {leg.tech.map((t) => (
                                                <span
                                                    key={t}
                                                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900 text-zinc-400 border border-zinc-800"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        <a
                                            href={leg.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-400 hover:text-amber-300 transition-colors"
                                        >
                                            <Github className="w-3.5 h-3.5" />
                                            <span>Archived Code</span>
                                            <ArrowUpRight className="w-3.5 h-3.5" />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
