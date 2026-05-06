// src/components/Services.jsx
import { motion } from 'framer-motion';
import { BarChart3, Brain, Code2, Database, TrendingUp, Zap, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: BarChart3,
      question: "Vous avez trop de données et pas assez d'insights ?",
      title: "Analyse & Visualisation de Données",
      description: "Je transforme vos données brutes en insights actionnables grâce à des analyses approfondies et des dashboards interactifs.",
      solutions: [
        "Analyse exploratoire des données (EDA)",
        "Création de dashboards Power BI / Tableau",
        "Identification de tendances et opportunités",
        "Rapports automatisés et personnalisés"
      ],
      technologies: ["Python", "Power BI", "Pandas", "Matplotlib"],
      gradient: "from-blue-500 to-cyan-500",
      color: "blue"
    },
    {
      id: 2,
      icon: Brain,
      question: "Vous voulez prédire le comportement de vos clients ?",
      title: "Modèles Prédictifs & Machine Learning",
      description: "Je développe des modèles ML sur mesure pour anticiper les tendances, optimiser vos décisions et maximiser votre ROI.",
      solutions: [
        "Modèles de prédiction (churn, ventes, performances)",
        "Systèmes de recommandation personnalisés",
        "Classification et segmentation intelligente",
        "Optimisation et fine-tuning des algorithmes"
      ],
      technologies: ["Scikit-Learn", "TensorFlow", "XGBoost", "Python"],
      gradient: "from-purple-500 to-pink-500",
      color: "purple"
    },
    {
      id: 3,
      icon: Code2,
      question: "Vous avez besoin d'une application moderne ?",
      title: "Développement Full-Stack",
      description: "Je conçois des applications web et mobile performantes, scalables et élégantes qui répondent précisément à vos besoins métier.",
      solutions: [
        "Applications web React modernes et responsive",
        "APIs REST sécurisées et performantes",
        "Applications mobiles cross-platform (React Native)",
        "Intégration de solutions ML dans vos apps"
      ],
      technologies: ["React", "Node.js", "Symfony", "PostgreSQL"],
      gradient: "from-orange-500 to-red-500",
      color: "orange"
    },
    {
      id: 4,
      icon: Database,
      question: "Vos processus manuels vous font perdre du temps ?",
      title: "Automatisation & Pipelines de Données",
      description: "J'automatise vos tâches répétitives et crée des pipelines robustes pour traiter, nettoyer et exploiter vos données efficacement.",
      solutions: [
        "Scripts d'automatisation Python sur mesure",
        "Pipelines ETL (Extract, Transform, Load)",
        "Web scraping et collecte de données",
        "Intégration d'APIs et connecteurs multiples"
      ],
      technologies: ["Python", "Docker", "APIs", "Jupyter"],
      gradient: "from-green-500 to-teal-500",
      color: "green"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Découverte",
      description: "Analyse de vos besoins et objectifs"
    },
    {
      step: "02",
      title: "Stratégie",
      description: "Proposition de solution technique adaptée"
    },
    {
      step: "03",
      title: "Développement",
      description: "Réalisation avec feedback réguliers"
    },
    {
      step: "04",
      title: "Livraison",
      description: "Déploiement et formation si nécessaire"
    }
  ];

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/30 rounded-full mb-6">
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Ce que je peux apporter à votre équipe
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            De l'analyse de données à la mise en production, je peux contribuer sur toute la chaîne data et produit.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 rounded-3xl blur-2xl transition-opacity duration-500`} />
              
              {/* Card */}
              <div className="relative h-full bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-3xl border border-white/10 p-8 hover:border-white/30 transition-all duration-500">
                
                {/* Icon */}
                <div className="mb-6">
                  <div className={`inline-flex w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl items-center justify-center group-hover:scale-110 transition-transform`}>
                    <service.icon size={32} className="text-white" />
                  </div>
                </div>

                {/* Question */}
                <div className="mb-4">
                  <p className="text-gray-400 italic text-sm mb-2">❓ {service.question}</p>
                  <h3 className="text-2xl font-black text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text transition-all">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Solutions List */}
                <div className="space-y-3 mb-6">
                  {service.solutions.map((solution, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle size={20} className={`text-${service.color}-400 mt-0.5 flex-shrink-0`} />
                      <span className="text-gray-300 text-sm">{solution}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-semibold text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              Comment je travaille
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Un processus simple et efficace pour garantir votre satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl border border-white/10 p-6 text-center hover:border-primary/50 transition-all">
                  <div className="text-5xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-400">
                    {item.description}
                  </p>
                </div>
                
                {/* Arrow between steps */}
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight size={24} className="text-primary" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
          <div className="relative bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm border border-primary/30 rounded-3xl p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              Une alternance data / IA à pourvoir ?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Je recherche une alternance à partir de septembre 2026, avec mobilité France entière.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-xl font-bold text-white shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span>Discutons d'une opportunité</span>
                <ArrowRight size={20} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
