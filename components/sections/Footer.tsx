import React from 'react';
import { Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-neutral-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
           <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl font-bold text-neutral-900 font-logo">manae</span>
              </div>
              <p className="text-neutral-500 max-w-sm">
                Reprenez le contrôle de votre temps, simplement.
              </p>
           </div>
           
           <div>
              <h4 className="font-bold text-neutral-900 mb-4">Légal</h4>
              <ul className="space-y-2 text-sm text-neutral-500">
                 <li><a href="#" className="hover:text-primary-600">Conditions générales</a></li>
                 <li><a href="#" className="hover:text-primary-600">Confidentialité</a></li>
                 <li><a href="#" className="hover:text-primary-600">Mentions légales</a></li>
              </ul>
           </div>

           <div>
              <h4 className="font-bold text-neutral-900 mb-4">Contact</h4>
              <a href="mailto:hello@manae.app" className="flex items-center gap-2 text-sm text-neutral-500 hover:text-primary-600">
                 <Mail size={16} />
                 hello@manae.app
              </a>
           </div>
        </div>
        
        <div className="border-t border-neutral-100 pt-8 text-center">
            <p className="text-neutral-400 text-sm">
                &copy; {new Date().getFullYear()} Manae. Fait avec 💜.
            </p>
        </div>
      </div>
    </footer>
  );
};