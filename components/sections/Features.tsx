import React from 'react';
import { FeatureProps } from '../../types/types';
import { Brain, Calendar, Mic, Lightbulb } from 'lucide-react';

const FeatureItem: React.FC<FeatureProps> = ({ title, description, icon: Icon }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-3xl bg-white border border-neutral-100 shadow-card hover:shadow-soft transition-all duration-300">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#BEE5D3]/30 text-[#4A7488] mb-6 border border-[#BEE5D3] shadow-sm">
         {Icon && <Icon size={28} />}
      </div>
      <h3 className="text-xl font-bold text-[#4A7488] mb-4 tracking-tight leading-tight">{title}</h3>
      <p className="text-neutral-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-neutral-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4 tracking-tight">Comment Manae te libère l'esprit</h2>
            <p className="text-lg text-neutral-600">Manae s'adapte à ta vie, pas l'inverse.</p>
        </div>

        {/* Main Features Grid - Horizontal on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureItem
             title="Dépose ce qui t'encombre"
             description="Note tout ce qui te passe par la tête — en vrac, sans réfléchir. Manae accueille tout."
             icon={Mic}
          />

          <FeatureItem
             title="Manae trie pour toi"
             description="Chaque pensée trouve sa place : tâche, idée, course, ou simple note. Plus de bruit mental."
             icon={Brain}
          />

          <FeatureItem
             title="Agis au bon moment"
             description="Manae te suggère quand faire quoi, selon ton agenda et ton énergie. Sans pression."
             icon={Calendar}
          />
        </div>

        {/* Bonus Section - Full Width below */}
        <div className="mt-16 pt-16 border-t border-neutral-200">
            <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-neutral-100 shadow-sm flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
                <div className="shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-[#A03884]/10 text-[#A03884] flex items-center justify-center border border-[#A03884]/20 shadow-sm">
                        <Lightbulb size={40} />
                    </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-[#A03884]/10 text-[#A03884] border border-[#A03884]/20">
                        <span className="font-bold uppercase tracking-wider text-[10px]">Fonctionnalité Bonus</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#A03884] mb-3 tracking-tight">Une idée floue ? Manae t'aide à y voir clair.</h3>
                    <p className="text-neutral-600 leading-relaxed">Tu as une idée mais tu ne sais pas par où commencer ? Dépose-la. Manae la découpe en étapes simples et concrètes — à ton rythme.</p>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};
