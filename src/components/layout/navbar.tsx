"use client";

import { useState } from "react";
import { useScroll, useMotionValueEvent, motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 100 && !scrolled) {
            setScrolled(true);
        } else if (latest <= 100 && scrolled) {
            setScrolled(false);
        }
    });

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent border-transparent"}`}>
            <div className="container flex h-16 items-center justify-between">
                <AnimatePresence>
                    {scrolled && (
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="text-xl font-bold font-heading"
                        >
                            Fayiz.
                        </motion.div>
                    )}
                </AnimatePresence>
                <nav className="flex items-center gap-2 ml-auto">
                    <div className="flex items-center gap-1 mr-2 border-r pr-2 h-6">
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" asChild>
                            <a href="https://www.github.com/fxyizvc" target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4" />
                            </a>
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" asChild>
                            <a href="https://www.linkedin.com/in/fayizvc" target="_blank" rel="noopener noreferrer">
                                <Linkedin className="h-4 w-4" />
                            </a>
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" asChild>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=faisvc916@gmail.com" target="_blank" rel="noopener noreferrer">
                                <Mail className="h-4 w-4" />
                            </a>
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" asChild>
                            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                                <MessageCircle className="h-4 w-4" />
                            </a>
                        </Button>
                    </div>
                    <ThemeToggle />
                </nav>
            </div>
        </header>
    );
}
