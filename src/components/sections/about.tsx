"use client";

import { motion } from "framer-motion";
import { Download, GraduationCap, Briefcase, MapPin, Terminal, Cpu, Sparkles, Layers, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function About() {
    const coreStack = [
        { name: "TypeScript / Next.js", category: "Core" },
        { name: "Three.js / WebGL", category: "Spatial" },
        { name: "TensorFlow Lite", category: "Edge AI" },
        { name: "Unity & AR Foundation", category: "AR/XR" },
        { name: "Docker & Linux", category: "DevOps" },
        { name: "Python & PyTorch", category: "AI/ML" },
        { name: "Node.js & Go", category: "Backend" },
        { name: "PostgreSQL & Redis", category: "Data" },
    ];

    return (
        <section className="py-28 bg-background relative overflow-hidden" id="about">
            <div className="container max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="mb-20 text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/25 bg-primary/10 text-primary text-xs font-mono tracking-widest uppercase mb-4">
                        <Terminal className="w-3.5 h-3.5" />
                        <span>System Profile</span>
                    </div>
                    <h3 className="text-4xl md:text-6xl font-bold font-heading tracking-tight">
                        Architecting the <span className="text-gradient">Spatial Web</span>
                    </h3>
                    <p className="text-muted-foreground mt-4 text-lg">
                        Bridging high-performance systems, edge artificial intelligence, and physical-digital interfaces.
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
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

                        <div className="relative w-40 h-40 md:w-52 md:h-52 shrink-0 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl">
                            <img
                                src="/profile.jpg"
                                alt="Muhammed Fayiz V C"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
                        </div>

                        <div className="flex flex-col justify-between h-full space-y-6">
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-primary font-mono text-sm tracking-wide">
                                    <MapPin className="h-4 w-4" />
                                    <span>Kerala, India • Available Globally</span>
                                </div>
                                <h4 className="text-2xl md:text-3xl font-bold font-heading">
                                    Muhammed Fayiz V C
                                </h4>
                                <p className="text-base text-muted-foreground leading-relaxed">
                                    Computer Science & Engineering scholar specializing in the convergence of <span className="text-foreground font-medium">Augmented Reality</span>, <span className="text-foreground font-medium">Edge Machine Learning</span>, and immersive Human-Machine systems.
                                </p>
                            </div>

                            <div className="pt-2 flex flex-wrap items-center gap-4">
                                <Button size="lg" className="rounded-xl gap-2 font-medium" asChild>
                                    <a
                                        href="/resume.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Download className="h-4 w-4" /> Download Resume
                                    </a>
                                </Button>
                                <span className="text-xs text-muted-foreground font-mono flex items-center gap-1.5">
                                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" /> Verified CV
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Quick Stats / Philosophy Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="glass-panel p-8 rounded-3xl border border-white/10 bg-card/40 backdrop-blur-xl flex flex-col justify-between shadow-xl"
                    >
                        <div>
                            <div className="h-12 w-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center mb-6">
                                <Cpu className="h-6 w-6" />
                            </div>
                            <h4 className="text-xl font-bold mb-2">Core Philosophy</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                "Technology is at its best when it seamlessly blends into human cognition rather than demanding attention."
                            </p>
                        </div>

                        <div className="pt-6 border-t border-white/10 mt-6 grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-2xl font-bold font-heading text-primary">04+</p>
                                <p className="text-xs text-muted-foreground font-mono">Years Building</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold font-heading text-primary">100%</p>
                                <p className="text-xs text-muted-foreground font-mono">Open Source Spirit</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Experience Timeline Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="glass-panel p-8 rounded-3xl border border-white/10 bg-card/40 backdrop-blur-xl flex flex-col justify-between shadow-xl"
                    >
                        <div>
                            <div className="h-12 w-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center mb-6">
                                <Briefcase className="h-6 w-6" />
                            </div>
                            <span className="text-xs font-mono text-primary uppercase tracking-widest">Industry Track</span>
                            <h4 className="text-xl font-bold mt-1">DevOps & Cloud Intern</h4>
                            <p className="text-sm font-medium text-foreground/80 mt-1">Kerala Vision Broadband</p>
                            <p className="text-xs text-muted-foreground font-mono mt-1">May 2025 – July 2025</p>
                            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                                Automated distributed deployment workflows, architected self-healing network monitors, and streamlined container lifecycles.
                            </p>
                        </div>
                    </motion.div>

                    {/* Education Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="glass-panel p-8 rounded-3xl border border-white/10 bg-card/40 backdrop-blur-xl flex flex-col justify-between shadow-xl"
                    >
                        <div>
                            <div className="h-12 w-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center mb-6">
                                <GraduationCap className="h-6 w-6" />
                            </div>
                            <span className="text-xs font-mono text-primary uppercase tracking-widest">Academia</span>
                            <h4 className="text-xl font-bold mt-1">B.Tech in Computer Science</h4>
                            <p className="text-sm font-medium text-foreground/80 mt-1">St. Thomas College of Engineering</p>
                            <p className="text-xs text-muted-foreground font-mono mt-1">2022 – 2026</p>
                            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                                Advanced coursework in Distributed Operating Systems, Machine Intelligence, Computer Graphics, and Algorithms.
                            </p>
                        </div>
                    </motion.div>

                    {/* Tech Stack Matrix Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.25 }}
                        className="glass-panel p-8 rounded-3xl border border-white/10 bg-card/40 backdrop-blur-xl flex flex-col justify-between shadow-xl"
                    >
                        <div>
                            <div className="h-12 w-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center mb-6">
                                <Layers className="h-6 w-6" />
                            </div>
                            <span className="text-xs font-mono text-primary uppercase tracking-widest">Stack Inventory</span>
                            <h4 className="text-xl font-bold mt-1 mb-4">Technologies & Toolchains</h4>
                            <div className="flex flex-wrap gap-2">
                                {coreStack.map((tech) => (
                                    <span
                                        key={tech.name}
                                        className="px-3 py-1.5 rounded-xl text-xs font-mono border border-white/10 bg-background/60 text-foreground/90 hover:border-primary/50 hover:bg-primary/10 transition-colors"
                                    >
                                        {tech.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
