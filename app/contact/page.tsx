"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            className={cn(
                "flex h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-500 disabled:cursor-not-allowed disabled:opacity-50",
                className
            )}
            {...props}
        />
    );
}

function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
    return (
        <textarea
            className={cn(
                "flex min-h-[120px] w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white shadow-sm transition-colors placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-500 disabled:cursor-not-allowed disabled:opacity-50 resize-y",
                className
            )}
            {...props}
        />
    );
}

export default function ContactPage() {
    return (
        <div className="pt-32 pb-20 min-h-screen">
            <Container>
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <h1 className="text-4xl lg:text-6xl font-medium text-white tracking-tighter mb-8">
                            Parlons de votre <br />
                            <span className="text-brand-500">Projet.</span>
                        </h1>
                        <p className="text-xl text-neutral-400 mb-12">
                            Remplissez le formulaire et je vous repondrai sous 24-48h.
                        </p>

                        <div className="space-y-8 text-neutral-300">
                            <div>
                                <h3 className="text-white font-medium mb-1">Email</h3>
                                <a href="mailto:hello@dominic.com" className="hover:text-brand-500 transition-colors">hello@dominic.com</a>
                            </div>
                            <div>
                                <h3 className="text-white font-medium mb-1">Socials</h3>
                                <div className="flex gap-4">
                                    <a href="#" className="hover:text-brand-500 transition-colors">Twitter</a>
                                    <a href="#" className="hover:text-brand-500 transition-colors">LinkedIn</a>
                                    <a href="#" className="hover:text-brand-500 transition-colors">Instagram</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-neutral-900/50 p-8 rounded-3xl border border-white/5">
                        <form
                            name="contact"
                            method="POST"
                            data-netlify="true"
                            className="space-y-6"
                        // action="/success" // Optional success page
                        >
                            <input type="hidden" name="form-name" value="contact" />

                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-white">Nom</label>
                                <Input id="name" name="name" placeholder="Votre nom" required />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-white">Email</label>
                                <Input id="email" name="email" type="email" placeholder="votre@email.com" required />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-white">Message</label>
                                <Textarea id="message" name="message" placeholder="Parlez-moi de votre projet..." required />
                            </div>

                            <Button type="submit" size="lg" className="w-full">
                                Envoyer le message
                            </Button>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
}
