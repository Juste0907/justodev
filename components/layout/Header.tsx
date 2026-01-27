"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <>
            <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md md:w-auto">
                <div className="bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-full pl-2 pr-6 py-2 flex items-center justify-between gap-4 shadow-2xl">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                            <span className="text-brand-500 font-semibold text-lg leading-none block w-5 h-5 flex items-center justify-center">
                                D
                            </span>
                        </Link>
                        <span className="text-sm font-medium text-white tracking-tight">
                            Dominic
                        </span>
                        <div className="h-4 w-[1px] bg-white/20 mx-1 hidden sm:block"></div>
                    </div>

                    <div className="flex items-center">
                        <button
                            onClick={() => setIsOpen(true)}
                            className="group flex items-center gap-2 cursor-pointer"
                        >
                            <span className="text-sm text-neutral-400 group-hover:text-white transition-colors hidden sm:block">Menu</span>
                            <Menu className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
                        </button>
                    </div>
                </div>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-8 right-8 p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <nav className="flex flex-col items-center gap-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "text-3xl md:text-5xl font-medium tracking-tighter hover:text-brand-500 transition-colors",
                                        pathname === item.href ? "text-white" : "text-neutral-500"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
