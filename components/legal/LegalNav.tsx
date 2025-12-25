'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LEGAL_PAGES = [
  { href: '/legal/mentions-legales', label: 'Mentions légales' },
  { href: '/legal/confidentialite', label: 'Confidentialité' },
  { href: '/legal/cgu', label: 'CGU' },
] as const;

export function LegalNav() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-neutral-200 bg-white sticky top-0 z-10">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="text-xl font-bold text-neutral-900 font-logo hover:text-[#4A7488] transition-colors">
            manae
          </Link>
          <ul className="flex gap-1 overflow-x-auto scrollbar-hide">
            {LEGAL_PAGES.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`
                      inline-block px-4 py-2 rounded-lg text-sm font-medium
                      transition-colors whitespace-nowrap
                      ${
                        isActive
                          ? 'bg-[#BEE5D3]/30 text-[#4A7488]'
                          : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                      }
                    `}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
