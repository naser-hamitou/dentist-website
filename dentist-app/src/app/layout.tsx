// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // 1. Import Navbar here
import { SITE_CONFIG } from "@/data/content";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`, // Auto-adds site name to page titles
  },
  description: "Clinique dentaire moderne à Montréal-Nord.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased flex flex-col min-h-screen`}>
        {/* 2. Add Navbar at the top */}
        <Navbar />
        
        {/* 3. The page content renders here */}
        <div className="flex-grow">
          {children}
        </div>

        {/* 4. Add Footer globally so it appears on all pages too */}
        <footer className="bg-slate-900 text-slate-400 py-12 text-center mt-auto">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. Tous droits réservés.</p>
        </footer>
      </body>
    </html>
  );
}