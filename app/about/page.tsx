"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { CheckCircle2, Code2, Globe, Laptop, Layout, Megaphone, Smartphone, UserCheck } from "lucide-react";
import Image from "next/image";

export default function About() {
    const skills = [
        {
            category: "UI/UX Design",
            items: ["Figma & Prototypage", "Design Systems", "User Flows", "Wireframing", "Responsive Design", "Micro-interactions"]
        },
        {
            category: "Conversion & Business",
            items: ["UX Writing & Micro-copy", "Optimisation Taux de Conversion (CRO)", "E-commerce (Shopify)", "Entonnoirs de vente", "SEO & Structure", "Analytics"]
        },
        {
            category: "Tech & Outils",
            items: ["React & Next.js", "Tailwind CSS", "WordPress & CMS", "Automatisation & IA", "Chatbots UX", "HTML/CSS"]
        }
    ];

    return (
        <div className="pt-32 pb-20 overflow-hidden">
            <Container>
                {/* Intro / Bio */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-8">
                            À propos de <span className="text-brand-500">Juste Oussa</span>
                        </h1>
                        <div className="space-y-6 text-lg text-neutral-400 leading-relaxed">
                            <p>
                                Je suis un <strong>UI/UX Designer freelance</strong> spécialisé dans la conception d’expériences utilisateur claires, intuitives et orientées conversion. Mon expertise centrale est l’UI/UX Design, avec une forte compréhension du business, de l’e-commerce et des parcours utilisateurs.
                            </p>
                            <p>
                                Je transforme des interfaces complexes ou inefficaces en expériences fluides, modernes et rentables. Le web, le marketing, le copywriting et l’automatisation sont utilisés comme leviers stratégiques au service de l’UX.
                            </p>
                            <div className="flex gap-4 pt-4">
                                <div className="flex items-center gap-2 text-white bg-white/5 px-4 py-2 rounded-full border border-white/10">
                                    <Globe className="w-4 h-4 text-brand-500" />
                                    <span className="text-sm">Remote / International</span>
                                </div>
                                <div className="flex items-center gap-2 text-white bg-white/5 px-4 py-2 rounded-full border border-white/10">
                                    <UserCheck className="w-4 h-4 text-brand-500" />
                                    <span className="text-sm">Français (Natif) & Anglais</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] relative rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="/images/photo.jpg"
                                alt="Juste Oussa au travail"
                                fill
                                className="object-cover opacity-80"
                            />
                        </div>
                        <div className="absolute -bottom-6 -left-6 bg-[#111] p-6 rounded-2xl border border-white/10 shadow-xl max-w-xs transform -rotate-2 hover:rotate-0 transition-transform">
                            <p className="text-brand-500 text-4xl font-bold mb-1">100%</p>
                            <p className="text-neutral-400 text-sm">Design orienté résultats et performance business.</p>
                        </div>
                    </motion.div>
                </div>

                {/* Expertise Grid */}
                <div className="mb-24">
                    <h2 className="text-3xl font-medium text-white mb-12 flex items-center gap-3">
                        <Laptop className="w-8 h-8 text-brand-500" />
                        Expertise & Compétences
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {skills.map((skillGroup, idx) => (
                            <div key={idx} className="bg-neutral-900/50 p-8 rounded-3xl border border-white/5 hover:border-brand-500/30 transition-colors">
                                <h3 className="text-xl font-medium text-white mb-6 pb-4 border-b border-white/5">{skillGroup.category}</h3>
                                <ul className="space-y-3">
                                    {skillGroup.items.map((item) => (
                                        <li key={item} className="flex items-start gap-3 text-neutral-400 hover:text-white transition-colors">
                                            <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Differentiation */}
                <div className="bg-[#111] rounded-[3rem] p-10 md:p-16 border border-white/5 relative overflow-hidden">
                    <div className="grid lg:grid-cols-2 gap-12 text-center md:text-left">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
                                Pourquoi travailler avec moi ?
                            </h2>
                            <p className="text-neutral-400 text-lg mb-8">
                                Mon approche va au-delà de l'esthétique pure. Je conçois des produits numériques en pensant "business" et "utilisateur" simultanément.
                            </p>
                        </div>
                        <div className="grid gap-6">
                            <div className="flex gap-4 items-start">
                                <div className="bg-brand-500/10 p-3 rounded-xl text-brand-500">
                                    <Layout className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Vision Globale</h4>
                                    <p className="text-sm text-neutral-500">Alliance unique de compétences : UX + Business + Tech + Marketing.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="bg-brand-500/10 p-3 rounded-xl text-brand-500">
                                    <Megaphone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Vulgarisation & Pédagogie</h4>
                                    <p className="text-sm text-neutral-500">Je vous aide à comprendre chaque choix de design et son impact.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="bg-brand-500/10 p-3 rounded-xl text-brand-500">
                                    <Smartphone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Mobile First & E-commerce</h4>
                                    <p className="text-sm text-neutral-500">Forte expertise sur les parcours d'achat et l'expérience mobile.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
        </div>
    );
}
