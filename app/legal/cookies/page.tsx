// app/legal/cgu/page.tsx
import { LegalSection } from '@/components/legal/LegalSection';
import { CGU } from '@/lib/legal/content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: CGU.title,
  description: CGU.description,
};

export default function CguPage() {
  return (
    <article>
      <header className="mb-8 pb-6 border-b border-slate-200">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">{CGU.title}</h1>
        <p className="text-slate-600">
          Dernière mise à jour : {new Date(CGU.lastUpdate).toLocaleDateString('fr-FR')}
        </p>
      </header>

      <div className="space-y-8">
        {CGU.sections.map((section) => (
          <LegalSection key={section.id} section={section} />
        ))}
      </div>
    </article>
  );
}