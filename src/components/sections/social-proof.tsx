"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
    {
        id: 1,
        content: "An absolute pleasure to work with. They transformed our vague ideas into a stunning, functional reality that exceeded our expectations.",
        author: "Sarah Johnson",
        role: "CEO, TechStart Inc.",
    },
    {
        id: 2,
        content: "The attention to detail and performance optimization was incredible. Our site load time dropped by 60% after the redesign.",
        author: "Michael Chen",
        role: "CTO, Creative Solutions",
    },
    {
        id: 3,
        content: "Not just a developer, but a true partner in the design process. The 3D elements added a unique touch that customers love.",
        author: "Emma Davis",
        role: "Product Manager, FutureWave",
    },
];

export function SocialProof() {
    return (
        <section className="py-24 bg-background">
            <div className="container">
                <h2 className="text-3xl font-bold tracking-tight font-heading text-center mb-12">
                    What Clients Say
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial) => (
                        <Card key={testimonial.id} className="bg-card/50 backdrop-blur-sm border-none shadow-md">
                            <CardContent className="pt-6">
                                <Quote className="h-8 w-8 text-primary/40 mb-4" />
                                <p className="text-lg mb-6 italic text-muted-foreground">"{testimonial.content}"</p>
                                <div>
                                    <p className="font-semibold">{testimonial.author}</p>
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
