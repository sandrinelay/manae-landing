import React from 'react';
import { Check, X, Minus } from 'lucide-react';

export const Comparison: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Pourquoi Manae change tout ?</h2>
           <p className="text-lg text-neutral-600">
             Les outils classiques vous listent des tâches. <span className="text-primary-600 font-bold">Manae vous libère l'esprit.</span>
           </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto pb-4 hide-scrollbar">
          <div className="min-w-[800px] lg:min-w-0">
             <div className="grid grid-cols-5 gap-4 mb-4 items-end">
                {/* Header Row */}
                <div className="col-span-1"></div>
                
                {/* Manae Column */}
                <div className="col-span-1 text-center relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary-50 rounded-t-2xl -z-10 translate-y-4"></div>
                    <div className="text-2xl font-bold text-neutral-900 mb-2">manae</div>
                    <div className="inline-block px-3 py-1 bg-primary-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-full mb-4 shadow-md">
                        L'Assistant IA
                    </div>
                </div>

                {/* Competitors */}
                <div className="col-span-1 text-center pb-4">
                    <div className="font-bold text-neutral-500 text-lg">Todoist</div>
                    <div className="text-xs text-neutral-400">Pour les listes</div>
                </div>
                <div className="col-span-1 text-center pb-4">
                    <div className="font-bold text-neutral-500 text-lg">Google Keep</div>
                    <div className="text-xs text-neutral-400">Pour les notes</div>
                </div>
                <div className="col-span-1 text-center pb-4">
                    <div className="font-bold text-neutral-500 text-lg">Notion</div>
                    <div className="text-xs text-neutral-400">Pour les projets</div>
                </div>
             </div>

             {/* Rows */}
             <div className="space-y-2">
                {/* Row 1 */}
                <div className="grid grid-cols-5 gap-4 items-center p-4 rounded-xl bg-neutral-50/50 hover:bg-neutral-50 transition-colors">
                    <div className="font-bold text-neutral-700 text-sm md:text-base">Prise en compte de l'énergie</div>
                    <div className="flex justify-center"><div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600"><Check size={18} strokeWidth={3} /></div></div>
                    <div className="flex justify-center"><div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-300"><X size={18} /></div></div>
                    <div className="flex justify-center"><div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-300"><X size={18} /></div></div>
                    <div className="flex justify-center"><div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-300"><X size={18} /></div></div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-5 gap-4 items-center p-4 rounded-xl bg-white border border-primary-100 shadow-sm relative z-10 scale-[1.01]">
                    <div className="font-bold text-neutral-900 text-sm md:text-base">Planification auto. dans l'agenda</div>
                    <div className="flex justify-center relative">
                        <div className="w-8 h-8 rounded-full bg-brand-gradient flex items-center justify-center text-white shadow-lg shadow-primary-500/30">
                            <Check size={18} strokeWidth={3} />
                        </div>
                    </div>
                    <div className="flex justify-center"><span className="text-xs font-medium text-neutral-400">Plugin requis</span></div>
                    <div className="flex justify-center"><div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-300"><X size={18} /></div></div>
                    <div className="flex justify-center"><span className="text-xs font-medium text-neutral-400">Complexe</span></div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-5 gap-4 items-center p-4 rounded-xl bg-neutral-50/50 hover:bg-neutral-50 transition-colors">
                    <div className="font-bold text-neutral-700 text-sm md:text-base">Gestion de la charge mentale</div>
                    <div className="flex justify-center"><span className="text-xs font-bold text-primary-600 bg-primary-50 px-2 py-1 rounded-md">Décharge totale</span></div>
                    <div className="flex justify-center"><span className="text-xs text-neutral-400">Manuelle</span></div>
                    <div className="flex justify-center"><span className="text-xs text-neutral-400">Manuelle</span></div>
                    <div className="flex justify-center"><span className="text-xs text-neutral-400">Manuelle</span></div>
                </div>

                {/* Row 4 */}
                <div className="grid grid-cols-5 gap-4 items-center p-4 rounded-xl bg-neutral-50/50 hover:bg-neutral-50 transition-colors">
                    <div className="font-bold text-neutral-700 text-sm md:text-base">Temps de configuration</div>
                    <div className="flex justify-center"><span className="text-sm font-bold text-neutral-900">Immédiat</span></div>
                    <div className="flex justify-center"><span className="text-sm text-neutral-400">Faible</span></div>
                    <div className="flex justify-center"><span className="text-sm text-neutral-400">Nul</span></div>
                    <div className="flex justify-center"><span className="text-sm text-neutral-400">Élevé</span></div>
                </div>
             </div>
          </div>
        </div>
        
        {/* Mobile scroll hint */}
        <div className="lg:hidden text-center mt-4">
             <span className="text-xs text-neutral-400 animate-pulse">← Glissez pour voir le comparatif →</span>
        </div>

      </div>
    </section>
  );
};