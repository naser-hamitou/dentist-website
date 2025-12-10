import { Metadata } from 'next';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dentisterie Cosmétique - Architecte du Sourire',
  description: 'Blanchiment, facettes et relooking de sourire à Montréal-Nord.',
};

export default function CosmeticDentistryPage() {
  const treatments = [
    {
      title: "Blanchiment des dents",
      text: "Éclaircissez vos dents de plusieurs nuances et éliminez les taches causées par l'alimentation ou le vieillissement."
    },
    {
      title: "Facettes en porcelaine",
      text: "Des coquilles fines et durables collées à l'avant des dents pour corriger les éclats, les espaces et la décoloration."
    },
    {
      title: "Collage dentaire",
      text: "Une résine composite répare rapidement les fissures et éclats mineurs pour un résultat immédiat et indolore."
    },
    {
      title: "Aligneurs Invisalign®",
      text: "Redressez vos dents discrètement sans broches métalliques grâce à des aligneurs transparents et amovibles."
    },
    {
      title: "Relooking de sourire",
      text: "Une combinaison personnalisée de traitements pour une transformation complète et harmonieuse de votre sourire."
    },
    {
      title: "Couronnes dentaires",
      text: "Restaurez la force et l'apparence des dents endommagées avec des capuchons sur mesure à l'aspect naturel."
    },
    {
      title: "Contour des gencives",
      text: "Remodelez votre ligne gingivale pour corriger un sourire 'gummy smile' et révéler la beauté de vos dents."
    }
  ];

  return (
    <ServicePageTemplate
      title="Dentisterie Cosmétique"
      subtitle="Améliorez l’apparence de vos dents et retrouvez la confiance d'un sourire éclatant."
      heroBackgroundSrc="/backgrounds/dentisterie-cosmetique.webp"
      imageSrc="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop"
      
      // 1. Just the Intro Paragraph here
      description={
        <p className="font-medium text-slate-700">
          Que vous ayez besoin d’un ajustement mineur ou d’un relooking complet, notre équipe d’experts utilise les dernières technologies pour sublimer votre sourire. Nous analysons la forme de votre visage et la teinte de vos dents pour un résultat naturel.
        </p>
      }

      // 2. The Grid goes here now
      details={
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <h3 className="font-bold text-lg text-slate-900 mb-3 flex items-center justify-between">
                {item.title}
                <ArrowRight size={18} className="text-blue-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      }
      
      benefits={[
        "Résultats durables et naturels",
        "Techniques peu invasives",
        "Plan de traitement personnalisé",
        "Technologie d'imagerie avancée"
      ]}
    />
  );
}