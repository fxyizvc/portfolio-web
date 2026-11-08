"use client";

import { ThemeToggle } from "@/components/ui/theme-toggle";
import { ArrowUpRight } from "lucide-react";

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-md hairline-b">
            <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between text-xs font-mono">
                <a href="#" className="font-semibold tracking-tight text-foreground hover:opacity-80 transition-opacity">
                    fayiz.infra <span className="text-muted-foreground font-normal">/ ops</span>
                </a>

                <nav className="flex items-center gap-6">
                    <a href="#systems" className="text-muted-foreground hover:text-foreground transition-colors hidden sm:inline">
                        Systems
                    </a>
                    <a href="#archive" className="text-muted-foreground hover:text-foreground transition-colors hidden sm:inline">
                        Archive
                    </a>
                    <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors hidden sm:inline">
                        Experience
                    </a>
                    <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                        Contact
                    </a>
                    <div className="flex items-center gap-2 border-l pl-4 border-border">
                        <a
                            href="https://github.com/fxyizvc"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-0.5"
                        >
                            <span>GH</span>
                            <ArrowUpRight className="w-3 h-3" />
                        </a>
                        <ThemeToggle />
                    </div>
                </nav>
            </div>
        </header>
    );
}
