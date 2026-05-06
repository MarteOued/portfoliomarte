// src/data/projectsData.js

export const projectsData = [
  {
    id: 1,
    title: "Bac Prediction ML",
    category: "Machine Learning",
    media: {
      type: "video",
      url: "https://www.youtube.com/embed/q1m8X7rNJnU",
      thumbnail: "/projects/bac-prediction.png"
    },
    description: "Système de prédiction de réussite au baccalauréat avec 4 modèles comparés, 88,9% d'accuracy et une interface Streamlit pour identifier les élèves à accompagner.",
    longDescription: "Refonte complète d'un projet ML académique en vrai cas d'usage data science : nettoyage de données scolaires, feature engineering par élève, comparaison de modèles, validation croisée et application interactive pour estimer le niveau de risque.",
    impact: "88,9% d'accuracy, AUC 0,908, +18 points vs baseline",
    role: "Data scientist : préparation, entraînement, évaluation, interface",
    technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Streamlit", "Plotly", "Joblib"],
    features: [
      "Pipeline de nettoyage robuste pour notes au format français",
      "Feature engineering sur l'historique lycée",
      "Comparaison Logistic Regression, Random Forest, Gradient Boosting et MLP",
      "Validation croisée stratifiée 5-fold",
      "Interface de prédiction avec niveaux de risque",
      "Visualisations de performance et importance des variables"
    ],
    links: {
      demo: "https://youtu.be/q1m8X7rNJnU",
      github: "https://github.com/MarteOued/bac-prediction-ml"
    },
    metrics: {
      duration: "Projet refondu en 2026",
      team: "Projet individuel",
      status: "Terminé"
    },
    gradient: "from-yellow-500 to-orange-600",
    icon: "🤖"
  },
  {
    id: 2,
    title: "LLM Émotions B2B",
    category: "IA Générative",
    media: {
      type: "video",
      url: "https://www.youtube.com/embed/0IhQ_Ob7zjs",
      thumbnail: "/projects/llm-emotions-b2b.png"
    },
    description: "Prototype de prompt engineering qui étudie les variations linguistiques contrôlées d'un LLM sur des scénarios d'échec client B2B.",
    longDescription: "Conception d'un outil de recherche appliquée autour des LLM : scénarios B2B neutres, paramètres de registre émotionnel et de familiarité, génération en mode OpenAI ou mock, métriques linguistiques et comparaison des réponses.",
    impact: "60 combinaisons testables, mode réel ou mock, export CSV",
    role: "Conception produit, prompt engineering, métriques et interface Streamlit",
    technologies: ["Python", "OpenAI API", "GPT-4o mini", "Streamlit", "Plotly", "Pandas", "Prompt Engineering"],
    features: [
      "Scénarios B2B réalistes : SaaS, logistique, facturation, SLA, support",
      "60 combinaisons linguistiques : 5 scénarios x 4 émotions x 3 familiarités",
      "Mode OpenAI réel et mode mock gratuit",
      "Méta-prompt avec contraintes éthiques explicites",
      "Métriques automatiques : mots, reconnaissance, action, formalité",
      "Comparaison côte à côte et export de l'historique"
    ],
    links: {
      demo: "https://youtu.be/0IhQ_Ob7zjs",
      github: "https://github.com/MarteOued/llm-emotions-b2b-prototype"
    },
    metrics: {
      duration: "2026",
      team: "Projet individuel",
      status: "Terminé"
    },
    gradient: "from-violet-500 to-fuchsia-600",
    icon: "🧠"
  },
  {
    id: 3,
    title: "Hospital BI Warehouse",
    category: "Data / BI",
    media: {
      type: "image",
      thumbnail: "/projects/hospital-bi-dashboard.svg"
    },
    description: "Système décisionnel hospitalier complet : ETL Python, modèle en étoile, dimensions enrichies et 3 dashboards Tableau orientés décision.",
    longDescription: "Projet BI couvrant toute la chaîne décisionnelle : prétraitement de données médicales, contrôles qualité, modélisation en étoile, enrichissement métier, création d'indicateurs et dashboards Tableau pour suivre activité, coûts et tendances.",
    impact: "1 table de faits, 6 dimensions, 3 dashboards stratégiques",
    role: "ETL Python, modélisation décisionnelle, KPI et dashboards Tableau",
    technologies: ["Python", "Pandas", "NumPy", "Tableau", "Data Warehouse", "Star Schema", "ETL"],
    features: [
      "Pipeline ETL documenté avec vérifications qualité",
      "Modèle en étoile avec table de faits consultations",
      "Dimensions Diagnostic et Traitement créées par normalisation",
      "Hiérarchies temporelles et segmentation patients",
      "KPI métier : coût total, durée moyenne, top services",
      "Dashboards Vue globale, Analyse médicale et Analyse financière"
    ],
    links: {
      github: "https://github.com/MarteOued/hospital-bi-warehouse"
    },
    metrics: {
      duration: "2026",
      team: "Projet universitaire",
      status: "Terminé"
    },
    gradient: "from-cyan-500 to-emerald-600",
    icon: "🏥"
  },
  {
    id: 4,
    title: "Planning Poker Agile",
    category: "Full-Stack",
    media: {
      type: "video",
      url: "https://www.youtube.com/embed/S6byfQvaLzY",
      thumbnail: "/projects/PLANINIG.png"
    },
    description: "Application collaborative temps réel pour l'estimation agile : sessions par code, WebSocket, votes Fibonacci, sauvegarde, export et tests automatisés.",
    longDescription: "Développement d'une plateforme complète de Planning Poker pour équipes agiles. L'application distingue organisateur et joueurs, gère le vote en temps réel, automatise les modes de validation et conserve les résultats pour le suivi projet.",
    impact: "Sessions multi-joueurs, sauvegarde, export JSON et tests Jest",
    role: "Backend, WebSocket, logique métier, tests et CI",
    technologies: ["React 18", "Node.js", "Express", "Socket.io", "Zustand", "Tailwind CSS", "Jest"],
    features: [
      "Création et jonction de sessions par code unique",
      "Communication temps réel entre participants",
      "Modes Strict et Moyenne avec règles Fibonacci",
      "Import/export de backlog JSON",
      "Pause collaborative avec sauvegarde de session",
      "Tests automatisés et documentation JSDoc"
    ],
    links: {
      demo: "https://youtu.be/S6byfQvaLzY",
      github: "https://github.com/MarteOued/agile-planning-poker"
    },
    metrics: {
      duration: "1 mois",
      team: "Projet en binôme",
      status: "Terminé"
    },
    gradient: "from-blue-500 to-purple-600",
    icon: "🎯"
  },
  {
    id: 5,
    title: "AI Search Engine",
    category: "Python / NLP",
    media: {
      type: "video",
      url: "https://www.youtube.com/embed/tBKR8ohQx30",
      thumbnail: "/projects/nlp-search.png"
    },
    description: "Moteur de recherche d'information sur l'IA, construit from scratch en Python avec corpus Reddit/Arxiv, TF-IDF, similarité cosinus et interface Streamlit.",
    longDescription: "Conception d'un moteur de recherche textuel complet pour comprendre les fondations de la recherche d'information : acquisition multi-sources, architecture POO, indexation TF-IDF et dashboard analytique.",
    impact: "Pipeline complet : collecte, indexation, ranking, analytics",
    role: "Architecture POO, NLP, interface et visualisations",
    technologies: ["Python", "Streamlit", "Plotly", "Pandas", "NumPy", "Reddit API", "Arxiv API", "TF-IDF"],
    features: [
      "Acquisition de documents via Reddit et Arxiv",
      "Architecture POO avec Singleton et Factory",
      "Implémentation TF-IDF from scratch",
      "Similarité cosinus et ranking des résultats",
      "Dashboard analytique du corpus",
      "Filtres dynamiques par source, période et nombre de résultats"
    ],
    links: {
      demo: "https://youtu.be/tBKR8ohQx30",
      github: "https://github.com/MarteOued/ai-search-engine"
    },
    metrics: {
      duration: "Projet refondu en 2026",
      team: "Projet en binôme",
      status: "Terminé"
    },
    gradient: "from-green-500 to-teal-600",
    icon: "🔍"
  },
  {
    id: 6,
    title: "Travel Paradise",
    category: "Full-Stack",
    media: {
      type: "video",
      url: "https://www.youtube.com/embed/m1KQmbto6oo",
      thumbnail: "/projects/i1.jpg"
    },
    description: "Plateforme touristique full-stack avec backend Symfony 7, API REST sécurisée et application mobile React Native.",
    longDescription: "Développement d'une solution complète pour le tourisme : backend modulaire, API REST, authentification JWT, application mobile cross-platform et architecture conteneurisée.",
    impact: "Backend API, mobile app, authentification et réservation",
    role: "Développement full-stack web/mobile",
    technologies: ["Symfony 7", "React Native", "PostgreSQL", "Docker", "API REST", "JWT", "PHP"],
    features: [
      "Backend Symfony 7 modulaire",
      "API REST sécurisée",
      "Application mobile React Native",
      "Système de réservation",
      "Authentification JWT",
      "Conteneurisation Docker"
    ],
    links: {
      demo: "https://youtu.be/m1KQmbto6oo",
      github: "https://github.com/Dechogt/Projet-FAP"
    },
    metrics: {
      duration: "Avril - Juin 2025",
      team: "École IT, Belgique",
      status: "Terminé - Note 19/20"
    },
    gradient: "from-pink-500 to-rose-600",
    icon: "✈️"
  }
];

