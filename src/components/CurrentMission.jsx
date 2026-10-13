// src/components/CurrentMission.jsx
import { motion } from 'framer-motion';
import {
  Briefcase,
  MapPin,
  Calendar,
  Code2,
  BarChart3,
  LineChart,
  Database,
  Cpu
} from 'lucide-react';

const CurrentMission = () => {
  const experiences = [
    {
      title: "Stagiaire Développeuse Full-Stack & Data",
      company: "Oued Services",
      location: "Le Blanc-Mesnil, Île-de-France",
      period: "Mai - Août 2026",
      gradient: "from-blue-500 to-cyan-500",
      points: [
        { icon: Code2, text: "Développement solo et déploiement en production (malipoulet.com) d'une application full-stack de gestion de restaurant : caisse POS, cuisine KDS temps réel (WebSocket), stocks, clients, livraisons et trésorerie" },
        { icon: LineChart, text: "Module de prévisions financières multi-scénarios (pessimiste, réaliste, optimiste), seuil de rentabilité et dashboard analytique" }
      ],
      stack: ["Python", "FastAPI", "Django REST", "React", "PostgreSQL", "Pandas", "Scikit-Learn", "Streamlit", "Docker"]
    },
    {
      title: "Stagiaire Data & Analyse",
      company: "STIB (Transports Intercommunaux de Bruxelles)",
      location: "Bruxelles, Belgique",
      period: "Juin - Juillet 2025",
      gradient: "from-purple-500 to-pink-500",
      points: [
        { icon: BarChart3, text: "Analyse des données de fréquentation et de ponctualité du réseau ; tableaux de bord et indicateurs clés" },
        { icon: Database, text: "Extraction, nettoyage et transformation de données multi-sources (SQL, Python, Excel)" }
      ],
      stack: ["Python", "SQL / PL-SQL", "Excel", "Power BI", "Tableau"]
    }
  ];

  return (
    <section id="mission" className="relative py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 left-1/3 w-[520px] h-[520px] bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.25, 1, 1.25], opacity: [0.4, 0.25, 0.4] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-1/4 w-[520px] h-[520px] bg-secondary/20 rounded-full blur-3xl"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/30 rounded-full mb-6">
            <Briefcase size={16} className="text-primary" />
            <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Parcours professionnel
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Expériences
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Deux stages, de la data au déploiement en production : analyse de données de transport à Bruxelles, puis application full-stack en production pour un restaurant.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity" />
              <div className="relative h-full bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500">
                <div className="mb-6">
                  <h3 className="text-2xl font-black text-white mb-1">{exp.title}</h3>
                  <p className="text-gray-300 font-semibold mb-4">{exp.company}</p>
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-semibold text-gray-300">
                      <MapPin size={16} className="text-primary" />
                      {exp.location}
                    </span>
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-semibold text-gray-300">
                      <Calendar size={16} className="text-secondary" />
                      {exp.period}
                    </span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  {exp.points.map((point) => (
                    <div
                      key={point.text}
                      className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl"
                    >
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center flex-shrink-0`}>
                        <point.icon size={18} className="text-white" />
                      </div>
                      <p className="text-gray-300 leading-relaxed">{point.text}</p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 mb-3 text-sm text-gray-400">
                  <Cpu size={16} className="text-primary" />
                  Stack
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-white/10 border border-white/15 rounded-xl text-sm font-bold text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentMission;
