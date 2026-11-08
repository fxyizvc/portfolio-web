"use client";

import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { CaseStudies } from "@/components/sections/case-studies";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased selection:bg-foreground selection:text-background">
      <Navbar />
      <Hero />
      <CaseStudies />
      <About />
      <Contact />

      <footer className="max-w-5xl mx-auto px-6 py-10 hairline-t text-xs font-mono text-muted-foreground flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <span>&copy; {new Date().getFullYear()} Muhammed Fayiz V C</span>
        <div className="flex items-center gap-4">
          <a href="https://github.com/fxyizvc" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            GitHub
          </a>
          <a href="https://linkedin.com/in/fayizvc" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            LinkedIn
          </a>
          <a href="#contact" className="hover:text-foreground">
            Contact
          </a>
        </div>
      </footer>
    </main>
  );
}
