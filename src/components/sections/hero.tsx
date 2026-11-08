"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, Sparkles, ShieldCheck, Compass } from "lucide-react";
import { useRef } from "react";

export function Hero() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={ref} className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-28 pb-16">
            {/* 2027 Ambient Spatial Glow Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-primary/15 rounded-full blur-[160px] animate-pulse" />
                <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-accent/15 rounded-full blur-[140px]" />
                <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="container relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    {/* Left & Center Hero Content */}
                    <motion.div
                        style={{ y, opacity }}
                        className="lg:col-span-7 space-y-8"
                    >
                        {/* Status Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary/25 bg-primary/10 backdrop-blur-md shadow-sm"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="text-xs font-mono uppercase tracking-widest text-primary font-medium">
                                Spatial Computing & Edge AI Engineer
                            </span>
                        </motion.div>

                        {/* Title & Name */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold font-heading tracking-tighter leading-[0.95] text-foreground">
                                Muhammed <br />
                                <span className="text-gradient">Fayiz V C</span>
                            </h1>
                        </motion.div>

                        {/* Punchy Bio Statement */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="space-y-4 max-w-xl"
                        >
                            <p className="text-xl sm:text-2xl font-light text-muted-foreground leading-snug">
                                Pioneering the convergence of <span className="text-foreground font-semibold">Augmented Reality</span>, <span className="text-foreground font-semibold">Edge Intelligence</span>, and intuitive Human-Computer interfaces.
                            </p>
                            <p className="text-sm sm:text-base text-muted-foreground/80 leading-relaxed font-sans">
                                Designing software systems that bridge physical dimensions and digital consciousness—built for responsiveness, zero telemetry bloat, and sheer craft.
                            </p>
                        </motion.div>

                        {/* Action Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-wrap items-center gap-4 pt-2"
                        >
                            <Button size="lg" className="rounded-2xl text-base px-8 py-6 h-auto shadow-xl shadow-primary/20 hover:shadow-primary/30 font-medium" asChild>
                                <a href="#projects">
                                    Explore Works <ArrowRight className="ml-2 h-5 w-5" />
                                </a>
                            </Button>
                            <Button variant="outline" size="lg" className="rounded-2xl text-base px-8 py-6 h-auto border-white/10 hover:bg-white/5 font-medium" asChild>
                                <a href="#contact">Contact Direct</a>
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Right Hero Graphic: Glassmorphic Spatial Hologram Frame */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 1.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-5 relative"
                    >
                        <div className="relative mx-auto max-w-[340px] sm:max-w-[420px] aspect-[4/5] rounded-3xl border border-white/15 bg-card/30 backdrop-blur-2xl p-4 shadow-2xl">
                            {/* Inner Picture Frame */}
                            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 group">
                                <img
                                    src="/profile.jpg"
                                    alt="Muhammed Fayiz V C"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />

                                {/* Interactive Mini HUD Overlay */}
                                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-background/80 backdrop-blur-xl border border-white/10 space-y-1.5 shadow-lg">
                                    <div className="flex items-center justify-between text-xs font-mono">
                                        <span className="text-primary font-bold">NODE: FAYIZ-CORE</span>
                                        <span className="text-emerald-400">ONLINE</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground truncate font-sans">
                                        B.Tech CSE • Spatial Web & Edge Systems
                                    </p>
                                </div>
                            </div>

                            {/* Corner Decals */}
                            <div className="absolute -top-3 -left-3 h-8 w-8 rounded-tl-xl border-t-2 border-l-2 border-primary" />
                            <div className="absolute -bottom-3 -right-3 h-8 w-8 rounded-br-xl border-b-2 border-r-2 border-primary" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
