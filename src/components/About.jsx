// src/components/About.jsx
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award, Sparkles, Target, Zap, Globe } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: "Master 2 Machine Learning for AI (MALIA)",
      school: "Université Lumière Lyon 2, campus de Bron",
      period: "2026 - 2027",
      icon: GraduationCap,
      gradient: "from-purple-500 to-pink-500",
      status: "En cours"
    },
    {
      degree: "Master 1 Informatique, parcours Data Science",
      school: "Université Lumière Lyon 2",
      period: "2025 - 2026",
      icon: GraduationCap,
      gradient: "from-emerald-500 to-teal-500",
      status: "Validé"
    },
    {
      degree: "Bachelor Développement & Intelligence Artificielle",
      school: "ECOLE-IT, Bruxelles, Belgique",
      period: "2024 - 2025",
      icon: Award,
      gradient: "from-blue-500 to-cyan-500",
      status: "Diplômée"
    },
    {
      degree: "Licence Génie Logiciel & Systèmes d'Information",
      school: "SUPMTI, Rabat, Maroc",
      period: "2022 - 2024",
      icon: GraduationCap,
      gradient: "from-orange-500 to-yellow-500",
      status: "Diplômée"
    },
  ];

  const highlights = [
    { 
      icon: Target,
      label: "Data Science", 
      value: "Machine Learning, séries temporelles, co-clustering",
      gradient: "from-purple-500 to-pink-500"
    },
    { 
      icon: Zap,
      label: "Développement", 
      value: "Full-Stack Web & Mobile",
      gradient: "from-blue-500 to-cyan-500"
    },
    { 
      icon: Globe,
      label: "Langages", 
      value: "Python, R, SQL, JavaScript",
      gradient: "from-green-500 to-teal-500"
    },
    { 
      icon: Calendar,
      label: "Recherche", 
      value: "Stage ML / IA, 4 à 6 mois dès mars 2027",
      gradient: "from-orange-500 to-red-500"
    },
  ];

  return (
    <section id="about" className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-full blur-3xl"
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
              Découvrez mon profil
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              À Propos de Moi
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Un profil hybride data, IA et développement, orienté projets concrets et impact métier
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Main Story Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity" />
              <div className="relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                    <Sparkles size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-white">Mon Parcours</h3>
                </div>
                
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Étudiante en <span className="text-white font-bold">Master 2 Machine Learning for AI (MALIA)</span> à l'Université Lumière Lyon 2, je me spécialise dans le <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold">Machine Learning et l'IA</span>.
                  </p>
                  <p>
                    Je conçois des modèles de bout en bout : prévision de la consommation électrique nationale (<span className="text-primary font-bold">MAE de 1 331 MW</span> sur un test jamais utilisé pour régler les modèles), prédiction de résultats académiques (<span className="text-primary font-bold">88,9 % de précision</span>), package R de co-clustering et prototype d'IA générative.
                  </p>
                  <p>
                    Mon objectif : un <span className="text-secondary font-bold">stage de 4 à 6 mois en Machine Learning / IA à partir de mars 2027</span>, dans une équipe où je peux contribuer à des solutions d'IA fiables, avec une évaluation rigoureuse.
                  </p>
                </div>

                {/* Quote */}
                <div className="mt-6 pl-4 border-l-4 border-primary/50">
                  <p className="text-gray-400 italic">
                    "Les données racontent une histoire - mon rôle est de la décrypter et de la transformer en actions concrètes."
                  </p>
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity`} />
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 group-hover:border-white/30 transition-all duration-300">
                    <div className={`inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br ${item.gradient} rounded-xl mb-3`}>
                      <item.icon size={20} className="text-white" />
                    </div>
                    <div className="text-sm text-gray-400 mb-1">{item.label}</div>
                    <div className="text-white font-bold">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Education Timeline */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity" />
              <div className="relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center">
                    <GraduationCap size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-white">Formation</h3>
                </div>
                
                <div className="space-y-8">
                  {education.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="relative pl-8 pb-8 border-l-2 border-white/20 last:border-l-0 last:pb-0 group/item"
                      >
                        {/* Timeline Dot */}
                        <div className={`absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br ${item.gradient} ring-4 ring-black group-hover/item:scale-125 transition-transform`} />
                        
                        {/* Content */}
                        <div className="space-y-2">
                          <div className="flex items-start justify-between gap-4">
                            <h4 className="text-lg font-bold text-white group-hover/item:text-transparent group-hover/item:bg-gradient-to-r group-hover/item:from-primary group-hover/item:to-secondary group-hover/item:bg-clip-text transition-all">
                              {item.degree}
                            </h4>
                            <span className={`px-3 py-1 bg-gradient-to-r ${item.gradient} rounded-full text-xs font-bold text-white whitespace-nowrap`}>
                              {item.status}
                            </span>
                          </div>
                          <p className="text-gray-300 font-medium">{item.school}</p>
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <Calendar size={14} />
                            <span>{item.period}</span>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity" />
              <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm rounded-3xl p-8 border border-primary/30">
                <h4 className="text-xl font-black mb-6 text-white flex items-center gap-2">
                  <MapPin size={20} className="text-primary" />
                  Informations
                </h4>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                      <MapPin size={18} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">Localisation</div>
                      <div className="text-white font-semibold">Lyon, France</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                      <Calendar size={18} className="text-secondary" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">Disponibilité</div>
                      <div className="text-white font-semibold">Stage ML / IA • Mars 2027</div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="text-xs text-gray-400 mb-3">Langues</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-4 py-2 bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 text-primary rounded-xl text-sm font-bold">
                        🇫🇷 Français - Courant
                      </span>
                      <span className="px-4 py-2 bg-gradient-to-r from-secondary/20 to-secondary/10 border border-secondary/30 text-secondary rounded-xl text-sm font-bold">
                        🇬🇧 Anglais - Intermédiaire (B1/B2)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
