"use client";

import { useState } from "react";
import { useScroll, useMotionValueEvent, motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 80 && !scrolled) {
            setScrolled(true);
        } else if (latest <= 80 && scrolled) {
            setScrolled(false);
        }
    });

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-background/75 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/5"
                    : "bg-transparent border-transparent"
            }`}
        >
            <div className="container max-w-7xl mx-auto px-6 flex h-20 items-center justify-between">
                {/* Brand Logo */}
                <a href="#" className="flex items-center gap-2 group">
                    <div className="h-9 w-9 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                        <Sparkles className="h-4 w-4" />
                    </div>
                    <span className="text-xl font-bold font-heading tracking-tight">
                        Fayiz<span className="text-primary">.dev</span>
                    </span>
                </a>

                {/* Center Navigation Links (Hidden on small screens) */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
                    <a href="#projects" className="hover:text-primary transition-colors">Works</a>
                    <a href="#about" className="hover:text-primary transition-colors">About</a>
                    <a href="#collaborations" className="hover:text-primary transition-colors">Endorsements</a>
                    <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
                </nav>

                {/* Right Actions */}
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 border-r border-white/10 pr-3">
                        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl hover:bg-primary/10 hover:text-primary" asChild>
                            <a href="https://github.com/fxyizvc" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <Github className="h-4 w-4" />
                            </a>
                        </Button>
                        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl hover:bg-primary/10 hover:text-primary" asChild>
                            <a href="https://linkedin.com/in/fayizvc" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <Linkedin className="h-4 w-4" />
                            </a>
                        </Button>
                        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl hover:bg-primary/10 hover:text-primary" asChild>
                            <a href="#contact" aria-label="Contact">
                                <Mail className="h-4 w-4" />
                            </a>
                        </Button>
                    </div>

                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}
