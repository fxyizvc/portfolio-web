"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { Check, Copy, ArrowUpRight } from "lucide-react";

const formSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Valid email required"),
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
        const full = "faisvc916@gmail.com";
        navigator.clipboard.writeText(full);
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
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
                setErrorMessage(data?.error || "Failed to send message. Please copy email directly.");
            }
        } catch {
            setErrorMessage("Network error. Please copy email directly.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section className="py-16 max-w-5xl mx-auto px-6 hairline-t" id="contact">
            <div className="flex items-baseline justify-between border-b border-border pb-3 mb-10">
                <h2 className="text-sm font-mono uppercase tracking-wider text-muted-foreground font-semibold">
                    04 / Direct Contact
                </h2>
                <span className="text-xs font-mono text-muted-foreground">Inquiries</span>
            </div>

            <div className="grid md:grid-cols-12 gap-10">
                <div className="md:col-span-5 space-y-6">
                    <div className="space-y-2">
                        <h3 className="text-xl font-bold tracking-tight text-foreground">
                            Let's connect.
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Available for full-time Cloud Monitoring, DevOps, and SRE opportunities. Send a message or copy my email address directly.
                        </p>
                    </div>

                    <div className="space-y-2 font-mono text-xs">
                        <button
                            onClick={handleCopyEmail}
                            className="w-full flex items-center justify-between p-3 rounded border border-border bg-card hover:bg-muted transition-colors text-left"
                        >
                            <span className="text-foreground">faisvc916@gmail.com</span>
                            <span className="text-muted-foreground flex items-center gap-1">
                                {copiedEmail ? (
                                    <>
                                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                                        <span>Copied</span>
                                    </>
                                ) : (
                                    <>
                                        <Copy className="w-3.5 h-3.5" />
                                        <span>Copy</span>
                                    </>
                                )}
                            </span>
                        </button>
                    </div>

                    <div className="pt-2 flex items-center gap-4 text-xs font-mono text-muted-foreground">
                        <a
                            href="https://linkedin.com/in/fayizvc"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-foreground inline-flex items-center gap-0.5"
                        >
                            <span>LinkedIn</span>
                            <ArrowUpRight className="w-3 h-3" />
                        </a>
                        <span>&bull;</span>
                        <a
                            href="https://github.com/fxyizvc"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-foreground inline-flex items-center gap-0.5"
                        >
                            <span>GitHub</span>
                            <ArrowUpRight className="w-3 h-3" />
                        </a>
                    </div>
                </div>

                <div className="md:col-span-7">
                    {isSuccess ? (
                        <div className="border border-border rounded p-6 bg-card text-center space-y-3 font-mono">
                            <p className="text-sm font-semibold text-foreground">Message received.</p>
                            <p className="text-xs text-muted-foreground">Thank you for reaching out. I'll get back to you shortly.</p>
                            <button
                                onClick={() => setIsSuccess(false)}
                                className="text-xs text-foreground underline underline-offset-4 mt-2"
                            >
                                Send another note
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 font-mono text-xs">
                            <input type="text" tabIndex={-1} className="hidden" {...register("_gotcha")} />

                            <div>
                                <label className="block text-muted-foreground mb-1">NAME</label>
                                <input
                                    placeholder="Your name or company"
                                    {...register("name")}
                                    className="w-full px-3 py-2.5 rounded border border-border bg-background text-foreground outline-none focus:border-foreground transition-colors"
                                />
                                {errors.name && <p className="text-rose-500 text-[11px] mt-1">{errors.name.message}</p>}
                            </div>

                            <div>
                                <label className="block text-muted-foreground mb-1">EMAIL</label>
                                <input
                                    type="email"
                                    placeholder="email@example.com"
                                    {...register("email")}
                                    className="w-full px-3 py-2.5 rounded border border-border bg-background text-foreground outline-none focus:border-foreground transition-colors"
                                />
                                {errors.email && <p className="text-rose-500 text-[11px] mt-1">{errors.email.message}</p>}
                            </div>

                            <div>
                                <label className="block text-muted-foreground mb-1">MESSAGE</label>
                                <textarea
                                    rows={4}
                                    placeholder="Role details, project scope, or inquiry..."
                                    {...register("message")}
                                    className="w-full px-3 py-2.5 rounded border border-border bg-background text-foreground outline-none focus:border-foreground transition-colors resize-none"
                                />
                                {errors.message && <p className="text-rose-500 text-[11px] mt-1">{errors.message.message}</p>}
                            </div>

                            {errorMessage && (
                                <p className="text-rose-500 text-[11px]">{errorMessage}</p>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-2.5 rounded bg-foreground text-background font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
                            >
                                {isSubmitting ? "Sending..." : "Submit Inquiry"}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
