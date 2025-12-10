import { SITE_CONFIG } from '@/data/content';
import { ArrowRight, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-8 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wide">
            Nouvellement Rénové
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] text-slate-900">
            L'Architecte de votre <span className="text-blue-600">Sourire.</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Une approche humaine de la dentisterie moderne à Montréal-Nord. 
            Technologies avancées, confort absolu et soins personnalisés pour toute la famille.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact"
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-600/20"
            >
              <Calendar size={20} />
              Prendre Rendez-vous
            </a>
            <a 
              href="#services"
              className="flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 transition"
            >
              Nos Services
              <ArrowRight size={20} />
            </a>
          </div>
        </div>

        {/* Right Image Placeholder */}
        <div className="relative lg:h-[600px] w-full">
           <div className="absolute inset-0 bg-blue-200 rounded-[2rem] rotate-3 transform translate-y-4"></div>
           <div className="absolute inset-0 bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl">
             {/* Replace src with your actual image */}
             <img 
               src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=2000&auto=format&fit=crop" 
               alt="Cabinet dentaire moderne" 
               className="w-full h-full object-cover opacity-90"
             />
           </div>
        </div>
      </div>
    </section>
  );
}