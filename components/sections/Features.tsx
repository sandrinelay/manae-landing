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
             title="Vide ton esprit en un instant"
             description="Note tout ce qui te passe par la tête — tâches, idées, pensées en vrac. Indique ton humeur du moment. Manae s'occupe du reste."
             icon={Mic}
          />

          <FeatureItem
             title="Manae fait le tri à ta place"
             description="L'IA analyse tes pensées et les classe automatiquement : ce qui est urgent, ce qui peut attendre, ce qui demande réflexion. Fini le bruit mental — ne garde que l'essentiel."
             icon={Brain}
          />

          <FeatureItem
             title="Tes actions, placées au bon moment"
             description="Manae connaît ton agenda, tes contraintes et ton niveau d'énergie. Elle glisse tes tâches dans les créneaux où tu peux vraiment les faire — sans te surcharger."
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
                    <h3 className="text-2xl font-bold text-[#A03884] mb-3 tracking-tight">Transforme tes idées floues en plan d'action</h3>
                    <p className="text-neutral-600 leading-relaxed">Tu as une idée mais tu ne sais pas par où commencer ? Note-la en vrac. Manae la structure, évalue ce qui est réaliste et te propose les premières étapes — concrètes et faisables.</p>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};
