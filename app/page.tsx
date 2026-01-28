"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronRight, MousePointer2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { projects } from "@/lib/projects";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <header className="relative w-full min-h-screen flex flex-col justify-end pb-20 pt-32 overflow-hidden">
        {/* Background Massive Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0">
          <h1 className="text-[18vw] leading-none font-semibold text-white/5 tracking-tighter mix-blend-overlay">
            Juste
          </h1>
        </div>

        <Container className="relative z-10 grid lg:grid-cols-12 gap-12 items-end">
          {/* Left Column */}
          <div className="lg:col-span-5 mb-10 lg:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              <span className="text-xs font-medium text-neutral-300 tracking-wide uppercase">
                Disponible pour missions
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl lg:text-6xl font-medium text-white tracking-tighter leading-[1.1] mb-6"
            >
              UI/UX Designer <br /> <span className="text-neutral-500">Conversion & Performance</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-neutral-400 mb-8 leading-relaxed max-w-lg"
            >
              Je conçois des expériences digitales orientées business qui transforment vos visiteurs en clients fidèles.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex gap-4"
            >
              <Link href="/portfolio">
                <Button className="group">
                  <span className="mr-2">Voir mes projets</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline">Me contacter</Button>
              </Link>
            </motion.div>
          </div>

          {/* Center/Right Column: Image */}
          <div className="lg:col-span-4 relative flex justify-center lg:justify-end lg:-mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative w-full max-w-md aspect-[3/4] rounded-t-[10rem] overflow-hidden bg-neutral-900 border-x border-t border-white/10 shadow-2xl shadow-brand-500/10"
            >
              {/* Using the uploaded photo path */}
              <Image
                src="/images/photo.jpg"
                alt="Portrait Juste Oussa"
                fill
                className="object-cover opacity-90 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
            </motion.div>
          </div>

          {/* Right Column: Intro Text */}
          <div className="lg:col-span-3 mb-10 lg:mb-24 flex flex-col items-start lg:pl-8 border-l border-white/10 ml-8 lg:ml-0">
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-white font-medium mb-1">UI/UX Design</h3>
                <p className="text-sm text-neutral-500">Interfaces modernes et centrées utilisateur.</p>
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">UX Research</h3>
                <p className="text-sm text-neutral-500">Analyse comportementale et data-driven.</p>
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">E-commerce</h3>
                <p className="text-sm text-neutral-500">Shopify & Landing pages qui convertissent.</p>
              </div>
            </div>
          </div>
        </Container>
      </header>

      {/* Featured Projects Preview */}
      <section className="py-20 bg-neutral-900/30 border-y border-white/5">
        <Container>
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white mb-4">Projets Sélectionnés</h2>
              <p className="text-neutral-400">Une sélection de travaux axés sur la performance et l'expérience utilisateur.</p>
            </div>
            <Link href="/portfolio" className="text-brand-500 hover:text-white transition-colors flex items-center gap-2 hidden md:flex">
              Voir tout <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, idx) => (
              <Link href={project.link} key={project.id} target="_blank" className="group block">
                <div className="relative aspect-[4/3] bg-neutral-800 rounded-2xl overflow-hidden mb-4 border border-white/5 group-hover:border-brand-500/50 transition-colors">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={90}
                    className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-brand-900/20 group-hover:bg-transparent transition-colors"></div>
                  <div className="absolute bottom-6 left-4 right-4 translate-y-0 opacity-100 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-300">
                    <Button size="sm" variant="default" className="w-full">Visiter le site</Button>
                  </div>
                </div>
                <h3 className="text-xl font-medium text-white mb-1 group-hover:text-brand-500 transition-colors">{project.title}</h3>
                <p className="text-sm text-neutral-500">{project.tags.join(" • ")}</p>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/portfolio" className="text-brand-500 hover:text-white transition-colors inline-flex items-center gap-2">
              Voir tout <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Services / Process Teaser */}
      <section className="py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-brand-500 text-sm font-medium uppercase tracking-wider mb-4">
                <span className="w-8 h-[1px] bg-brand-500"></span>
                Méthodologie
              </div>
              <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-6">
                Design orienté résultats,<br /> pas seulement esthétique.
              </h2>
              <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
                Mon approche combine data, psychologie utilisateur et design visuel pour créer des produits qui ne sont pas seulement beaux, mais qui fonctionnent.
              </p>

              <ul className="space-y-6 mb-8">
                <li className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-500 font-bold shrink-0">1</div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Analyse & Stratégie</h4>
                    <p className="text-sm text-neutral-500">Compréhension des objectifs business et des points de friction utilisateurs.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-500 font-bold shrink-0">2</div>
                  <div>
                    <h4 className="text-white font-medium mb-1">UX & Architecture</h4>
                    <p className="text-sm text-neutral-500">Création de parcours fluides et de wireframes structurés pour la conversion.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-500 font-bold shrink-0">3</div>
                  <div>
                    <h4 className="text-white font-medium mb-1">UI & Prototypage</h4>
                    <p className="text-sm text-neutral-500">Design haute-fidélité, moderne et prêt pour le développement.</p>
                  </div>
                </li>
              </ul>

              <Link href="/about">
                <Button variant="outline" className="group">
                  En savoir plus sur mon process
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-brand-500/10 rounded-full blur-3xl"></div>
              <div className="grid gap-6">
                <div className="bg-[#111] p-8 rounded-3xl border border-white/10 hover:border-brand-500/50 transition-colors group">
                  <MousePointer2 className="w-8 h-8 text-brand-500 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-medium text-white mb-2">UI/UX Design</h3>
                  <p className="text-neutral-400 mb-4">Interfaces web & mobile, Landing pages, Dashboard et SaaS.</p>
                  <ul className="text-sm text-neutral-500 space-y-2">
                    <li>• Figma & Prototypage</li>
                    <li>• Design Systems</li>
                    <li>• Responsive Design</li>
                  </ul>
                </div>
                <div className="bg-[#111] p-8 rounded-3xl border border-white/10 hover:border-brand-500/50 transition-colors group lg:ml-12">
                  <div className="w-8 h-8 rounded bg-brand-500/20 text-brand-500 flex items-center justify-center mb-4">
                    <span className="font-bold text-lg">%</span>
                  </div>
                  <h3 className="text-2xl font-medium text-white mb-2">Optimisation Conversion</h3>
                  <p className="text-neutral-400 mb-4">Audit UX, refonte de parcours d'achat et optimisation e-commerce.</p>
                  <ul className="text-sm text-neutral-500 space-y-2">
                    <li>• Audit UX/UI</li>
                    <li>• Optimisation E-commerce</li>
                    <li>• Landing Pages haute performance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-24 border-t border-white/5">
        <Container>
          <div className="bg-gradient-to-br from-brand-900/50 to-neutral-900 rounded-[3rem] p-12 md:p-20 text-center border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-20 pointer-events-none"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-6">
                Prêt à transformer votre expérience digitale ?
              </h2>
              <p className="text-lg text-neutral-300 mb-10">
                Discutons de votre projet et voyons comment le design peut devenir votre meilleur levier de croissance.
              </p>
              <Link href="/contact">
                <Button size="lg" className="h-14 px-8 text-lg bg-white text-black hover:bg-brand-500 hover:text-white border-0">
                  Démarrer un projet
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
