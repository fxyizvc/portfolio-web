"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { LiveTelemetry } from "@/components/ui/live-telemetry";
import { LiveTerminal } from "@/components/ui/live-terminal";

export function Hero() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={ref} className="relative min-h-[95vh] flex flex-col justify-center overflow-hidden pt-28 pb-16">
            {/* Ambient Cloud Cyber-Glows */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[500px] bg-emerald-500/10 dark:bg-emerald-500/10 rounded-full blur-[160px] animate-pulse" />
                <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-cyan-500/10 dark:bg-cyan-500/10 rounded-full blur-[150px]" />
                <div className="absolute top-12 right-1/4 w-[350px] h-[350px] bg-indigo-500/10 dark:bg-indigo-500/10 rounded-full blur-[130px]" />
            </div>

            <div className="container relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    {/* Left: Punchy Story & Positioning */}
                    <motion.div
                        style={{ y, opacity }}
                        className="lg:col-span-7 space-y-8"
                    >
                        {/* Live Status Pill */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 dark:bg-emerald-950/40 backdrop-blur-xl shadow-xs"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600 dark:bg-emerald-500"></span>
                            </span>
                            <span className="text-xs font-mono uppercase tracking-widest text-emerald-800 dark:text-emerald-400 font-bold">
                                Cloud Monitoring & SRE • AWS • Linux Hardening
                            </span>
                        </motion.div>

                        {/* Title & Name */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.9, delay: 0.1 }}
                        >
                            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold font-heading tracking-tighter leading-[0.92] text-foreground">
                                Muhammed <br />
                                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400 bg-clip-text text-transparent">
                                    Fayiz V C
                                </span>
                            </h1>
                        </motion.div>

                        {/* The Evolution Story */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.2 }}
                            className="space-y-4 max-w-xl"
                        >
                            <p className="text-xl sm:text-2xl font-normal text-foreground leading-snug">
                                <span className="text-emerald-700 dark:text-emerald-400 font-semibold">From crafting pixels to guarding production systems.</span> I maintain high-availability cloud infrastructure, drive root-cause triage, and automate deployments.
                            </p>
                            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-sans">
                                Currently keeping production workloads resilient at <span className="text-foreground font-semibold">HazerCloud</span>. Experienced with AWS CloudWatch telemetry, Dockerized micro-services, AlmaLinux/Ubuntu security policies, and CI/CD pipelines.
                            </p>
                        </motion.div>

                        {/* Action Triggers */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.3 }}
                            className="flex flex-wrap items-center gap-4 pt-2"
                        >
                            <Button size="lg" className="rounded-2xl text-base px-8 py-6 h-auto bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-600/25 font-semibold transition-all" asChild>
                                <a href="#infrastructure">
                                    Inspect Cloud Systems <ArrowRight className="ml-2 h-5 w-5" />
                                </a>
                            </Button>
                            <Button variant="outline" size="lg" className="rounded-2xl text-base px-8 py-6 h-auto border-border hover:bg-accent/10 font-mono text-xs tracking-wider" asChild>
                                <a href="#past-vault">
                                    [View Archive: AI/AR Past]
                                </a>
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Right: Live Interactive Cloud Terminal & Cluster HUD */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.1, delay: 0.2 }}
                        className="lg:col-span-5 space-y-6"
                    >
                        {/* Live Telemetry Ping Matrix */}
                        <div className="p-4 rounded-3xl border border-border bg-card/80 backdrop-blur-2xl shadow-xl">
                            <LiveTelemetry />
                        </div>

                        {/* Live Interactive Terminal for Visitors */}
                        <LiveTerminal />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
