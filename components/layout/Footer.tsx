"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <section className="pb-24 pt-8 container mx-auto px-6 lg:px-12">

            <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-neutral-500 text-sm">
                <p>© {new Date().getFullYear()} Juste Oussa Portfolio. All rights reserved.</p>
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
