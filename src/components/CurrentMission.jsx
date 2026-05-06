// src/components/CurrentMission.jsx
import { motion } from 'framer-motion';
import {
  Briefcase,
  MapPin,
  Calendar,
  Code2,
  BarChart3,
  LineChart,
  Brain,
  ShieldAlert,
  Zap,
  Sparkles,
  CheckCircle,
  Cpu
} from 'lucide-react';

const CurrentMission = () => {
  const missions = [
    {
      icon: Code2,
      text: "Refactorisation d'une application FastAPI : architecture, sécurité et tests",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: BarChart3,
      text: "Analyse exploratoire des données ventes, stocks et clients",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: LineChart,
      text: "Définition des KPI métiers de pilotage opérationnel",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: Brain,
      text: "Modèle de prévision des ventes avec Scikit-Learn et séries temporelles",
      gradient: "from-orange-500 to-yellow-500"
    },
    {
      icon: ShieldAlert,
      text: "Détection d'anomalies sur les flux de transactions",
      gradient: "from-red-500 to-rose-500"
    },
    {
      icon: Zap,
      text: "Intégration d'un prototype IA dans un dashboard Streamlit",
      gradient: "from-violet-500 to-fuchsia-500"
    }
  ];

  const stack = ["Python", "FastAPI", "Pandas", "Scikit-Learn", "Streamlit", "Docker"];

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
              Expérience actuelle
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Mission en Cours
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Stagiaire Full-Stack Python & Data Science chez Oued Service, je travaille sur des sujets concrets de data, backend et IA appliquée.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity" />
            <div className="relative h-full bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                    Full-Stack Python & Data Science
                  </h3>
                  <p className="text-gray-400">Oued Service</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-semibold text-gray-300">
                    <MapPin size={16} className="text-primary" />
                    Blanc-Mesnil
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-semibold text-gray-300">
                    <Calendar size={16} className="text-secondary" />
                    Avril 2026 - En cours
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {missions.map((mission, index) => (
                  <motion.div
                    key={mission.text}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="group/item flex items-start gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-white/30 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${mission.gradient} flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform`}>
                      <mission.icon size={20} className="text-white" />
                    </div>
                    <p className="text-gray-300 leading-relaxed">{mission.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity" />
            <div className="relative h-full bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm rounded-3xl p-8 border border-primary/30">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center">
                  <Cpu size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-black text-white">Stack utilisée</h3>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-white/10 border border-white/15 rounded-xl text-sm font-bold text-white hover:border-primary/50 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-white/5 rounded-2xl border border-white/10">
                  <CheckCircle size={20} className="text-primary mt-1 flex-shrink-0" />
                  <p className="text-gray-300">
                    Une mission qui relie backend, analyse de données, modèles prédictifs et dashboard métier.
                  </p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white/5 rounded-2xl border border-white/10">
                  <Sparkles size={20} className="text-secondary mt-1 flex-shrink-0" />
                  <p className="text-gray-300">
                    Un contexte idéal pour préparer une alternance data / IA orientée impact opérationnel.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CurrentMission;
