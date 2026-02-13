"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "AI-Powered AR Game Platform",
        category: "AI/AR",
        description: "Transforming sketches into real-time games.",
        image: "https://images.unsplash.com/photo-1633126786888-06752d921356?w=1200&q=80",
        repoLink: "https://github.com/fayizvc/AI-AR-Gaming-Platform",
        year: "2024"
    },
    {
        id: 2,
        title: "AI AR Memory Palace",
        category: "AI/AR",
        description: "Interactive 3D learning spaces on blackboards.",
        image: "/images/projects/memory-palace.png",
        repoLink: "https://github.com/fxyizvc/ai-ar-memory-palace",
        year: "2024"
    },
    {
        id: 3,
        title: "Hisense Tornado 3.0 Remote",
        category: "Mobile",
        description: "Bluetooth HID remote emulator for Android.",
        image: "/images/projects/bluetooth-remote.png",
        repoLink: "https://github.com/fxyizvc/bluetooth-remote-app",
        year: "2023"
    },
];

export function CaseStudies() {
    const [activeProject, setActiveProject] = useState<number | null>(null);

    return (
        <section className="py-32 relative" id="projects">
            <div className="container relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 space-y-4"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-heading">
                        Selected Works<span className="text-primary">.</span>
                    </h2>
                    <p className="text-muted-foreground max-w-xl text-lg">
                        A curation of experiments and functional applications.
                    </p>
                </motion.div>

                <div className="flex flex-col">
                    {projects.map((project) => (
                        <motion.a
                            href={project.repoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: project.id * 0.1 }}
                            onMouseEnter={() => setActiveProject(project.id)}
                            onMouseLeave={() => setActiveProject(null)}
                            className="group relative border-t border-white/10 py-12 md:py-16 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all hover:px-8"
                        >
                            {/* Hover Background for List Item */}
                            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                            <div className="space-y-2 relative z-10">
                                <div className="flex items-center gap-4 text-sm text-primary font-mono tracking-wider uppercase">
                                    <span>{project.category}</span>
                                    <span className="w-1 h-1 rounded-full bg-primary" />
                                    <span>{project.year}</span>
                                </div>
                                <h3 className="text-3xl md:text-6xl font-black font-heading tracking-tight text-foreground/80 group-hover:text-white transition-colors">
                                    {project.title}
                                </h3>
                            </div>

                            <div className="flex items-center gap-8 relative z-10 opacity-60 group-hover:opacity-100 transition-opacity">
                                <p className="hidden md:block text-muted-foreground max-w-sm text-right font-sans">
                                    {project.description}
                                </p>
                                <div className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300 transform group-hover:rotate-45">
                                    <ArrowUpRight className="h-6 w-6 text-foreground group-hover:text-white" />
                                </div>
                            </div>
                        </motion.a>
                    ))}
                    <div className="border-t border-white/10" />
                </div>
            </div>

            {/* Cinematic Background Hover Effect */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <AnimatePresence mode="wait">
                    {activeProject && (
                        <motion.div
                            key={activeProject}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 0.15, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0"
                        >
                            <img
                                src={projects.find(p => p.id === activeProject)?.image}
                                alt="Background Preview"
                                className="w-full h-full object-cover grayscale"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
