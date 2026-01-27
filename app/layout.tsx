import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google"; // Using DM Sans for headings as per prompt Option 1
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" }); // Optional if we want dual fonts

export const metadata: Metadata = {
  title: "Juste Oussa | UI/UX Designer & Consultant Digital",
  description: "Portfolio de Juste Oussa, UI/UX Designer orienté conversion & performance digitale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.variable, "bg-background text-foreground antialiased selection:bg-brand-500 selection:text-white font-sans")}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
