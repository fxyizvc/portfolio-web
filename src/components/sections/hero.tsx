"use client";

import { ArrowUpRight, ArrowDown } from "lucide-react";

export function Hero() {
    return (
        <section className="py-20 md:py-28 max-w-5xl mx-auto px-6">
            <div className="space-y-8 max-w-3xl">
                {/* Status Indicator */}
                <div className="flex items-center gap-2.5 font-mono text-xs text-muted-foreground">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
                    <span>HazerCloud &bull; Cloud Monitoring &bull; AWS Infrastructure</span>
                </div>

                {/* Primary Headline */}
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
                    Muhammed Fayiz V C
                </h1>

                {/* Editorial Subtitle */}
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-normal">
                    Cloud Monitoring and DevOps engineer. I manage AWS production telemetry, investigate incidents, and maintain automated container deployment pipelines.
                </p>

                {/* Micro Meta Grid */}
                <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs border-y border-border py-4">
                    <div>
                        <span className="text-muted-foreground block text-[11px]">LOCATION</span>
                        <span className="text-foreground font-medium">Kannur, IN (Remote)</span>
                    </div>
                    <div>
                        <span className="text-muted-foreground block text-[11px]">ACTIVE ROLE</span>
                        <span className="text-foreground font-medium">Junior Cloud Eng</span>
                    </div>
                    <div>
                        <span className="text-muted-foreground block text-[11px]">STACK FOCUS</span>
                        <span className="text-foreground font-medium">AWS &bull; Linux &bull; Docker</span>
                    </div>
                    <div>
                        <span className="text-muted-foreground block text-[11px]">STATUS</span>
                        <span className="text-foreground font-medium">Open to opportunities</span>
                    </div>
                </div>

                {/* Action Links */}
                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono">
                    <a
                        href="#systems"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
                    >
                        <span>View Infrastructure Work</span>
                        <ArrowDown className="w-3.5 h-3.5" />
                    </a>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded border border-border hover:bg-muted transition-colors text-foreground"
                    >
                        <span>Resume (PDF)</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground" />
                    </a>
                </div>
            </div>
        </section>
    );
}
