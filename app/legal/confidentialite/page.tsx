import { LegalSection } from '@/components/legal/LegalSection';
import { CONFIDENTIALITE } from '@/lib/legal/content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: CONFIDENTIALITE.title,
  description: CONFIDENTIALITE.description,
};

export default function ConfidentialitePage() {
  return (
    <article>
      <header className="mb-8 pb-6 border-b border-neutral-200">
        <h1 className="text-3xl font-bold text-neutral-900 mb-2">
          {CONFIDENTIALITE.title}
        </h1>
        <p className="text-neutral-600">
          Dernière mise à jour : {new Date(CONFIDENTIALITE.lastUpdate).toLocaleDateString('fr-FR')}
        </p>
      </header>

      <div className="space-y-8">
        {CONFIDENTIALITE.sections.map((section) => (
          <LegalSection key={section.id} section={section} />
        ))}
      </div>
    </article>
  );
}
