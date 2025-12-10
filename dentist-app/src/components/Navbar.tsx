'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone, Smile, ChevronDown } from 'lucide-react'; // Ajout de ChevronDown
import { SITE_CONFIG, NAVIGATION } from '@/data/content';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // État pour gérer l'ouverture du sous-menu sur mobile (optionnel, ici on l'affiche par défaut ou au clic)
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);

  const toggleMobileSubmenu = (name: string) => {
    setMobileSubmenuOpen(mobileSubmenuOpen === name ? null : name);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Smile className="text-white w-5 h-5" />
          </div>
          <span>{SITE_CONFIG.name}</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAVIGATION.map((item) => (
            <div key={item.name} className="relative group">
              {item.submenu ? (
                // Item avec Dropdown
                <div className="relative">
                  <button className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-blue-600 transition py-2">
                    {item.name}
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                  </button>
                  
                  {/* Le Dropdown */}
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 w-56">
                    <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600 border-l-2 border-transparent hover:border-blue-600 transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                // Item standard sans Dropdown
                <Link 
                  href={item.href}
                  className="text-sm font-medium text-slate-600 hover:text-blue-600 transition"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          
          <a 
            href={`tel:${SITE_CONFIG.phone}`} 
            className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full text-slate-900 font-semibold text-sm hover:bg-slate-200 transition"
          >
            <Phone size={16} />
            {SITE_CONFIG.phone}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-slate-600" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 max-h-[calc(100vh-5rem)] overflow-y-auto shadow-xl">
          <div className="p-6 flex flex-col gap-2">
            {NAVIGATION.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <>
                    <button 
                      onClick={() => toggleMobileSubmenu(item.name)}
                      className="flex items-center justify-between w-full text-lg font-medium text-slate-800 py-2"
                    >
                      {item.name}
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform duration-200 ${mobileSubmenuOpen === item.name ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {/* Sous-menu Mobile */}
                    {mobileSubmenuOpen === item.name && (
                      <div className="flex flex-col gap-2 pl-4 border-l-2 border-slate-100 ml-2 mt-2 mb-4">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="text-slate-600 py-2 hover:text-blue-600"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link 
                    href={item.href}
                    className="block text-lg font-medium text-slate-800 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}