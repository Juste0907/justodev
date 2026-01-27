import { Container } from "@/components/ui/Container";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function ServicesPage() {
    return (
        <div className="pt-32 pb-20 min-h-screen">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h1 className="text-4xl lg:text-6xl font-medium text-white tracking-tighter mb-6">
                        Mes Services & Tarifs
                    </h1>
                    <p className="text-xl text-neutral-400">
                        Des solutions adaptees a vos besoins, que vous soyez une startup ou une entreprise etablie.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Basic Plan */}
                    <div className="bg-[#111] rounded-3xl p-8 border border-white/5 flex flex-col">
                        <span className="text-xs font-semibold tracking-wider text-neutral-400 uppercase mb-4">Essentiel</span>
                        <div className="mb-6">
                            <span className="text-4xl font-semibold text-white tracking-tight">2990€</span>
                            <span className="text-neutral-500 text-sm ml-1">/ projet</span>
                        </div>
                        <p className="text-neutral-400 text-sm mb-8">Parfait pour les startups qui lancent leur presence.</p>

                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-start gap-3 text-sm text-neutral-300">
                                <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" />
                                Consultation Brand
                            </li>
                            <li className="flex items-start gap-3 text-sm text-neutral-300">
                                <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" />
                                Acces aux ressources design
                            </li>
                            <li className="flex items-start gap-3 text-sm text-neutral-300">
                                <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" />
                                1 revision incluse
                            </li>
                        </ul>

                        <Link href="/contact" className="w-full">
                            <Button variant="outline" className="w-full justify-between group">
                                <span>Contacter</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </div>

                    {/* Pro Plan */}
                    <div className="bg-brand-600 rounded-3xl p-8 border border-brand-500 flex flex-col relative shadow-2xl shadow-brand-500/20 transform lg:-translate-y-4">
                        <span className="text-xs font-semibold tracking-wider text-white/80 uppercase mb-4">Populaire</span>
                        <div className="mb-6">
                            <span className="text-4xl font-semibold text-white tracking-tight">4990€</span>
                            <span className="text-white/60 text-sm ml-1">/ projet</span>
                        </div>
                        <p className="text-white/80 text-sm mb-8">Le pack complet pour une identite forte.</p>

                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-start gap-3 text-sm text-white">
                                <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                                Identite de marque complete
                            </li>
                            <li className="flex items-start gap-3 text-sm text-white">
                                <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                                UI/UX Design (Web/App)
                            </li>
                            <li className="flex items-start gap-3 text-sm text-white">
                                <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                                Jusqu a 3 revisions
                            </li>
                            <li className="flex items-start gap-3 text-sm text-white">
                                <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                                Guide de style & Assets
                            </li>
                        </ul>

                        <Link href="/contact" className="w-full">
                            <Button className="w-full justify-between bg-black hover:bg-neutral-900 text-white border-0 group">
                                <span>Commencer</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="bg-[#111] rounded-3xl p-8 border border-white/5 flex flex-col">
                        <span className="text-xs font-semibold tracking-wider text-neutral-400 uppercase mb-4">Entreprise</span>
                        <div className="mb-6">
                            <span className="text-4xl font-semibold text-white tracking-tight">6990€</span>
                            <span className="text-neutral-500 text-sm ml-1">/ projet</span>
                        </div>
                        <p className="text-neutral-400 text-sm mb-8">Solution complete pour entreprises etablies.</p>

                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-start gap-3 text-sm text-neutral-300">
                                <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" />
                                Strategie sur mesure
                            </li>
                            <li className="flex items-start gap-3 text-sm text-neutral-300">
                                <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" />
                                Design d experience digitale
                            </li>
                            <li className="flex items-start gap-3 text-sm text-neutral-300">
                                <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" />
                                Revisions illimitees
                            </li>
                        </ul>

                        <Link href="/contact" className="w-full">
                            <Button variant="outline" className="w-full justify-between group">
                                <span>Contacter</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </div>

                </div>
            </Container>
        </div>
    );
}
