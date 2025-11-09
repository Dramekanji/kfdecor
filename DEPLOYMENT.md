# Guide de Déploiement - K&F Décor

## Options de Déploiement

### 1. Vercel (Recommandé)

Vercel est la plateforme de déploiement officielle de Next.js et offre le meilleur support.

#### Étapes :

1. **Créer un compte sur Vercel**
   - Allez sur [vercel.com](https://vercel.com)
   - Inscrivez-vous avec GitHub, GitLab ou Bitbucket

2. **Connecter votre repository**
   - Poussez votre code sur GitHub/GitLab/Bitbucket
   - Sur Vercel, cliquez "New Project"
   - Importez votre repository

3. **Configuration**
   - Vercel détectera automatiquement Next.js
   - Aucune configuration supplémentaire nécessaire
   - Cliquez "Deploy"

4. **Domaine personnalisé** (optionnel)
   - Dans les settings du projet
   - Ajoutez votre domaine personnalisé (ex: kfdecor.gn)

**Avantages** :
- Déploiement automatique à chaque push
- CDN global
- SSL gratuit
- Prévisualisation des branches
- Gratuit pour projets personnels

---

### 2. Netlify

Alternative populaire à Vercel.

#### Étapes :

1. Créer un compte sur [netlify.com](https://netlify.com)
2. Connecter votre repository Git
3. Configuration du build :
   - Build command : `npm run build`
   - Publish directory : `.next`
4. Déployer

---

### 3. Hébergement VPS (Linux)

Pour un contrôle total, utilisez un VPS (ex: DigitalOcean, Linode).

#### Prérequis :
- Node.js 18+ installé
- PM2 pour la gestion des processus
- Nginx comme reverse proxy

#### Étapes :

```bash
# 1. Cloner le projet
git clone [votre-repo]
cd kf-decor-site

# 2. Installer les dépendances
npm install

# 3. Build production
npm run build

# 4. Installer PM2
npm install -g pm2

# 5. Démarrer avec PM2
pm2 start npm --name "kf-decor" -- start

# 6. Configurer PM2 pour redémarrage auto
pm2 startup
pm2 save
```

#### Configuration Nginx :

```nginx
server {
    listen 80;
    server_name kfdecor.gn www.kfdecor.gn;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

### 4. Docker

Pour conteneuriser l'application.

#### Créer `Dockerfile` :

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

#### Créer `docker-compose.yml` :

```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

#### Commandes Docker :

```bash
# Build
docker-compose build

# Run
docker-compose up -d

# Stop
docker-compose down
```

---

## Variables d'Environnement

Pour la production, créez un fichier `.env.production` :

```bash
# Next.js
NEXT_PUBLIC_SITE_URL=https://kfdecor.gn

# Analytics (optionnel)
NEXT_PUBLIC_GA_ID=UA-XXXXXXXXX-X

# API (si vous ajoutez un backend)
NEXT_PUBLIC_API_URL=https://api.kfdecor.gn
```

---

## Checklist Avant Déploiement

- [ ] Tester le build en local : `npm run build && npm start`
- [ ] Vérifier que toutes les images sont optimisées
- [ ] Configurer les métadonnées SEO
- [ ] Tester sur mobile, tablette et desktop
- [ ] Vérifier les performances avec Lighthouse
- [ ] Configurer Google Analytics (optionnel)
- [ ] Configurer un domaine personnalisé
- [ ] Ajouter SSL/HTTPS
- [ ] Tester les formulaires
- [ ] Configurer les sauvegardes

---

## Maintenance

### Mise à jour du site :

```bash
# 1. Pull les derniers changements
git pull origin main

# 2. Installer nouvelles dépendances (si nécessaire)
npm install

# 3. Rebuild
npm run build

# 4. Redémarrer (PM2)
pm2 restart kf-decor

# Ou sur Vercel/Netlify : push automatiquement déploie
```

### Monitoring :

- Utilisez Vercel Analytics ou Google Analytics
- Configurez des alertes pour les erreurs
- Surveillez les performances

---

## Support et Problèmes

### Erreurs communes :

1. **Build échoue** : Vérifiez les dépendances avec `npm ci`
2. **Images ne chargent pas** : Vérifiez la configuration `next.config.js`
3. **Styles manquants** : Assurez-vous que Tailwind est bien configuré
4. **Erreur de mémoire** : Augmentez la mémoire Node : `NODE_OPTIONS=--max_old_space_size=4096`

---

## Sécurité

- Gardez les dépendances à jour : `npm audit` et `npm update`
- Ne commitez jamais les fichiers `.env`
- Utilisez HTTPS en production
- Limitez les requêtes API si vous en avez
- Configurez CSP (Content Security Policy)

---

Pour toute question : contact@kfdecor.gn
