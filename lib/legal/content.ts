import { LegalContact, LegalPage } from '@/types/legal';

/**
 * Informations légales centralisées
 * À mettre à jour selon vos informations réelles
 */
export const LEGAL_CONTACT: LegalContact = {
  name: 'Sandrine Lay',
  email: 'contact@manae.app',
  address: '[Adresse complète]',
  siret: '[SIRET si applicable]',
  host: {
    name: 'Vercel Inc.',
    address: '440 N Barranca Ave #4133, Covina, CA 91723, USA',
  },
};

/**
 * Mentions légales
 */
export const MENTIONS_LEGALES: LegalPage = {
  title: 'Mentions Légales',
  description: 'Informations légales relatives à l\'application Manae',
  lastUpdate: '2025-12-25',
  sections: [
    {
      id: 'editeur',
      title: 'Éditeur du site',
      content: [
        'Le site et l\'application Manae sont édités par : Sandrine Lay',
        'Éditrice du service Manae – projet en cours de développement',
        'Adresse e-mail : contact@manae.app',
        'L\'activité est actuellement exercée à titre personnel.',
        'Les informations légales (adresse postale, numéro SIRET) seront complétées lors de la création de la structure juridique dédiée.',
      ],
    },
    {
      id: 'directeur',
      title: 'Directeur de la publication',
      content: 'Sandrine Lay',
    },
    {
      id: 'nom-domaine',
      title: 'Nom de domaine',
      content: [
        'Le nom de domaine manae.app est enregistré auprès de :',
        'OVH SAS - 2 rue Kellermann 59100 Roubaix France',
        'www.ovh.com',
      ],
    },
    {
      id: 'hebergement',
      title: 'Hébergement',
      content: [
        'Le site et l\'application sont hébergés par :', 
        'Vercel Inc. 440 N Barranca Ave #4133 Covina, CA 91723 États-Unis',
      ],
    },
    {
      id: 'propriete',
      title: 'Propriété intellectuelle',
      content: [
        'L\'ensemble des éléments composant le site et l\'application Manae (notamment les textes, interfaces, graphismes, logos, éléments visuels, fonctionnalités et structures) est protégé par le droit de la propriété intellectuelle.',
        'Sauf mention contraire, ces éléments sont la propriété exclusive de Manae ou de leurs auteurs respectifs.',
        'Toute reproduction, représentation, modification ou exploitation, totale ou partielle, sans autorisation préalable écrite, est interdite.',
      ],
    },
    {
      id: 'responsabilite',
      title: 'Responsabilité',
      content: [
        'Manae est proposé en version bêta.',
        'L\'éditrice s\'efforce de fournir un service fiable et sécurisé, sans toutefois garantir l\'absence totale d\'erreurs, d\'interruptions ou d\'imprécisions.',
        'L\'utilisation du site et de l\'application se fait sous la seule responsabilité de l\'utilisateur.',
      ],
    },
    {
      id: 'donnees',
      title: 'Données personnelles',
      content: 'Le traitement des données personnelles est décrit dans la Politique de confidentialité, accessible depuis le site et l\'application.',
    },
  ],
};

/**
 * Politique de confidentialité (RGPD)
 */
