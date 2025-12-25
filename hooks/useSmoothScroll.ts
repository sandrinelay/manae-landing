'use client';

import { useCallback } from 'react';
import {
  SCROLL_TARGETS,
  SCROLL_BEHAVIOR,
  SCROLL_BLOCK,
} from '@/constants/scrollConfig';

type ScrollTargetId = (typeof SCROLL_TARGETS)[keyof typeof SCROLL_TARGETS];

/**
 * Hook pour gérer le smooth scroll vers des sections de la page.
 * Respecte prefers-reduced-motion pour l'accessibilité.
 *
 * @example
 * const { scrollToFinalCta, scrollToSection } = useSmoothScroll();
 * <button onClick={scrollToFinalCta}>Rejoindre</button>
 * <button onClick={() => scrollToSection('features')}>Features</button>
 */
export function useSmoothScroll() {
  /**
   * Vérifie si l'utilisateur préfère les mouvements réduits.
   * Retourne 'auto' (instant) au lieu de 'smooth' si c'est le cas.
   */
  const getScrollBehavior = useCallback((): ScrollBehavior => {
    if (typeof window === 'undefined') return SCROLL_BEHAVIOR;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    return prefersReducedMotion ? 'auto' : SCROLL_BEHAVIOR;
  }, []);

  /**
   * Scroll vers une section par son ID.
   * Gère le cas où l'élément n'existe pas silencieusement.
   */
  const scrollToSection = useCallback(
    (targetId: ScrollTargetId | string) => {
      const element = document.getElementById(targetId);

      if (!element) {
        console.warn(`[useSmoothScroll] Element #${targetId} non trouvé`);
        return;
      }

      element.scrollIntoView({
        behavior: getScrollBehavior(),
        block: SCROLL_BLOCK,
      });
    },
    [getScrollBehavior]
  );

  /** Raccourci pour scroller vers la section FinalCTA (waitlist) */
  const scrollToFinalCta = useCallback(() => {
    scrollToSection(SCROLL_TARGETS.FINAL_CTA);
  }, [scrollToSection]);

  /** Raccourci pour scroller vers la section Features */
  const scrollToFeatures = useCallback(() => {
    scrollToSection(SCROLL_TARGETS.FEATURES);
  }, [scrollToSection]);

  /** Raccourci pour scroller vers la section Pricing */
  const scrollToPricing = useCallback(() => {
    scrollToSection(SCROLL_TARGETS.PRICING);
  }, [scrollToSection]);

  return {
    scrollToSection,
    scrollToFinalCta,
    scrollToFeatures,
    scrollToPricing,
  };
}
