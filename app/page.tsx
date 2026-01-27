"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
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
            Dominic
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
              className="text-5xl lg:text-7xl font-medium text-white tracking-tighter leading-[1.1] mb-6"
            >
              Brand & UI/UX <br /> Designer <br /> <span className="text-neutral-500">Freelance</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button className="group">
                <span className="mr-2">Voir mes projets</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
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
                alt="Portrait"
                fill
                className="object-cover opacity-90 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
            </motion.div>
          </div>

          {/* Right Column: Intro Text */}
          <div className="lg:col-span-3 mb-10 lg:mb-24 flex flex-col items-start">
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-neutral-400 mb-8 leading-relaxed"
            >
              Bonjour, je suis Dominic. Un designer passionné créant des expériences numériques fluides qui connectent et convertissent.
            </motion.p>
          </div>
        </Container>
      </header>

      {/* Featured Projects Preview */}
      <section className="py-20 bg-neutral-900/30 border-y border-white/5">
        <Container>
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white">Projets Récents</h2>
            <Link href="/portfolio" className="text-brand-500 hover:text-white transition-colors flex items-center gap-2">
              Voir tout <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, idx) => (
              <Link href={project.link} key={project.id} target="_blank" className="group block">
                <div className="relative aspect-[4/3] bg-neutral-800 rounded-2xl overflow-hidden mb-4 border border-white/5 group-hover:border-brand-500/50 transition-colors">
                  <div className="absolute inset-0 bg-brand-900/20 group-hover:bg-transparent transition-colors"></div>
                  <div className="absolute bottom-4 left-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <Button size="sm" variant="default" className="w-full">Visiter le site</Button>
                  </div>
                </div>
                <h3 className="text-xl font-medium text-white mb-1 group-hover:text-brand-500 transition-colors">{project.title}</h3>
                <p className="text-sm text-neutral-500">{project.tags.join(" • ")}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Services / Pricing Teaser */}
      <section className="py-24">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-medium text-white tracking-tighter mb-4">Mes Services</h2>
            <p className="text-neutral-400 text-lg">Des solutions adaptées à vos besoins.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Simplified Card 1 */}
            <div className="bg-[#111] rounded-3xl p-8 border border-white/5 flex flex-col hover:border-brand-500/30 transition-colors">
              <span className="text-xs font-semibold tracking-wider text-neutral-400 uppercase mb-4">Essentiel</span>
              <div className="mb-6">
                <span className="text-4xl font-semibold text-white tracking-tight">Design</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 text-sm text-neutral-300">
                  <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" />
                  UI/UX Design
                </li>
                <li className="flex items-start gap-3 text-sm text-neutral-300">
                  <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" />
                  Prototypage Figma
                </li>
              </ul>
            </div>

            {/* Simplified Card 2 */}
            <div className="bg-brand-600 rounded-3xl p-8 border border-brand-500 flex flex-col relative shadow-2xl shadow-brand-500/20 transform lg:-translate-y-4">
              <span className="text-xs font-semibold tracking-wider text-white/80 uppercase mb-4">Populaire</span>
              <div className="mb-6">
                <span className="text-4xl font-semibold text-white tracking-tight">Frontend</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 text-sm text-white">
                  <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                  Développement React/Next.js
                </li>
                <li className="flex items-start gap-3 text-sm text-white">
                  <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                  Animations complexes
                </li>
                <li className="flex items-start gap-3 text-sm text-white">
                  <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                  Intégration Pixel Perfect
                </li>
              </ul>
            </div>

            {/* Simplified Card 3 */}
            <div className="bg-[#111] rounded-3xl p-8 border border-white/5 flex flex-col hover:border-brand-500/30 transition-colors">
              <span className="text-xs font-semibold tracking-wider text-neutral-400 uppercase mb-4">Complet</span>
              <div className="mb-6">
                <span className="text-4xl font-semibold text-white tracking-tight">Fullstack</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 text-sm text-neutral-300">
                  <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" />
                  Site E-commerce
                </li>
                <li className="flex items-start gap-3 text-sm text-neutral-300">
                  <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" />
                  Solutions CMS (Shopify/WP)
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/services">
              <Button variant="outline" size="lg">Voir tous les services</Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
