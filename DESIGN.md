# DESIGN.md — Le Méditerranéen

Système de design du site, inspiré de deux références analysées en octobre 2026 :
**choukran.fr** (l'ambiance) et **kfc.fr** (l'efficacité). Le site est 100 % en français.

> **L'âme de Choukran, la clarté de KFC — avec notre identité bordeaux & crème.**

---

## 1. Ce qu'on retient des références

### Choukran — l'ambiance
- Identité **bicolore** très affirmée : une couleur profonde (vert `#1D3322`) utilisée à la fois
  pour le texte ET pour de grands blocs pleins, sur un fond crème `#FCF6EC`.
- Grands titres en MAJUSCULES, épais, qui occupent l'espace.
- Texte courant en **Syne**, graisse 600 : moderne, un peu de caractère.
- Détails (adresses, horaires) en police machine à écrire **Courier Prime**.
- Photos de plats vues du dessus, plein cadre.
- Une **voix** : phrases courtes, chaleureuses, avec de l'humour.
- Adresses présentées en cartes avec deux actions claires.

### KFC — l'efficacité
- **Grille de tuiles** de tailles différentes : 1 tuile = 1 message + 1 action.
- Le bouton d'action principal est **répété** sur la page.
- Titres **condensés, gras, en majuscules** : on les lit en une seconde.
- Boutons pleins, MAJUSCULES, arrondi 4px.
- Bandeau d'info en haut, header compact et collant.

---

## 2. Couleurs

```css
--cream:   #FBF4E6;  /* fond principal */
--sand:    #EFE3CC;  /* fonds secondaires, cartes */
--maroon:  #7C2233;  /* couleur signature : grands blocs pleins */
--ink:     #3A1019;  /* texte = bordeaux très foncé (comme le vert-texte de Choukran) */
--saffron: #E0A21B;  /* accent UNIQUE : prix, badges, boutons sur fond bordeaux */
```

Règles :
- Chaque section est **crème** (texte bordeaux) ou **bordeaux** (texte crème). Le sable sert de
  variation douce. Pas d'autre fond.
- Le safran ne dépasse pas ~5 % de la surface.
- Pas de dégradés décoratifs (seulement un voile sombre sur les photos pour lire le texte).

## 3. Typographie (Google Fonts)

| Rôle | Police | Style |
|---|---|---|
| Titres | **Anton** | MAJUSCULES, interligne 0.95–1.05 (condensé façon KFC, impact façon Choukran) |
| Texte, boutons, navigation | **Syne** | 400 / 600 / 700, texte 17px, interligne 1.65 |
| Étiquettes, prix, horaires | **Courier Prime** | 400 / 700, souvent en MAJUSCULES espacées |

Échelle : 13 · 15 · 17 · 22 · 32 · 48 · clamp(56px, 10vw, 140px) pour le hero.

## 4. Composants

- **Bouton** : Syne 700, MAJUSCULES, espacement 0.06em, padding 15px 26px, arrondi 4px.
  Variantes : `primaire` (bordeaux), `safran` (sur fond bordeaux), `contour`.
- **Tuile plat** : photo plein cadre, arrondi 14px, voile sombre en bas, titre Anton,
  étiquette prix Courier Prime sur fond safran.
- **Ligne de carte** : nom (Syne 700) · pointillés · prix (Courier Prime 700).
- **Onglets de carte** : pilules, l'onglet actif est plein bordeaux.
- **Bandeau défilant** : mots-clés en Anton séparés par une étoile à 8 branches (motif zellige).
- **Étoile 8 branches** : seul motif décoratif, rappel des zelliges marocains.
- **Header** : collant, 68px, bouton RÉSERVER toujours visible.
- **Barre mobile** : fixée en bas sous 820px, deux actions : APPELER / ITINÉRAIRE.

Arrondis : 4px (boutons), 14px (cartes, photos), 999px (pilules, badges).

## 5. Structure de la page

1. Bandeau info (horaires + adresse)
2. Header collant
3. Hero plein écran sur photo, titre géant, 2 boutons
4. Bandeau défilant
5. Nos incontournables — grille de tuiles
6. L'histoire — bloc bordeaux + photos cuisine + chiffres
7. La carte — onglets
8. La salle — galerie
9. Pâtisseries à emporter — bannière promo
10. Infos pratiques — carte adresse
11. Appel final + footer

## 6. Ton éditorial

Vouvoiement chaleureux, phrases courtes, titres qui se lisent en une seconde.
Vocabulaire français uniquement (les noms de plats restent : tajine, kefta, zaâlouk, briouates…).

## 7. À éviter

- Copier les logos, textes, photos ou polices propriétaires de Choukran ou KFC.
- Texte en arabe.
- Plus d'une couleur d'accent, ombres lourdes, dégradés décoratifs.
