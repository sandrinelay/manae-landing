import React from 'react';
import { Check } from 'lucide-react';

export const TargetAudience: React.FC = () => {
  const criteria = [
    "Tu es parent et tu gères un planning familial chargé",
    "Tu utilises déjà un calendrier digital (Google, Apple...)",
    "Tu as toujours 1000 choses en tête (charge mentale)",
    "Tu procrastines souvent parce que tu ne sais pas par où commencer",
    "Tu veux reprendre le contrôle sans passer 2h à planifier ton dimanche"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900">Manae est fait pour toi si...</h2>
        </div>
        
        <div className="bg-primary-50/50 rounded-3xl p-8 md:p-12 border border-primary-100">
            <ul className="space-y-4">
                {criteria.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                        <div className="min-w-[24px] h-6 rounded-full bg-secondary-500 flex items-center justify-center mt-0.5">
                            <Check size={14} className="text-white" strokeWidth={3} />
                        </div>
                        <span className="text-lg text-neutral-800 font-medium">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </section>
  );
};