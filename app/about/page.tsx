import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="pt-32 pb-20 min-h-screen">
            <Container>
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 mb-8">
                            <span className="text-xs font-medium text-neutral-300 tracking-wide uppercase">A Propos</span>
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-medium text-white tracking-tighter leading-[1.1] mb-8">
                            Creer des marques <br />
                            <span className="text-neutral-500">Significatives &</span> <br />
                            Experiences Digitales.
                        </h1>

                        <div className="space-y-8">
                            <p className="text-xl text-neutral-400 leading-relaxed font-light">
                                Je suis Dominic, un Brand & UI/UX Designer base a Londres, passionne par la creation d identites visuelles captivantes et d experiences numeriques fluides. Avec une approche strategique et un souci du detail, j aide les entreprises a se demarquer et a se connecter avec leur public.
                            </p>
                            <p className="text-lg text-neutral-400 leading-relaxed font-light">
                                Mon approche combine esthetique et fonctionnalite. Je ne me contente pas de faire "joli", je concois des systemes qui fonctionnent, qui evoluent et qui convertissent.
                            </p>
                        </div>

                        <div className="mt-12">
                            <Link href="/contact">
                                <Button size="lg">Travaillons ensemble <ArrowRight className="ml-2 w-4 h-4" /></Button>
                            </Link>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <div className="bg-neutral-900/50 p-8 rounded-3xl border border-white/5">
                            <h3 className="text-2xl font-medium text-white mb-6">Competences</h3>
                            <div className="flex flex-wrap gap-3">
                                {["UI/UX Design", "Web Design", "Figma", "React", "Next.js", "Tailwind CSS", "Branding", "Strategy"].map((skill) => (
                                    <span key={skill} className="px-3 py-1 bg-white/5 rounded-full text-sm text-neutral-300 border border-white/10">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
