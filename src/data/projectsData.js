// src/data/projectsData.js

export const projectsData = [
  {
    id: 7,
    title: "Prévision Conso Électrique",
    category: "Séries temporelles",
    media: {
      type: "file",
      src: "/videos/series-temporelles-demo.mp4",
      thumbnail: "/projects/series-dashboard.jpg"
    },
    gallery: [
      { src: "/projects/series-dashboard.jpg", caption: "Tableau de bord Streamlit : dix ans de consommation" }
    ],
    description: "Prévision à 14 h des 24 valeurs horaires de consommation électrique de la France pour J+1, sans fuite d'information, avec 4 modèles comparés et un tableau de bord Streamlit.",
    longDescription: "Projet de séries temporelles (Lyon 2) basé sur les données RTE éCO2mix, SYNOP Météo-France et un calendrier construit à la main. Règle centrale : n'utiliser que l'information réellement disponible à 14 h. Imputation météo causale, benchmarks naïfs, modèles linéaires, gradient boosting et correction ARMA, réestimation mensuelle, puis test final utilisé une seule fois après gel écrit des choix.",
    impact: "MAE 1 331 MW (2,57 %) contre 3 205 MW pour la veille, soit -58 %, sur un test jamais utilisé pour régler les modèles",
    role: "Pipeline de données, modélisation, évaluation sans fuite, tests et tableau de bord",
    technologies: ["Python", "Pandas", "Scikit-Learn", "Statsmodels", "Streamlit", "Pytest", "Jupyter"],
    features: [
      "Protocole anti-fuite : seule l'information connue à 14 h est utilisée, validée par un test d'invariance et 508 tests automatisés",
      "Imputation spatiale et temporelle causale de 40 stations météo SYNOP",
      "Benchmarks naïfs, modèles linéaires par heure, gradient boosting et correction ARMA",
      "Apprentissage 2016-2022, validation 2023, test 2024-2025 et bonus 2026",
      "Significativité des écarts (Diebold-Mariano) et analyse des pires jours",
      "Tableau de bord Streamlit en 12 pages, couleurs adaptées aux daltoniens"
    ],
    links: {
      demo: "https://prevision-electricite-france.streamlit.app/",
      github: "https://github.com/MarteOued/Projet-series-temporelles"
    },
    metrics: {
      duration: "Octobre 2026",
      team: "Projet en binôme, Université Lyon 2",
      status: "Terminé"
    },
    gradient: "from-sky-500 to-indigo-600",
    icon: "⚡"
  },
  {
    id: 9,
    title: "Co-clustering Ordinal (package R)",
    category: "Statistiques / ML",
    media: {
      type: "image",
      thumbnail: "/projects/coclustering-schema.png"
    },
    description: "Package R de co-clustering de données ordinales : modèle à blocs latents avec loi CUB, estimation par SEM-Gibbs et sélection du modèle par critère ICL.",
    longDescription: "Projet de M2 MALIA (Model-based learning) : développement d'un package R qui regroupe simultanément les lignes et les colonnes d'une matrice de notes ordinales. Chaque bloc suit une loi CUB, l'inférence se fait par un algorithme SEM-Gibbs lancé depuis plusieurs partitions aléatoires, et le meilleur essai est choisi par le critère ICL, qui sert aussi à comparer plusieurs nombres de groupes.",
    impact: "Package R documenté et testé, avec simulateur de données et sélection du modèle par ICL",
    role: "Développement du package : modèle, algorithme SEM-Gibbs, simulation, tests et documentation",
    technologies: ["R", "Modèle à blocs latents", "CUB", "SEM-Gibbs", "ICL", "testthat"],
    features: [
      "Modèle à blocs latents avec loi CUB dans chaque bloc",
      "Algorithme SEM-Gibbs avec plusieurs initialisations aléatoires",
      "Sélection du nombre de groupes de lignes et de colonnes par critère ICL",
      "Simulateur de données ordinales selon le modèle",
      "Tests unitaires par module, aide en ligne et vignette",
      "Installation en package R standard"
    ],
    links: {
      github: "https://github.com/asmabahrini453/ordinalClust"
    },
    metrics: {
      duration: "Octobre 2026",
      team: "Projet en binôme, Université Lyon 2",
      status: "Terminé"
    },
    gradient: "from-indigo-500 to-violet-600",
    icon: "🧩"
  },
  {
    id: 8,
    title: "Mali Élevage Restaurant",
    category: "Full-Stack",
    media: {
      type: "file",
      src: "/videos/mali-elevage-demo.mp4",
      thumbnail: "/projects/mali-site.jpg"
    },
    gallery: [
      { src: "/projects/mali-site.jpg", caption: "Site public Mali Poulet : commande en ligne" },
      { src: "/projects/mali-gestion.jpg", caption: "Application de gestion : prévisions financières" }
    ],
    description: "Application de gestion de restaurant en production pour un client réel : caisse, cuisine temps réel, stocks, livraison, salaires et commande en ligne, déployée avec Docker et CI/CD.",
    longDescription: "Projet de stage chez Oued Services, développé en solo : conception et développement d'une plateforme complète pour un restaurant. API Django REST de 14 applications et 41 tables PostgreSQL, interface React par rôle (8 rôles), écran cuisine en WebSocket, site public de commande en ligne avec comptes clients, facturation PDF, journal d'audit et déploiement sur VPS derrière Caddy avec pipeline GitHub Actions.",
    impact: "En production : 14 apps Django, 41 tables, 8 rôles, 47 migrations, CI/CD",
    role: "Développement solo : full-stack, base de données, déploiement et CI/CD",
    technologies: ["Django", "Django REST Framework", "Channels", "React", "PostgreSQL", "Redis", "Docker", "Caddy", "GitHub Actions", "Vitest"],
    features: [
      "Caisse sur place, emporter et livraison avec coupons, PIN employé et déduction automatique du stock selon les recettes",
      "Cuisine (KDS) en temps réel par WebSocket, avec repli par polling",
      "Livraison avec code de confirmation, commande en ligne, comptes clients et programme de fidélité",
      "Stocks, achats, dépenses, salaires, congés, planning et pointage des employés",
      "Authentification JWT en cookies httpOnly, CSRF, limitation de débit et journal d'audit",
      "Factures et rapports PDF, sauvegardes PostgreSQL quotidiennes, déploiement Docker Compose automatisé"
    ],
    links: {
      github: "https://github.com/MarteOued/mali-elevage-restaurant"
    },
    metrics: {
      duration: "Mai - Août 2026",
      team: "Stage chez Oued Services, développement en solo",
      status: "En production"
    },
    gradient: "from-orange-500 to-red-600",
    icon: "🍗"
  },
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
    description: "Entrepôt de données hospitalier : 10 000 consultations, 7 tables, modèle en étoile enrichi en flocon, 9 KPIs et 2 tableaux de bord Tableau interactifs avec drill-down.",
    longDescription: "Projet BI couvrant toute la chaîne décisionnelle : prétraitement de données médicales, contrôles qualité, modélisation en étoile, enrichissement métier, création d'indicateurs et dashboards Tableau pour suivre activité, coûts et tendances.",
    impact: "10 000 consultations, 7 tables, 9 KPIs, 2 dashboards Tableau avec drill-down",
    role: "ETL Python, modélisation décisionnelle, KPI et dashboards Tableau",
    technologies: ["Python", "Pandas", "NumPy", "Tableau", "ETL", "OLAP", "Data Warehouse", "Star Schema"],
    features: [
      "Pipeline ETL documenté avec vérifications qualité",
      "Modèle en étoile avec table de faits consultations",
      "Dimensions Diagnostic et Traitement créées par normalisation",
      "Hiérarchies temporelles et segmentation patients",
      "9 KPIs métier : coût total, durée moyenne, top services",
      "Deux tableaux de bord Tableau interactifs avec drill-down"
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
  analysis: [
    "Python (Pandas, NumPy)", "SQL (PostgreSQL, MySQL)", "SAS", "R", "EDA", "Feature Engineering",
    "Statistiques descriptives", "VBA", "Excel avancé"
  ],
  bi: [
    "Power BI (DAX, Power Query)", "Tableau", "Matplotlib", "Seaborn", "Plotly", "Streamlit",
    "ETL", "Data Warehouse", "OLAP"
  ],
  ml: [
    "Apprentissage supervisé et non supervisé", "Régression", "Classification", "Scikit-Learn", "XGBoost",
    "Random Forest", "SVM", "ACP / PCA", "Clustering / Co-clustering", "Séries temporelles (ACF / PACF)",
    "Validation croisée", "Réseaux de neurones", "PyTorch", "Keras", "TensorFlow", "NLP"
  ],
  genai: ["LLM (API OpenAI, prompt engineering)", "Ollama", "RAG", "spaCy", "TF-IDF"],
  mlops: [
    "MLOps", "MLflow", "Docker", "Kubernetes", "AWS", "Databricks", "Airflow", "Git / GitHub",
    "pytest", "FastAPI", "Dataiku", "Jupyter Notebook", "Agile / Scrum", "Jira", "UML"
  ],
  web: [
    "JavaScript", "TypeScript", "HTML / CSS", "Tailwind CSS", "React", "React Native",
    "Node.js / Express", "Django REST", "FastAPI", "Symfony 7 / PHP", "API REST", "WebSocket / Socket.io", "JWT"
  ],
  soft: ["Adaptabilité interculturelle (4 pays, 4 écoles)", "Autonomie", "Curiosité", "Vision end-to-end", "Rigueur"]
};

export const contact = {
  email: "marteoued11@gmail.com",
  location: "Lyon, France",
  linkedin: "marte-oued-5b1192325",
  github: "MarteOued"
};
