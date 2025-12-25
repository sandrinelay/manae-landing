
import React from 'react';
import { Moon, Zap, CircleAlert, Frown, User, CheckCircle2, CloudLightning, Mic, Inbox } from 'lucide-react';

/**
 * Ces composants simulent l'interface de l'application en utilisant CSS/Tailwind
 * pour offrir un rendu vectoriel haute fidélité fidèle à l'image fournie.
 */

// Conteneur générique pour un écran de téléphone (iPhone style)
const PhoneFrame: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`relative mx-auto border-gray-900 bg-gray-900 border-[10px] rounded-[3rem] h-[640px] w-[310px] shadow-2xl flex flex-col overflow-hidden ${className}`}>
    {/* Boutons physiques simulés */}
    <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[13px] top-[72px] rounded-l-lg"></div>
    <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[13px] top-[124px] rounded-l-lg"></div>
    <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[13px] top-[142px] rounded-r-lg"></div>
    
    <div className="rounded-[2.4rem] overflow-hidden w-full h-full bg-[#F8FAFB] flex flex-col relative">
        {/* Status Bar (Simplifiée) */}
        <div className="h-6 w-full flex justify-between items-center px-8 pt-2 text-[10px] font-bold text-gray-400 z-30">
            <span>9:41</span>
            <div className="flex space-x-1 items-center">
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            </div>
        </div>
        
        {/* Le contenu de l'application */}
        <div className="flex-1 flex flex-col min-h-0 relative z-10">
          {children}
        </div>
        
        {/* Home Indicator */}
        <div className="h-5 w-full flex justify-center items-center bg-transparent z-30">
          <div className="w-20 h-1 bg-gray-200 rounded-full"></div>
        </div>
    </div>
  </div>
);

// Recréation fidèle de l'écran de capture fourni par l'utilisateur
export const AppMainCaptureMockup = () => (
  <PhoneFrame className="transform rotate-[-1deg] hover:rotate-0 transition-transform duration-500">
    {/* Header du mockup (exactement comme sur l'image) */}
    <div className="px-6 py-4 flex justify-between items-center bg-white shrink-0">
      <span className="text-2xl font-bold text-neutral-800 font-logo tracking-tight">manae</span>
      <div className="flex items-center gap-4">
         <div className="w-2 h-2 bg-green-400 rounded-full"></div>
         <div className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400 border border-neutral-200">
            <User size={18} />
         </div>
      </div>
    </div>

    {/* Contenu principal */}
    <div className="flex-1 px-6 pt-8 bg-[#F8FAFB]">
      <h2 className="text-[24px] font-bold text-neutral-800 mb-1 leading-tight tracking-tight">Qu'avez-vous en tête ?</h2>
      <p className="text-[14px] text-neutral-400 mb-6 font-medium">Tâches, notes, courses, idées... Déposez tout ici.</p>

      {/* Zone de texte principale */}
      <div className="bg-white rounded-[2rem] p-6 mb-6 shadow-sm border border-neutral-100 relative h-48 flex flex-col">
        <p className="text-[15px] text-neutral-700 leading-relaxed font-medium">
          Appeler le pédiatre avant samedi pour Milo, acheter des fruits et du vin, partir au Cambodge en 2028
        </p>
        <div className="mt-auto flex justify-end">
          <span className="text-[11px] font-bold text-[#5F8695]/60 tracking-widest uppercase">IA READY</span>
        </div>
      </div>

      {/* Mood Selector */}
      <div className="mb-8">
         <p className="text-[13px] text-neutral-400 mb-4 font-medium">Comment te sens-tu ? <span className="opacity-60">(facultatif)</span></p>
         <div className="grid grid-cols-4 gap-2">
            {/* Énergique - Actif (Orange) */}
            <div className="bg-[#FF6B00] rounded-2xl py-4 flex flex-col items-center justify-center text-white shadow-lg shadow-orange-500/20">
               <Zap size={22} className="mb-2" fill="white" />
               <span className="text-[9px] font-bold uppercase tracking-tight text-center px-1 leading-none">Énergique</span>
            </div>
            
            {/* Calme */}
            <div className="bg-white rounded-2xl py-4 flex flex-col items-center justify-center border border-neutral-100 shadow-sm">
               <Moon size={22} className="mb-2 text-neutral-400" />
               <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-tight">Calme</span>
            </div>
            
            {/* Débordé(e) */}
            <div className="bg-white rounded-2xl py-4 flex flex-col items-center justify-center border border-neutral-100 shadow-sm">
               <CircleAlert size={22} className="mb-2 text-neutral-400" />
               <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-tight">Débordé(e)</span>
            </div>
            
            {/* Fatigué(e) */}
            <div className="bg-white rounded-2xl py-4 flex flex-col items-center justify-center border border-neutral-100 shadow-sm">
               <Frown size={22} className="mb-2 text-neutral-400" />
               <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-tight text-center leading-none">Fatigué(e)</span>
            </div>
         </div>
      </div>

      {/* Action Button - Noir comme sur l'image */}
      <button className="w-full bg-[#2D3133] py-5 rounded-[2rem] text-white font-bold text-[16px] shadow-xl hover:bg-neutral-900 transition-colors active:scale-95 mb-4">
         Capturer mes pensées
      </button>

      {/* Footer text */}
      <p className="text-center text-[12px] text-neutral-300 font-medium">Manae organise tout pour toi</p>
    </div>
  </PhoneFrame>
);

