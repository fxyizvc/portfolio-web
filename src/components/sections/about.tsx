"use client";

import { motion } from "framer-motion";
import { Download, GraduationCap, Award, Briefcase, Code, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function About() {
    const skills = [
        "C", "SQL", "HTML", "Node.js", "TensorFlow Lite",
        "MySQL", "MongoDB", "Unity", "Git & GitHub",
        "Docker", "Linux", "VS Code"
    ];

    return (
        <section className="py-24 bg-background relative" id="about">
            <div className="container">
                <div className="mb-16 text-center">
                    <h2 className="text-sm font-mono text-primary tracking-widest uppercase mb-4">About Me</h2>
                    <h3 className="text-4xl md:text-6xl font-bold font-heading">
                        Designing the <span className="text-gradient">Future</span>
                    </h3>
                </div>

                <div className="bento-grid gap-8">
                    {/* Bio Card - Large */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 row-span-2 glass-panel p-6 md:p-10 rounded-3xl flex flex-col md:flex-row gap-8 items-center"
                    >
                        <div className="relative w-40 h-40 md:w-56 md:h-56 flex-shrink-0 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/10">
                            <img
                                src="/profile.jpg"
                                alt="Muhammed Fayiz V C"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="flex flex-col justify-between h-full py-4">
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 text-primary">
                                    <MapPin className="h-8 w-8" />
                                    <span className="font-medium text-lg">Kannur, Kerala</span>
                                </div>
                                <p className="text-2xl font-light leading-relaxed">
                                    I'm a <span className="text-primary font-medium">Developer</span> pursuing my B.Tech in CSE.
                                    I bridge the gap between complex AI systems and intuitive user experiences.
                                </p>
                                <p className="text-base text-muted-foreground leading-relaxed">
                                    Currently exploring the intersection of **Augmented Reality**, **Edge AI**, and **Android Development**.
                                    I build software that doesn't just work—it delights.
                                </p>
                            </div>
                            <div className="pt-8">
                                <Button size="lg" className="rounded-full gap-2 px-8 py-6 text-lg" asChild>
                                    <a href="https://drive.google.com/file/d/1V0nR-2NJkBAr-ge6qKjEedVgE0T0uVuI/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                                        <Download className="h-6 w-6" /> Download Resume
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Experience Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="glass-panel p-8 rounded-3xl flex flex-col gap-6 justify-center"
                    >
                        <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                            <Briefcase className="h-8 w-8" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-1">DevOps Intern</h3>
                            <p className="text-base text-primary font-medium">Kerala Vision Broadband</p>
                            <p className="text-sm text-muted-foreground mt-2">May 2025 – July 2025</p>
                        </div>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            Managed network infra & automated deployment workflows.
                        </p>
                    </motion.div>

                    {/* Education Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="glass-panel p-8 rounded-3xl flex flex-col gap-6 justify-center"
                    >
                        <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                            <GraduationCap className="h-8 w-8" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-1">B.Tech in CSE</h3>
                            <p className="text-base text-primary font-medium">St. Thomas College of Eng.</p>
                            <p className="text-sm text-muted-foreground mt-2">2022 – 2026</p>
                        </div>
                        <div className="mt-auto">
                            <span className="inline-flex items-center rounded-full bg-secondary px-4 py-1 text-sm font-semibold text-secondary-foreground">
                                CGPA: 7.88
                            </span>
                        </div>
                    </motion.div>

                    {/* Skills Card - Wide */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="md:col-span-3 glass-panel p-10 rounded-3xl"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                <Code className="h-8 w-8" />
                            </div>
                            <h3 className="text-2xl font-bold">Technical Arsenal</h3>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.05 * index }}
                                    viewport={{ once: true }}
                                    className="px-6 py-3 bg-background/50 hover:bg-primary hover:text-white border border-white/5 rounded-full text-base font-medium transition-all cursor-default"
                                >
                                    {skill}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
