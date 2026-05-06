// src/data/projectsData.js

export const projectsData = [
  {
    id: 1,
    title: "Planning Poker - Application Agile",
    category: "Full-Stack Web",
    description: "Application temps réel pour l'estimation agile en équipe. Système de vote par cartes avec rôles PM/Joueurs distincts, gestion de session multi-joueurs et interface responsive.",
    longDescription: "Développement d'une plateforme complète de Planning Poker permettant aux équipes agiles d'estimer la complexité des fonctionnalités. L'application supporte plusieurs modes de vote (unanimité, moyenne), la gestion de sessions temps réel, et offre une expérience utilisateur différenciée entre Product Manager et joueurs.",
    technologies: [
      "React 18",
      "Socket.io",
      "Zustand",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js"
    ],
    features: [
      "Système de vote temps réel multi-joueurs",
      "Rôles distincts PM/Joueur avec permissions",
      "Modes de jeu: Unanimité & Moyenne",
      "Import/Export de backlog JSON",
      "Animations fluides et micro-interactions",
      "Architecture modulaire et scalable"
    ],
    metrics: {
      duration: "3 mois",
      team: "Projet universitaire",
      status: "En cours"
    },
    gradient: "from-blue-500 to-purple-600",
    icon: "🎯"
  },
  {
    id: 2,
    title: "Moteur de Recherche Textuel",
    category: "Python / NLP",
    description: "Moteur de recherche développé from scratch en Python. Indexation de documents via APIs Reddit & Arxiv, implémentation de l'algorithme TF-IDF sans bibliothèques NLP externes.",
    longDescription: "Conception complète d'un moteur de recherche textuel comprenant l'acquisition de données via APIs, la modélisation POO, l'indexation avec TF-IDF, et une interface interactive Jupyter. Projet axé sur la compréhension profonde des mécanismes de recherche d'information.",
    technologies: [
      "Python",
      "API Reddit",
      "API Arxiv",
      "Jupyter Notebook",
      "POO",
      "Algorithme TF-IDF"
    ],
    features: [
      "Acquisition de données via APIs externes",
      "Implémentation TF-IDF from scratch",
      "Architecture POO robuste",
      "Interface Jupyter interactive",
      "Indexation et ranking de documents",
      "Gestion de projet en binôme"
    ],
    metrics: {
      duration: "4 mois",
      team: "Binôme",
      status: "Terminé"
    },
    gradient: "from-green-500 to-teal-600",
    icon: "🔍"
  },
  {
    id: 3,
    title: "Prédiction des Résultats Académiques",
    category: "Machine Learning",
    description: "Modèle ML pour orienter 200+ étudiants vers l'enseignement supérieur avec 87% de précision. Analyse de 5000+ observations avec Random Forest, Logistic Regression et RNN.",
    longDescription: "Développement d'un système prédictif complet pour l'orientation académique. Le projet inclut une analyse exploratoire approfondie, du feature engineering, la comparaison de plusieurs algorithmes ML/DL, et un tableau de bord Power BI pour la visualisation des résultats.",
    technologies: [
      "Python",
      "Scikit-Learn",
      "XGBoost",
      "TensorFlow",
      "Pandas",
      "NumPy",
      "Power BI"
    ],
    features: [
      "Analyse exploratoire de 5000+ observations",
      "Feature engineering avancé",
      "Comparaison Random Forest, LR, RNN",
      "87% de précision obtenue",
      "Dashboard Power BI interactif",
      "Orientation de 200+ étudiants"
    ],
    metrics: {
      duration: "4 mois (Mars-Juin 2024)",
      team: "SUPMTI, Maroc",
      status: "Terminé - Note 18/20"
    },
    gradient: "from-yellow-500 to-orange-600",
    icon: "🤖"
  },
  {
    id: 4,
    title: "Travel Paradise - Plateforme Touristique",
    category: "Full-Stack",
    description: "Plateforme touristique complète avec backend Symfony 6, API REST et application mobile React Native. Système de réservation temps réel avec 1000+ guides référencés.",
    longDescription: "Développement d'une solution full-stack pour le tourisme comprenant un backend robuste, une API REST sécurisée, et une application mobile cross-platform. Le projet intègre un système de réservation en temps réel, une authentification JWT, et une architecture conteneurisée.",
    technologies: [
      "Symfony 6",
      "React Native",
      "MySQL",
      "Docker",
      "API REST",
      "JWT",
      "PHP"
    ],
    features: [
      "Backend Symfony 6 modulaire",
      "API REST sécurisée",
      "Application mobile React Native",
      "Système de réservation temps réel",
      "Authentification JWT",
      "Conteneurisation Docker",
      "Tests unitaires complets"
    ],
    metrics: {
      duration: "3 mois (Avril-Juin 2025)",
      team: "École IT, Belgique",
      status: "Terminé - Note 18/20"
    },
    gradient: "from-pink-500 to-rose-600",
    icon: "✈️"
  }
];

export const skills = {
  dataScience: [
    { name: "Python", level: 90 },
    { name: "Machine Learning", level: 85 },
    { name: "Deep Learning", level: 80 },
    { name: "Scikit-Learn", level: 85 },
    { name: "TensorFlow", level: 75 },
    { name: "Pandas & NumPy", level: 90 },
    { name: "Power BI", level: 80 },
  ],
  development: [
    { name: "React / React Native", level: 85 },
    { name: "Node.js", level: 75 },
    { name: "Symfony 6", level: 80 },
    { name: "Python", level: 90 },
    { name: "MySQL / PostgreSQL", level: 80 },
    { name: "API REST", level: 85 },
    { name: "Docker", level: 75 },
  ],
  tools: [
    { name: "Git / GitHub", level: 85 },
    { name: "VS Code", level: 90 },
    { name: "Jupyter Notebook", level: 85 },
    { name: "Docker / Kubernetes", level: 70 },
    { name: "Agile / Scrum", level: 80 },
  ]
};

export const contact = {
  email: "marteoued11@gmail.com",
  location: "Lyon, France",
  linkedin: "marte-oued-5b1192325",
  github: "https://github.com/MarteOued" // Adapte avec ton vrai GitHub
};