export const HeroMockup = () => <AppMainCaptureMockup />;

export const CaptureMockup = () => (
    <div className="bg-white rounded-2xl shadow-card border border-neutral-100 p-6 max-w-sm w-full relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-brand-gradient"></div>
        <h3 className="text-lg font-bold text-neutral-900 mb-4">Qu'avez-vous en tête ?</h3>
        <div className="bg-neutral-50 rounded-xl p-4 mb-4 border border-neutral-200">
            <p className="text-neutral-400 text-sm">Ex: Prendre RDV pédiatre...</p>
        </div>
        <button className="w-full py-3 rounded-xl bg-neutral-900 text-white text-sm font-bold flex items-center justify-center gap-2">
            Capturer <Mic size={16} />
        </button>
    </div>
);

export const SuggestionMockup = () => (
    <div className="bg-white rounded-2xl shadow-soft p-5 max-w-sm w-full border border-primary-100">
        <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-brand-gradient flex items-center justify-center text-white">
                <CloudLightning size={20} />
            </div>
            <div>
                <h4 className="font-bold text-neutral-900 text-sm">Suggestion IA</h4>
                <p className="text-xs text-neutral-500">Basé sur ton énergie</p>
            </div>
        </div>
        <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-100">
            <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-neutral-800">Acheter couches taille 4</h3>
            </div>
            <div className="p-2 bg-primary-50 rounded-lg text-[11px] text-primary-700 leading-relaxed">
                "Tu as un trou de 45 min après avoir déposé Léo, et le supermarché est sur la route."
            </div>
        </div>
    </div>
);

export const CalendarMockup = () => (
    <div className="bg-white rounded-2xl shadow-card border border-neutral-100 p-0 overflow-hidden max-w-sm w-full">
         <div className="p-4 border-b border-neutral-100 flex justify-between items-center bg-neutral-50">
            <div className="flex items-center gap-2 text-secondary-600 font-bold text-sm">
                <CheckCircle2 size={16} />
                <span>Calendrier connecté</span>
            </div>
         </div>
         <div className="p-2">
             {[
                 { day: 'LUN 1', title: 'Réunion École', time: '14:00', color: 'bg-purple-100 text-purple-700' },
                 { day: 'MAR 2', title: 'Judo Léo', time: '17:15', color: 'bg-orange-100 text-orange-700' },
             ].map((evt, i) => (
                 <div key={i} className="flex gap-3 p-3 hover:bg-neutral-50 rounded-xl transition-colors">
                     <div className="text-center w-10 shrink-0">
                         <span className="block text-[10px] font-bold text-neutral-400 uppercase">{evt.day.split(' ')[0]}</span>
                         <span className="block text-lg font-bold text-neutral-800">{evt.day.split(' ')[1]}</span>
                     </div>
                     <div className={`flex-1 rounded-lg p-2 ${evt.color}`}>
                         <p className="text-xs font-bold">{evt.title}</p>
                         <p className="text-[10px] opacity-80">{evt.time}</p>
                     </div>
                 </div>
             ))}
         </div>
    </div>
);
