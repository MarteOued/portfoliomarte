// src/components/Hero.jsx
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronRight, Sparkles, Code2, Database } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 -left-40 w-96 h-96 bg-primary/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-0 -right-40 w-96 h-96 bg-secondary/30 rounded-full blur-3xl"
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/30 rounded-full mb-8"
            >
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Recherche alternance Data / IA • Septembre 2026
              </span>
            </motion.div>

            {/* Main Title with Glitch Effect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-none">
                <span className="block text-white/40 text-3xl md:text-4xl mb-2 font-light tracking-wide">
                  Bonjour, je suis
                </span>
                <span className="block relative">
                  <span className="relative inline-block">
                    <span className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent blur-lg opacity-70">
                      Martine
                    </span>
                    <span className="relative bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                      Martine
                    </span>
                  </span>
                </span>
              </h1>
            </motion.div>

            {/* Animated Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 mb-8"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <Database size={20} className="text-primary" />
                <span className="text-lg font-semibold text-white">Data & IA Junior</span>
              </div>
              <div className="text-2xl text-white/40">×</div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <Code2 size={20} className="text-secondary" />
                <span className="text-lg font-semibold text-white">Full-Stack Dev</span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-400 mb-10 leading-relaxed max-w-xl"
            >
              Étudiante en Master 1 Informatique à Lyon 2, je construis des projets concrets en machine learning,
              IA générative, BI et développement full-stack. Je recherche une alternance dès septembre 2026
              en Data Science, Data Analysis, ML Engineering ou Data Engineering.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProjects}
                className="group relative px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-xl font-bold text-white overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  Découvrir mes projets
                  <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="px-8 py-4 bg-white/5 backdrop-blur-sm rounded-xl font-bold text-white border-2 border-white/20 hover:bg-white/10 hover:border-primary/50 transition-all flex items-center gap-2"
              >
                <Mail size={20} />
                Contact
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex items-center gap-3"
            >
              {[
                { Icon: Linkedin, href: "https://www.linkedin.com/in/marte-oued-5b1192325", label: "LinkedIn" },
                { Icon: Github, href: "https://github.com/MarteOued", label: "GitHub" },
                { Icon: Mail, href: "mailto:marteoued11@gmail.com", label: "Email" },
              ].map((item) => (
                <motion.a
                  key={item.label}
                  whileHover={{ y: -5 }}
                  href={item.href}
                  target={item.label !== "Email" ? "_blank" : undefined}
                  rel={item.label !== "Email" ? "noopener noreferrer" : undefined}
                  className="p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all group"
                >
                  <item.Icon size={22} className="text-gray-400 group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right - Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Floating Stats Cards */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute -left-8 top-20 bg-black/80 backdrop-blur-xl border border-primary/30 rounded-2xl p-4 shadow-2xl z-20"
              >
                <div className="text-3xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  88,9%
                </div>
                <div className="text-xs text-gray-400 font-medium">Précision ML</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="absolute -right-8 bottom-32 bg-black/80 backdrop-blur-xl border border-secondary/30 rounded-2xl p-4 shadow-2xl z-20"
              >
                <div className="text-3xl font-black bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                  6
                </div>
                <div className="text-xs text-gray-400 font-medium">Projets clés</div>
              </motion.div>

              {/* Main Image Container */}
              <div className="relative w-80 h-96 lg:w-96 lg:h-[500px]">
                {/* Glowing Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary via-secondary to-primary rounded-3xl blur-2xl opacity-40 animate-pulse" />
                
                {/* Image Frame */}
                <div className="relative h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-1 backdrop-blur-sm">
                  <div className="h-full bg-black rounded-3xl overflow-hidden">
                    <img 
                      src="/projects/MARTEI.jpeg"
                      alt="Martine - Data Scientist Junior"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-primary/30 rounded-3xl -z-10 rotate-6" />
                <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-secondary/30 rounded-2xl -z-10 -rotate-6" />
              </div>

              {/* Floating Achievement Badge */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-black/90 backdrop-blur-xl border border-primary/40 rounded-2xl px-6 py-3 shadow-2xl z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl">🎓</div>
                  <div>
                    <div className="text-sm font-bold text-white">Master 1 Informatique</div>
                    <div className="text-xs text-gray-400">Lyon • Meilleure note: 19/20</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
