import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Moon, Sun, ArrowRight, Sparkles, Code2, Rocket } from 'lucide-react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const observers = [];
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => new Set([...prev, entry.target.dataset.section]));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    elements.forEach(el => {
      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach(obs => obs.disconnect());
    };
  }, []);

  const projects = [
    {
      title: "VoiceGuard: AI-Powered Voice Authentication System",
      tech: ["Python", "Flask", "SQLite"],
      description: "Secure document system using voice biometrics and anti-spoofing detection with 70%+ authentication accuracy.",
      github: "https://github.com/aditinagendra05/VoiceGuard",
      demo: "#",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "AI Movie Recommender System",
      tech: ["Python", "Flask", "React", "NumPy", "SQLite"],
      description: "ML-powered movie recommendation engine using TF-IDF and cosine similarity with 70%+ match accuracy and multi-language support.",
      github: "https://github.com/aditinagendra05/Movie-recommendation",
      demo: "#",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "C", "C++", "SQL", "HTML", "CSS"],
      icon: <Code2 size={20} />,
      color: "from-orange-500 to-red-500"
    },
    {
      category: "Frameworks",
      skills: ["Flask", "React (basic)", "Tailwind (basic)", "FastAPI (basic)"],
      icon: <Sparkles size={20} />,
      color: "from-blue-500 to-indigo-500"
    },
    {
      category: "Libraries",
      skills: ["NumPy", "Pandas", "Scikit-learn", "Matplotlib"],
      icon: <Rocket size={20} />,
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Docker (basic)", "Linux"],
      icon: <Code2 size={20} />,
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Databases",
      skills: ["MySQL", "SQLite"],
      icon: <Sparkles size={20} />,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 relative ${
      darkMode ? 'bg-black text-white' : 'bg-white text-black'
    }`}>
      {/* Fixed Animated Background with Glassmorphism */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <div className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-40 animate-float ${
          darkMode ? 'bg-gradient-to-r from-purple-700 to-purple-600' : 'bg-gradient-to-r from-purple-300 to-purple-400'
        }`}></div>
        <div className={`absolute top-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-30 animate-float-delayed ${
          darkMode ? 'bg-gradient-to-r from-purple-600 to-purple-500' : 'bg-gradient-to-r from-purple-400 to-purple-300'
        }`}></div>
        <div className={`absolute bottom-0 left-1/2 w-96 h-96 rounded-full blur-3xl opacity-35 animate-float-slow ${
          darkMode ? 'bg-gradient-to-r from-purple-800 to-purple-700' : 'bg-gradient-to-r from-purple-500 to-purple-400'
        }`}></div>
        
        {/* Glassmorphism overlay - this creates the frosted glass effect */}
        <div className={`absolute inset-0 ${
          darkMode 
            ? 'bg-black/30 backdrop-blur-3xl' 
            : 'bg-white/30 backdrop-blur-3xl'
        }`}></div>
      </div>

      {/* Custom Cursor */}
      <div 
        className="fixed w-6 h-6 border-2 border-purple-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150"
        style={{ 
          left: `${mousePos.x}px`, 
          top: `${mousePos.y}px`,
          transform: `translate(-50%, -50%) scale(${cursorVariant === 'hover' ? 1.5 : 1})`
        }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? (darkMode ? 'bg-black/20 backdrop-blur-2xl border-b border-white/10' : 'bg-white/20 backdrop-blur-2xl border-b border-black/10') : ''
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Aditi.dev
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2.5 rounded-xl transition-all hover:scale-110 hover:rotate-12 ${
              darkMode ? 'bg-white/10 backdrop-blur-lg hover:bg-white/20' : 'bg-black/10 backdrop-blur-lg hover:bg-black/20'
            }`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-indigo-600" />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-6 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="animate-hero-appear">
            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 backdrop-blur-sm">
              <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent">
                ✨ Available for opportunities
              </span>
            </div>
            
            <h1 className="text-7xl md:text-8xl font-black mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white via-purple-800 to-purple-1000 bg-clip-text text-transparent animate-gradient">
                Aditi Nagendra
              </span>
            </h1>
            
            <p className={`text-3xl md:text-4xl mb-8 font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <span className="inline-block animate-slide-in-1">Computer Science</span>
              <span className="inline-block mx-3 text-purple-400">•</span>
              <span className="inline-block animate-slide-in-2">Data Science</span>
              <span className="inline-block mx-3 text-purple-400">•</span>
              <span className="inline-block animate-slide-in-3">ML Enthusiast</span>
            </p>
            
            <p className={`text-xl md:text-2xl max-w-3xl mb-10 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Building intelligent systems that bridge data and innovation.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group px-8 py-4 bg-gradient-to-r from-purple-400 to-blue-500 rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all hover:scale-105 flex items-center gap-2"
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                Let's Connect
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#projects"
                className={`px-8 py-4 rounded-xl font-semibold border-2 transition-all hover:scale-105 ${
                  darkMode ? 'border-white-200 hover:bg-white-800' : 'border-white-300 hover:bg-white-100'
                }`}
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`rounded-3xl p-12 backdrop-blur-xl border animate-on-scroll ${
            visibleSections.has('about') ? 'slide-up-active' : ''
          } ${
            darkMode ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
          }`} data-section="about">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className={`text-lg leading-relaxed max-w-4xl space-y-5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p className="text-xl">
                I am a Computer Science undergraduate with a strong interest in data science, machine learning, and building intelligent, real-world systems. 
                I enjoy working at the intersection of data, algorithms, and practical problem-solving, 
                and I am driven by curiosity and continuous learning.
              </p>
              <p className="text-xl">
                Beyond software, I am deeply inclined toward interdisciplinary domains such as aerospace and space technology, where computing plays a critical role in innovation. 
                I aspire to apply my technical skills in environments that blend engineering, data, and large-scale systems to create meaningful impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`animate-on-scroll ${
            visibleSections.has('projects') ? 'slide-up-active' : ''
          }`} data-section="projects">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className={`text-xl mb-12 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Building the future, one project at a time
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className={`group relative p-8 rounded-2xl backdrop-blur-xl border transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 animate-on-scroll overflow-hidden ${
                    visibleSections.has('projects') ? 'project-card-active' : ''
                  } ${
                    darkMode 
                      ? 'bg-white/5 border-white/10 hover:border-white-500/50 hover:shadow-2xl hover:shadow-white-500/20' 
                      : 'bg-black/5 border-black/10 hover:border-white-400 hover:shadow-2xl'
                  }`}
                  style={{ animationDelay: `${idx * 150}ms` }}
                  data-section="projects"
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-purple-500 transition-all">
                      {project.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all hover:scale-110 ${
                            darkMode ? 'bg-white-800 text-purple-400 border border-purple-700' : 'bg-gray-100 text-purple-600 border border-purple-300'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <p className={`mb-6 text-base leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {project.description}
                    </p>
                    
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        className={`flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all ${
                          darkMode ? 'text-purple-400 hover:text-purple-300' : 'text-blue-600 hover:text-purple-700'
                        }`}
                      >
                        <Github size={18} /> View Code
                      </a>
                      <a
                        href={project.demo}
                        className={`flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all ${
                          darkMode ? 'text-purple-400 hover:text-purple-300' : 'text-blue-600 hover:text-purple-700'
                        }`}
                      >
                        <ExternalLink size={18} /> Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`animate-on-scroll ${
            visibleSections.has('experience') ? 'slide-up-active' : ''
          }`} data-section="experience">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent">
              Experience & Leadership
            </h2>
            
            <div className={`group p-10 rounded-2xl backdrop-blur-xl border transition-all duration-500 hover:scale-[1.02] ${
              darkMode ? 'bg-white/5 border-white/10 hover:border-white-500/50 hover:shadow-2xl hover:shadow-white-500/20' : 'bg-black/5 border-black/10 hover:border-white-400 hover:shadow-2xl'
            }`}
            onMouseEnter={() => setCursorVariant('hover')}
            onMouseLeave={() => setCursorVariant('default')}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-3xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-purple-500 transition-all">
                    Google Developer Groups On Campus Lead
                  </h3>
                  <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Campus Community • 2023 - Present
                  </p>
                </div>
              </div>
              
              <ul className={`space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li className="flex gap-4 items-start group/item">
                  <span className="mt-2 min-w-[8px] h-[8px] rounded-full bg-gradient-to-r from-purple-400 to-purple-500 group-hover/item:scale-150 transition-transform"></span>
                  <span className="text-lg">Led a team of 50+ members in organizing technical workshops and hackathons</span>
                </li>
                <li className="flex gap-4 items-start group/item">
                  <span className="mt-2 min-w-[8px] h-[8px] rounded-full bg-gradient-to-r from-purple-400 to-purple-500 group-hover/item:scale-150 transition-transform"></span>
                  <span className="text-lg">Grew community engagement by 200% through strategic initiatives</span>
                </li>
                <li className="flex gap-4 items-start group/item">
                  <span className="mt-2 min-w-[8px] h-[8px] rounded-full bg-gradient-to-r from-purple-400 to-purple-500 group-hover/item:scale-150 transition-transform"></span>
                  <span className="text-lg">Partnered with industry professionals to deliver real-world project guidance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`animate-on-scroll ${
            visibleSections.has('skills') ? 'slide-up-active' : ''
          }`} data-section="skills">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent">
              Technical Arsenal
            </h2>
            <p className={`text-xl mb-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Technologies and tools powering my work
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, catIdx) => (
                <div
                  key={catIdx}
                  className={`group p-8 rounded-2xl backdrop-blur-xl border transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-on-scroll ${
                    visibleSections.has('skills') ? 'skill-category-active' : ''
                  } ${
                    darkMode 
                      ? 'bg-white/5 border-white/10 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20' 
                      : 'bg-black/5 border-black/10 hover:border-purple-400 hover:shadow-2xl'
                  }`}
                  style={{ animationDelay: `${catIdx * 100}ms` }}
                  data-section="skills"
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                      {category.icon}
                    </div>
                    <h3 className={`text-sm font-bold tracking-wide uppercase ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {category.category}
                    </h3>
                  </div>
                  
                  <div className={`h-px mb-6 bg-gradient-to-r ${category.color} opacity-30`}></div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-all hover:scale-110 hover:-translate-y-1 ${
                          darkMode 
                            ? 'bg-gray-800/70 text-gray-200 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-600 hover:text-white' 
                            : 'bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-500 hover:text-white hover:border-transparent'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 mb-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`animate-on-scroll ${
            visibleSections.has('contact') ? 'slide-up-active' : ''
          }`} data-section="contact">
            <div className={`rounded-3xl p-12 backdrop-blur-xl border text-center ${
              darkMode ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
            }`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent">
                Let's Build Something Amazing
              </h2>
              <p className={`text-xl mb-10 max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                I'm always interested in hearing about new opportunities, collaborations, 
                or just having a chat about technology and innovation.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:aditinagendra7@gmail.com"
                  className={`group flex items-center gap-3 px-8 py-4 rounded-xl border-2 font-semibold transition-all hover:scale-105 ${
                    darkMode 
                      ? 'border-white-500 hover:bg-purple-500 text-purple-400 hover:text-white hover:shadow-lg hover:shadow-purple-500/50' 
                      : 'border-black-500 hover:bg-purple-500 text-purple-600 hover:text-white hover:shadow-lg'
                  }`}
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  <Mail size={22} /> Email Me
                </a>
                
                <a
                  href="https://www.linkedin.com/in/aditi-nagendra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-3 px-8 py-4 rounded-xl border-2 font-semibold transition-all hover:scale-105 ${
                    darkMode 
                      ? 'border-white-500 hover:bg-purple-500 text-purple-400 hover:text-white hover:shadow-lg hover:shadow-purple-500/50' 
                      : 'border-black-500 hover:bg-purple-500 text-purple-600 hover:text-white hover:shadow-lg'
                  }`}
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  <Linkedin size={22} /> LinkedIn
                </a>
                
                <a
                  href="https://github.com/aditinagendra05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-3 px-8 py-4 rounded-xl border-2 font-semibold transition-all hover:scale-105 ${
                    darkMode 
                      ? 'border-white-500 hover:bg-purple-500 text-purple-400 hover:text-white hover:shadow-lg hover:shadow-purple-500/50' 
                      : 'border-black-500 hover:bg-purple-500 text-purple-600 hover:text-white hover:shadow-lg'
                  }`}
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  <Github size={22} /> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`backdrop-blur-xl border-t py-10 px-6 relative z-10 ${darkMode ? 'border-white/10 bg-black/20' : 'border-black/10 bg-white/20'}`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            © 2025 Aditi Nagendra. Built with React & Tailwind CSS.
          </p>
          <p className={`mt-2 text-sm ${darkMode ? 'text-gray-600' : 'text-gray-500'}`}>
            Crafted with ❤️ and lots of ☕
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-40px, 30px) scale(1.05); }
          66% { transform: translate(30px, -40px) scale(0.95); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-30px, -30px) scale(1.08); }
        }
        
        @keyframes hero-appear {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in-1 {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-2 {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-3 {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes skill-category-slide {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 25s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 30s ease-in-out infinite;
        }
        
        .animate-hero-appear {
          animation: hero-appear 1s ease-out;
        }
        
        .animate-slide-in-1 {
          animation: slide-in-1 0.8s ease-out 0.2s both;
        }
        
        .animate-slide-in-2 {
          animation: slide-in-2 0.8s ease-out 0.4s both;
        }
        
        .animate-slide-in-3 {
          animation: slide-in-3 0.8s ease-out 0.6s both;
        }
        
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(60px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .slide-up-active {
          animation: slide-up 0.8s ease-out forwards;
        }
        
        .project-card-active {
          animation: slide-in-left 0.6s ease-out forwards;
        }
        
        .skill-category-active {
          animation: skill-category-slide 0.6s ease-out forwards;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        * {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
}