export const CONFIDENTIALITE: LegalPage = {
  title: 'Politique de Confidentialité',
  description: 'Comment Manae collecte, utilise et protège vos données personnelles',
  lastUpdate: '2025-12-25',
  sections: [
    {
      id: 'introduction',
      title: '1. Introduction',
      content: [
        'Manae accorde une importance particulière à la protection de votre vie privée et de vos données personnelles.',
        'La présente Politique de confidentialité a pour objet d\'expliquer de manière claire et transparente : quelles données sont collectées, dans quels buts, comment elles sont utilisées et protégées, et quels sont vos droits, conformément au Règlement Général sur la Protection des Données (RGPD).',
      ],
    },
    {
      id: 'responsable',
      title: '2. Responsable du traitement',
      content: [
        'Le responsable du traitement des données est : Sandrine Lay (éditrice du service Manae, en phase de développement du projet)',
        'Contact : contact@manae.app',
        'Les informations légales seront complétées lors de la création de la structure juridique dédiée.',
      ],
    },
    {
      id: 'donnees-collectees',
      title: '3. Données personnelles collectées',
      content: 'Dans le cadre de l\'utilisation de Manae, les catégories de données suivantes peuvent être collectées :',
      subsections: [
        {
          id: 'compte',
          title: '3.1 Données de compte',
          content: [
            'Adresse e-mail',
            'Nom et prénom (le cas échéant)',
            'Ces données sont fournies lors de la création du compte.',
          ],
        },
        {
          id: 'utilisation',
          title: '3.2 Données d\'utilisation',
          content: [
            'Contenus saisis volontairement par l\'utilisateur (notes, tâches, idées, rappels, informations personnelles)',
            'Paramètres et préférences d\'organisation définis dans l\'application',
            'Ces données restent strictement privées et sous le contrôle de l\'utilisateur.',
          ],
        },
        {
          id: 'integrations',
          title: '3.3 Intégrations optionnelles',
          content: 'Données issues de Google Calendar (événements uniquement), uniquement si l\'utilisateur active volontairement l\'intégration',
        },
        {
          id: 'techniques',
          title: '3.4 Données techniques',
          content: [
            'Adresse IP',
            'Type de navigateur et appareil',
            'Horodatages de connexion',
            'Données nécessaires à la sécurité et au bon fonctionnement du service',
          ],
        },
      ],
    },
    {
      id: 'finalites',
      title: '4. Finalités du traitement',
      content: [
        'Les données collectées sont utilisées exclusivement pour les finalités suivantes :',
        'Fourniture et fonctionnement du service Manae',
        'Organisation et structuration des contenus personnels de l\'utilisateur',
        'Amélioration continue de l\'expérience utilisateur (notamment dans le cadre de la version bêta)',
        'Analyse automatisée des contenus à des fins d\'organisation (via IA)',
        'Synchronisation avec des services tiers, uniquement à la demande de l\'utilisateur',
        'Support utilisateur et communication liée au service',
        'Aucune donnée n\'est utilisée à des fins publicitaires ou de profilage commercial.',
      ],
    },
    {
      id: 'base-legale',
      title: '5. Base légale des traitements',
      content: [
        'Les traitements de données reposent sur les bases légales suivantes :',
        'Exécution du service : fonctionnement de Manae et gestion du compte utilisateur',
        'Consentement : intégrations optionnelles (ex. Google Calendar)',
        'Intérêt légitime : amélioration, sécurisation et évolution du service, notamment durant la phase bêta',
      ],
    },
    {
      id: 'destinataires',
      title: '6. Destinataires des données',
      content: 'Les données personnelles peuvent être traitées par des prestataires techniques strictement nécessaires au fonctionnement de Manae :',
      subsections: [
        {
          id: 'openai',
          title: '6.1 OpenAI (services d\'intelligence artificielle)',
          content: [
            'Finalité : analyse et organisation des contenus saisis par l\'utilisateur',
            'Données transmises : données strictement nécessaires au traitement',
            'Localisation : États-Unis',
            'Garanties : Clauses Contractuelles Types (CCT)',
            'Conservation : conformément à la politique d\'OpenAI (données non utilisées à des fins d\'entraînement)',
          ],
        },
        {
          id: 'google',
          title: '6.2 Google (Google Calendar API)',
          content: [
            'Finalité : synchronisation des événements',
            'Accès : uniquement si l\'utilisateur active l\'intégration',
            'Traitement conforme à la politique de confidentialité de Google',
          ],
        },
        {
          id: 'supabase',
          title: '6.3 Supabase',
          content: [
            'Finalité : hébergement sécurisé des données',
            'Localisation : Union européenne (selon configuration)',
            'Mesures de sécurité renforcées',
          ],
        },
      ],
    },
    {
      id: 'conservation',
      title: '7. Durée de conservation des données',
      content: [
        'Données de compte : conservées tant que le compte est actif, puis supprimées dans un délai maximal de 30 jours après suppression',
        'Données d\'utilisation : conservées tant que l\'utilisateur utilise le service',
        'Données techniques : conservées 13 mois maximum',
        'Données liées à un compte supprimé : supprimées ou anonymisées dans un délai de 30 jours',
      ],
    },
    {
      id: 'droits',
      title: '8. Vos droits',
      content: [
        'Conformément au RGPD, vous disposez des droits suivants :',
        'Droit d\'accès à vos données',
        'Droit de rectification',
        'Droit à l\'effacement',
        'Droit à la portabilité',
        'Droit d\'opposition',
        'Droit à la limitation du traitement',
      ],
    },
    {
      id: 'exercer-droits',
      title: '9. Exercice de vos droits',
      content: [
        'Vous pouvez exercer vos droits à tout moment en écrivant à : contact@manae.app',
        'Délai de réponse : 1 mois maximum.',
        'Vous avez également la possibilité d\'introduire une réclamation auprès de la CNIL (www.cnil.fr).',
      ],
    },
    {
      id: 'securite',
      title: '10. Sécurité des données',
      content: [
        'Manae met en œuvre des mesures techniques et organisationnelles adaptées afin de protéger vos données, notamment :',
        'Chiffrement des données en transit (HTTPS)',
        'Chiffrement des données au repos',
        'Authentification sécurisée',
        'Accès restreint aux données',
        'Sauvegardes régulières',
      ],
    },
    {
      id: 'ia',
      title: '11. Utilisation de l\'intelligence artificielle',
      content: [
        'Manae utilise des systèmes d\'intelligence artificielle pour aider à organiser et structurer les contenus saisis.',
        'L\'IA ne prend aucune décision automatisée ayant un effet juridique ou significatif sur l\'utilisateur',
        'L\'IA agit comme un outil d\'assistance',
        'Les contenus restent sous le contrôle de l\'utilisateur',
      ],
    },
    {
      id: 'cookies',
      title: '12. Cookies',
      content: [
        'Manae utilise uniquement des cookies strictement nécessaires au fonctionnement du service (authentification, session).',
        'Aucun cookie publicitaire ou de suivi marketing n\'est utilisé.',
      ],
    },
    {
      id: 'modifications',
      title: '13. Évolution de la politique',
      content: [
        'La présente Politique de confidentialité peut être amenée à évoluer, notamment en fonction de l\'évolution du service.',
        'En cas de modification substantielle, les utilisateurs seront informés par un moyen approprié.',
      ],
    },
  ],
};

