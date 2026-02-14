"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Mail, Loader2 } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        try {
            const response = await fetch("https://formspree.io/f/mpqjdanl", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                setIsSuccess(true);
                reset();
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            alert("Error sending message. Please check your connection.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section className="py-32 relative overflow-hidden" id="contact">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10" />

            <div className="container max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
                        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 leading-tight">
                            Let's Build Something <br />
                            <span className="text-gradient">Extraordinary.</span>
                        </h2>
                        <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
                            Have an idea that needs to come to life? I'm currently available for freelance projects and open to new opportunities.
                        </p>

                        <div className="flex flex-col gap-6 w-full max-w-md">
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=faisvc916@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-4 rounded-2xl hover:bg-white/5 transition-colors">
                                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div className="text-left">
                                    <p className="text-sm text-muted-foreground font-medium">Email Me</p>
                                    <p className="text-lg font-semibold text-foreground">faisvc916@gmail.com</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="glass-panel p-8 md:p-10 rounded-3xl relative min-h-[480px] flex items-center justify-center">
                        {isSuccess ? (
                            <div className="text-center space-y-4 animate-in fade-in zoom-in duration-500">
                                <div className="h-20 w-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto text-primary">
                                    <Mail className="h-10 w-10" />
                                </div>
                                <h3 className="text-2xl font-bold font-heading">Message Sent!</h3>
                                <p className="text-muted-foreground">
                                    Thanks for reaching out! I'll get back to you as soon as possible.
                                </p>
                                <Button
                                    onClick={() => setIsSuccess(false)}
                                    variant="outline"
                                    className="mt-4"
                                >
                                    Send Another
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full">
                                <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium ml-1">Name</label>
                                            <input
                                                id="name"
                                                {...register("name")}
                                                className={cn(
                                                    "w-full h-12 rounded-xl bg-white/5 border border-white/10 px-4 text-base focus:border-primary/50 focus:bg-white/10 focus:ring-0 transition-all outline-none",
                                                    errors.name && "border-destructive"
                                                )}
                                                placeholder="John Doe"
                                            />
                                            {errors.name && <p className="text-xs text-destructive ml-1">{errors.name.message}</p>}
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium ml-1">Email</label>
                                            <input
                                                id="email"
                                                {...register("email")}
                                                className={cn(
                                                    "w-full h-12 rounded-xl bg-white/5 border border-white/10 px-4 text-base focus:border-primary/50 focus:bg-white/10 focus:ring-0 transition-all outline-none",
                                                    errors.email && "border-destructive"
                                                )}
                                                placeholder="john@example.com"
                                            />
                                            {errors.email && <p className="text-xs text-destructive ml-1">{errors.email.message}</p>}
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium ml-1">Message</label>
                                        <textarea
                                            id="message"
                                            {...register("message")}
                                            className={cn(
                                                "w-full min-h-[150px] rounded-xl bg-white/5 border border-white/10 p-4 text-base focus:border-primary/50 focus:bg-white/10 focus:ring-0 transition-all outline-none resize-none",
                                                errors.message && "border-destructive"
                                            )}
                                            placeholder="Tell me about your project..."
                                        />
                                        {errors.message && <p className="text-xs text-destructive ml-1">{errors.message.message}</p>}
                                    </div>
                                </div>

                                <Button type="submit" size="lg" className="w-full h-12 rounded-xl text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow" disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                        </>
                                    )}
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
