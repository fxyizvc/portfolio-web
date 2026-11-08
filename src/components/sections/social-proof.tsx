"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Quote, Sparkles, MessageSquareQuote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
    {
        id: 1,
        name: "Jagan K K",
        role: "Teammate • AI AR Memory Palace",
        content: "Fayiz's ability to integrate complex Edge AI models into a seamless AR experience was the backbone of our project. His code doesn't just work; it performs with real precision.",
        initials: "JK",
    },
    {
        id: 2,
        name: "Rhuthoshika K",
        role: "Teammate • AI AR Memory Palace",
        content: "The way Fayiz handled the real-time object detection and 3D rendering pipeline was incredible. He bridged the gap between raw AI inference data and spatial user experience effortlessly.",
        initials: "RK",
    },
    {
        id: 3,
        name: "Jibin P V",
        role: "Teammate • AI AR Memory Palace",
        content: "Working with Fayiz was an extraordinary experience in system problem-solving. He consistently translated challenging spatial concepts into high-performance, stable architecture.",
        initials: "JP",
    },
];

export function SocialProof() {
    return (
        <section className="py-28 relative overflow-hidden" id="collaborations">
            <div className="container max-w-7xl mx-auto px-6">
                <div className="mb-20 text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/25 bg-primary/10 text-primary text-xs font-mono tracking-widest uppercase mb-4">
                        <MessageSquareQuote className="w-3.5 h-3.5" />
                        <span>Peer Verification</span>
                    </div>
                    <h3 className="text-4xl md:text-6xl font-bold font-heading tracking-tight">
                        Collaborator <span className="text-gradient">Endorsements</span>
                    </h3>
                    <p className="text-muted-foreground mt-4 text-lg">
                        Direct impressions from engineers and collaborators who built alongside me.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, idx) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 rounded-3xl border border-white/10 bg-card/40 backdrop-blur-xl shadow-xl flex flex-col justify-between hover:border-primary/30 transition-all duration-300 group"
                        >
                            <div>
                                <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Quote className="h-5 w-5" />
                                </div>
                                <p className="text-base text-muted-foreground leading-relaxed italic mb-8">
                                    "{testimonial.content}"
                                </p>
                            </div>

                            <div className="flex items-center gap-3 pt-6 border-t border-white/10">
                                <div className="h-10 w-10 rounded-full bg-primary/20 text-primary border border-primary/30 flex items-center justify-center text-xs font-bold font-mono">
                                    {testimonial.initials}
                                </div>
                                <div>
                                    <p className="font-semibold text-sm text-foreground">{testimonial.name}</p>
                                    <p className="text-xs text-muted-foreground font-mono">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
