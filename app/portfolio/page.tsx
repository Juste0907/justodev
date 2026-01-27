"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { projects } from "@/lib/projects";
import { cn } from "@/lib/utils";

// Get unique categories
const categories = ["Tout", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function PortfolioPage() {
    const [filter, setFilter] = useState("Tout");

    const filteredProjects = projects.filter(
        (p) => filter === "Tout" || p.category === filter
    );

    return (
        <div className="pt-32 pb-20 min-h-screen">
            <Container>
                <div className="mb-12">
                    <h1 className="text-4xl md:text-6xl font-medium text-white mb-6 tracking-tighter">
                        Portfolio
                    </h1>
                    <p className="text-neutral-400 max-w-2xl text-lg">
                        Une sélection de mes travaux récents en design et développement.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-2 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={cn(
                                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                                filter === cat
                                    ? "bg-white text-black border-white"
                                    : "bg-transparent text-neutral-400 border-white/10 hover:text-white hover:border-white/20"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Link href={project.link} target="_blank" className="group block h-full">
                                    <div className="relative aspect-[4/3] bg-neutral-900 rounded-2xl overflow-hidden mb-4 border border-white/5 group-hover:border-brand-500/50 transition-colors">
                                        {/* Placeholder for project image if not available, generating a nice gradient with title */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-black p-6 flex items-center justify-center text-center">
                                            <span className="text-2xl font-semibold text-neutral-700 group-hover:text-brand-500/50 transition-colors">
                                                {project.title.substring(0, 2)}
                                            </span>
                                        </div>

                                        <div className="absolute bottom-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                            <div className="bg-white text-black p-2 rounded-full">
                                                <ArrowUpRight className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h3 className="text-xl font-medium text-white mb-1 group-hover:text-brand-500 transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-sm text-neutral-500">{project.description}</p>
                                        </div>
                                        <span className="text-xs text-neutral-500 border border-white/10 px-2 py-1 rounded-full">
                                            {project.category}
                                        </span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-20 text-neutral-500">
                        Aucun projet trouvé dans cette catégorie.
                    </div>
                )}
            </Container>
        </div>
    );
}