export const skills = {
  dataScience: [
    { name: "Python", level: 90 },
    { name: "Machine Learning", level: 86 },
    { name: "Prompt Engineering / LLM", level: 84 },
    { name: "Scikit-Learn", level: 85 },
    { name: "Pandas & NumPy", level: 90 },
    { name: "Data Visualization", level: 84 },
    { name: "PySpark / Dataiku", level: 72 },
    { name: "BI Tableau / Power BI", level: 82 },
  ],
  development: [
    { name: "React / React Native", level: 85 },
    { name: "Node.js / Express", level: 78 },
    { name: "Symfony 7 / PHP", level: 80 },
    { name: "Streamlit", level: 88 },
    { name: "SQL / PostgreSQL", level: 84 },
    { name: "FastAPI", level: 78 },
    { name: "API REST", level: 85 },
    { name: "Docker", level: 75 },
  ],
  tools: [
    { name: "Git / GitHub", level: 85 },
    { name: "Jupyter Notebook", level: 88 },
    { name: "Tableau / Power BI", level: 82 },
    { name: "Airflow / MLflow", level: 68 },
    { name: "Tests Jest", level: 74 },
    { name: "Agile / Scrum", level: 82 },
    { name: "ETL & Data Warehouse", level: 78 },
  ]
};

export const contact = {
  email: "marteoued11@gmail.com",
  location: "Lyon, France",
  linkedin: "marte-oued-5b1192325",
  github: "MarteOued"
};
