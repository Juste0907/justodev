"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <section className="pb-24 pt-8 container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-96 mb-20">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="relative rounded-3xl overflow-hidden group bg-neutral-900 border border-white/5">
                        {/* Placeholder images - using gradients or solid colors if images missing, 
                or try to reuse the photo if applicable, but ideally we need project images.
                I will use a placeholder div with the brand color. */}
                        <div className="absolute inset-0 bg-neutral-800 group-hover:bg-neutral-700 transition-colors flex items-center justify-center">
                            <span className="text-neutral-500 group-hover:text-white transition-colors">Project Preview {i}</span>
                        </div>
                        {/* 
             // Ideally:
             <Image 
                src="/images/project-1.jpg" 
                alt="Project" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
             /> 
             */}
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                    </div>
                ))}
            </div>

            <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-neutral-500 text-sm">
                <p>© {new Date().getFullYear()} Dominic Portfolio. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <Link href="#" className="hover:text-white transition-colors">
                        Twitter
                    </Link>
                    <Link href="#" className="hover:text-white transition-colors">
                        LinkedIn
                    </Link>
                    <Link href="#" className="hover:text-white transition-colors">
                        Instagram
                    </Link>
                </div>
            </div>
        </section>
    );
}
