import React from 'react';
import { BrainCircuit, CalendarClock, Frown } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  const painPoints = [
    {
      icon: BrainCircuit,
      color: "text-purple-500",
      bg: "bg-purple-100",
      title: "Cerveau en surchauffe",
      desc: "Trop de choses en tête, aucune idée par où commencer. La liste s'allonge mais rien n'avance."
    },
    {
      icon: CalendarClock,
      color: "text-orange-500",
      bg: "bg-orange-100",
      title: "Timing impossible",
      desc: "Un calendrier rempli mais jamais le bon moment pour les tâches perso. On finit par tout faire le soir."
    },
    {
      icon: Frown,
      color: "text-teal-500",
      bg: "bg-teal-100",
      title: "Stress permanent",
      desc: "Cette petite voix qui te rappelle à 23h que tu as oublié d'inscrire le petit au judo."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Tu te reconnais ?</h2>
           <p className="text-lg text-neutral-600">On a tous connu ça. Manae est là pour casser ce cycle.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div key={index} className="p-6 rounded-2xl bg-neutral-50 hover:bg-white border border-transparent hover:border-neutral-100 hover:shadow-card transition-all duration-300">
               <div className={`w-14 h-14 ${point.bg} rounded-xl flex items-center justify-center mb-6`}>
                  <point.icon className={`w-7 h-7 ${point.color}`} />
               </div>
               <h3 className="text-xl font-bold text-neutral-900 mb-3">{point.title}</h3>
               <p className="text-neutral-600 leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>

        {/* Transition to Solution */}
        <div className="mt-20 bg-brand-gradient rounded-3xl p-8 md:p-12 text-white text-center shadow-lg relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
           <div className="relative z-10 max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">La méthode Manae</h3>
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-left md:text-center">
                 <div className="flex-1">
                    <span className="block text-4xl font-bold opacity-30 mb-2">01</span>
                    <p className="font-medium">Tu vides ton sac (tâches, idées, émotions)</p>
                 </div>
                 <div className="hidden md:block w-px h-12 bg-white/20"></div>
                 <div className="flex-1">
                    <span className="block text-4xl font-bold opacity-30 mb-2">02</span>
                    <p className="font-medium">L'IA croise tout avec ton calendrier</p>
                 </div>
                 <div className="hidden md:block w-px h-12 bg-white/20"></div>
                 <div className="flex-1">
                    <span className="block text-4xl font-bold opacity-30 mb-2">03</span>
                    <p className="font-medium">On te propose le moment parfait</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};