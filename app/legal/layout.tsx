import { LegalNav } from '@/components/legal/LegalNav';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Manae',
    default: 'Informations légales',
  },
};

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-neutral-50">
      <LegalNav />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          {children}
        </div>
      </main>

      <footer className="max-w-4xl mx-auto px-4 py-8 text-center text-sm text-neutral-500">
        <p>
          Pour toute question, contactez-nous :{' '}
          <a
            href="mailto:contact@manae.app"
            className="text-[#4A7488] hover:text-[#4A7488]/80 underline"
          >
            contact@manae.app
          </a>
        </p>
      </footer>
    </div>
  );
}