/**
 * Conditions Générales d'Utilisation
 */
export const CGU: LegalPage = {
  title: 'Conditions Générales d\'Utilisation',
  description: 'Règles d\'utilisation de l\'application Manae',
  lastUpdate: '2025-12-25',
  sections: [
    {
      id: 'objet',
      title: '1. Objet',
      content: [
        'Les présentes Conditions Générales d’Utilisation (dites « CGU ») ont pour objet de définir les modalités et conditions d’accès et d’utilisation de l’application Manae (ci-après « l’Application »).',
        'L’utilisation de l’Application implique l’acceptation pleine et entière des présentes CGU.',
      ],
    },
    {
      id: 'service',
      title: '2. Présentation du service',
      content: [
        'Manae est une application numérique d’assistance à l’organisation personnelle, permettant de capturer, structurer et planifier des informations (idées, tâches, rappels, contenus personnels) à l’aide de fonctionnalités d’automatisation et d’intelligence artificielle.',
        'Manae s’adresse à toute personne majeure souhaitant mieux organiser son quotidien, sans ciblage exclusif d’un profil ou d’un usage spécifique.',
        'Manae ne constitue ni un service médical, psychologique, juridique ou professionnel, ni un outil de diagnostic ou de prise de décision critique.',
      ],
    },
    {
      id: 'inscription',
      title: '3. Accès au service et inscription',
      content: [
        'L’accès à certaines fonctionnalités de Manae nécessite la création d’un compte utilisateur.',
        'L’utilisateur s’engage à : fournir des informations exactes lors de l’inscription, maintenir la confidentialité de ses identifiants, informer Manae de toute utilisation non autorisée de son compte.',
        'L’utilisation du service est réservée aux personnes âgées de 18 ans minimum.',
      ],
    },
    {
      id: 'bêta',
      title: '4. Accès gratuit - Version bêta',
      content: [
        'Manae est actuellement proposée en version bêta, accessible gratuitement pendant une durée de six (6) mois à compter de l’ouverture du service.',
        'Durant cette période : aucune facturation n’est appliquée, certaines fonctionnalités peuvent évoluer, être modifiées ou interrompues, es incidents techniques ou des limitations temporaires peuvent survenir.',
        'L’utilisateur reconnaît utiliser une version en cours de développement.',
      ],
    },
    {
      id: 'evolution',
      title: '5. Évolution du service',
      content: [
        'Manae se réserve le droit de : faire évoluer les fonctionnalités, proposer ultérieurement des offres payantes, modifier les conditions d\'accès au service.',
        'Toute évolution majeure fera l\'objet d\'une information préalable des utilisateurs.',
      ],
    },
    {
      id: 'utilisation',
      title: '6. Règles d\'utilisation',
      content: [
        'L\'utilisateur s\'engage à utiliser Manae de manière loyale et conforme à la législation en vigueur.',
        'Il s\'interdit notamment de : utiliser le service à des fins illégales ou frauduleuses, diffuser des contenus illicites, diffamatoires, haineux ou nuisibles, tenter d\'entraver le bon fonctionnement ou la sécurité de l\'Application, partager ses identifiants avec des tiers.',
      ],
    },
    {
      id: 'donnees',
      title: '7. Données et contenus de l\'utilisateur',
      content: [
        'L\'utilisateur reste pleinement propriétaire des contenus et données qu\'il saisit dans Manae.',
        'Il accorde à Manae une licence non exclusive, strictement limitée aux besoins techniques nécessaires au fonctionnement du service (hébergement, traitement, amélioration de l\'expérience utilisateur).',
        'Les données ne sont ni revendues ni exploitées à des fins commerciales externes sans consentement explicite.',
        'Les modalités de traitement des données personnelles sont détaillées dans la Politique de confidentialité.',
      ],
    },
    {
      id: 'propriete',
      title: '8. Propriété intellectuelle',
      content: [
        'L\'Application Manae, ses éléments graphiques, textes, fonctionnalités et algorithmes sont protégés par le droit de la propriété intellectuelle.',
        'Toute reproduction ou exploitation non autorisée est interdite.',
      ],
    },
    {
      id: 'responsabilite',
      title: '9. Responsabilité',
      content: [
        'Manae est fournie « en l\'état », notamment dans le cadre de sa version bêta.',
        'L\'éditeur ne garantit pas : l\'absence totale d\'erreurs, la continuité permanente du service, l\'adéquation du service à un besoin particulier.',
        'L\'utilisateur demeure seul responsable de l\'usage qu\'il fait des informations et fonctionnalités proposées.',
        'La responsabilité de Manae ne saurait être engagée pour des dommages indirects ou immatériels.',
      ],
    },
    {
      id: 'suspension',
      title: '10. Suspension et suppression de compte',
      content: [
        'Manae se réserve le droit de suspendre ou supprimer un compte en cas de violation manifeste des présentes CGU.',
        'L\'utilisateur peut supprimer son compte à tout moment.',
        'En cas de suppression : les données sont supprimées ou anonymisées dans un délai maximal de 30 jours, sauf obligation légale contraire.',
      ],
    },
    {
      id: 'modifications-cgu',
      title: '11. Modification des CGU',
      content: [
        'Les présentes CGU peuvent être modifiées à tout moment.',
        'En cas de modification substantielle, l\'utilisateur sera informé par tout moyen approprié.',
        'La poursuite de l\'utilisation du service vaut acceptation des nouvelles CGU.',
      ],
    },
    {
      id: 'editeur',
      title: '12. Éditeur du service',
      content: [
        'Le service Manae est actuellement édité par une personne physique, en phase de validation de projet.',
        'Les informations légales seront complétées lors de la création de la structure juridique.',
      ],
    },
    {
      id: 'litige',
      title: '13. Droit applicable',
      content: [
        'Les présentes CGU sont régies par le droit français.',
        'En cas de litige, les tribunaux compétents seront ceux du ressort de Paris, sauf disposition légale contraire.',
      ],
    },
  ],
};

