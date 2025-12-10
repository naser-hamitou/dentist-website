import { SERVICES } from '@/data/content';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Soins Complets</h2>
          <p className="text-slate-600 text-lg">
            De la prévention à la restauration complexe, nous couvrons tous les aspects de votre santé bucco-dentaire.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="group p-8 rounded-2xl bg-slate-50 hover:bg-blue-600 hover:text-white transition duration-300 border border-slate-100 hover:border-blue-600 hover:shadow-xl hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/20 group-hover:text-white transition">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-white">{service.title}</h3>
                <p className="text-slate-500 group-hover:text-blue-100 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}