import { BriefcaseMedical, Smile, Aperture, ShieldCheck, HouseHeart, Laugh} from 'lucide-react';

export const SITE_CONFIG = {
  name: "Architecte du Sourire",
  phone: "(514) 618-5555",
  email: "info@architectedusourire.com",
  address: "123 Boul. Henri-Bourassa, Montréal-Nord, QC",
  bookingLink: "/contact", // TODO: Could be an external calendar link
};

export const NAVIGATION = [
    { name: 'Accueil', href: '/' },
    { 
      name: 'Services', 
      href: '/#services',
      submenu: [
        { name: 'Urgence Dentaire', href: '/services-clinique/urgence-dentaire' },
        { name: 'Dentisterie Cosmétique', href: '/services-clinique/dentisterie-cosmetique' },
        { name: 'Dentisterie Familiale', href: '/services-clinique/dentisterie-familiale' },
        { name: 'Orthodontie', href: '/services-clinique/orthodontie' },
        { name: 'Implants Dentaires', href: '/services-clinique/implants-dentaires' },
        { name: 'Soins Préventifs', href: '/services-clinique/soins-preventifs' },
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
    icon: HouseHeart  
  },
  {
    title: "Urgence Dentaire",
    description: "Douleur intense ? Nous réservons des plages horaires quotidiennes pour les urgences.",
    icon: BriefcaseMedical,
  },
  {
    title: "Implants Dentaires",
    description: "Solutions durables et esthétiques pour remplacer les dents manquantes.",
    icon: Aperture,
  },
  {
    title: "Soins Préventifs",
    description: "Prévention des problèmes de santé bucco-dentaire avec des soins réguliers.",
    icon: ShieldCheck,
  },
  {
    title: "Orthodontie",
    description: "Correction de l'alignement dentaire pour enfants et adultes.",
    icon: Laugh,
  },
];