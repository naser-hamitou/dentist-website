import { Metadata } from 'next';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Implants Dentaires - Architecte du Sourire',
  description: 'Remplacement durable des dents manquantes à Montréal-Nord. All-on-4, implants unitaires et greffe osseuse.',
};

export default function ImplantsPage() {
  const treatments = [
    {
      title: "Implants unitaires",
      text: "Remplacement d'une seule dent manquante par un implant et une couronne, sans affecter les dents saines environnantes."
    },
    {
      title: "Implants multiples",
      text: "Support pour un pont ou une prothèse partielle lorsque plusieurs dents manquent, rétablissant la stabilité du mordant."
    },
    {
      title: "Arcade complète (All-on-4®)",
      text: "Remplacement d'une arcade entière par 4 à 6 implants. Une alternative permanente et fixe aux dentiers traditionnels."
    },
    {
      title: "Prothèses sur implants",
      text: "Stabilisez vos prothèses amovibles en les 'clipsant' sur des implants pour empêcher tout glissement lors des repas."
    },
    {
      title: "Greffe osseuse & Sinus Lift",
      text: "Procédures préparatoires pour reconstituer la densité osseuse nécessaire au succès de l'implantation."
    }
  ];

  const processSteps = [
    { title: "Consultation initiale", text: "Évaluation complète, radiographies 3D et discussion de vos objectifs." },
    { title: "Plan personnalisé", text: "Création d'un plan détaillé incluant les procédures, le calendrier et les coûts." },
    { title: "Pose chirurgicale", text: "Placement précis des implants sous anesthésie locale ou sédation pour votre confort." },
    { title: "Ostéointégration", text: "Période de guérison où l'implant fusionne avec l'os (des dents temporaires sont fournies)." },
    { title: "Restauration finale", text: "Fixation de vos nouvelles couronnes ou prothèses sur mesure pour un sourire éclatant." }
  ];

  return (
    <ServicePageTemplate
      title="Implants Dentaires"
      subtitle="La solution de référence pour remplacer les dents manquantes avec l'apparence et la performance des dents naturelles."
      heroBackgroundSrc="/backgrounds/implant.webp"
      imageSrc="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2070&auto=format&fit=crop"
      
      description={
        <div className="space-y-6">
          <p className="font-medium text-slate-700">
            Notre équipe expérimentée se consacre à vous aider à obtenir un sourire beau et sain grâce à la dentisterie implantaire avancée.
          </p>
          <div>
            <h4 className="font-bold text-slate-900 mb-2">Que sont les implants ?</h4>
            <p>
              Ce sont des racines artificielles en titane biocompatible, placées chirurgicalement dans la mâchoire. Elles fusionnent avec l'os (ostéointégration) pour créer une base solide capable de soutenir couronnes, ponts ou prothèses.
            </p>
          </div>
        </div>
      }

      details={
        <div className="space-y-16">
          {/* Services Grid */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8 border-l-4 border-blue-600 pl-4">Nos Solutions Implantaires</h3>
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
          </div>

          {/* Process Timeline (New Section) */}
          <div className="bg-slate-100 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Votre parcours vers un nouveau sourire</h3>
            <div className="grid md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative flex flex-col items-center text-center">
                  {/* Step Number Circle */}
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl flex items-center justify-center mb-4 shadow-md z-10 relative">
                    {index + 1}
                  </div>
                  {/* Connecting Line (Hidden on mobile, visible on desktop) */}
                  {index !== processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-blue-200 -z-0"></div>
                  )}
                  
                  <h4 className="font-bold text-slate-900 mb-2">{step.title}</h4>
                  <p className="text-sm text-slate-600">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      }
      
      benefits={[
        "Apparence et sensation naturelles",
        "Fonctionnalité de mastication restaurée",
        "Solution durable (souvent à vie)",
        "Préservation de la densité osseuse",
        "Protection des dents adjacentes"
      ]}
    />
  );
}