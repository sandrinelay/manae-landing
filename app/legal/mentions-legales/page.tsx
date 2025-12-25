import { LegalSection } from '@/components/legal/LegalSection';
import { MENTIONS_LEGALES } from '@/lib/legal/content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: MENTIONS_LEGALES.title,
  description: MENTIONS_LEGALES.description,
};

export default function MentionsLegalesPage() {
  return (
    <article>
      <header className="mb-8 pb-6 border-b border-slate-200">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          {MENTIONS_LEGALES.title}
        </h1>
        <p className="text-slate-600">
          Dernière mise à jour : {new Date(MENTIONS_LEGALES.lastUpdate).toLocaleDateString('fr-FR')}
        </p>
      </header>

      <div className="space-y-8">
        {MENTIONS_LEGALES.sections.map((section) => (
          <LegalSection key={section.id} section={section} />
        ))}
      </div>
    </article>
  );
}