"use client";

import { motion } from "framer-motion";
import { Download, GraduationCap, Briefcase, MapPin, Terminal, Server, ShieldCheck, Activity, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function About() {
    const cloudSkillMatrix = [
        { name: "AWS (EC2, S3, IAM, CloudWatch, VPC, RDS, Route 53)", category: "Cloud Engine" },
        { name: "Grafana & Prometheus", category: "Telemetry & Observability" },
        { name: "Linux (Ubuntu, AlmaLinux 9)", category: "OS Hardening" },
        { name: "Docker & Docker Compose", category: "Containerization" },
        { name: "GitHub Actions CI/CD", category: "Release Automation" },
        { name: "Terraform (IaC Fundamentals)", category: "Infrastructure as Code" },
        { name: "Bash & Linux Diagnostics", category: "Scripting & Triage" },
        { name: "Incident RCA & On-Call Runbooks", category: "SRE Operations" },
    ];

    return (
        <section className="py-28 bg-background relative overflow-hidden" id="about">
            <div className="container max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="mb-20 text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 text-emerald-400 text-xs font-mono tracking-widest uppercase mb-4">
                        <Server className="w-3.5 h-3.5" />
                        <span>Infrastructure Operator Profile</span>
                    </div>
                    <h3 className="text-4xl md:text-6xl font-bold font-heading tracking-tight">
                        Reliability & <span className="text-gradient">Production Engineering</span>
                    </h3>
                    <p className="text-muted-foreground mt-4 text-lg">
                        Specialized in AWS cloud observability, Linux systems administration, and production incident response.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Primary Bio Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 glass-panel p-8 md:p-12 rounded-3xl border border-white/10 flex flex-col md:flex-row gap-8 items-center bg-card/40 backdrop-blur-xl relative overflow-hidden shadow-2xl"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                        <div className="relative w-40 h-40 md:w-52 md:h-52 shrink-0 rounded-2xl overflow-hidden border-2 border-emerald-500/30 shadow-2xl">
                            <img
                                src="/profile.jpg"
                                alt="Muhammed Fayiz V C"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
                        </div>

                        <div className="flex flex-col justify-between h-full space-y-6">
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-emerald-400 font-mono text-sm tracking-wide">
                                    <MapPin className="h-4 w-4" />
                                    <span>Kannur, Kerala • Remote Worldwide</span>
                                </div>
                                <h4 className="text-2xl md:text-3xl font-bold font-heading">
                                    Muhammed Fayiz V C
                                </h4>
                                <p className="text-base text-muted-foreground leading-relaxed">
                                    Cloud Monitoring & DevOps Engineer with hands-on experience owning AWS workloads, triaging live production alarms, driving root-cause analyses, and automating deployments. Transitioned from early exploratory AR/AI development into core cloud infrastructure and site reliability.
                                </p>
                            </div>

                            <div className="pt-2 flex flex-wrap items-center gap-4">
                                <Button size="lg" className="rounded-xl gap-2 font-medium bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/20" asChild>
                                    <a
                                        href="/resume.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Download className="h-4 w-4" /> Download Cloud CV (PDF)
                                    </a>
                                </Button>
                                <span className="text-xs text-muted-foreground font-mono flex items-center gap-1.5">
                                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" /> Production Verified
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Operational Metrics Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="glass-panel p-8 rounded-3xl border border-white/10 bg-card/40 backdrop-blur-xl flex flex-col justify-between shadow-xl"
                    >
                        <div>
                            <div className="h-12 w-12 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center mb-6">
                                <Activity className="h-6 w-6" />
                            </div>
                            <h4 className="text-xl font-bold mb-2 font-heading">SRE Philosophy</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                "Treat operations as a software problem. Maximize observability, eradicate alert fatigue, and automate failure mitigation."
                            </p>
                        </div>

                        <div className="pt-6 border-t border-white/10 mt-6 grid grid-cols-2 gap-4 font-mono">
                            <div>
                                <p className="text-2xl font-bold font-heading text-emerald-400">99.9%</p>
                                <p className="text-xs text-muted-foreground">SLA Mindset</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold font-heading text-emerald-400">&lt;15m</p>
                                <p className="text-xs text-muted-foreground">Alert Triage Goal</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Experience: HazerCloud */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="glass-panel p-8 rounded-3xl border border-white/10 bg-card/40 backdrop-blur-xl flex flex-col justify-between shadow-xl"
                    >
                        <div>
                            <div className="h-12 w-12 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center mb-6">
                                <Briefcase className="h-6 w-6" />
                            </div>
                            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Active Role</span>
                            <h4 className="text-xl font-bold mt-1 font-heading">Junior Cloud Monitoring Engineer</h4>
                            <p className="text-sm font-semibold text-foreground/90 mt-1">HazerCloud • Remote</p>
                            <p className="text-xs text-muted-foreground font-mono mt-1">Aug 2026 – Present</p>
                            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                                Real-time AWS infrastructure telemetry via CloudWatch. Lead RCA documentation, tune alert thresholds to suppress noise, and manage 24/7 on-call shift operations.
                            </p>
                        </div>
                    </motion.div>

                    {/* Experience: Kerala Vision Broadband */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="glass-panel p-8 rounded-3xl border border-white/10 bg-card/40 backdrop-blur-xl flex flex-col justify-between shadow-xl"
                    >
                        <div>
                            <div className="h-12 w-12 rounded-xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center mb-6">
                                <Server className="h-6 w-6" />
                            </div>
                            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">ISP Track</span>
                            <h4 className="text-xl font-bold mt-1 font-heading">DevOps Intern</h4>
                            <p className="text-sm font-semibold text-foreground/90 mt-1">Kerala Vision Broadband Limited</p>
                            <p className="text-xs text-muted-foreground font-mono mt-1">May 2025</p>
                            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                                High-traffic ISP Ubuntu Linux administration, network diagnostics (ping/traceroute/netstat), container deployment isolation, and runtime log analysis.
                            </p>
                        </div>
                    </motion.div>

                    {/* Education & Certs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.25 }}
                        className="glass-panel p-8 rounded-3xl border border-white/10 bg-card/40 backdrop-blur-xl flex flex-col justify-between shadow-xl"
                    >
                        <div>
                            <div className="h-12 w-12 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center mb-6">
                                <GraduationCap className="h-6 w-6" />
                            </div>
                            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">Formal Education</span>
                            <h4 className="text-xl font-bold mt-1 font-heading">B.Tech in Computer Science</h4>
                            <p className="text-sm font-semibold text-foreground/90 mt-1">St. Thomas College of Engineering</p>
                            <p className="text-xs text-muted-foreground font-mono mt-1">2022 – 2026 • CGPA: 7.96 / 10.0</p>
                            <div className="pt-4 border-t border-white/10 mt-4 space-y-1 text-xs text-muted-foreground font-mono">
                                <p className="text-emerald-400">✓ Datacom Intro to Cloud (2024)</p>
                                <p className="text-cyan-400">✓ Cisco Linux Unhatched (2023)</p>
                                <p className="text-amber-400">✓ iTech Hackfest Regional Qualifier</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Cloud & Observability Arsenal Matrix */}
                <div className="mt-12 p-8 rounded-3xl border border-white/10 bg-card/30 backdrop-blur-2xl shadow-xl">
                    <div className="flex items-center gap-2 mb-6">
                        <Terminal className="w-4 h-4 text-emerald-400" />
                        <h4 className="text-base font-mono uppercase tracking-wider text-foreground font-bold">
                            Production Tooling & Cloud Stack
                        </h4>
                    </div>

                    <div className="flex flex-wrap gap-2.5">
                        {cloudSkillMatrix.map((item) => (
                            <div
                                key={item.name}
                                className="px-3.5 py-2 rounded-xl text-xs font-mono bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-950/30 transition-all flex items-center gap-2"
                            >
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                <span className="text-zinc-200">{item.name}</span>
                                <span className="text-[10px] text-zinc-500 border-l border-white/10 pl-2">
                                    {item.category}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
