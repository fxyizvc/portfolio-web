"use client";

const experiences = [
    {
        role: "Junior Cloud Monitoring Engineer",
        company: "HazerCloud",
        location: "Remote",
        period: "Aug 2026 — Present",
        bullets: [
            "Monitor AWS production workloads in real-time using CloudWatch, identifying saturation, service degradation, and latency spikes.",
            "Triage infrastructure alerts across CPU, memory, RDS, and network interfaces in compliance with runbooks and SLAs.",
            "Conduct root-cause analysis (RCA) for production incidents, coordinating escalations with DevOps and security teams.",
            "Tune CloudWatch alarms to eliminate alert fatigue and maintain reliable 24/7 on-call shift operations."
        ]
    },
    {
        role: "DevOps Intern",
        company: "Kerala Vision Broadband Limited",
        location: "Kannur, Kerala",
        period: "May 2025",
        bullets: [
            "Administered Ubuntu Linux servers in an ISP environment, managing processes, user permissions, and storage quotas.",
            "Diagnosed network routing anomalies and downtime tickets using ping, traceroute, and netstat.",
            "Maintained Docker container deployments and centralized application logging."
        ]
    }
];

const technicalSkills = [
    { category: "Cloud & Observability", items: "AWS (EC2, S3, IAM, CloudWatch, VPC, RDS, Route 53), Grafana, Prometheus" },
    { category: "DevOps & Containers", items: "Docker, Docker Compose, GitHub Actions (CI/CD), Git, Terraform (Fundamentals)" },
    { category: "Linux & Networking", items: "Ubuntu, AlmaLinux 9, Bash, TCP/IP, DNS, HTTP/HTTPS, SSH, Apache, Diagnostics" },
    { category: "Operations", items: "Incident Response, Root Cause Analysis (RCA), SLA/SLO Tracking, Alert Triage, On-Call" },
    { category: "Programming", items: "Bash, SQL, C, HTML" },
];

export function About() {
    return (
        <section className="py-16 max-w-5xl mx-auto px-6 hairline-t" id="experience">
            {/* Header */}
            <div className="flex items-baseline justify-between border-b border-border pb-3 mb-10">
                <h2 className="text-sm font-mono uppercase tracking-wider text-muted-foreground font-semibold">
                    03 / Experience & Competencies
                </h2>
                <span className="text-xs font-mono text-muted-foreground">Operations</span>
            </div>

            {/* Experience Timeline */}
            <div className="space-y-12">
                {experiences.map((exp, idx) => (
                    <div key={idx} className="grid md:grid-cols-12 gap-6">
                        <div className="md:col-span-4 space-y-1">
                            <h3 className="text-base font-semibold text-foreground">{exp.role}</h3>
                            <p className="text-xs font-mono text-muted-foreground">{exp.company} &bull; {exp.location}</p>
                            <span className="text-xs font-mono text-muted-foreground/80 block">{exp.period}</span>
                        </div>

                        <div className="md:col-span-8">
                            <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                                {exp.bullets.map((b, i) => (
                                    <li key={i} className="flex items-start gap-2.5">
                                        <span className="text-foreground select-none mt-1 text-xs">&bull;</span>
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            {/* Skills & Education Matrix */}
            <div className="mt-16 pt-12 border-t border-border grid md:grid-cols-12 gap-8">
                {/* Skills */}
                <div className="md:col-span-7 space-y-4">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold">
                        Technical Skills
                    </h3>
                    <div className="divide-y divide-border border border-border rounded bg-card text-xs font-mono">
                        {technicalSkills.map((sk, i) => (
                            <div key={i} className="p-3 grid sm:grid-cols-12 gap-2">
                                <span className="sm:col-span-5 text-muted-foreground font-medium">{sk.category}</span>
                                <span className="sm:col-span-7 text-foreground">{sk.items}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education & Credentials */}
                <div className="md:col-span-5 space-y-4">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold">
                        Education & Certifications
                    </h3>
                    <div className="border border-border rounded p-4 bg-card space-y-4 text-xs font-mono">
                        <div>
                            <span className="text-foreground font-semibold block">B.Tech in Computer Science & Eng</span>
                            <span className="text-muted-foreground">St. Thomas College of Engineering (2022 &ndash; 2026)</span>
                            <span className="text-muted-foreground/70 block mt-0.5">CGPA: 7.96 / 10.0</span>
                        </div>
                        <div className="border-t border-border pt-3 space-y-1.5 text-muted-foreground">
                            <p className="text-foreground">&bull; Datacom &mdash; Introduction to Cloud (2024)</p>
                            <p className="text-foreground">&bull; Cisco &mdash; Linux Unhatched (2023)</p>
                            <p className="text-foreground">&bull; iTech Hackfest Regional Qualifier</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
