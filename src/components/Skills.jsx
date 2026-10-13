// src/components/Skills.jsx
import { motion } from 'framer-motion';
import { Brain, Code2, Cloud, Sparkles, BarChart3, TrendingUp, FlaskConical } from 'lucide-react';
import { skills, projectsData } from '../data/projectsData';

const Skills = () => {
  const skillCategories = [
    {
      id: 'ml',
      title: 'Machine Learning & Deep Learning',
      icon: Brain,
      skills: skills.ml,
      gradient: 'from-purple-500 via-pink-500 to-red-500',
      description: 'Modèles supervisés, non supervisés et séries temporelles'
    },
    {
      id: 'genai',
      title: 'IA générative & NLP',
      icon: Sparkles,
      skills: skills.genai,
      gradient: 'from-violet-500 via-fuchsia-500 to-pink-500',
      description: 'LLM, RAG et traitement du langage'
    },
    {
      id: 'mlops',
      title: 'MLOps & Cloud',
      icon: Cloud,
      skills: skills.mlops,
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      description: 'Déploiement, suivi d\'expériences et orchestration'
    },
    {
      id: 'languages',
      title: 'Langages & données',
      icon: Code2,
      skills: skills.languages,
      gradient: 'from-orange-500 via-yellow-500 to-amber-500',
      description: 'Programmation et traitement de données'
    },
    {
      id: 'viz',
      title: 'Visualisation & restitution',
      icon: BarChart3,
      skills: skills.viz,
      gradient: 'from-emerald-500 via-green-500 to-teal-500',
      description: 'Applications et tableaux de bord'
    }
  ];

  return (
    <section id="skills" className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-full blur-3xl"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem]" />
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
              Expertise Technique
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Compétences
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Les outils que j'utilise pour concevoir, évaluer et déployer des modèles de bout en bout
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="group"
            >
              {/* Category Card */}
              <div className="relative h-full bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-3xl border border-white/10 p-8 hover:border-white/30 transition-all duration-500">
                
                {/* Gradient Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl blur-2xl`} />
                
                {/* Header */}
                <div className="relative mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon size={32} className="text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-black text-white mb-2">
                    {category.title}
                  </h3>
                  
                  <p className="text-sm text-gray-400">
                    {category.description}
                  </p>
                </div>

                {/* Skills List */}
                <div className="relative flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.03 }}
                      className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-sm font-semibold text-gray-300 hover:text-white hover:border-white/30 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-3xl border border-white/10 p-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: TrendingUp,
                  value: '1 331 MW',
                  label: 'MAE prévision électrique (test)',
                  gradient: 'from-purple-500 to-pink-500'
                },
                {
                  icon: Brain,
                  value: '88,9%',
                  label: 'Précision ML (bac)',
                  gradient: 'from-blue-500 to-cyan-500'
                },
                {
                  icon: Code2,
                  value: String(projectsData.length),
                  label: 'Projets clés',
                  gradient: 'from-orange-500 to-yellow-500'
                },
                {
                  icon: FlaskConical,
                  value: '508',
                  label: 'Tests automatisés (projet séries temporelles)',
                  gradient: 'from-green-500 to-teal-500'
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative group/stat text-center"
                >
                  {/* Icon */}
                  <div className="relative inline-block mb-4">
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} blur-xl opacity-50 group-hover/stat:opacity-80 transition-opacity`} />
                    <div className={`relative w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto`}>
                      <stat.icon size={32} className="text-white" />
                    </div>
                  </div>
                  
                  {/* Value */}
                  <div className={`text-4xl md:text-5xl font-black mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  
                  {/* Label */}
                  <div className="text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col md:flex-row items-center gap-4 px-8 py-6 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 backdrop-blur-sm border border-primary/30 rounded-2xl">
            <Sparkles size={24} className="text-primary" />
            <div className="flex flex-wrap justify-center gap-2">
              {skills.soft.map((item) => (
                <span key={item} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-sm font-semibold text-gray-300">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Skills;
