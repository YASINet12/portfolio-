import { Mail, Github, Linkedin, Code2, Database, Smartphone, Globe, Palette, Cpu, ExternalLink, ArrowRight, Download, ShoppingCart, Music, Activity, Cloud, Monitor, ShoppingBag, Headphones, Dumbbell, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Header from './components/Header';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [state, handleSubmit] = useForm("xvgzqryq");
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);

      // Add scroll animations
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      }, observerOptions);

      // Observe all sections and cards
      document.querySelectorAll('section, .skill-card, .project-card').forEach(el => {
        observer.observe(el);
      });

      return () => observer.disconnect();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      icon: <Palette size={32} className="text-white" />,
      title: 'UI Design System',
      description: 'Système de design moderne avec composants réutilisables et thèmes personnalisables',
      tech: ['React', 'TypeScript', 'Tailwind', 'Figma'],
      gradient: 'from-cyan-400 to-blue-600',
      link: '#'
    },
    {
      icon: <Smartphone size={32} className="text-white" />,
      title: 'Social Media App',
      description: 'Application mobile de réseau social avec chat en temps réel et stories',
      tech: ['React Native', 'Firebase', 'Redux', 'Socket.io'],
      gradient: 'from-cyan-400 to-blue-600',
      link: '#'
    },
    {
      icon: <ShoppingBag size={32} className="text-white" />,
      title: 'E-Commerce Platform',
      description: 'Plateforme e-commerce complète avec paiement intégré et dashboard admin',
      tech: ['Next.js', 'Stripe', 'PostgreSQL', 'Prisma'],
      gradient: 'from-cyan-400 to-blue-600',
      link: '#'
    },
    {
      icon: <Headphones size={32} className="text-white" />,
      title: 'Music Streaming App',
      description: 'Application de streaming musical avec playlists personnalisées et recommandations IA',
      tech: ['Vue.js', 'Node.js', 'MongoDB', 'ML'],
      gradient: 'from-cyan-400 to-blue-600',
      link: '#'
    },
    {
      icon: <Dumbbell size={32} className="text-white" />,
      title: 'Fitness Tracker',
      description: 'Application de suivi fitness avec statistiques détaillées et plans d\'entraînement',
      tech: ['Flutter', 'Dart', 'SQLite', 'Charts'],
      gradient: 'from-cyan-400 to-blue-600',
      link: '#'
    },
    {
      icon: <Sun size={32} className="text-white" />,
      title: 'Weather Dashboard',
      description: 'Dashboard météo interactif avec prévisions détaillées et cartes animées',
      tech: ['React', 'OpenWeather API', 'D3.js', 'Leaflet'],
      gradient: 'from-cyan-400 to-blue-600',
      link: '#'
    }
  ];

  const skills = [
    { name: 'React & React Native', level: 75, color: 'bg-sky-200', icon: <Code2 size={20} /> },
    { name: 'TypeScript', level: 70, color: 'bg-sky-200', icon: <Code2 size={20} /> },
    { name: 'Node.js & Express', level: 65, color: 'bg-sky-200', icon: <Cpu size={20} /> },
    { name: 'Flutter & Dart', level: 60, color: 'bg-sky-200', icon: <Smartphone size={20} /> },
    { name: 'UI/UX Design', level: 80, color: 'bg-sky-200', icon: <Palette size={20} /> },
    { name: 'MongoDB & PostgreSQL', level: 55, color: 'bg-sky-200', icon: <Database size={20} /> },
    { name: 'Next.js & Vue.js', level: 70, color: 'bg-sky-200', icon: <Globe size={20} /> },
    { name: 'REST API & GraphQL', level: 65, color: 'bg-sky-200', icon: <Cpu size={20} /> },
    { name: 'Git & GitHub', level: 85, color: 'bg-sky-200', icon: <Github size={20} /> }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await handleSubmit({
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      });
      if (state.succeeded) {
        alert('Message envoyé avec succès !');
        setFormData({ email: '', subject: '', message: '' });
      }
    } catch (error: any) {
      console.error('Erreur lors de l\'envoi:', error);
      alert('Erreur lors de l\'envoi du message. Veuillez réessayer.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-black relative overflow-hidden transition-colors duration-300">
      <Header />

      {/* Cosmic Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Stars */}
        <div className="absolute inset-0 dark:opacity-30">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Nebula Effects - Hidden in dark mode for black universe */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-blue-600/20 via-blue-500/20 to-blue-400/20 rounded-full blur-3xl animate-pulse dark:hidden"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-cyan-500/15 via-blue-500/15 to-indigo-500/15 rounded-full blur-3xl animate-pulse delay-1000 dark:hidden"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500 dark:hidden"></div>
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-blue-500/15 via-blue-400/15 to-blue-300/15 rounded-full blur-3xl animate-pulse delay-1500 dark:hidden"></div>

        {/* Galaxy Spiral - Hidden in dark mode for black universe */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-40 h-40 border border-cyan-400/20 rounded-full animate-spin dark:hidden" style={{ animationDuration: '20s' }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-purple-400/20 rounded-full animate-spin dark:hidden" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur-sm dark:hidden"></div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section id="hero" className={`relative min-h-screen flex items-center justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-8 group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-400 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity animate-pulse"></div>
              <img
                src="/images/Image .jpg"
                alt="Yassine ET-TAHERY"
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white/20 shadow-2xl"
              />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white dark:text-gray-100 mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent animate-gradient">
              Yassine ET-TAHERY
            </h1>
            <p className="text-2xl md:text-3xl text-blue-300 dark:text-blue-400 font-medium mb-6">
              Mobile & Web Developer
            </p>
            <p className="text-lg text-gray-300 dark:text-gray-400 max-w-2xl mb-8">
              Développeur junior passionné par la création d'expériences numériques modernes et innovantes
            </p>

            <div className="flex gap-4 mb-12">
              <a href="mailto:yassinetahery7@gmail.com" className="p-3 bg-white/10 dark:bg-gray-700/50 backdrop-blur-sm rounded-full text-white dark:text-gray-200 hover:bg-white/20 dark:hover:bg-gray-600/50 transition-all hover:scale-110 border border-sky-200">
                <Mail size={24} className="text-sky-400" />
              </a>
              <a href="https://github.com/YASINet12" className="p-3 bg-white/10 dark:bg-gray-700/50 backdrop-blur-sm rounded-full text-white dark:text-gray-200 hover:bg-white/20 dark:hover:bg-gray-600/50 transition-all hover:scale-110 border border-sky-200">
                <Github size={24} className="text-sky-400" />
              </a>
              <a href="https://www.linkedin.com/feed/" className="p-3 bg-white/10 dark:bg-gray-700/50 backdrop-blur-sm rounded-full text-white dark:text-gray-200 hover:bg-white/20 dark:hover:bg-gray-600/50 transition-all hover:scale-110 border border-sky-200">
                <Linkedin size={24} className="text-sky-400" />
              </a>
              <a href="/cv/CV_Yassine_ET_TAHERY.pdf" download title="Télécharger mon CV" className="p-3 bg-white/10 dark:bg-gray-700/50 backdrop-blur-sm rounded-full text-white dark:text-gray-200 hover:bg-white/20 dark:hover:bg-gray-600/50 transition-all hover:scale-110 border border-sky-200">
                <Download size={24} className="text-sky-400" />
              </a>
            </div>

            <a href="#about" className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-400/50 transition-all hover:scale-105">
              Découvrir mon portfolio
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      <main className="relative">
        {/* About Section */}
        <section id="about" className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-white/5 dark:bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 dark:border-gray-600/30 hover:border-cyan-400/50 dark:hover:border-cyan-300/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-400/20 dark:hover:shadow-cyan-300/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-gray-100 mb-6 flex items-center gap-3">
                <span className="w-2 h-12 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full"></span>
                À propos de moi
              </h2>
              <p className="text-lg text-gray-300 dark:text-gray-400 leading-relaxed">
                Je suis un <span className="text-sky-200 dark:text-sky-300 font-semibold">développeur mobile et web</span>, passionné par les technologies modernes. Je me spécialise dans le développement
                d'applications mobiles multiplateformes avec <span className="text-blue-400 dark:text-blue-300">React Native</span> et <span className="text-blue-400 dark:text-blue-300">Flutter</span>,
                ainsi que dans la création d'interfaces web dynamiques en utilisant <span className="text-cyan-400 dark:text-cyan-300">React</span>, <span className="text-cyan-400 dark:text-cyan-300">Next.js</span> et <span className="text-cyan-400 dark:text-cyan-300">Vue.js</span>.
                Mon objectif est de concevoir des solutions performantes, intuitives et innovantes, en plaçant la qualité du code et l'expérience utilisateur au centre de mes priorités.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-gray-100 mb-12 text-center flex items-center justify-center gap-3">
              <span className="w-2 h-12 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full"></span>
              Compétences & Technologies
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="skill-card bg-white/5 dark:bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10 dark:border-gray-600/30 hover:border-cyan-400/50 dark:hover:border-cyan-300/50 transition-all duration-500 hover:scale-105 hover:shadow-xl opacity-0 translate-y-8 flex items-center gap-4"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`p-4 rounded-xl ${skill.color} text-white text-2xl border border-sky-200`}>
                    <div className="text-sky-400">
                      {skill.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white dark:text-gray-100">{skill.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-gray-100 mb-12 text-center flex items-center justify-center gap-3">
              <span className="w-2 h-12 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full"></span>
              Projets Réalisés
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className="project-card group bg-white/5 dark:bg-gray-800/50 backdrop-blur-xl rounded-2xl p-4 border border-white/10 dark:border-gray-600/30 hover:border-cyan-400/30 dark:hover:border-cyan-300/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 opacity-0 translate-y-8"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 border border-sky-200`}>
                    {project.icon}
                  </div>

                  <h3 className="text-xl font-bold text-white dark:text-gray-100 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 dark:group-hover:from-blue-300 group-hover:to-blue-600 dark:group-hover:to-blue-500 group-hover:bg-clip-text transition-all">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 dark:text-gray-500 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-white/10 dark:bg-gray-700/50 rounded-full text-xs text-gray-300 dark:text-gray-400 border border-white/10 dark:border-gray-600/30">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-sm text-blue-400 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors group/link"
                  >
                    Voir le projet
                    <ExternalLink size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
              <div className="bg-gradient-to-br from-blue-500/20 via-blue-400/20 to-blue-300/20 dark:from-blue-400/10 dark:via-blue-300/10 dark:to-blue-200/10 backdrop-blur-xl rounded-3xl p-4 md:p-6 border border-white/20 dark:border-gray-600/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-gray-100 mb-8 text-center flex items-center justify-center gap-3">
                <span className="w-2 h-12 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full"></span>
                Contactez-moi
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <a href="mailto:yassinetahery7@gmail.com" className="flex items-center gap-4 bg-white/10 dark:bg-gray-700/50 rounded-2xl p-6 hover:bg-white/20 dark:hover:bg-gray-600/50 transition-all hover:scale-105 group">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl group-hover:scale-110 transition-transform border border-sky-200">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 dark:text-gray-500 text-sm">Email</p>
                    <p className="text-white dark:text-gray-100 font-semibold">yassinetahery7@gmail.com</p>
                  </div>
                </a>

                <a href="https://github.com/YASINet12" className="flex items-center gap-4 bg-white/10 dark:bg-gray-700/50 rounded-2xl p-6 hover:bg-white/20 dark:hover:bg-gray-600/50 transition-all hover:scale-105 group">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl group-hover:scale-110 transition-transform border border-sky-200">
                    <Github className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 dark:text-gray-500 text-sm">GitHub</p>
                    <p className="text-white dark:text-gray-100 font-semibold">@YASINet12</p>
                  </div>
                </a>

                <a href="https://www.linkedin.com/feed/" className="flex items-center gap-4 bg-white/10 dark:bg-gray-700/50 rounded-2xl p-6 hover:bg-white/20 dark:hover:bg-gray-600/50 transition-all hover:scale-105 group">
                  <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl group-hover:scale-110 transition-transform border border-sky-200">
                    <Linkedin className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 dark:text-gray-500 text-sm">LinkedIn</p>
                    <p className="text-white dark:text-gray-100 font-semibold">Yassine ET-TAHERY</p>
                  </div>
                </a>

                <a href="#" className="flex items-center gap-4 bg-white/10 dark:bg-gray-700/50 rounded-2xl p-6 hover:bg-white/20 dark:hover:bg-gray-600/50 transition-all hover:scale-105 group">
                  <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl group-hover:scale-110 transition-transform border border-sky-200">
                    <Globe className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 dark:text-gray-500 text-sm">Portfolio</p>
                    <p className="text-white dark:text-gray-100 font-semibold">www.ET-TAHERY-Yassine.com</p>
                  </div>
                </a>
              </div>

              {/* Contact Form */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-white dark:text-gray-100 mb-6 text-center">Envoyez-moi un message</h3>
                <form onSubmit={handleFormSubmit} className="max-w-2xl mx-auto space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-gray-300 dark:text-gray-400 text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 dark:bg-gray-700/50 border border-white/20 dark:border-gray-600/30 rounded-xl text-white dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:focus:ring-cyan-300 focus:border-transparent transition-all"
                        placeholder="votre.email@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-gray-300 dark:text-gray-400 text-sm font-medium mb-2">
                        Sujet *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 dark:bg-gray-700/50 border border-white/20 dark:border-gray-600/30 rounded-xl text-white dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:focus:ring-cyan-300 focus:border-transparent transition-all"
                        placeholder="Objet de votre message"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-300 dark:text-gray-400 text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/10 dark:bg-gray-700/50 border border-white/20 dark:border-gray-600/30 rounded-xl text-white dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:focus:ring-cyan-300 focus:border-transparent transition-all resize-none"
                      placeholder="Votre message..."
                    />
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-400/50 transition-all hover:scale-105 border border-sky-200"
                    >
                      Envoyer le message
                    </button>
                  </div>
                </form>
              </div>


            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative py-8 px-4 border-t border-white/10 dark:border-gray-600/30">
        <div className="container mx-auto text-center">
          <p className="text-gray-400 dark:text-gray-500">
            © 2024 Yassine ET-TAHERY. Développeur Mobile & Web Junior
          </p>
          <p className="text-gray-500 dark:text-gray-600 text-sm mt-2">
            Conçu avec passion et technologies modernes
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .delay-700 {
          animation-delay: 700ms;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  );
}

export default App;
