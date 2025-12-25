import React from 'react';
import { FeatureProps } from '../../types/types';
import { Brain, Calendar, Mic, Lightbulb } from 'lucide-react';

const FeatureItem: React.FC<FeatureProps> = ({ title, description, icon: Icon }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-3xl bg-white border border-neutral-100 shadow-card hover:shadow-soft transition-all duration-300">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-50 text-primary-500 mb-6 border border-primary-100 shadow-sm">
         {Icon && <Icon size={28} />}
      </div>
      <h3 className="text-xl font-bold text-neutral-900 mb-4 tracking-tight leading-tight">{title}</h3>
      <p className="text-neutral-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4 tracking-tight">Comment Manae te libère l’esprit</h2>
            <p className="text-lg text-neutral-600">Manae s'adapte à ta vie, pas l'inverse.</p>
        </div>

        {/* Main Features Grid - Horizontal on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureItem 
             title="Capture intelligente"
             description="Ne te contente pas de noter une tâche. Indique ton état d’esprit. Manae comprend que tu ne peux pas tout gérer quand tu es épuisée et te suggère ce qui est réaliste pour toi."
             icon={Mic}
          />

          <FeatureItem 
             title="Suggestions IA personnalusées"
             description="Fini la to-do list sans fin. Manae analyse tes disponibilités et te propose les bonnes actions selon ton planning et ton énergie."
             icon={Brain}
          />

          <FeatureItem 
             title="Agenda Connecté"
             description="Manae voit tes réunions et les impératifs familiaux, puis glisse les tâches personnelles dans les vrais trous de ton emploi du temps."
             icon={Calendar}
          />
        </div>
        
        {/* Bonus Section - Full Width below */}
        <div className="mt-16 pt-16 border-t border-neutral-200">
            <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-neutral-100 shadow-sm flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
                <div className="shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-accent-50 text-accent-500 flex items-center justify-center border border-accent-100 shadow-sm">
                        <Lightbulb size={40} />
                    </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-accent-50 text-accent-600 border border-accent-100">
                        <span className="font-bold uppercase tracking-wider text-[10px]">Fonctionnalité Bonus</span>
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-3 tracking-tight">Transforme tes idées en actions</h3>
                    <p className="text-neutral-600 leading-relaxed">Envie de refaire la déco ou de planifier un voyage à l'autre bout du monde ? Note tes idées en vrac. Manae les analyse, évalue la faisabilité et te propose un premier plan d'action concret.</p>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};