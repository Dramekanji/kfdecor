# K&F Décor - Site E-Commerce de Décoration d'Intérieur

Site web moderne et élégant pour K&F Décor, boutique de décoration d'intérieur basée à Conakry, Guinée.

## 🎨 Caractéristiques

- **Design Moderne et Minimaliste** : Interface élégante avec animations fluides
- **Responsive** : Compatible mobile, tablette et desktop
- **Catalogue Produits** : Vases, miroirs, pots de fleurs, rideaux, tapis, fleurs artificielles
- **Filtrage et Tri** : Système de filtrage par catégorie et tri par prix
- **Panier d'Achat** : Gestion du panier avec localStorage
- **Animations Smoothes** : Utilisation de Framer Motion pour des animations professionnelles
- **Images Optimisées** : Next.js Image pour des performances optimales
- **SEO Optimisé** : Métadonnées appropriées et structure sémantique

## 🛠️ Technologies Utilisées

- **Next.js 14+** : Framework React avec App Router
- **TypeScript** : Typage fort pour une meilleure maintenabilité
- **Tailwind CSS** : Framework CSS utilitaire pour un design moderne
- **Framer Motion** : Bibliothèque d'animations
- **Lucide React** : Icônes modernes

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Lancer en production
npm start
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📁 Structure du Projet

```
kf-decor-site/
├── app/                    # Pages Next.js (App Router)
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   ├── produits/          # Page des produits
│   ├── a-propos/          # Page à propos
│   └── contact/           # Page de contact
├── components/            # Composants réutilisables
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ProductCard.tsx
│   ├── Button.tsx
│   └── ClientLayout.tsx
├── lib/                   # Utilitaires et types
│   ├── types.ts
│   └── CartContext.tsx
├── data/                  # Données statiques
│   └── products.ts
├── public/               # Assets statiques
└── tailwind.config.ts    # Configuration Tailwind

## 🎨 Palette de Couleurs

- **Primaire** : `#027381` (Teal/Turquoise)
- **Secondaire** : `#c1d9a5` (Vert sauge)
- **Fond** : `#FFFFFF` (Blanc)
- **Texte** : `#1a1a1a` (Gris foncé)

## 📱 Pages

### Accueil
- Hero section avec image plein écran
- Produits en vedette
- Aperçu "À Propos"
- Catégories de produits
- Section contact

### Produits
- Grille de produits avec filtres
- Filtrage par catégorie
- Tri par prix (croissant/décroissant)
- Version mobile avec sidebar coulissant

### À Propos
- Histoire de l'entreprise
- Valeurs et engagements
- Avantages compétitifs

### Contact
- Formulaire de contact
- Informations de contact
- Liens réseaux sociaux
- Placeholder pour carte interactive

## 🛒 Fonctionnalités du Panier

- Ajout de produits au panier
- Persistance des données avec localStorage
- Compteur d'articles dans le header
- Context API pour la gestion d'état

## 🔧 Configuration

### Personnalisation des Couleurs
Modifiez `tailwind.config.ts` pour ajuster les couleurs :

```typescript
colors: {
  primary: '#027381',
  secondary: '#c1d9a5',
  // ...
}
```

### Ajout de Produits
Modifiez `data/products.ts` pour ajouter de nouveaux produits.

### Images
Les images sont servies depuis Unsplash. Pour utiliser vos propres images :
1. Ajoutez-les dans `public/images/`
2. Mettez à jour les chemins dans les données des produits

## 📝 TODO / Améliorations Futures

- [ ] Intégration backend pour la gestion des produits
- [ ] Système de paiement (Mobile Money, etc.)
- [ ] Authentification utilisateur
- [ ] Suivi des commandes
- [ ] Panel d'administration
- [ ] Intégration Google Maps pour la localisation
- [ ] Newsletter fonctionnelle
- [ ] Système de recherche avancé
- [ ] Wishlist / Liste de souhaits
- [ ] Système d'avis clients

## 📄 Licence

Ce projet est développé pour K&F Décor, Conakry, Guinée.

## 👨‍💻 Support

Pour toute question ou assistance, contactez : contact@kfdecor.gn
```
