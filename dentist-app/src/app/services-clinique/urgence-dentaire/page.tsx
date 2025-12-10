import { Metadata } from 'next';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import { ArrowRight, AlertTriangle, Phone } from 'lucide-react';
import { SITE_CONFIG } from '@/data/content';

export const metadata: Metadata = {
  title: 'Urgence Dentaire - Architecte du Sourire',
  description: 'Soins dentaires d\'urgence immédiats à Montréal-Nord. Maux de dents, dents cassées ou abcès.',
};

export default function EmergencyDentistryPage() {
  // Solutions provided by the clinic
  const treatments = [
    {
      title: "Soulagement immédiat",
      text: "Notre priorité absolue est de soulager votre douleur. Nous proposons des solutions rapides de gestion de la douleur dès votre arrivée."
    },
    {
      title: "Réparation de dents cassées",
      text: "Options rapides (collage, couronnes) pour restaurer la fonction et l'apparence des dents ébréchées ou fracturées par un accident."
    },
    {
      title: "Thérapie canalaire d'urgence",
      text: "Élimination de l'infection et du tissu nerveux pour sauver une dent causant une douleur sévère ou un abcès."
    },
    {
      title: "Réimplantation",
      text: "Si une dent est arrachée, le temps presse. Nous nettoyons et réimplantons la dent rapidement pour maximiser les chances de survie."
    },
    {
      title: "Remplacement d'obturations",
      text: "Recimentation ou remplacement immédiat de plombages ou couronnes tombés pour protéger la dent exposée."
    },
    {
      title: "Soins des tissus mous",
      text: "Traitement précis et sutures pour les coupures, déchirures ou perforations des gencives, des lèvres ou de la langue."
    }
  ];

  return (
    <ServicePageTemplate
      title="Urgence Dentaire"
      subtitle="Nous nous engageons à fournir des soins rapides et efficaces lorsque vous en avez le plus besoin."
      heroBackgroundSrc="/backgrounds/urgence.webp"
      imageSrc="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2168&auto=format&fit=crop"
      
      description={
        <div className="space-y-6">
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
            <div className="flex items-center gap-2 text-red-700 font-bold mb-1">
              <AlertTriangle size={20} />
              <span>Besoin d'aide immédiate ?</span>
            </div>
            <p className="text-sm text-red-600 mb-3">
              Si vous ressentez une douleur intense ou avez subi un traumatisme, n'attendez pas.
            </p>
            <a href={`tel:${SITE_CONFIG.phone}`} className="inline-flex items-center gap-2 text-sm font-bold bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
              <Phone size={16} />
              Appeler maintenant : {SITE_CONFIG.phone}
            </a>
          </div>

          <p className="font-medium text-slate-700">
            Une urgence dentaire est toute situation impliquant une douleur intense, un traumatisme ou des dommages nécessitant des soins immédiats.
          </p>

          <div>
            <h4 className="font-bold text-slate-900 mb-3">Situations courantes que nous traitons :</h4>
            <ul className="grid gap-3">
              {[
                "Maux de dents sévères ou persistants",
                "Dents ébréchées, fissurées ou cassées",
                "Dents arrachées (avulsées)",
                "Obturations et couronnes perdues",
                "Abcès (infection avec enflure/fièvre)",
                "Blessures aux lèvres, langue ou gencives"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      }

      details={
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-red-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <h3 className="font-bold text-lg text-slate-900 mb-3 flex items-center justify-between">
                {item.title}
                <ArrowRight size={18} className="text-red-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      }
      
      benefits={[
        "Rendez-vous le jour même (selon dispo)",
        "Gestion immédiate de la douleur",
        "Équipe compatissante et calme",
        "Prévention des complications futures"
      ]}
    />
  );
}