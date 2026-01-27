"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CheckCircle2, Code2, LineChart, MessageSquare, Monitor, PenTool, ShoppingBag, Smartphone } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Services() {
    const services = [
        {
            title: "UI/UX Design & Stratégie",
            description: "Conception d'interfaces modernes qui marquent les esprits et convertissent.",
            price: "Sur mesure",
            features: [
                "Design de Landing Pages & Sites Vitrine",
                "Maquettes Haute-Fidélité (Figma)",
                "Design Systems & Guides de Style",
                "Prototypage Interactif",
                "Refonte UI complète"
            ],
            icon: <PenTool className="w-6 h-6" />,
            highlight: true
        },
        {
            title: "UX Research & Audit",
            description: "Comprendre vos utilisateurs pour éliminer les frictions et booster la croissance.",
            price: "À partir de 990€",
            features: [
                "Audit UX & Ergonomique",
                "Analyse des parcours utilisateurs",
                "Tests Utilisateurs",
                "Optimisation du Taux de Conversion (CRO)",
                "Architecture de l'information"
            ],
            icon: <LineChart className="w-6 h-6" />,
            highlight: false
        },
        {
            title: "Développement & Intégration",
            description: "Transformation de vos designs en produits vivants, performants et pixel-perfect.",
            price: "Sur devis",
            features: [
                "Intégration Web (React / Next.js)",
                "Sites E-commerce (Shopify / WooCommerce)",
                "Sites Vitrine (WordPress)",
                "Animations & Micro-interactions",
                "SEO Technique & Performance"
            ],
            icon: <Code2 className="w-6 h-6" />,
            highlight: false
        }
    ];

    return (
        <div className="pt-32 pb-20 min-h-screen">
            <Container>
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-medium text-white tracking-tighter mb-6"
                    >
                        Expertise & Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-neutral-400"
                    >
                        Une approche globale combinant <strong>Design</strong>, <strong>Psychologie</strong> et <strong>Technologie</strong> pour créer des produits digitaux performants.
                    </motion.p>
                </div>

                {/* Pricing/Services Grid */}
                <div className="grid lg:grid-cols-3 gap-8 mb-24">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                            className={`relative rounded-3xl p-8 border hover:border-brand-500/50 transition-all duration-300 flex flex-col group ${service.highlight
                                ? "bg-neutral-900/50 border-brand-500/30 shadow-2xl shadow-brand-900/10"
                                : "bg-[#111] border-white/5"
                                }`}
                        >
                            {service.highlight && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-full tracking-wider uppercase">
                                    Recommandé
                                </div>
                            )}

                            <div className="mb-8">
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${service.highlight ? "bg-brand-500 text-white" : "bg-neutral-800 text-neutral-400 group-hover:bg-brand-500/10 group-hover:text-brand-500 transition-colors"
                                    }`}>
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-medium text-white mb-2">{service.title}</h3>
                                <p className="text-neutral-400 text-sm h-10">{service.description}</p>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300">
                                        <CheckCircle2 className={`w-5 h-5 shrink-0 ${service.highlight ? "text-brand-500" : "text-neutral-600 group-hover:text-brand-500 transition-colors"}`} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto">
                                <p className="text-sm text-neutral-500 mb-4">Budget moyen : <span className={`${service.highlight ? "text-brand-400" : "text-white"}`}>{service.price}</span></p>
                                <Link href="/contact" className="block">
                                    <Button variant={service.highlight ? "default" : "outline"} className="w-full">
                                        Démarrer un projet
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* FAQ or Additional Info could go here */}
                <div className="bg-neutral-900/30 border border-white/5 rounded-3xl p-12 text-center">
                    <h2 className="text-2xl font-medium text-white mb-4">Besoin d'une offre personnalisée ?</h2>
                    <p className="text-neutral-400 mb-8 max-w-2xl mx-auto">
                        Chaque projet est unique. Je propose également des missions de conseil ponctuel, d'audit rapide ou d'accompagnement long terme.
                    </p>
                    <Link href="/contact">
                        <Button variant="outline">Me contacter pour en discuter</Button>
                    </Link>
                </div>

            </Container>
        </div>
    );
}
