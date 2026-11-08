"use client";

import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { CaseStudies } from "@/components/sections/case-studies";
import { SocialProof } from "@/components/sections/social-proof";
import { Contact } from "@/components/sections/contact";
import { About } from "@/components/sections/about";
import { Github, Linkedin, Shield, Terminal, Server } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden selection:bg-emerald-500 selection:text-black">
      <Navbar />

      <Hero />
      <CaseStudies />
      <About />
      <SocialProof />
      <Contact />

      {/* 2027 SRE Footer */}
      <footer className="py-12 border-t border-white/10 bg-card/20 backdrop-blur-xl">
        <div className="container max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-sm font-semibold font-heading tracking-wide flex items-center gap-2">
              <Server className="w-4 h-4 text-emerald-400" />
              Muhammed Fayiz V C • Cloud Monitoring & DevOps
            </span>
            <p className="text-xs text-muted-foreground font-mono flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              Hardened Linux Architecture • Zero Telemetry Leaks • 99.9% Uptime Design
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs text-muted-foreground font-mono">
            <a
              href="https://github.com/fxyizvc"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/fayizvc"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5" /> LinkedIn
            </a>
            <a
              href="#contact"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
            >
              <Terminal className="w-3.5 h-3.5" /> Transmit Signal
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
