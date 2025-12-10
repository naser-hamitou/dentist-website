import { Metadata } from 'next';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dentisterie Familiale - Architecte du Sourire',
  description: 'Soins dentaires complets pour toute la famille à Montréal-Nord, des tout-petits aux aînés.',
};

export default function FamilyDentistryPage() {
  const treatments = [
    {
      title: "Soins préventifs",
      text: "Examens de routine, nettoyages, traitements au fluor et scellants pour protéger vos dents et gencives contre les caries."
    },
    {
      title: "Dentisterie pédiatrique",
      text: "Des visites amusantes et sans stress adaptées aux enfants, incluant éducation sur le brossage et soins doux."
    },
    {
      title: "Dentisterie restauratrice",
      text: "Réparation durable des dents endommagées grâce aux obturations, couronnes et traitements de canal modernes."
    },
    {
      title: "Orthodontie",
      text: "Correction de l'alignement dentaire pour enfants et adultes avec des appareils traditionnels ou Invisalign®."
    },
    {
      title: "Soins parodontaux",
      text: "Traitement et prévention des maladies des gencives via le détartrage, le surfaçage radiculaire et l'entretien régulier."
    },
    {
      title: "Dentisterie esthétique",
      text: "Améliorez votre confiance avec nos solutions esthétiques comme le blanchiment et les facettes."
    },
    {
      title: "Soins d'urgence",
      text: "Prise en charge rapide des maux de dents et dents cassées. Contactez-nous immédiatement en cas d'urgence."
    }
  ];

  return (
    <ServicePageTemplate
      title="Dentisterie Familiale"
      subtitle="Des soins complets et attentionnés pour chaque membre de votre famille, à chaque étape de la vie."
      heroBackgroundSrc="/backgrounds/dentisterie-familiale.webp"
      imageSrc="https://images.unsplash.com/photo-1571772996211-2f02c9727629?q=80&w=2070&auto=format&fit=crop"
      
      description={
        <div className="space-y-4">
          <p className="font-medium text-slate-700">
            Nos services sont conçus pour répondre aux divers besoins des patients de tous âges, des tout-petits aux personnes âgées.
          </p>
          <p>
            En mettant l’accent sur les soins préventifs, l’éducation et les traitements doux, nous visons à garantir que chaque membre de la famille bénéficie d’un sourire sain toute sa vie. Nous créons un environnement où les enfants se sentent en sécurité et où les adultes reçoivent des soins de la plus haute qualité.
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
        "Soins adaptés aux enfants et adultes",
        "Approche douce et éducative",
        "Tout sous un même toit",
        "Technologie de détection précoce"
      ]}
    />
  );
}