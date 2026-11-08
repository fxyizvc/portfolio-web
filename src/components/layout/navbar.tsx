"use client";

import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Github, Linkedin, Mail, Cloud, Terminal, History } from "lucide-react";
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
                    ? "bg-background/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/5"
                    : "bg-transparent border-transparent"
            }`}
        >
            <div className="container max-w-7xl mx-auto px-6 flex h-20 items-center justify-between">
                {/* Brand Logo */}
                <a href="#" className="flex items-center gap-2.5 group">
                    <div className="h-9 w-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                        <Cloud className="h-4.5 w-4.5" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-base font-bold font-heading tracking-tight leading-tight">
                            Fayiz<span className="text-emerald-400">.cloud</span>
                        </span>
                        <span className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase">
                            Monitoring & SRE
                        </span>
                    </div>
                </a>

                {/* Center Navigation Links */}
                <nav className="hidden md:flex items-center gap-7 text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    <a href="#infrastructure" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                        <Cloud className="w-3.5 h-3.5" />
                        <span>Cloud Infrastructure</span>
                    </a>
                    <a href="#past-vault" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                        <History className="w-3.5 h-3.5 text-amber-400" />
                        <span>Past Archive (AI/AR)</span>
                    </a>
                    <a href="#about" className="hover:text-emerald-400 transition-colors">
                        Ops Profile
                    </a>
                    <a href="#collaborations" className="hover:text-emerald-400 transition-colors">
                        Endorsements
                    </a>
                    <a href="#contact" className="hover:text-emerald-400 transition-colors">
                        Telemetry / Contact
                    </a>
                </nav>

                {/* Right Actions */}
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 border-r border-white/10 pr-3">
                        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl hover:bg-emerald-500/10 hover:text-emerald-400" asChild>
                            <a href="https://github.com/fxyizvc" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <Github className="h-4 w-4" />
                            </a>
                        </Button>
                        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl hover:bg-emerald-500/10 hover:text-emerald-400" asChild>
                            <a href="https://linkedin.com/in/fayizvc" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <Linkedin className="h-4 w-4" />
                            </a>
                        </Button>
                        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl hover:bg-emerald-500/10 hover:text-emerald-400" asChild>
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
