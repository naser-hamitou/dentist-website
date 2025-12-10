// src/app/notre-clinique/page.tsx
import { Metadata } from 'next';
import Reveal from '@/components/Reveal';
import { Roboto } from 'next/font/google';
import { Zap, Monitor, Star } from 'lucide-react'; // Icons for the "Technology" theme

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Notre Clinique - Architecte du Sourire',
  description: 'La clinique dentaire préférée à Montréal-Nord. Équipée d’une technologie de pointe.',
};

export default function NotreCliniquePage() {
  return (
    <main className="bg-white">
      {/* 1. Header Section */}
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className={`${roboto.className} container mx-auto px-6 text-center`}>
          <Reveal direction="up">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Notre clinique
            </h1>
          </Reveal>
          <Reveal direction="up" delay={0.07}>
            <p className="text-xl text-blue-600 font-medium inline-flex items-center justify-center gap-2">
              <Star className="w-5 h-5" />
              La clinique dentaire préférée à Montréal-Nord
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. Content & Image Split */}
      <section className="py-24">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-8">
            <Reveal direction="up">
              <p className="text-lg text-slate-600 leading-relaxed">
                Notre clinique moderne est équipée d’une technologie de pointe, 
                garantissant précision et efficacité dans chaque procédure.
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.05}>
              <p className="text-lg text-slate-600 leading-relaxed">
                Des systèmes d’imagerie numérique aux options de traitement avancées, 
                nous proposons les dernières avancées en matière de dentisterie pour 
                offrir des résultats optimaux à nos patients.
              </p>
            </Reveal>

            {/* Feature List (Added to make the text pop visually) */}
            <Reveal direction="up" delay={0.08}>
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                <div className="flex gap-3">
                  <div className="mt-1 w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                    <Monitor size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Imagerie Numérique</h3>
                    <p className="text-sm text-slate-500">Précision accrue</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="mt-1 w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                    <Zap size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Technologie de Pointe</h3>
                    <p className="text-sm text-slate-500">Traitements efficaces</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Image Side */}
          <Reveal direction="left" delay={0.06}>
            <div className="relative h-[400px] lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
              {/* In a real app, use the Next.js <Image /> component here.
                 For now, we use a standard img tag with an external placeholder.
              */}
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop" 
                alt="Équipement dentaire moderne" 
                className="object-cover w-full h-full hover:scale-105 transition duration-700 ease-in-out"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}