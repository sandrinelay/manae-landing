'use client';

import React from 'react';
import { PricingTierProps } from '@/types/types';
import { Check } from 'lucide-react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

const PricingCard: React.FC<PricingTierProps & { onAction?: () => void }> = ({ name, price, features, isPopular, comingSoon, disabled, ctaText = "Choisir", onAction }) => {
  return (
    <div className={`relative p-8 rounded-2xl transition-all duration-300 flex flex-col h-full ${
        isPopular
        ? 'bg-white border-2 border-[#4A7488] shadow-xl scale-105 z-10'
        : 'bg-neutral-50 border border-neutral-200 opacity-90'
    }`}>
      {isPopular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#4A7488] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
          Actuellement
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-lg font-bold text-neutral-900 mb-2 flex items-center gap-2">
            {name}
            {comingSoon && <span className="bg-neutral-200 text-neutral-600 text-[10px] px-2 py-0.5 rounded-full">Bientôt</span>}
        </h3>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold text-neutral-900">{price}</span>
          <span className="text-neutral-500 text-sm">/mois</span>
        </div>
      </div>

      <ul className="space-y-4 mb-8 flex-1">
        {features.map((feat, idx) => (
          <li key={idx} className="flex items-start gap-3">
             <Check size={18} className={`shrink-0 mt-0.5 ${isPopular ? 'text-[#4A7488]' : 'text-neutral-400'}`} />
             <span className="text-sm text-neutral-700">{feat}</span>
          </li>
        ))}
      </ul>

      <button
        disabled={disabled}
        onClick={onAction}
        className={`w-full py-3 rounded-xl font-bold text-sm transition-colors ${
            isPopular
            ? 'btn-accent shadow-lg'
            : 'bg-white border border-neutral-300 text-neutral-400 cursor-not-allowed'
        }`}
      >
        {ctaText}
      </button>
    </div>
  );
};

export const Pricing: React.FC = () => {
  const { scrollToFinalCta } = useSmoothScroll();

  return (
    <section id="pricing" className="py-20 bg-neutral-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
           <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Tarifs à venir</h2>
           <p className="text-lg text-neutral-600">
             Profite de toutes les fonctionnalités <span className="text-[#4A7488] font-bold">gratuitement</span> pendant la période bêta (6 mois).
           </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
            <PricingCard
                name="Free Beta"
                price="0€"
                features={[
                    "Capture illimitée de tâches",
                    "Suggestions IA (10/mois)",
                    "Connexion Google Calendar",
                    "Support email",
                ]}
                isPopular={true}
                ctaText="Commencer Gratuitement"
                onAction={scrollToFinalCta}
            />

            <PricingCard
                name="Pro"
                price="~9€"
                features={[
                    "Tout du Free",
                    "Suggestions IA illimitées",
                    "Analyse d'idées illimitée",
                    "Support prioritaire",
                    "Statistiques avancées"
                ]}
                comingSoon={true}
                disabled={true}
                ctaText="Bientôt disponible"
            />

            <PricingCard
                name="Family"
                price="~15€"
                features={[
                    "Tout du Pro",
                    "Jusqu'à 2 profils parents",
                    "Calendrier partagé unifié",
                    "Vue famille",
                    "Mode 'Délégation' facile"
                ]}
                comingSoon={true}
                disabled={true}
                ctaText="Bientôt disponible"
            />
        </div>

        <p className="text-center text-sm text-[#4A7488] font-medium mt-12 bg-[#BEE5D3]/30 inline-block px-4 py-2 rounded-full mx-auto table">
           Les early adopters de la bêta bénéficieront d'une réduction à vie lors du lancement officiel.
        </p>
      </div>
    </section>
  );
};
