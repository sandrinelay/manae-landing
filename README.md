Le bouton "Connexion" sur le site vitrine manae.app pointe vers /set-password au lieu de /login.# Manae Landing Page

Landing page pour Manae - Application de capture et organisation de pensées avec IA.

## 🚀 Technologies

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Supabase** (gestion de la liste d'attente)
- **Lucide React** (icônes)

## 📦 Installation

```bash
npm install
```

## 🔧 Configuration

Créez un fichier `.env.local` à la racine du projet :

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 🏃 Développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🏗️ Build

```bash
npm run build
```

## 📁 Structure du projet

```
manae-landing/
├── app/                      # Pages Next.js (App Router)
│   ├── guide-simple/        # Guide simple d'utilisation
│   ├── legal/               # Pages légales (CGU, confidentialité, etc.)
│   └── page.tsx             # Page d'accueil
├── components/
│   ├── legal/               # Composants des pages légales
│   ├── mockups/             # Mockups de l'application
│   ├── sections/            # Sections de la landing page
│   └── waitlist/            # Formulaire d'inscription
├── lib/
│   └── legal/               # Contenu des pages légales
└── public/                  # Assets statiques
```

## 🎨 Design System

### Couleurs

- **Primary** : `#4A7488` (Bleu)
- **Secondary** : `#BEE5D3` (Vert menthe)
- **Accent** : `#A03884` (Violet)

### Typographie

- **Police principale** : Geist Sans
- **Police monospace** : Geist Mono

## 📄 Pages

- `/` - Page d'accueil avec présentation et formulaire d'inscription
- `/guide-simple` - Guide simple d'utilisation de Manae
- `/legal/cgu` - Conditions Générales d'Utilisation
- `/legal/confidentialite` - Politique de confidentialité
- `/legal/mentions-legales` - Mentions légales
- `/legal/cookies` - Politique de cookies

## 🌐 Déploiement

Le projet est déployé sur Vercel à l'adresse : [https://manae.app](https://manae.app)

Pour déployer :

```bash
# Via Vercel CLI
vercel --prod

# Ou via push sur main (déploiement automatique)
git push origin main
```

## 🔗 Liens externes

- **Application** : [https://my.manae.app](https://my.manae.app)
- **Email contact** : contact@manae.app

## 📝 Notes

- La version bêta est gratuite pendant 6 mois
- Les abonnements seront proposés entre 3,99€ et 15,99€/mois après la bêta
