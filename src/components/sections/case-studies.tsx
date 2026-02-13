"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "AI-Powered AR Game Platform",
        description: "A smart AR platform that transforms hand-drawn sketches into real-time interactive games like Snake, Maze, and Tetris using gesture recognition and deep learning.",
        category: "AI/AR",
        image: "https://images.unsplash.com/photo-1633126786888-06752d921356?w=800&q=80",
        tags: ["Python", "YOLO V8", "AR Technology", "Computer Vision"],
        repoLink: "https://github.com/fayizvc/AI-AR-Gaming-Platform",
    },
    {
        id: 2,
        title: "AI AR Memory Palace",
        description: "An intelligent AR platform for educational environments that transforms blackboards into interactive 3D learning spaces using On-Device Edge AI and MobileNet SSD.",
        category: "AI/AR",
        image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80",
        tags: ["Unity", "TensorFlow Lite", "MongoDB", "Node.js", "Edge AI"],
        repoLink: "https://github.com/fxyizvc/smart-blackboard-ar",
    },
    {
        id: 3,
        title: "Hisense Tornado 3.0 Remote",
        description: "An Android application that emulates a physical remote for Hisense Tornado TVs using the Bluetooth Human Interface Device (HID) profile.",
        category: "Mobile",
        image: "https://images.unsplash.com/photo-1551655510-555dc3be8633?w=800&q=80",
        tags: ["Android SDK", "Bluetooth HID", "Java/Kotlin"],
        repoLink: "https://github.com/fxyizvc/hisense-bluetooth-remote",
    },
];

const categories = ["All", "AI/AR", "Mobile"];

export function CaseStudies() {
    const [filter, setFilter] = useState("All");

    const filteredProjects = projects.filter(
        (project) => filter === "All" || project.category === filter
    );

    return (
        <section className="py-24" id="projects">
            <div className="container">
                <div className="flex flex-col items-center text-center mb-16 gap-8">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight font-heading sm:text-4xl text-gradient mb-4">
                            Selected Works
                        </h2>
                        <p className="text-muted-foreground max-w-xl mx-auto">
                            A showcase of my improved reality. From Augmented Reality to native mobile applications.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 p-1 bg-secondary/50 backdrop-blur-sm rounded-full">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === category
                                    ? "bg-background shadow-sm text-foreground"
                                    : "text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="group relative overflow-hidden rounded-3xl bg-card border border-border/50 hover:border-primary/50 transition-colors h-full flex flex-col hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
                                    <div className="aspect-video relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>

                                    <div className="p-8 flex-1 flex flex-col">
                                        <div className="flex justify-between items-start mb-6">
                                            <div>
                                                <span className="text-sm font-semibold text-primary mb-3 block tracking-wide">{project.category}</span>
                                                <h3 className="text-2xl font-bold mb-2 leading-tight">{project.title}</h3>
                                            </div>
                                        </div>

                                        <p className="text-base text-muted-foreground mb-8 flex-1 leading-relaxed">
                                            {project.description}
                                        </p>

                                        <div className="flex items-center justify-between mt-auto">
                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.map((tag) => (
                                                    <span key={tag} className="text-sm bg-secondary/50 px-3 py-1.5 rounded-md text-muted-foreground font-medium">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <a
                                                href={project.repoLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300"
                                            >
                                                <Github className="h-8 w-8" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
