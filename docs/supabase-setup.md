# Configuration Supabase pour Manae Landing

## Table `waitlist`

### Structure

| Colonne      | Type        | Contraintes                    |
|--------------|-------------|--------------------------------|
| id           | uuid        | PRIMARY KEY, auto-généré       |
| first_name   | text        | NOT NULL                       |
| last_name    | text        | NOT NULL                       |
| email        | text        | NOT NULL, UNIQUE               |
| created_at   | timestamptz | DEFAULT NOW()                  |

---

## Scripts SQL à exécuter

### 1. Créer la table waitlist

Copier-coller dans l'éditeur SQL de Supabase (SQL Editor) :

```sql
-- =============================================
-- TABLE WAITLIST
-- =============================================
CREATE TABLE IF NOT EXISTS public.waitlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),

  -- Contrainte d'unicité sur l'email
  CONSTRAINT waitlist_email_unique UNIQUE (email)
);

-- Index pour recherche rapide par email
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON public.waitlist(email);

-- Commentaire sur la table
COMMENT ON TABLE public.waitlist IS 'Inscriptions à la waitlist beta Manae';
```

### 2. Activer Row Level Security (RLS)

```sql
-- =============================================
-- ACTIVER RLS
-- =============================================
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;
```

### 3. Créer les politiques de sécurité

```sql
-- =============================================
-- POLITIQUES RLS
-- =============================================

-- Politique 1: Autoriser INSERT pour les utilisateurs anonymes
-- Sécurité: Seule l'insertion est autorisée, pas de lecture/modification/suppression
CREATE POLICY "Autoriser inscription waitlist anonyme"
  ON public.waitlist
  FOR INSERT
  TO anon
  WITH CHECK (
    -- Vérifier que les champs requis sont présents et non vides
    first_name IS NOT NULL AND first_name <> '' AND
    last_name IS NOT NULL AND last_name <> '' AND
    email IS NOT NULL AND email <> '' AND
    -- Validation basique format email
    email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  );

-- Politique 2: Accès complet pour les utilisateurs authentifiés (admin)
-- Permet de gérer les inscriptions depuis le dashboard
CREATE POLICY "Accès complet pour utilisateurs authentifiés"
  ON public.waitlist
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);
```

### 4. Script complet (tout en un)

```sql
-- =============================================
-- SCRIPT COMPLET WAITLIST + RLS
-- Copier-coller ce script dans Supabase SQL Editor
-- =============================================

-- 1. Créer la table
CREATE TABLE IF NOT EXISTS public.waitlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  CONSTRAINT waitlist_email_unique UNIQUE (email)
);

CREATE INDEX IF NOT EXISTS idx_waitlist_email ON public.waitlist(email);
COMMENT ON TABLE public.waitlist IS 'Inscriptions à la waitlist beta Manae';

-- 2. Activer RLS
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- 3. Supprimer les anciennes politiques (si elles existent)
DROP POLICY IF EXISTS "Autoriser inscription waitlist anonyme" ON public.waitlist;
DROP POLICY IF EXISTS "Accès complet pour utilisateurs authentifiés" ON public.waitlist;

-- 4. Créer les nouvelles politiques
CREATE POLICY "Autoriser inscription waitlist anonyme"
  ON public.waitlist
  FOR INSERT
  TO anon
  WITH CHECK (
    first_name IS NOT NULL AND first_name <> '' AND
    last_name IS NOT NULL AND last_name <> '' AND
    email IS NOT NULL AND email <> '' AND
    email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  );

CREATE POLICY "Accès complet pour utilisateurs authentifiés"
  ON public.waitlist
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- 5. Vérification
SELECT
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd
FROM pg_policies
WHERE tablename = 'waitlist';
```

---

## Configuration du projet Next.js

### 1. Installer le SDK Supabase

```bash
npm install @supabase/supabase-js
```

### 2. Créer le fichier `.env.local`

```env
NEXT_PUBLIC_SUPABASE_URL=https://votre-projet.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre-clé-anon-publique
```

> **Important** : Ne jamais committer `.env.local` ! Il est déjà dans `.gitignore`.

### 3. Récupérer les clés Supabase

1. Aller sur [app.supabase.com](https://app.supabase.com)
2. Sélectionner votre projet
3. Settings → API
4. Copier :
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

---

## Logique de sécurité

### Pourquoi cette configuration est sécurisée

1. **RLS activé** : Aucun accès par défaut à la table
2. **INSERT uniquement** : Les anonymes ne peuvent QUE insérer, pas lire/modifier/supprimer
3. **Validation côté serveur** : La politique RLS valide le format email et les champs non vides
4. **Contrainte UNIQUE** : Impossible d'insérer deux fois le même email (erreur PostgreSQL 23505)
5. **Pas d'exposition des données** : Un attaquant ne peut pas lister les emails existants

### Matrice des permissions

| Rôle          | SELECT | INSERT | UPDATE | DELETE |
|---------------|--------|--------|--------|--------|
| anon          | ❌     | ✅     | ❌     | ❌     |
| authenticated | ✅     | ✅     | ✅     | ✅     |

---

## Gestion des erreurs

### Codes d'erreur PostgreSQL/Supabase

| Code   | Signification           | Message utilisateur                        |
|--------|-------------------------|--------------------------------------------|
| 23505  | Violation UNIQUE        | "Cet email est déjà inscrit !"             |
| 42501  | Violation RLS           | "Erreur de connexion. Réessaye."           |
| PGRST  | Erreur PostgREST        | "Erreur de connexion. Réessaye."           |
| other  | Erreur réseau/serveur   | "Erreur de connexion. Réessaye."           |

---

## Vérification

### Tester l'insertion anonyme

```sql
-- Simuler une insertion anonyme (depuis SQL Editor, ne fonctionnera pas car vous êtes authentifié)
-- Tester depuis le frontend ou via curl :

-- curl -X POST 'https://votre-projet.supabase.co/rest/v1/waitlist' \
--   -H "apikey: VOTRE_ANON_KEY" \
--   -H "Content-Type: application/json" \
--   -d '{"first_name":"Test","last_name":"User","email":"test@example.com"}'
```

### Vérifier les politiques actives

```sql
SELECT * FROM pg_policies WHERE tablename = 'waitlist';
```

### Vérifier les données

```sql
SELECT * FROM public.waitlist ORDER BY created_at DESC;
```

---

## Troubleshooting

### Erreur "new row violates row-level security policy"

1. Vérifier que RLS est activé : `ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;`
2. Vérifier que la politique INSERT existe
3. Vérifier que les données envoyées sont valides (email format, champs non vides)

### Erreur "duplicate key value violates unique constraint"

Email déjà inscrit. C'est le comportement attendu.

### Les insertions ne fonctionnent toujours pas

1. Vérifier les variables d'environnement `.env.local`
2. Redémarrer le serveur de développement
3. Vérifier les logs dans la console du navigateur
