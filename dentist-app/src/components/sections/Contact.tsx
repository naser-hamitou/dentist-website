'use client';

import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { SITE_CONFIG } from '@/data/content';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Info Side */}
          <Reveal direction="right" className="h-full">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Contactez-nous</h2>
            <p className="text-slate-600 mb-12 text-lg">
              Une question ? Une urgence ? Remplissez le formulaire ou appelez-nous directement.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center shrink-0 text-blue-600">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Téléphone</h4>
                  <p className="text-slate-600">{SITE_CONFIG.phone}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center shrink-0 text-blue-600">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Adresse</h4>
                  <p className="text-slate-600">{SITE_CONFIG.address}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center shrink-0 text-blue-600">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Heures d'ouverture</h4>
                  <p className="text-slate-600">Lun - Mer : 10h00 - 20h00</p>
                  <p className="text-slate-600">Mar : 09h00 - 19h00</p>
                  <p className="text-slate-600">Jeu : 09h00 - 18h00</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form Side */}
          <Reveal direction="left" delay={0.05} className="bg-white p-8 md:p-10 rounded-3xl shadow-lg shadow-slate-200/50">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Nom complet</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="Jean Dupont" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Téléphone</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="(514) 000-0000" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="jean@exemple.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="Raison de la visite..."></textarea>
              </div>

              <button className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition">
                Envoyer le message
              </button>
            </form>
          </Reveal>

        </div>
      </div>
    </section>
  );
}