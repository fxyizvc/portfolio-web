"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={ref} className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-50" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] opacity-30" />
            </div>

            <div className="container relative z-10 px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        style={{ y, opacity }}
                        className="max-w-3xl"
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <h2 className="text-xl md:text-2xl font-medium text-primary mb-4 tracking-wide font-sans">
                                Hello, I'm
                            </h2>
                            <h1 className="text-[12vw] md:text-[8rem] font-bold font-heading tracking-tighter leading-[0.8] mb-6 text-foreground/90">
                                Fayiz<span className="text-primary">.</span>
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="pl-2 md:pl-4 border-l-2 border-primary/30"
                        >
                            <h2 className="text-3xl md:text-5xl font-bold text-muted-foreground tracking-tight leading-tight mb-8 max-w-xl">
                                Crafting <span className="text-foreground">digital experiences</span> that bridge imagination and reality.
                            </h2>

                            <p className="text-lg md:text-xl text-muted-foreground/80 max-w-lg leading-relaxed mb-10 font-sans">
                                I'm a developer obsessed with the intersection of **AI**, **AR**, and **Human-Computer Interaction**.
                                Building the future, one pixel at a time.
                            </p>

                            <div className="flex flex-wrap gap-6">
                                <Button size="lg" className="rounded-full text-lg px-8 py-6 h-auto" asChild>
                                    <a href="#projects">View Selected Works <ArrowRight className="ml-2 h-5 w-5" /></a>
                                </Button>
                                <Button variant="ghost" size="lg" className="rounded-full text-lg px-8 py-6 h-auto hover:bg-white/5" asChild>
                                    <a href="#contact">Get in Touch</a>
                                </Button>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Profile Picture */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="relative hidden md:block"
                    >
                        <div className="relative aspect-square max-w-md mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
                            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10" />
                                <img
                                    src="/profile.jpg"
                                    alt="Muhammed Fayiz V C"
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator - Asymetric */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-12 right-12 hidden md:flex flex-col items-end gap-2 text-muted-foreground text-sm font-sans"
            >
                <span className="writing-mode-vertical rotate-180">SCROLL</span>
                <div className="w-px h-16 bg-gradient-to-b from-transparent to-primary" />
            </motion.div>
        </section>
    );
}