/**
 * Conditions Générales de Vente
 */
export const CGV: LegalPage = {
  title: 'Conditions Générales de Vente',
  description: 'Conditions de vente de l\'abonnement Manae Plus',
  lastUpdate: '2025-12-25',
  sections: [
    {
      id: 'objet-cgv',
      title: 'Objet',
      content: [
        'Les présentes CGV régissent la vente de l\'abonnement Manae Plus.',
        'En souscrivant, vous acceptez ces conditions.',
      ],
    },
    {
      id: 'offre',
      title: 'Offre',
      content: [
        'Manae Plus est un abonnement mensuel donnant accès à des fonctionnalités premium.',
        'Prix : [XX,XX €/mois TTC]',
        'Quota AI étendu, fonctionnalités avancées, support prioritaire.',
      ],
    },
    {
      id: 'commande',
      title: 'Commande',
      content: [
        'La commande est finalisée après paiement.',
        'Vous recevez une confirmation par email.',
        'L\'accès aux fonctionnalités Plus est immédiat.',
      ],
    },
    {
      id: 'paiement',
      title: 'Paiement',
      content: [
        'Paiement par carte bancaire via [Stripe/autre].',
        'Paiement sécurisé (3D Secure).',
        'Renouvellement automatique chaque mois.',
      ],
    },
    {
      id: 'retractation',
      title: 'Droit de rétractation',
      content: [
        'Vous disposez de 14 jours pour vous rétracter.',
        'Demande à envoyer à : ' + LEGAL_CONTACT.email,
        'Remboursement sous 14 jours.',
      ],
    },
    {
      id: 'resiliation-cgv',
      title: 'Résiliation',
      content: [
        'Vous pouvez résilier à tout moment depuis les paramètres.',
        'La résiliation prend effet à la fin de la période en cours.',
        'Aucun remboursement au prorata.',
      ],
    },
    {
      id: 'facture',
      title: 'Facturation',
      content: [
        'Une facture est disponible dans votre espace client.',
        'TVA applicable : 20%.',
      ],
    },
    {
      id: 'litige',
      title: 'Litiges',
      content: [
        'En cas de litige, contactez-nous : ' + LEGAL_CONTACT.email,
        'Médiation possible via [plateforme de médiation].',
        'Juridiction compétente : [Ville].',
      ],
    },
  ],
};

