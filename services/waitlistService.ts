import { supabase } from '@/lib/supabase';
import { WaitlistFormData, WaitlistSubmissionResult } from '@/types/waitlist.types';

/**
 * Codes d'erreur PostgreSQL/Supabase pertinents :
 * - 23505 : Violation contrainte UNIQUE (email déjà inscrit)
 * - 42501 : Violation RLS (permissions insuffisantes)
 * - PGRST* : Erreurs PostgREST (API REST de Supabase)
 */
const ERROR_CODES = {
  DUPLICATE_EMAIL: '23505',
  RLS_VIOLATION: '42501',
} as const;

/**
 * Service pour gérer les inscriptions à la waitlist.
 * Utilise Supabase avec Row Level Security (RLS) activé.
 *
 * Sécurité RLS :
 * - La table waitlist a RLS activé
 * - Les utilisateurs anonymes (anon) peuvent UNIQUEMENT faire des INSERT
 * - SELECT, UPDATE, DELETE sont interdits pour les anonymes
 * - La politique RLS valide aussi le format email côté serveur
 *
 * @see docs/supabase-setup.md pour la configuration complète
 */
export async function submitWaitlistEntry(
  data: WaitlistFormData
): Promise<WaitlistSubmissionResult> {
  try {
    const { error } = await supabase.from('waitlist').insert({
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email.toLowerCase().trim(),
    });

    if (error) {
      console.error('Erreur Supabase:', error);

      // Email déjà inscrit (violation contrainte UNIQUE)
      if (error.code === ERROR_CODES.DUPLICATE_EMAIL) {
        return {
          success: false,
          message: 'Cet email est déjà inscrit !',
        };
      }

      // Violation RLS (ne devrait pas arriver avec la config correcte)
      // Cela signifie que la politique INSERT n'est pas configurée
      if (error.code === ERROR_CODES.RLS_VIOLATION) {
        console.error(
          'Erreur RLS: Vérifiez que la politique INSERT pour anon est configurée.',
          'Voir docs/supabase-setup.md'
        );
        return {
          success: false,
          message: 'Erreur de connexion. Réessaye dans un instant.',
        };
      }

      // Autres erreurs (réseau, serveur, etc.)
      return {
        success: false,
        message: 'Erreur de connexion. Réessaye dans un instant.',
      };
    }

    return {
      success: true,
      message: 'Inscription réussie !',
    };
  } catch (error) {
    // Erreur JavaScript (réseau, parsing, etc.)
    console.error('Erreur inattendue:', error);
    return {
      success: false,
      message: 'Erreur de connexion. Réessaye dans un instant.',
    };
  }
}
