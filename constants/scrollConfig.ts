/**
 * Configuration du smooth scroll pour les ancres internes.
 * Centralise les paramètres pour maintenir la cohérence dans toute l'app.
 */

/** IDs des sections cibles pour le scroll */
export const SCROLL_TARGETS = {
  FINAL_CTA: 'final-cta',
  FEATURES: 'features',
  PRICING: 'pricing',
} as const;

/** Offset en pixels pour compenser le header fixe */
export const HEADER_OFFSET = 80;

/**
 * Configuration pour le scroll natif (scrollIntoView).
 * 'smooth' est supporté par tous les navigateurs modernes.
 */
export const SCROLL_BEHAVIOR: ScrollBehavior = 'smooth';

/**
 * Bloc d'alignement : 'start' place l'élément en haut du viewport.
 * Combiné avec scroll-margin-top en CSS pour l'offset du header.
 */
export const SCROLL_BLOCK: ScrollLogicalPosition = 'start';
