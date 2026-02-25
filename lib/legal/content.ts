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
  lastUpdate: '2026-02-25',
  sections: [
    {
      id: 'editeur',
      title: 'Éditeur du site',
      content: [
        'Le site et l\'application Manae sont édités par : Sandrine Lay',
        'Nom commercial : Manae',
        'Entrepreneur individuel',
        'SIRET : 100 252 170 00012',
        'Code APE : 62.01Z (Programmation informatique)',
        'Adresse : 40 rue des Princes de Wagram, 94520 Mandres-les-Roses, France',
        'Email : contact@manae.app',
        'Date d\'immatriculation au RNE : 29/01/2026',
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
  lastUpdate: '2026-02-25',
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
        'Responsable du traitement : Sandrine Lay',
        'Nom commercial : Manae',
        'Entrepreneur individuel - SIRET : 100 252 170 00012',
        'Adresse : 40 rue des Princes de Wagram, 94520 Mandres-les-Roses, France',
        'Email : contact@manae.app',
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
          content: 'Données issues de Google Calendar (liste des calendriers et événements), uniquement si l\'utilisateur active volontairement l\'intégration depuis l\'application.',
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
            'Politique de confidentialité : https://openai.com/fr-FR/policies/row-privacy-policy/',
          ],
        },
        {
          id: 'google',
          title: '6.2 Google (Google Calendar API)',
          content: [
            'Finalité : permettre à l\'utilisateur d\'afficher ses calendriers Google et leurs événements au sein de Manae, de consulter ses disponibilités, et de planifier des tâches directement dans son agenda Google Calendar avec synchronisation bidirectionnelle.',
            'Scopes utilisés :',
            '— https://www.googleapis.com/auth/calendar.events : lecture, création, modification et suppression des événements',
            '— https://www.googleapis.com/auth/calendar.calendarlist.readonly : lecture de la liste des calendriers de l\'utilisateur (en lecture seule)',
            'Données Google accédées :',
            '— Liste des calendriers de l\'utilisateur (noms, couleurs, identifiants — lecture seule)',
            '— Événements des calendriers sélectionnés (lecture complète pour affichage de l\'agenda et identification des créneaux disponibles)',
            '— Création, modification et suppression d\'événements (pour planifier les tâches de l\'utilisateur)',
            '— Notifications en temps réel des modifications du calendrier (pour la synchronisation bidirectionnelle : si un événement créé par Manae est supprimé dans Google Calendar, il est également supprimé dans Manae)',
            'Accès conditionnel : l\'intégration Google Calendar est entièrement optionnelle. Les données ne sont accessibles que si l\'utilisateur l\'active volontairement depuis l\'application.',
            'Absence de partage et de vente : les données issues de Google Calendar ne sont ni vendues, ni transmises à des tiers (régies publicitaires, data brokers, revendeurs), y compris OpenAI. Elles ne sont utilisées que pour la fonctionnalité de planification au sein de Manae.',
            'Stockage limité : les tokens d\'accès Google sont conservés uniquement dans le navigateur de l\'utilisateur (localStorage). Les contenus des événements (titre, description, participants) ne sont ni stockés sur les serveurs de Manae, ni enregistrés en base de données. Seul l\'identifiant technique d\'un événement Google Calendar (google_event_id) peut être enregistré en base de données lorsqu\'une tâche Manae est planifiée, afin de permettre sa mise à jour ou sa suppression ultérieure.',
            'Non-utilisation à d\'autres fins : les données Google ne sont utilisées qu\'aux fins déclarées (affichage de l\'agenda, gestion des disponibilités, création et suppression d\'événements, synchronisation bidirectionnelle). Elles ne servent pas à l\'entraînement de modèles d\'IA généraux, au profilage, à des fins publicitaires, ni à l\'évaluation de crédit ou à des décisions financières.',
            'Restriction d\'accès humain : aucune personne de l\'équipe Manae — y compris la fondatrice — ni aucun employé, prestataire ou agent ne peut consulter les données Google Calendar de l\'utilisateur, sauf dans les cas suivants : (1) accord explicite de l\'utilisateur, (2) nécessité pour des raisons de sécurité ou de débogage, (3) obligation légale. Ces accès exceptionnels sont documentés et limités au strict nécessaire.',
            'Révocation : l\'utilisateur peut révoquer l\'accès à tout moment depuis son profil dans l\'application, ou directement depuis son compte Google (myaccount.google.com/permissions).',
            'Conformité : l\'utilisation par Manae des données obtenues via les API Google est conforme à la politique d\'utilisation des données des services API Google, y compris les exigences d\'utilisation limitée (Google API Services User Data Policy, Limited Use Policy) : https://developers.google.com/terms/api-services-user-data-policy',
            'Politique de confidentialité de Google : https://policies.google.com/privacy',
          ],
        },
        {
          id: 'supabase',
          title: '6.3 Supabase',
          content: [
            'Finalité : hébergement sécurisé des données',
            'Localisation : Union européenne (eu-west-1, Irlande)',
            'Mesures de sécurité renforcées',
          ],
        },
      ],
    },
    {
      id: 'conservation',
      title: '7. Durée de conservation des données',
      content: [
        'Données de compte : conservées tant que le compte est actif, puis supprimées immédiatement après suppression du compte',
        'Données d\'utilisation : conservées tant que l\'utilisateur utilise le service',
        'Données techniques : conservées 13 mois maximum',
        'Items archivés : supprimés automatiquement après 1 an d\'archivage',
        'Comptes inactifs : supprimés automatiquement après 2 ans d\'inactivité (une notification sera envoyée avant suppression)',
      ],
    },
    {
      id: 'droits',
      title: '8. Vos droits',
      content: [
        'Conformément au RGPD, vous disposez des droits suivants :',
        'Droit d\'accès à vos données',
        'Droit de rectification',
        'Droit à l\'effacement : vous pouvez supprimer votre compte directement depuis votre profil via le bouton "Supprimer mon compte"',
        'Droit à la portabilité : vous pouvez exporter toutes vos données depuis votre profil via le bouton "Exporter mes données"',
        'Droit d\'opposition',
        'Droit à la limitation du traitement : vous pouvez demander la suspension du traitement de vos données en écrivant à contact@manae.app',
        'Droit de retrait du consentement : lorsque le traitement est fondé sur votre consentement (ex. connexion Google Calendar), vous pouvez le retirer à tout moment, sans que cela remette en cause les traitements effectués avant ce retrait.',
      ],
    },
    {
      id: 'exercer-droits',
      title: '9. Exercice de vos droits',
      content: [
        'La plupart de vos droits peuvent être exercés directement depuis votre profil dans l\'application :',
        '- Suppression de compte : bouton "Supprimer mon compte"',
        '- Export de données : bouton "Exporter mes données"',
        'Pour toute autre demande, vous pouvez écrire à : contact@manae.app',
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
        'Contrôle d\'accès strict (Row Level Security) : chaque utilisateur ne peut accéder qu\'à ses propres données depuis l\'application. L\'équipe Manae peut accéder aux données dans le cadre de l\'administration technique du service (support, débogage, obligations légales), dans le respect du RGPD.',
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
  lastUpdate: '2026-02-25',
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
        'Manae est une application numérique d’assistance à l’organisation personnelle, permettant de capturer, structurer et planifier des informations (idées, tâches, rappels, contenus personnels) à l’aide de fonctionnalités d’automatisation et d’intelligence artificielle, avec possibilité de connexion optionnelle à Google Calendar pour visualiser son agenda et planifier des tâches directement depuis Manae.',
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
        'Manae est actuellement proposée en version bêta, accessible gratuitement pendant une durée de six (6) mois à compter de l\'ouverture du service.',
        'Durant cette période : aucune facturation n\'est appliquée, certaines fonctionnalités peuvent évoluer, être modifiées ou interrompues, les incidents techniques ou des limitations temporaires peuvent survenir.',
        'L\'utilisateur reconnaît utiliser une version en cours de développement.',
        'Des abonnements payants seront proposés après la période bêta, avec des tarifs indicatifs entre 3,99€ et 15,99€/mois selon les fonctionnalités. Les tarifs définitifs seront communiqués au moins 30 jours avant la fin de la bêta.',
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
      title: '10. Résiliation et suppression de compte',
      content: [
        'Manae se réserve le droit de suspendre ou supprimer un compte en cas de violation manifeste des présentes CGU.',
        'Les utilisateurs peuvent supprimer leur compte directement depuis leur profil ou en contactant contact@manae.app. Les données sont supprimées immédiatement.',
        'Les comptes inactifs depuis plus de 2 ans seront automatiquement supprimés après notification préalable.',
      ],
    },
    {
      id: 'portabilite',
      title: '11. Portabilité des données',
      content: [
        'Conformément au RGPD, vous pouvez exporter vos données au format JSON depuis votre profil.',
        'L\'export inclut l\'ensemble de vos contenus (tâches, notes, idées, courses) ainsi que vos paramètres.',
      ],
    },
    {
      id: 'modifications-cgu',
      title: '12. Modification des CGU',
      content: [
        'Les présentes CGU peuvent être modifiées à tout moment.',
        'En cas de modification substantielle, l\'utilisateur sera informé par tout moyen approprié.',
        'La poursuite de l\'utilisation du service vaut acceptation des nouvelles CGU.',
      ],
    },
    {
      id: 'editeur',
      title: '13. Éditeur du service',
      content: [
        'Le service Manae est édité par : Sandrine Lay',
        'Nom commercial : Manae',
        'Entrepreneur individuel',
        'SIRET : 100 252 170 00012',
        'Code APE : 62.01Z (Programmation informatique)',
        'Adresse : 40 rue des Princes de Wagram, 94520 Mandres-les-Roses, France',
        'Contact : contact@manae.app',
      ],
    },
    {
      id: 'litige',
      title: '14. Droit applicable',
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
  lastUpdate: '2026-02-25',
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
  lastUpdate: '2026-02-25',
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
