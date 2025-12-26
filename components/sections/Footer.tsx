import React from 'react';
import Link from 'next/link';
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
                 Organise tes pensées. Agis sereinement.
              </p>
           </div>

           <div>
              <h4 className="font-bold text-neutral-900 mb-4">Légal</h4>
              <ul className="space-y-2 text-sm text-neutral-500">
                 <li>
                   <Link href="/legal/cgu" className="hover:text-[#4A7488] transition-colors">
                     Conditions générales
                   </Link>
                 </li>
                 <li>
                   <Link href="/legal/confidentialite" className="hover:text-[#4A7488] transition-colors">
                     Confidentialité
                   </Link>
                 </li>
                 <li>
                   <Link href="/legal/mentions-legales" className="hover:text-[#4A7488] transition-colors">
                     Mentions légales
                   </Link>
                 </li>
              </ul>
           </div>

           <div>
              <h4 className="font-bold text-neutral-900 mb-4">Contact</h4>
              <a href="mailto:contact@manae.app" className="flex items-center gap-2 text-sm text-neutral-500 hover:text-[#4A7488] transition-colors">
                 <Mail size={16} />
                 contact@manae.app
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
