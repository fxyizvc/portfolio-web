"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Jagan K K",
        role: "Teammate, AI AR Memory Palace",
        content: "Fayiz's ability to integrate complex Edge AI models into a seamless AR experience was the backbone of our project. His code doesn't just work; it performs.",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&q=80",
    },
    {
        id: 2,
        name: "Rhuthoshika K",
        role: "Teammate, AI AR Memory Palace",
        content: "The way Fayiz handled the real-time object detection and 3D rendering pipeline was incredible. He bridged the gap between raw AI data and user experience effortlessly.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    },
    {
        id: 3,
        name: "Jibin P V",
        role: "Teammate, AI AR Memory Palace",
        content: "Working with Fayiz was a masterclass in problem-solving. He turned our wildest AR concepts into a stable, high-performance reality.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
];

export function SocialProof() {
    return (
        <section className="py-24 bg-secondary/5">
            <div className="container max-w-7xl">
                <div className="mb-16 text-center">
                    <h2 className="text-sm font-mono text-primary tracking-widest uppercase mb-4">Collaborators</h2>
                    <h3 className="text-3xl md:text-5xl font-bold font-heading">
                        What Teammates <span className="text-gradient">Say</span>
                    </h3>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        Feedback from the talented individuals I've had the privilege to build with.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <Card key={testimonial.id} className="bg-card/50 backdrop-blur-sm border-none shadow-md">
                            <CardContent className="pt-6">
                                <Quote className="h-8 w-8 text-primary/40 mb-4" />
                                <p className="text-lg mb-6 italic text-muted-foreground">"{testimonial.content}"</p>
                                <div>
                                    <p className="font-semibold">{testimonial.name}</p>
                                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-20 pt-10 border-t flex flex-wrap justify-center items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Placeholder for Client Logos. using text for now */}
                    <span className="text-xl font-bold">ACME Corp</span>
                    <span className="text-xl font-bold">GlobalTech</span>
                    <span className="text-xl font-bold">Nebula Systems</span>
                    <span className="text-xl font-bold">Vertex AI</span>
                </div>
            </div>
        </section>
    );
}
