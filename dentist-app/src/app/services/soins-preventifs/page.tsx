import { Metadata } from 'next';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Soins Préventifs - Architecte du Sourire',
  description: 'Examens, nettoyages et hygiène dentaire à Montréal-Nord. Prévenez les problèmes avant qu\'ils ne surviennent.',
};

export default function PreventiveCarePage() {
  const treatments = [
    {
      title: "Examens et nettoyages",
      text: "La base de la prévention. Nos hygiénistes éliminent le tartre et nos dentistes détectent les signes précoces de problèmes."
    },
    {
      title: "Radiographies numériques",
      text: "Technologie à faible radiation pour identifier les caries cachées, la perte osseuse et les dents incluses."
    },
    {
      title: "Scellants dentaires",
      text: "Un revêtement protecteur appliqué sur les molaires pour empêcher les bactéries de se loger dans les rainures."
    },
    {
      title: "Traitements au fluor",
      text: "Renforce l’émail des dents et aide à prévenir les caries chez les enfants comme chez les adultes."
    },
    {
      title: "Dépistage du cancer",
      text: "Un examen approfondi des tissus buccaux pour détecter tout signe anormal. Une procédure rapide qui peut sauver des vies."
    },
    {
      title: "Soins parodontaux",
      text: "Évaluations des gencives et nettoyages en profondeur (surfaçage) pour prévenir et gérer les maladies gingivales."
    },
    {
      title: "Plaque Occlusale",
      text: "Appareils sur mesure pour protéger vos dents contre l'usure du grincement (bruxisme) ou les blessures sportives."
    },
    {
      title: "Éducation à l'hygiène",
      text: "Conseils personnalisés sur le brossage, la soie dentaire et l'alimentation pour vous aider à prendre le contrôle à la maison."
    }
  ];

  return (
    <ServicePageTemplate
      title="Soins Préventifs"
      subtitle="La clé pour maintenir un sourire sain toute la vie et éviter des traitements coûteux."
      heroBackgroundSrc="/backgrounds/soins-preventifs.webp"
      imageSrc="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop"
      
      description={
        <div className="space-y-4">
          <p className="font-medium text-slate-700">
            Nos services complets sont conçus pour maintenir vos dents et vos gencives dans un état optimal, prévenant ainsi les problèmes dentaires avant qu’ils ne surviennent.
          </p>
          <p>
            Des soins préventifs réguliers préservent non seulement votre santé bucco-dentaire, mais vous permettent également d’économiser du temps et de l’argent à long terme en évitant des traitements plus complexes et invasifs.
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
        "Économies à long terme",
        "Détection précoce des maladies graves",
        "Haleine plus fraîche",
        "Préservation des dents naturelles",
        "Douleur évitée grâce à la prévention"
      ]}
    />
  );
}