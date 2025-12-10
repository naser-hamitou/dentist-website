import { Wallet, ArrowRight } from 'lucide-react';

export default function CoverageBanner() {
  return (
    <section className="bg-blue-600 py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          {/* Icon & Text Wrapper */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shrink-0 shadow-inner">
              <Wallet className="text-white w-7 h-7" />
            </div>
            
            <div className="text-white max-w-2xl">
              <h3 className="text-xl font-bold mb-1">
                Inquiet des coûts dentaires ?
              </h3>
              <p className="text-blue-50 text-base leading-relaxed">
                Vous pourriez être admissible à une couverture dentaire financée par le gouvernement via le <strong>RCSD</strong>. Parlez-nous, nous pouvons vous aider à vérifier votre admissibilité.
              </p>
            </div>
          </div>

          {/* Action Button */}
          <a 
            href="https://www.canada.ca/fr/services/prestations/dentaire/regime-soins-dentaires/admissibilite.html" 
            target="_blank"
            rel="noopener noreferrer"
            className="group whitespace-nowrap inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition shadow-lg shadow-blue-900/20"
          >
            Vérifier mon admissibilité
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>

        </div>
      </div>
    </section>
  );
}