/**
 * Politique de Cookies
 */
export const COOKIES: LegalPage = {
  title: 'Politique de Cookies',
  description: 'Utilisation des cookies sur Manae',
  lastUpdate: '2025-12-25',
  sections: [
    {
      id: 'definition',
      title: 'Qu\'est-ce qu\'un cookie ?',
      content: [
        'Un cookie est un petit fichier texte stocké sur votre appareil.',
        'Il permet de mémoriser vos préférences et d\'améliorer votre expérience.',
      ],
    },
    {
      id: 'cookies-utilises',
      title: 'Cookies utilisés par Manae',
      content: 'Manae utilise uniquement des cookies essentiels :',
      subsections: [
        {
          id: 'session',
          title: 'Cookies de session',
          content: [
            'Finalité : maintenir votre connexion',
            'Durée : session (supprimés à la fermeture)',
            'Obligatoire : oui',
          ],
        },
        {
          id: 'auth',
          title: 'Cookies d\'authentification',
          content: [
            'Finalité : sécuriser votre compte',
            'Durée : 30 jours',
            'Obligatoire : oui',
          ],
        },
      ],
    },
    {
      id: 'pas-de-tracking',
      title: 'Pas de tracking',
      content: [
        'Manae n\'utilise aucun cookie publicitaire ou de tracking.',
        'Aucune donnée n\'est partagée avec des tiers à des fins publicitaires.',
      ],
    },
    {
      id: 'gestion',
      title: 'Gestion des cookies',
      content: [
        'Vous pouvez désactiver les cookies dans les paramètres de votre navigateur.',
        'Attention : désactiver les cookies empêchera le bon fonctionnement de Manae.',
      ],
    },
  ],
};
