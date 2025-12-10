import { Metadata } from 'next';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Orthodontie - Architecte du Sourire',
  description: 'Solutions orthodontiques pour enfants et adultes à Montréal-Nord : Invisalign, broches et plus.',
};

export default function OrthodonticsPage() {
  const treatments = [
    {
      title: "Appareils traditionnels",
      text: "La méthode éprouvée avec des brackets en acier inoxydable de haute qualité pour corriger un large éventail de problèmes."
    },
    {
      title: "Appareils en céramique",
      text: "Fonctionnent comme les appareils traditionnels mais avec des supports transparents ou de la couleur des dents pour plus de discrétion."
    },
    {
      title: "Aligneurs Invisalign®",
      text: "Un moyen presque invisible de redresser vos dents à l’aide d’une série d’aligneurs amovibles sur mesure."
    },
    {
      title: "Appareils linguaux",
      text: "Placés sur la surface intérieure des dents, ils sont invisibles de l’extérieur tout en offrant une grande efficacité."
    },
    {
      title: "Appareils autoligaturants",
      text: "Utilisent un clip spécialisé réduisant la friction, ce qui rend le traitement souvent plus confortable et plus rapide."
    },
    {
      title: "Appareils de contention",
      text: "Essentiels après le traitement pour maintenir votre nouveau sourire. Nous offrons des solutions sur mesure."
    },
    {
      title: "Traitement précoce",
      text: "Évaluations dès l'âge de 7 ans pour déterminer si une intervention précoce peut bénéficier au développement futur."
    },
    {
      title: "Orthodontie pour adultes",
      text: "Des options esthétiques et flexibles (comme Invisalign®) adaptées au style de vie des adultes."
    }
  ];

  return (
    <ServicePageTemplate
      title="Orthodontie"
      subtitle="Corrigez l'alignement de vos dents et de votre mâchoire pour améliorer à la fois la fonction et l'esthétique."
      heroBackgroundSrc="/backgrounds/dentisterie-ortho.webp"
      imageSrc="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop"
      
      description={
        <div className="space-y-4">
          <p className="font-medium text-slate-700">
            Que vous soyez un enfant, un adolescent ou un adulte, nos services d’orthodontie sont conçus pour créer des sourires harmonieux et sains.
          </p>
          <p>
            Notre équipe expérimentée offre des soins personnalisés dans un environnement confortable et accueillant. Nous utilisons les technologies les plus récentes pour vous offrir des traitements plus rapides, plus discrets et plus confortables que jamais.
          </p>
        </div>
      }

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
        "Options invisibles disponibles",
        "Consultation pour tous les âges",
        "Meilleure santé bucco-dentaire",
        "Confiance en soi accrue"
      ]}
    />
  );
}