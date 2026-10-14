# Le Méditerranéen — Site vitrine

Site vitrine du restaurant marocain **Le Méditerranéen**, 53 rue Sambin, 21000 Dijon.

## Structure du projet

```
le-mediterraneen/
├── index.html          # Page principale
├── css/
│   └── style.css       # Tous les styles
├── js/
│   └── main.js         # Copie du numéro de téléphone au clic
├── images/
│   ├── dishes/          # Photos des plats
│   ├── interior/        # Photos de la salle et de la terrasse
│   └── kitchen/         # Photos de la cuisine / préparation
└── README.md
```

## Développement local

Aucune installation n'est nécessaire : c'est du HTML/CSS/JS statique.
Pour prévisualiser le site en local, ouvrez simplement `index.html` dans un
navigateur, ou lancez un petit serveur local, par exemple :

```bash
python3 -m http.server 8000
```

puis ouvrez `http://localhost:8000`.

## Déploiement (Netlify)

Ce projet est prévu pour être connecté à Netlify via GitHub (déploiement
continu) :

1. Poussez ce dossier sur un dépôt GitHub.
2. Dans Netlify : **Project configuration → Build & deploy → Link repository**,
   puis sélectionnez ce dépôt.
3. Aucune commande de build n'est nécessaire (site statique) — laissez les
   champs "Build command" vides et "Publish directory" sur `.` (racine).
4. Chaque `git push` sur la branche principale redéploiera automatiquement
   le site.

## Modifier le site

- **Textes, horaires, carte** : tout est dans `index.html`.
- **Couleurs, typographie, mise en page** : dans `css/style.css` (variables
  de couleur en haut du fichier, sous `:root`).
- **Photos** : remplacez les fichiers dans `images/` en gardant les mêmes
  noms, ou mettez à jour les chemins `src` dans `index.html` si vous changez
  les noms de fichiers.
