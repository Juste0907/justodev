# Portfolio Dominic

Portfolio professionnel créé avec **Next.js 14**, **Tailwind CSS**, et **TypeScript**.

## 🚀 Démarrage rapide

1. **Installer les dépendances**
   ```bash
   npm install
   ```

2. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```
   Ouvrez [http://localhost:3000](http://localhost:3000).

## 📁 Structure du projet

- `/app` : Pages et routes (App Router).
- `/components` : Composants React réutilisables.
  - `/ui` : Composants de base (Button, etc.).
  - `/layout` : Header, Footer.
- `/content/blog` : Articles de blog en MDX.
- `/lib` : Utilitaires et configuration.
- `/public` : Images et assets statiques.

## 📝 Gestion du contenu

### Ajouter un article de blog
Créez un dossier dans `content/blog/` (ex: `mon-article`) et ajoutez un fichier `index.mdx` avec le frontmatter suivant :

```yaml
---
title: "Titre de l'article"
description: "Description courte"
date: "YYYY-MM-DD"
tags: ["Tag1", "Tag2"]
---
```

### Ajouter un projet
Modifiez le fichier `lib/projects.ts` et ajoutez un objet au tableau `projects`.

## 🛠 Déploiement

Ce projet est optimisé pour **Netlify**.
1. Connectez votre repo GitHub à Netlify.
2. Build command : `npm run build`.
3. Publish directory : `.next`.

## 🎨 Design System

Le design utilise Tailwind CSS avec des couleurs personnalisées définies dans `tailwind.config.ts`.
- **Marque** : Bronze/Cuivre (`brand-500`, `brand-600`).
- **Fond** : Noir profond (`#0a0a0a`).
- **Police** : Inter (Google Fonts).

---

Développé par [Antigravity].
