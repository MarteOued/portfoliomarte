// src/components/Projects.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Award, Calendar, Users, Zap, ChevronRight, Github, ExternalLink, Target, Briefcase } from 'lucide-react';
import { projectsData } from '../data/projectsData';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const categories = ['all', ...new Set(projectsData.map((project) => project.category))];
  
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <>
    <section id="projects" className="relative py-32 bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.5, 1, 1.5],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem]" />
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-full mb-6">
            <Zap size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Portfolio</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Projets Réalisés
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Des projets pensés comme des preuves concrètes : données, IA, BI et applications full-stack avec résultats mesurables.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                filter === cat
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/50'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat === 'all' ? 'Tous les projets' : cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                {/* Card Container */}
                <div className="relative h-full bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden hover:border-primary/50 transition-all duration-500">
                  
                  {/* Gradient Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl pointer-events-none`} />
                  
                  {/* Media Section - Thumbnail only */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.media.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 pointer-events-none" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <div className={`px-4 py-2 bg-gradient-to-r ${project.gradient} rounded-xl font-bold text-white text-sm shadow-lg flex items-center gap-2`}>
                        <span className="text-xl">{project.icon}</span>
                        {project.category}
                      </div>
                    </div>

                    {/* Play Button Overlay */}
                    {project.media.type === 'video' && (
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        onClick={() => setSelectedProject(project)}
                        className="absolute bottom-4 right-4 p-4 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 group-hover:bg-primary/80 transition-all duration-300"
                        aria-label={`Voir la vidéo du projet ${project.title}`}
                      >
                        <Play size={24} className="text-white" fill="white" />
                      </motion.button>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="p-8">
                    <h3 className="text-2xl font-black text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-6 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3 text-sm">
                        <Target size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{project.impact}</span>
                      </div>
                      <div className="flex items-start gap-3 text-sm">
                        <Briefcase size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-gray-400">{project.role}</span>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-4 mb-6">
                      {project.metrics.duration && (
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar size={16} className="text-primary" />
                          <span className="text-gray-400">{project.metrics.duration}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2 text-sm">
                        <Users size={16} className="text-secondary" />
                        <span className="text-gray-400">{project.metrics.team}</span>
                      </div>
                      {project.metrics.status.includes('Note') && (
                        <div className="flex items-center gap-2 text-sm">
                          <Award size={16} className="text-yellow-500" />
                          <span className="text-gray-400">{project.metrics.status}</span>
                        </div>
                      )}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-semibold text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-semibold text-primary">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* CTA Button */}
                    <div className="flex items-center justify-between gap-3">
                      <motion.button
                        whileHover={{ x: 5 }}
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center gap-2 text-primary font-bold group-hover:text-secondary transition-colors"
                      >
                        <span>Voir les détails</span>
                        <ChevronRight size={20} />
                      </motion.button>

                      <div className="flex items-center gap-2">
                        {project.links?.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/5 border border-white/10 rounded-lg text-gray-400 hover:text-white hover:border-primary/50 transition-all"
                            aria-label={`Code GitHub du projet ${project.title}`}
                          >
                            <Github size={18} />
                          </a>
                        )}
                        {project.links?.demo && (
                          <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/5 border border-white/10 rounded-lg text-gray-400 hover:text-white hover:border-secondary/50 transition-all"
                            aria-label={`Démo du projet ${project.title}`}
                          >
                            <ExternalLink size={18} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

    </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-gradient-to-br from-gray-900 to-black border border-white/20 rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors z-10"
              >
                <X size={24} className="text-white" />
              </button>

              {/* Modal Content */}
              <div className="p-8 md:p-12">
                {/* Header */}
                <div className="mb-8">
                  <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${selectedProject.gradient} rounded-xl font-bold text-white text-sm mb-4`}>
                    <span className="text-2xl">{selectedProject.icon}</span>
                    {selectedProject.category}
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {selectedProject.title}
                  </h2>
                  
                  <p className="text-xl text-gray-400 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Media Preview */}
                {selectedProject.media.type === 'video' && (
                  <div className="relative mb-8 rounded-2xl overflow-hidden border border-white/20" style={{ paddingBottom: '56.25%', height: 0 }}>
                    <iframe
                      src={selectedProject.media.url}
                      title={selectedProject.title}
                      className="absolute top-0 left-0 w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}

                {selectedProject.media.type === 'image' && (
                  <div className="relative mb-8 rounded-2xl overflow-hidden border border-white/20">
                    <img
                      src={selectedProject.media.thumbnail}
                      alt={selectedProject.title}
                      className="w-full max-h-[560px] object-cover"
                    />
                  </div>
                )}

                {/* Impact / Role */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                    <Target size={24} className="text-primary mb-3" />
                    <div className="text-sm text-gray-400 mb-1">Impact</div>
                    <div className="text-lg font-bold text-white">{selectedProject.impact}</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                    <Briefcase size={24} className="text-secondary mb-3" />
                    <div className="text-sm text-gray-400 mb-1">Mon rôle</div>
                    <div className="text-lg font-bold text-white">{selectedProject.role}</div>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {selectedProject.metrics.duration && (
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                      <Calendar size={24} className="text-primary mb-3" />
                      <div className="text-sm text-gray-400 mb-1">Durée</div>
                      <div className="text-lg font-bold text-white">{selectedProject.metrics.duration}</div>
                    </div>
                  )}
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                    <Users size={24} className="text-secondary mb-3" />
                    <div className="text-sm text-gray-400 mb-1">Équipe</div>
                    <div className="text-lg font-bold text-white">{selectedProject.metrics.team}</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                    <Award size={24} className="text-yellow-500 mb-3" />
                    <div className="text-sm text-gray-400 mb-1">Statut</div>
                    <div className="text-lg font-bold text-white">{selectedProject.metrics.status}</div>
                  </div>
                </div>

                {(selectedProject.links?.github || selectedProject.links?.demo) && (
                  <div className="flex flex-wrap gap-3 mb-8">
                    {selectedProject.links?.github && (
                      <a
                        href={selectedProject.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 border border-white/20 rounded-xl font-bold text-white hover:border-primary/50 hover:bg-white/15 transition-all"
                      >
                        <Github size={20} />
                        Code GitHub
                      </a>
                    )}
                    {selectedProject.links?.demo && (
                      <a
                        href={selectedProject.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-primary to-secondary rounded-xl font-bold text-white hover:shadow-lg hover:shadow-primary/30 transition-all"
                      >
                        <ExternalLink size={20} />
                        Voir la démo
                      </a>
                    )}
                  </div>
                )}

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <Zap size={24} className="text-primary" />
                    Fonctionnalités clés
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedProject.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                        <div className="mt-1 w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Stack technique</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="px-4 py-2 bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-xl font-semibold text-white hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all"
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
