# 🐛 Debuggez une application React.JS - 724 Events

Une application React pour une agence événementielle, conçue comme un projet d'apprentissage en debugging et optimisation. Ce projet est un fork du projet pédagogique d'OpenClassrooms.

![React](https://img.shields.io/badge/React-18.0.0-61DAFB?logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-%3E%3Dv16.14.1-339933?logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-100%25-F7DF1E?logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-222?logo=github&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## ✨ Fonctionnalités

- 📅 **Gestion d'événements** - Affichage et gestion des événements d'une agence
- 🔍 **Recherche et filtrage** - Trouvez des événements selon vos critères
- 🎨 **Interface moderne** - Design responsive et attrayant
- 🧪 **Tests unitaires** - Suite de tests avec React Testing Library
- ♿ **Accessibilité** - ESLint avec plugin jsx-a11y pour l'accessibilité
- 💅 **Formatage de code** - Prettier intégré pour la cohérence du style
- 📱 **Optimisation** - Web Vitals et performances optimisées
- 🚀 **Déploiement automatisé** - GitHub Pages avec gh-pages

## 📋 Table des matières

- [Description du projet](#-description-du-projet)
- [Installation](#-installation)
- [Démarrage rapide](#-démarrage-rapide)
- [Scripts disponibles](#-scripts-disponibles)
- [Structure du projet](#-structure-du-projet)
- [Technologies utilisées](#-technologies-utilisées)
- [Configuration](#-configuration)
- [Développement](#-développement)
- [Tests](#-tests)
- [Déploiement](#-déploiement)
- [Debugging](#-debugging)
- [Contribution](#-contribution)

## 📖 Description du projet

**724 Events** est une application web destinée à présenter les services d'une agence événementielle. Ce projet est particulièrement utile pour :

- Apprendre les pratiques de **debugging en React**
- Comprendre les **bonnes pratiques de code** JavaScript
- Maîtriser les **tests unitaires** avec React Testing Library
- Améliorer la **qualité du code** avec ESLint et Prettier
- Optimiser les **performances** d'une application React

## 🔧 Prérequis

- **Node.js** v16.14.1 ou supérieur
- **npm** ou **yarn**
- Git (pour cloner le repository)

## 📥 Installation

### 1. Cloner le repository

```bash
git clone https://github.com/Justhiraga/Debuggez-une-application-React.JS.git
cd Debuggez-une-application-React.JS
```

### 2. Installer les dépendances

Avec **npm** :
```bash
npm install
```

Ou avec **yarn** :
```bash
yarn install
```

## 🚀 Démarrage rapide

### Mode développement

Lancer l'application en mode développement :

```bash
npm start
```

Ou avec yarn :
```bash
yarn start
```

L'application ouvrira automatiquement dans votre navigateur à `http://localhost:3000`

L'application se recharge automatiquement lorsque vous modifiez un fichier.

### Accès en ligne

L'application est déployée sur GitHub Pages :
👉 [724 Events - Live Demo](https://Justhiraga.github.io/Debuggez-une-application-React.JS)

## 📜 Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm start` | Lance le serveur de développement |
| `npm run build` | Crée un build optimisé pour la production |
| `npm test` | Lance la suite de tests en mode watch |
| `npm run lint` | Vérifie la qualité du code avec ESLint |
| `npm run format` | Formate le code avec Prettier |
| `npm run deploy` | Déploie sur GitHub Pages |
| `npm run predeploy` | Préparation avant déploiement (build) |

## 📁 Structure du projet

```
Debuggez-une-application-React.JS/
├── public/
│   ├── index.html          # Fichier HTML principal
│   └── favicon.ico         # Icône du site
├── src/
│   ├── components/         # Composants React réutilisables
│   ├── pages/             # Pages de l'application
│   ├── styles/            # Fichiers SASS/CSS
│   ├── App.js             # Composant principal
│   ├── App.test.js        # Tests du composant App
│   ├── index.js           # Point d'entrée
│   └── index.css           # Styles globaux
├── .eslintrc.js           # Configuration ESLint
├── package.json           # Dépendances et scripts
├── package-lock.json      # Versions exactes des dépendances
└── README.md              # Documentation

```

## 🛠️ Technologies utilisées

### Frontend
- **React 18.0.0** - Bibliothèque UI
- **React DOM 18.0.0** - Rendu DOM
- **SASS 1.51.0** - Préprocesseur CSS

### Testing & Quality
- **React Testing Library 13.1.1** - Tests de composants
- **Jest** - Framework de test (inclus dans react-scripts)
- **ESLint 8.14.0** - Linter JavaScript
- **ESLint Config Airbnb** - Configuration stricte ESLint
- **Prettier 2.6.2** - Formateur de code
- **ESLint Plugin JSX A11y** - Vérification accessibilité

### Utilities
- **md5 2.3.0** - Hachage MD5
- **prop-types 15.8.1** - Validation des props
- **web-vitals 2.1.4** - Métriques de performance

### Deployment
- **gh-pages 5.0.0** - Déploiement sur GitHub Pages
- **react-scripts 5.0.1** - Scripts et config Create React App

## ⚙️ Configuration

### ESLint

Configuration ESLint basée sur les bonnes pratiques d'Airbnb :

```json
{
  "extends": [
    "react-app",
    "react-app/jest",
    "airbnb",
    "prettier"
  ]
}
```

Lancer le linting :
```bash
npm run lint
```

### Prettier

Configuration pour formater automatiquement le code selon les standards du projet :

```bash
npm run format
```

### GitHub Pages

- **Homepage** : https://Justhiraga.github.io/Debuggez-une-application-React.JS
- Déploiement automatisé avec `gh-pages`

## 💻 Développement

### Bonnes pratiques

1. **Composants fonctionnels** - Privilégiez les composants fonctionnels avec hooks
2. **Props validation** - Utilisez PropTypes pour valider les props
3. **Tests** - Écrivez des tests pour vos composants
4. **Linting** - Respectez les règles ESLint
5. **Formatage** - Utilisez Prettier pour la cohérence du code
6. **Accessibilité** - Assurez-vous que votre code est accessible (a11y)

### Créer un nouveau composant

```jsx
import PropTypes from 'prop-types';
import './Component.scss';

function MyComponent({ title, onAction }) {
  return (
    <div className="my-component">
      <h2>{title}</h2>
      <button onClick={onAction}>Action</button>
    </div>
  );
}

MyComponent.propTypes = {
  title: PropTypes.string.isRequired,
  onAction: PropTypes.func.isRequired,
};

export default MyComponent;
```

## 🧪 Tests

Lancer la suite de tests :

```bash
npm test
```

Pour un seul passage :
```bash
npm test -- --watchAll=false
```

### Exemple de test

```jsx
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  const element = screen.getByText(/welcome/i);
  expect(element).toBeInTheDocument();
});
```

## 🚀 Déploiement

### Sur GitHub Pages

1. Assurez-vous que le repository est public
2. Lancez le déploiement :

```bash
npm run deploy
```

L'application sera déployée à : `https://Justhiraga.github.io/Debuggez-une-application-React.JS`

### Build pour production

```bash
npm run build
```

Le build optimisé sera généré dans le dossier `build/`

## 🐛 Debugging

### Tips pour déboguer une application React

1. **React DevTools** - Installez l'extension React DevTools pour votre navigateur
2. **Console du navigateur** - Utilisez `console.log()` pour déboguer
3. **Breakpoints** - Utilisez les DevTools du navigateur pour poser des breakpoints
4. **React Profiler** - Analysez les performances avec l'onglet Profiler
5. **Tests** - Écrivez des tests pour identifier les bugs rapidement

### Outils recommandés

- [React DevTools](https://react-devtools-tutorial.vercel.app/)
- [ESLint Plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier Extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## 🤝 Contribution

Les contributions sont bienvenues ! Pour contribuer :

1. **Fork** le repository
2. Créez une branche pour votre feature (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Poussez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une **Pull Request**

### Directives de contribution

- Respectez les règles ESLint (`npm run lint`)
- Formatez votre code avec Prettier (`npm run format`)
- Écrivez des tests pour vos changements
- Mettez à jour la documentation si nécessaire
- Utilisez des messages de commit clairs et descriptifs

## 📚 Ressources utiles

- [Documentation React officielle](https://react.dev/)
- [React Testing Library](https://testing-library.com/react)
- [ESLint Documentation](https://eslint.org/)
- [Prettier Documentation](https://prettier.io/)
- [OpenClassrooms - Debuggez une application React](https://openclassrooms.com/)
- [GitHub Pages Documentation](https://pages.github.com/)

## 👤 Auteur

**Justhiraga**
- GitHub: [@Justhiraga](https://github.com/Justhiraga)

## 📄 License

Ce projet est sous license MIT. Consultez le fichier LICENSE pour plus de détails.

---

**Créé le**: 27 novembre 2025  
**Dernière mise à jour**: 12 juin 2026

**Status du déploiement**: ✅ Actif sur GitHub Pages

Fait avec ❤️ par Justhiraga
