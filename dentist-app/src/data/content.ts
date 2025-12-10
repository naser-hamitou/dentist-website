import { Stethoscope, Smile, Clock, ShieldCheck, Phone, MapPin, Calendar } from 'lucide-react';

export const SITE_CONFIG = {
  name: "Architecte du Sourire",
  phone: "(514) 618-5555",
  email: "info@architectedusourire.com",
  address: "123 Boul. Henri-Bourassa, Montréal-Nord, QC",
  bookingLink: "/contact", // Could be an external calendar link
};

export const NAVIGATION = [
    { name: 'Accueil', href: '/' },
    { 
      name: 'Services', 
      href: '/#services',
      submenu: [
        { name: 'Dentisterie Cosmétique', href: '/services/dentisterie-cosmetique' },
        { name: 'Dentisterie Familiale', href: '/services/dentisterie-familiale' },
        { name: 'Orthodontie', href: '/services/orthodontie' },
        { name: 'Urgence Dentaire', href: '/services/urgence-dentaire' },
        { name: 'Implants Dentaires', href: '/services/implants-dentaires' },
        { name: 'Soins Préventifs', href: '/services/soins-preventifs' },
      ]
    },
    { name: 'Notre Clinique', href: '/notre-clinique' },
    { name: 'Contact', href: '/#contact' },
  ];

export const SERVICES = [
  {
    title: "Dentisterie Cosmétique",
    description: "Retrouvez l'éclat de votre sourire avec nos traitements de blanchiment et facettes.",
    icon: Smile,
  },
  {
    title: "Dentisterie Familiale",
    description: "Des soins complets et doux pour les enfants, les adultes et les aînés.",
    icon: ShieldCheck,
  },
  {
    title: "Urgence Dentaire",
    description: "Douleur intense ? Nous réservons des plages horaires quotidiennes pour les urgences.",
    icon: Clock,
  },
  {
    title: "Implants Dentaires",
    description: "Solutions durables et esthétiques pour remplacer les dents manquantes.",
    icon: Stethoscope,
  },
];