'use client'

import React, { useState, useEffect } from 'react';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo - Text only with Quicksand font */}
        <div className="flex items-center">
           <span
             className="text-3xl font-bold tracking-tight text-neutral-800 hover:text-primary-600 transition-colors cursor-pointer font-logo"
             onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
           >
             manae
           </span>
        </div>

        {/* CTA - Connexion vers l'app Manae */}
        <div className="flex items-center gap-4">
          <a
            href="http://localhost:3000/login"
            className="inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 px-6 py-3 text-base bg-[#4A7488] text-white hover:bg-[#3d6073] shadow-lg"
          >
            Connexion
          </a>
        </div>
      </div>
    </header>
  );
};
