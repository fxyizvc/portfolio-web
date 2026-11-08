"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Mail, Loader2, Send, CheckCircle2, ShieldCheck, Sparkles, Copy, Check } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    message: z.string().min(10, "Message must be at least 10 characters"),
    _gotcha: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [copiedEmail, setCopiedEmail] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const handleCopyEmail = () => {
        const user = "faisvc916";
        const domain = "gmail.com";
        const full = `${user}@${domain}`;
        navigator.clipboard.writeText(full);
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2500);
    };

    async function onSubmit(values: FormData) {
        setIsSubmitting(true);
        setErrorMessage(null);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });

            const data = await res.json();

            if (res.ok && data.success) {
                setIsSuccess(true);
                reset();
            } else {
                setErrorMessage(data?.error || "Could not dispatch message. Please try copying the email directly.");
            }
        } catch {
            setErrorMessage("Network issue detected. Please copy the email or try again.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section className="py-32 relative overflow-hidden" id="contact">
            {/* Ambient Lighting Glows */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-primary/15 rounded-full blur-[140px] pointer-events-none -z-10" />
            <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

            <div className="container max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Column: Heading & Privacy-first connection info */}
                    <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/25 bg-primary/10 text-primary text-xs font-mono tracking-widest uppercase mb-6">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Initiate Connection</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight leading-[1.1]">
                            Let's Build Something <br />
                            <span className="text-gradient">Extraordinary.</span>
                        </h2>

                        <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
                            Have an idea, research proposal, or project in mind? Reach out through this verified channel.
                        </p>

                        <div className="w-full max-w-md space-y-4">
                            {/* Privacy-Preserved Quick Copy Email Card */}
                            <div className="p-4 rounded-2xl border border-white/10 bg-card/60 backdrop-blur-xl flex items-center justify-between shadow-lg">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center">
                                        <Mail className="h-5 w-5" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-xs text-muted-foreground uppercase font-mono tracking-wider">Direct Inbox</p>
                                        <p className="text-sm font-semibold tracking-wide text-foreground">Protected Contact Address</p>
                                    </div>
                                </div>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={handleCopyEmail}
                                    className="rounded-xl gap-2 font-mono text-xs border-primary/30 hover:bg-primary/10"
                                >
                                    {copiedEmail ? (
                                        <>
                                            <Check className="h-3.5 w-3.5 text-emerald-400" />
                                            <span>Copied!</span>
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="h-3.5 w-3.5" />
                                            <span>Copy Email</span>
                                        </>
                                    )}
                                </Button>
                            </div>

                            {/* Safe Communication Notice */}
                            <div className="flex items-center gap-2.5 px-3 py-2 text-xs text-muted-foreground/80 font-mono">
                                <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                                <span>Zero-spam safe route • End-to-end sanitized</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: High-end Contact Form Card */}
                    <div className="glass-panel p-8 md:p-10 rounded-3xl relative min-h-[480px] border border-white/10 shadow-2xl bg-card/40 backdrop-blur-2xl">
                        {isSuccess ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center space-y-6 py-12 flex flex-col items-center justify-center h-full"
                            >
                                <div className="h-20 w-20 bg-emerald-500/15 border border-emerald-500/30 rounded-2xl flex items-center justify-center text-emerald-400 shadow-inner">
                                    <CheckCircle2 className="h-10 w-10" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold font-heading mb-2">Message Dispatched!</h3>
                                    <p className="text-muted-foreground max-w-sm text-sm">
                                        Thank you for reaching out. Your message is safely routed to my inbox and I will respond promptly.
                                    </p>
                                </div>
                                <Button
                                    variant="outline"
                                    className="rounded-full px-6"
                                    onClick={() => setIsSuccess(false)}
                                >
                                    Send Another Note
                                </Button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                {/* Honeypot field for bot deterrence */}
                                <input
                                    type="text"
                                    tabIndex={-1}
                                    autoComplete="off"
                                    className="hidden"
                                    {...register("_gotcha")}
                                />

                                <div>
                                    <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                                        Your Name / Organization
                                    </label>
                                    <input
                                        id="name"
                                        placeholder="Ada Lovelace"
                                        {...register("name")}
                                        className="w-full px-4 py-3.5 rounded-xl bg-background/50 border border-white/10 focus:border-primary/60 focus:ring-2 focus:ring-primary/20 outline-none transition duration-200 text-sm placeholder:text-muted-foreground/40"
                                    />
                                    {errors.name && (
                                        <p className="text-xs text-rose-400 mt-1.5 font-mono">{errors.name.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="ada@domain.com"
                                        {...register("email")}
                                        className="w-full px-4 py-3.5 rounded-xl bg-background/50 border border-white/10 focus:border-primary/60 focus:ring-2 focus:ring-primary/20 outline-none transition duration-200 text-sm placeholder:text-muted-foreground/40"
                                    />
                                    {errors.email && (
                                        <p className="text-xs text-rose-400 mt-1.5 font-mono">{errors.email.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        placeholder="Tell me about your project, ideas, or timeline..."
                                        {...register("message")}
                                        className="w-full px-4 py-3.5 rounded-xl bg-background/50 border border-white/10 focus:border-primary/60 focus:ring-2 focus:ring-primary/20 outline-none transition duration-200 text-sm placeholder:text-muted-foreground/40 resize-none"
                                    />
                                    {errors.message && (
                                        <p className="text-xs text-rose-400 mt-1.5 font-mono">{errors.message.message}</p>
                                    )}
                                </div>

                                {errorMessage && (
                                    <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono">
                                        {errorMessage}
                                    </div>
                                )}

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full h-12 rounded-xl text-sm font-semibold tracking-wide shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="h-4 w-4 animate-spin" />
                                            <span>Transmitting...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send className="h-4 w-4" />
                                            <span>Transmit Message</span>
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
