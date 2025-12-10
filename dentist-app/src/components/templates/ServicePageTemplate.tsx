import { CheckCircle2, Calendar } from 'lucide-react';

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: React.ReactNode; 
  details?: React.ReactNode;    
  imageSrc: string; // The image in the split section
  benefits?: string[]; 
  
  // NEW PROP: Optional background for the hero header
  heroBackgroundSrc?: string; 
}

export default function ServicePageTemplate({ 
  title, 
  subtitle, 
  description,
  details, 
  imageSrc,
  benefits,
  heroBackgroundSrc // Destructure new prop
}: ServicePageProps) {
  
  // Logic: If there is a background image, use white text. Otherwise, use dark text.
  const hasHeroBg = !!heroBackgroundSrc;
  const textColor = hasHeroBg ? "text-white" : "text-slate-900";
  const subTextColor = hasHeroBg ? "text-blue-100" : "text-blue-600";

  return (
    <main className="bg-white">
      {/* 1. Header Hero with Background Logic */}
      <section className={`relative py-20 md:py-32 border-b border-blue-100 overflow-hidden ${hasHeroBg ? '' : 'bg-blue-50'}`}>
        
        {/* Background Image & Overlay (Only renders if heroBackgroundSrc is present) */}
        {hasHeroBg && (
          <div className="absolute inset-0 z-0">
            <img 
              src={heroBackgroundSrc} 
              alt="Background" 
              className="w-full h-full object-cover"
            />
            {/* Dark Blue Overlay to make text readable */}
            <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply"></div>
          </div>
        )}

        <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 drop-shadow-sm ${textColor}`}>
            {title}
          </h1>
          <p className={`text-xl font-medium max-w-2xl mx-auto ${subTextColor}`}>
            {subtitle}
          </p>
        </div>
      </section>

      {/* 2. Details Section (Treatments Grid) */}
      {details && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
               <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Nos Solutions</span>
               <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Traitements Spécialisés</h2>
            </div>
            {details}
          </div>
        </section>
      )}

      {/* 3. Intro Section (Description + Benefits + Image) */}
      <section className="bg-slate-50 py-20 border-t border-slate-200">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Intro + Benefits + CTA */}
          <div className="space-y-8 order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-slate-900">Pourquoi choisir ce service ?</h3>
            
            <div className="text-lg text-slate-600 leading-relaxed">
              {description}
            </div>

            {/* Benefits */}
            {benefits && (
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="text-slate-900 font-bold mb-4 text-base">Vos Avantages</h4>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2 text-slate-700 text-sm font-medium">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="pt-4">
              <a 
                href="/#contact"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-600/20"
              >
                <Calendar size={20} />
                Prendre Rendez-vous
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div className="order-1 lg:order-2 relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-square bg-white h-full max-h-[500px]">
            <img 
              src={imageSrc} 
              alt={title} 
              className="object-cover w-full h-full hover:scale-105 transition duration-700"
            />
          </div>
        </div>
      </section>
    </main>
  );
}