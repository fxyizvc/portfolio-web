"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, Code2, Sparkles, Terminal } from "lucide-react";

interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    longDescription: string;
    image: string;
    repoLink: string;
    demoLink?: string;
    tags: string[];
    year: string;
    featured: boolean;
}

const projects: Project[] = [
    {
        id: 1,
        title: "AI-Powered AR Gaming Matrix",
        category: "Spatial AI & XR",
        description: "Transforming real-world physical drawings into low-latency interactive AR games in real-time.",
        longDescription: "A multi-modal machine learning pipeline combining computer vision edge models with Unity AR Foundation. Converts physical sketch boundaries into dynamic game physics colliders on the fly.",
        image: "https://images.unsplash.com/photo-1633126786888-06752d921356?w=1200&q=80",
        repoLink: "https://github.com/fayizvc/AI-AR-Gaming-Platform",
        tags: ["Unity", "AR Foundation", "TensorFlow Lite", "C#", "Computer Vision"],
        year: "2024",
        featured: true,
    },
    {
        id: 2,
        title: "Spatial AR Memory Palace",
        category: "XR Learning Spaces",
        description: "Augmenting physical environments into infinite-canvas 3D associative learning spaces.",
        longDescription: "Harnessing the method of loci mnemonic technique with spatial anchors. Renders persistent 3D concepts anchored to real classroom surfaces and blackboards for accelerated spatial recall.",
        image: "/images/projects/memory-palace.png",
        repoLink: "https://github.com/fxyizvc/ai-ar-memory-palace",
        tags: ["Spatial Anchors", "Unity 3D", "Edge ML", "HCI"],
        year: "2024",
        featured: true,
    },
    {
        id: 3,
        title: "Hisense Tornado 3.0 Remote Emulator",
        category: "Systems & IoT",
        description: "Hardware-level Bluetooth HID wireless peripheral emulator with ultra-low latency control.",
        longDescription: "Engineered an Android native Bluetooth Human Interface Device (HID) profile emulator to bridge modern smartphone touch gestures directly to smart television receivers without Wi-Fi pairing bottlenecks.",
        image: "/images/projects/bluetooth-remote.png",
        repoLink: "https://github.com/fxyizvc/bluetooth-remote-app",
        tags: ["Android NDK", "Bluetooth HID", "Kotlin", "Hardware Interfacing"],
        year: "2023",
        featured: false,
    },
];

export function CaseStudies() {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");

    const categories = ["All", "Spatial AI & XR", "XR Learning Spaces", "Systems & IoT"];

    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter(p => p.category === selectedCategory);

    return (
        <section className="py-32 relative overflow-hidden" id="projects">
            {/* Ambient Lighting */}
            <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10" />

            <div className="container max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/25 bg-primary/10 text-primary text-xs font-mono tracking-widest uppercase mb-4">
                        <Code2 className="w-3.5 h-3.5" />
                        <span>Curated Engineering</span>
                    </div>
                    <h3 className="text-4xl md:text-6xl font-bold font-heading tracking-tight">
                        Featured <span className="text-gradient">Creations</span>
                    </h3>
                    <p className="text-muted-foreground mt-4 text-lg">
                        Production applications, hardware bridges, and real-time spatial computing experiments.
                    </p>

                    {/* Filter Pills */}
                    <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 border ${
                                    selectedCategory === cat
                                        ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25"
                                        : "bg-card/40 text-muted-foreground border-white/10 hover:border-white/20 hover:text-foreground"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Project Showcase Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.article
                                layout
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                key={project.id}
                                className="group relative rounded-3xl border border-white/10 bg-card/40 backdrop-blur-xl overflow-hidden hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 flex flex-col justify-between"
                            >
                                {/* Media Container */}
                                <div className="relative aspect-[16/10] overflow-hidden bg-muted/30">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90" />
                                    
                                    {/* Top badges */}
                                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                                        <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-md border border-white/10 text-xs font-mono text-primary font-semibold">
                                            {project.category}
                                        </span>
                                        <span className="px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-md border border-white/10 text-xs font-mono text-muted-foreground">
                                            {project.year}
                                        </span>
                                    </div>
                                </div>

                                {/* Body Content */}
                                <div className="p-8 flex flex-col flex-grow justify-between space-y-6">
                                    <div className="space-y-3">
                                        <h4 className="text-2xl md:text-3xl font-bold font-heading group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h4>
                                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Tech Tags */}
                                    <div className="space-y-6">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-foreground/80"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Action Links */}
                                        <div className="pt-4 border-t border-white/10 flex items-center gap-4">
                                            <a
                                                href={project.repoLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-sm font-mono text-foreground hover:text-primary transition-colors py-2 px-4 rounded-xl border border-white/10 hover:border-primary/40 bg-white/5"
                                            >
                                                <Github className="h-4 w-4" />
                                                <span>Source Code</span>
                                                <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
