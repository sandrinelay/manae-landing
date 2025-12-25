'use client'
import React from 'react';
import { Button } from '../ui/Button';
import { AppMainCaptureMockup } from '../mockups/AppMockups';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onSignupClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSignupClick }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-primary-100 rounded-full blur-3xl opacity-50 mix-blend-multiply filter pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-secondary-100 rounded-full blur-3xl opacity-50 mix-blend-multiply filter pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-100 text-primary-600 text-xs font-bold uppercase tracking-wide mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              Version bêta • Gratuit 6 mois
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 leading-[1.1] mb-6 tracking-tight">
              Vide ta charge mentale en <span className="text-transparent bg-linear-to-r from-[#b1609b] to-[#00A6B3]  bg-clip-text ">2 minutes</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-neutral-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Manae est l’application intelligente qui analyse ton agenda et ton état d’esprit pour te proposer ce <strong>qu’il faut faire</strong>, au <strong>bon moment,</strong> sans stress.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" icon={<ArrowRight size={20} />} onClick={onSignupClick} className='brand-gradient'>
                Rejoindre la bêta gratuite
              </Button>
              <Button size="lg" variant="ghost" onClick={() => document.getElementById('features')?.scrollIntoView({behavior: 'smooth'})}>
                En savoir plus
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative mx-auto lg:mr-0">
             <div className="relative z-10">
                <AppMainCaptureMockup />
             </div>
             {/* Decorative Elements around phone */}
             <div className="absolute top-1/2 -right-12 sm:-right-24 transform -translate-y-1/2 bg-white p-4 rounded-xl shadow-lg animate-bounce duration-[3000ms] hidden sm:block z-20">
                <div className="flex items-center gap-3">
                   <div className="bg-green-100 p-2 rounded-full">
                      <Sparkles className="w-5 h-5 text-green-600" />
                   </div>
                   <div>
                      <p className="text-xs font-bold text-gray-400">Temps libre trouvé</p>
                      <p className="text-sm font-bold text-gray-800">+45 min aujourd'hui</p>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};