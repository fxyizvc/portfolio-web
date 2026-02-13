"use client";

import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { CaseStudies } from "@/components/sections/case-studies";
import { SocialProof } from "@/components/sections/social-proof";
import { Contact } from "@/components/sections/contact";
import { About } from "@/components/sections/about";

export default function Home() {
  return (
    <main className="min-h-screen bg-background bg-aurora relative overflow-hidden">
      <Navbar />

      <Hero />
      <CaseStudies />
      <About />
      <SocialProof />
      <Contact />

      <footer className="py-6 border-t bg-background">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} Muhammed Fayiz V C.
          </p>
          <div className="flex gap-4 text-muted-foreground">
            <a href="https://www.linkedin.com/in/fayizvc" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
            <a href="https://www.github.com/fxyizvc" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=faisvc916@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
