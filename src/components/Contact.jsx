// src/components/Contact.jsx
import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Github, Send, Sparkles, MessageCircle, Briefcase } from 'lucide-react';
import { contact } from '../data/projectsData';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    const body = [
      `Nom : ${name}`,
      `Email : ${email}`,
      '',
      message
    ].join('\n');

    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: contact.location,
      href: null,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Voir mon profil',
      href: `https://www.linkedin.com/in/${contact.linkedin}`,
      gradient: 'from-blue-600 to-blue-800'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: `https://www.linkedin.com/in/${contact.linkedin}`,
      label: 'LinkedIn',
      gradient: 'from-blue-600 to-blue-800'
    },
    {
      icon: Github,
      href: `https://github.com/${contact.github}`,
      label: 'GitHub',
      gradient: 'from-gray-600 to-gray-800'
    },
    {
      icon: Mail,
      href: `mailto:${contact.email}`,
      label: 'Email',
      gradient: 'from-purple-600 to-pink-600'
    }
  ];

  return (
    <section id="contact" className="relative py-32 bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            x: [0, 100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.5, 1, 1.5],
            x: [0, -100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-full blur-3xl"
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/30 rounded-full mb-6">
            <MessageCircle size={16} className="text-primary" />
            <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Parlons ensemble
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Restons en Contact
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Vous recrutez en data, IA ou engineering ? Je serais ravie d'échanger autour d'une alternance.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity" />
              <div className="relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                    <Mail size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-white">Contactez-moi</h3>
                </div>
                
                <div className="space-y-4">
                  {contactMethods.map((method, index) => {
                    const Icon = method.icon;
                    const content = (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="group/item flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300"
                      >
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.gradient} flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform`}>
                          <Icon size={20} className="text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs text-gray-400 mb-1">{method.label}</div>
                          <div className="text-white font-semibold truncate">{method.value}</div>
                        </div>
                      </motion.div>
                    );

                    return method.href ? (
                      <a
                        key={index}
                        href={method.href}
                        target={method.href.startsWith('http') ? '_blank' : undefined}
                        rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={index}>{content}</div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Alternance Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm rounded-3xl p-8 border border-primary/30">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                    <Briefcase size={24} className="text-white" />
                  </div>
                  <h4 className="text-xl font-black text-white">Recherche d'alternance</h4>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  Je recherche une <span className="text-white font-bold">alternance à partir de septembre 2026</span>. Rythme visé : <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold">3 semaines en formation / 2 semaines en entreprise</span>, avec disponibilité temps plein dès juillet 2026.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-purple-500/10 border border-purple-500/30 text-purple-300 rounded-xl text-sm font-bold">
                    Data Science
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-blue-500/10 border border-blue-500/30 text-blue-300 rounded-xl text-sm font-bold">
                    Machine Learning
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-cyan-500/10 border border-cyan-500/30 text-cyan-300 rounded-xl text-sm font-bold">
                    Data Engineering
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-green-500/10 border border-green-500/30 text-green-300 rounded-xl text-sm font-bold">
                    Data Analysis
                  </span>
                </div>

                <div className="flex items-start gap-3 bg-white/5 rounded-xl p-4">
                  <Sparkles size={20} className="text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-300">
                    Mobilité France entière : sur site, hybride ou remote
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity" />
            <div className="relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center">
                  <Send size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-black text-white">Envoyez un Message</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-2">
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="Opportunité d'alternance"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    placeholder="Parlez-moi de votre projet ou opportunité..."
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-primary to-secondary rounded-xl text-white font-bold shadow-lg transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                  <span>Envoyer le message</span>
                </motion.button>

                <p className="text-xs text-gray-500 text-center">
                  Le bouton ouvre votre application mail avec un message prérempli.
                </p>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-3xl border border-white/10 p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Copyright */}
              <div className="text-center md:text-left">
                <p className="text-gray-400 mb-1">
                  © 2025 <span className="text-white font-semibold">Martine Ouedraogo</span>
                </p>
                <p className="text-sm text-gray-500">
                  Tous droits réservés • Fait avec 💜 
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ y: -5, scale: 1.1 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity`} />
                    <div className={`relative w-12 h-12 bg-gradient-to-br ${social.gradient} rounded-xl flex items-center justify-center transition-all`}>
                      <social.icon size={20} className="text-white" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
