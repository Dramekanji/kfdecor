# 🚀 Quick Start - K&F Décor

## Installation Rapide

```bash
# 1. Naviguer dans le dossier
cd kf-decor-site

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur : **http://localhost:3000**

## 🎉 C'est tout !

Votre site K&F Décor est maintenant en cours d'exécution.

---

## Navigation du Site

- **Page d'accueil** : http://localhost:3000
- **Catalogue produits** : http://localhost:3000/produits
- **À propos** : http://localhost:3000/a-propos
- **Contact** : http://localhost:3000/contact

---

## Tester les Fonctionnalités

### 1. Navigation
✅ Cliquez sur les liens du menu
✅ Testez le menu mobile (réduisez la fenêtre)
✅ Le menu devient sticky au scroll

### 2. Produits
✅ Cliquez "Explorer la Collection" sur la page d'accueil
✅ Testez les filtres par catégorie
✅ Triez par prix (croissant/décroissant)
✅ Cliquez "Ajouter" sur un produit

### 3. Panier
✅ Ajoutez plusieurs produits
✅ Observez le compteur dans le header
✅ Rechargez la page (le panier persiste avec localStorage)

### 4. Animations
✅ Scrollez les pages pour voir les animations
✅ Survolez les produits et boutons
✅ Observez les transitions fluides

### 5. Responsive
✅ Réduisez la fenêtre du navigateur
✅ Testez sur téléphone/tablette
✅ Le menu devient un hamburger
✅ Les filtres deviennent un overlay

---

## Personnalisation Rapide

### Changer les Couleurs

Éditez `tailwind.config.ts` :

```typescript
colors: {
  primary: '#027381',    // Votre couleur principale
  secondary: '#c1d9a5',  // Votre couleur secondaire
}
```

### Ajouter un Produit

Éditez `data/products.ts` et ajoutez :

```typescript
{
  id: 'nouveau-produit',
  name: 'Nom du Produit',
  description: 'Description du produit',
  price: 50000,
  currency: 'GNF',
  category: 'vases', // vases, miroirs, pots-de-fleurs, rideaux, tapis, plantes-artificielles, tableaux, luminaires, tables, coussins
  images: ['https://images.unsplash.com/...'],
  inStock: true,
  featured: true, // Afficher sur la page d'accueil
}
```

### Modifier le Texte

Les textes sont directement dans les fichiers des pages :
- `app/page.tsx` - Page d'accueil
- `app/produits/page.tsx` - Page produits
- `app/a-propos/page.tsx` - Page à propos
- `app/contact/page.tsx` - Page contact

---

## Build pour Production

```bash
# 1. Créer le build
npm run build

# 2. Tester le build localement
npm start

# 3. Le site sera sur http://localhost:3000
```

---

## Déploiement

### Option 1 : Vercel (Recommandé - Gratuit)

1. Créez un compte sur [vercel.com](https://vercel.com)
2. Poussez votre code sur GitHub
3. Importez le projet sur Vercel
4. Déployez en 1 clic !

### Option 2 : Netlify (Alternative - Gratuit)

1. Créez un compte sur [netlify.com](https://netlify.com)
2. Glissez-déposez le dossier `.next` après build
3. Votre site est en ligne !

📖 **Guide complet** : Voir `DEPLOYMENT.md`

---

## Besoin d'Aide ?

📁 **Documentation complète** : Lisez `PROJECT_SUMMARY.md`
🚀 **Guide de déploiement** : Consultez `DEPLOYMENT.md`
📖 **README** : Voir `README.md`

---

## Structure des Fichiers (Simplifié)

```
kf-decor-site/
├── app/                 # Pages du site
│   ├── page.tsx         # Page d'accueil
│   ├── produits/        # Page produits
│   ├── a-propos/        # Page à propos
│   └── contact/         # Page contact
├── components/          # Composants réutilisables
├── data/
│   └── products.ts      # PRODUITS - Modifiez ici !
├── lib/                 # Logique et types
└── tailwind.config.ts   # COULEURS - Modifiez ici !
```

---

## Problèmes Courants

### Le serveur ne démarre pas
```bash
# Supprimez node_modules et réinstallez
rm -rf node_modules
npm install
npm run dev
```

### Les styles ne s'appliquent pas
```bash
# Nettoyez le cache et rebuild
rm -rf .next
npm run dev
```

### Erreur de port (port 3000 occupé)
```bash
# Utilisez un autre port
PORT=3001 npm run dev
```

---

## 🎨 Aperçu du Design

- **Style** : Minimaliste et élégant
- **Couleurs** : Teal (#027381) et Sage (#c1d9a5)
- **Fonts** : Playfair Display (titres) + Inter (texte)
- **Animations** : Framer Motion
- **Responsive** : Mobile-first

---

## ✅ Checklist de Vérification

Avant de déployer, assurez-vous que :

- [ ] Le site fonctionne sur http://localhost:3000
- [ ] Toutes les pages sont accessibles
- [ ] Les animations fonctionnent
- [ ] Le panier ajoute des produits
- [ ] Le site est responsive (testez sur mobile)
- [ ] `npm run build` réussit sans erreur
- [ ] Les images se chargent correctement

---

**Vous êtes prêt à lancer K&F Décor ! 🎉**

Pour plus de détails, consultez la documentation complète dans les fichiers :
- `README.md`
- `PROJECT_SUMMARY.md`
- `DEPLOYMENT.md`
