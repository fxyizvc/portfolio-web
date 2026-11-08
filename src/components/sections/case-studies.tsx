"use client";

import { ArrowUpRight } from "lucide-react";

const systems = [
    {
        title: "AWS Multi-Tenant Web Hosting & Linux Hardening",
        focus: "AWS EC2 • AlmaLinux 9 • Apache • Route 53 • Certbot",
        summary: "Provisioned and hardened an AlmaLinux 9 EC2 server. Configured multi-tenant user isolation, virtual host routing, and automated Let's Encrypt TLS renewal with HTTP-to-HTTPS redirects. Mitigated DNS, dynamic-IP, and memory exhaustion issues.",
        metrics: "Multi-tenant user sandbox • IP-restricted SSH • Automated TLS",
        link: "https://github.com/fxyizvc",
    },
    {
        title: "Containerized Release Pipeline",
        focus: "Docker • Docker Compose • GitHub Actions • AWS EC2",
        summary: "Engineered an automated CI/CD pipeline on AWS EC2. Code pushes trigger automated test suites, build Docker containers, and redeploy with zero downtime. Implemented IAM roles adhering to the principle of least privilege.",
        metrics: "Automated container builds • Granular IAM policies • Docker Compose isolation",
        link: "https://github.com/fxyizvc",
    },
    {
        title: "Production Workload Telemetry & RCA",
        focus: "AWS CloudWatch • Prometheus • Grafana • On-Call",
        summary: "Real-time monitoring across AWS compute, databases, and network gateways at HazerCloud. Triaged infrastructure alerts for resource saturation, documented root-cause analysis (RCA), and tuned alarm thresholds to suppress noise.",
        metrics: "24/7 on-call shift rotations • Threshold tuning • RCA runbooks",
        link: "https://github.com/fxyizvc",
    },
    {
        title: "ISP Core Server Administration",
        focus: "Ubuntu Server • TCP/IP • DNS • Diagnostics",
        summary: "Administered Ubuntu servers within a high-traffic regional ISP network at Kerala Vision Broadband. Diagnosed packet drops and routing anomalies using ping, traceroute, and netstat while maintaining Dockerized internal utilities.",
        metrics: "High-traffic ISP network • Packet diagnostics • Resource limits",
        link: "https://github.com/fxyizvc",
    },
];

const archive = [
    {
        title: "AI AR Memory Palace",
        period: "2024",
        context: "Final Year B.Tech Project",
        desc: "Python/Flask REST API parsing educational documents into flashcards, projected into 3D physical spaces via Unity and ARCore.",
        tags: "Python, Flask, Unity, ARCore",
        link: "https://github.com/fxyizvc/ai-ar-memory-palace",
    },
    {
        title: "Hisense Bluetooth HID Remote Driver",
        period: "2023",
        context: "Systems & Mobile",
        desc: "Android Bluetooth Human Interface Device (HID) emulator connecting smartphones as low-latency TV controllers without local network pairing.",
        tags: "Android NDK, Bluetooth HID, Kotlin",
        link: "https://github.com/fxyizvc/bluetooth-remote-app",
    },
    {
        title: "Realtime Sketch AR Game Engine",
        period: "2024",
        context: "Computer Vision",
        desc: "Edge machine learning model segmenting physical drawings into real-time rigid physics colliders in Unity 3D.",
        tags: "TensorFlow Lite, Unity, C#",
        link: "https://github.com/fayizvc/AI-AR-Gaming-Platform",
    },
];

export function CaseStudies() {
    return (
        <section className="py-16 max-w-5xl mx-auto px-6 hairline-t" id="systems">
            {/* Systems Section */}
            <div className="space-y-8 mb-20">
                <div className="flex items-baseline justify-between border-b border-border pb-3">
                    <h2 className="text-sm font-mono uppercase tracking-wider text-muted-foreground font-semibold">
                        01 / Cloud Infrastructure & Systems
                    </h2>
                    <span className="text-xs font-mono text-muted-foreground">Production & Architecture</span>
                </div>

                <div className="divide-y divide-border">
                    {systems.map((item, idx) => (
                        <article key={idx} className="py-8 first:pt-0 last:pb-0 grid md:grid-cols-12 gap-6 group">
                            <div className="md:col-span-4 space-y-1">
                                <h3 className="text-base font-semibold text-foreground group-hover:underline underline-offset-4">
                                    {item.title}
                                </h3>
                                <p className="text-xs font-mono text-muted-foreground">{item.focus}</p>
                            </div>

                            <div className="md:col-span-8 space-y-4">
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {item.summary}
                                </p>
                                <div className="flex items-center justify-between pt-1 text-xs font-mono">
                                    <span className="text-foreground/70 bg-muted px-2 py-0.5 rounded">
                                        {item.metrics}
                                    </span>
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-foreground hover:underline"
                                    >
                                        <span>Code</span>
                                        <ArrowUpRight className="w-3 h-3 text-muted-foreground" />
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {/* Past Archive Section */}
            <div className="space-y-6 pt-10 border-t border-border" id="archive">
                <div className="flex items-baseline justify-between">
                    <div>
                        <h2 className="text-sm font-mono uppercase tracking-wider text-muted-foreground font-semibold">
                            02 / Archive Vault
                        </h2>
                        <p className="text-xs text-muted-foreground mt-1">
                            Earlier work across AR, spatial computing, and mobile drivers before transitioning full-time into Cloud and DevOps.
                        </p>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground hidden sm:inline">2023 &ndash; 2024</span>
                </div>

                <div className="border border-border rounded divide-y divide-border bg-card">
                    {archive.map((arch, i) => (
                        <div key={i} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="space-y-1 max-w-xl">
                                <div className="flex items-center gap-2">
                                    <span className="text-sm font-medium text-foreground">{arch.title}</span>
                                    <span className="text-[11px] font-mono text-muted-foreground">({arch.period})</span>
                                </div>
                                <p className="text-xs text-muted-foreground leading-relaxed">{arch.desc}</p>
                                <p className="text-[11px] font-mono text-muted-foreground/70">{arch.tags}</p>
                            </div>
                            <a
                                href={arch.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs font-mono text-foreground hover:underline self-start sm:self-center shrink-0"
                            >
                                <span>Repository</span>
                                <ArrowUpRight className="w-3 h-3 text-muted-foreground" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
