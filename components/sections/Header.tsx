'use client'

import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';

interface HeaderProps {
  onSignupClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onSignupClick }) => {
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

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Button className='brand-gradient' variant="primary" onClick={onSignupClick}>
            Rejoindre la bêta
          </Button>
        </div>
      </div>
    </header>
  );
};