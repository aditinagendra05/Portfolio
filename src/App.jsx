import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Moon, Sun } from 'lucide-react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
///PROJECTS*****
  const projects = [
    {
      title: "VoiceGuard: AI-Powered Voice Authentication System",
      tech: ["Python", "Flask", "SQLite"],
      description: "Secure document system using voice biometrics and anti-spoofing detection with 70%+ authentication accuracy.",
      github: "https://github.com/aditinagendra05/VoiceGuard",
      demo: "#"
    },
    {
      title: "AI Movie Recommender System",
      tech: ["Python", "Flask", "React", "NumPy", "SQLite"],
      description: "ML-powered movie recommendation engine using TF-IDF and cosine similarity with 70%+ match accuracy and multi-language support.",
      github: "https://github.com/aditinagendra05/Movie-recommendation",
      demo: "#"
    }
  ];

  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "C", "C++", "SQL", "HTML", "CSS"]
    },
    {
      category: "Frameworks",
      skills: ["Flask", "React (basic)", "Tailwind (basic)", "FastAPI (basic)", ]
    },
    {
      category: "Libraries",
      skills: ["NumPy", "Pandas", "Scikit-learn", "Matplotlib"]
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Docker (basic)", "Linux"]
    },
    {
      category: "Databases",
      skills: ["MySQL", "SQLite"]
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-black text-white' : 'bg-white text-black'
    }`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? (darkMode ? 'bg-black/90 backdrop-blur-lg border-b border-gray-800' : 'bg-white/90 backdrop-blur-lg border-b border-gray-200') : ''
      }`}>
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-semibold tracking-tight">Aditi.dev</div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-lg transition-all hover:scale-110 ${
              darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
            }`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Animated blur background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 animate-blob ${
            darkMode ? 'bg-gray-700' : 'bg-gray-400'
          }`}></div>
          <div className={`absolute top-20 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 animate-blob animation-delay-2000 ${
            darkMode ? 'bg-gray-600' : 'bg-gray-300'
          }`}></div>
          <div className={`absolute -bottom-32 left-1/2 w-96 h-96 rounded-full blur-3xl opacity-20 animate-blob animation-delay-4000 ${
            darkMode ? 'bg-gray-800' : 'bg-gray-500'
          }`}></div>
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-4 tracking-tight">
              Aditi Nagendra
            </h1>
            <p className={`text-2xl md:text-3xl mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Computer Science • Data Science • ML Enthusiast
            </p>
            <p className={`text-lg md:text-xl max-w-2xl ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
              Building intelligent systems that bridge data and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className={`border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'} pt-20 animate-on-scroll ${
            visibleSections.has('about') ? 'slide-up-active' : ''
          }`} data-section="about">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">About Me</h2>
            <div className={`text-lg leading-relaxed max-w-3xl space-y-4 ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              <p>
             I am a Computer Science undergraduate with a strong interest in data science, machine learning, and building intelligent, real-world systems. 
             I enjoy working at the intersection of data, algorithms, and practical problem-solving, 
             and I am driven by curiosity and continuous learning.
              </p>
              <p>
                Beyond software, I am deeply inclined toward interdisciplinary domains such as aerospace and space technology, where computing plays a critical role in innovation. 
                I aspire to apply my technical skills in environments that blend engineering, data, and large-scale systems to create meaningful impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className={`border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'} pt-20 animate-on-scroll ${
            visibleSections.has('projects') ? 'slide-up-active' : ''
          }`} data-section="projects">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className={`group p-6 rounded-lg border transition-all duration-300 hover:scale-[1.02] animate-on-scroll ${
                    visibleSections.has('projects') ? 'project-card-active' : ''
                  } ${
                    darkMode 
                      ? 'bg-gray-900/50 border-gray-800 hover:border-gray-700' 
                      : 'bg-gray-50 border-gray-200 hover:border-gray-400 hover:shadow-lg'
                  }`}
                  style={{ animationDelay: `${idx * 150}ms` }}
                  data-section="projects"
                >
                  <h3 className="text-xl font-semibold mb-3 group-hover:underline decoration-2 underline-offset-4">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className={`text-xs px-3 py-1 rounded-full ${
                          darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-700 border border-gray-300'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className={`flex items-center gap-1 text-sm hover:underline ${
                        darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
                      }`}
                    >
                      <Github size={16} /> Code
                    </a>
                    <a
                      href={project.demo}
                      className={`flex items-center gap-1 text-sm hover:underline ${
                        darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
                      }`}
                    >
                      <ExternalLink size={16} /> Demo
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className={`border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'} pt-20 animate-on-scroll ${
            visibleSections.has('experience') ? 'slide-up-active' : ''
          }`} data-section="experience">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">Experience & Leadership</h2>
            <div className={`p-6 rounded-lg border ${
              darkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-gray-50 border-gray-200'
            }`}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Google Developer Groups On Campus Lead</h3>
                  <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                    Campus Community • 2023 - Present
                  </p>
                </div>
              </div>
              <ul className={`space-y-3 ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                <li className="flex gap-3">
                  <span className="mt-2 min-w-[6px] h-[6px] rounded-full bg-current"></span>
                  <span>Led a team of 50+ members in organizing technical workshops and hackathons</span>
                </li>
                {/*<li className="flex gap-3">
                  <span className="mt-2 min-w-[6px] h-[6px] rounded-full bg-current"></span>
                  <span>Conducted 15+ sessions on ML, cloud technologies, and software development</span>
                </li>*/}
                <li className="flex gap-3">
                  <span className="mt-2 min-w-[6px] h-[6px] rounded-full bg-current"></span>
                  <span>Grew community engagement by 200% through strategic initiatives</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 min-w-[6px] h-[6px] rounded-full bg-current"></span>
                  <span>Partnered with industry professionals to deliver real-world project guidance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'} pt-20 animate-on-scroll ${
            visibleSections.has('skills') ? 'slide-up-active' : ''
          }`} data-section="skills">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Technical Skills</h2>
            <p className={`text-lg mb-12 ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
              Technologies and tools I work with
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, catIdx) => (
                <div
                  key={catIdx}
                  className={`p-6 rounded-lg border transition-all duration-300 hover:scale-[1.02] animate-on-scroll ${
                    visibleSections.has('skills') ? 'skill-category-active' : ''
                  } ${
                    darkMode 
                      ? 'bg-gray-900/30 border-gray-800 hover:border-gray-700 hover:bg-gray-900/50' 
                      : 'bg-gray-50/50 border-gray-200 hover:border-gray-400 hover:bg-gray-50'
                  }`}
                  style={{ animationDelay: `${catIdx * 100}ms` }}
                  data-section="skills"
                >
                  <h3 className={`text-sm font-semibold mb-4 tracking-wide uppercase ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {category.category}
                  </h3>
                  <div className={`h-px mb-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-300'}`}></div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className={`px-3 py-1.5 rounded-md text-sm transition-all hover:scale-105 ${
                          darkMode 
                            ? 'bg-gray-800/50 text-gray-300 hover:bg-gray-800 hover:text-white' 
                            : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-500 hover:shadow-sm'
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
      <section className="py-20 px-6 mb-20">
        <div className="max-w-5xl mx-auto">
          <div className={`border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'} pt-20 animate-on-scroll ${
            visibleSections.has('contact') ? 'slide-up-active' : ''
          }`} data-section="contact">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">Get In Touch</h2>
            <p className={`text-lg mb-8 max-w-2xl ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              I'm always interested in hearing about new opportunities, collaborations, 
              or just having a chat about technology and innovation.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:aditinagendra7@gmail.com"
                className={`flex items-center gap-2 px-6 py-3 rounded-lg border transition-all hover:scale-105 ${
                  darkMode 
                    ? 'border-gray-700 hover:bg-gray-900 hover:border-gray-600' 
                    : 'border-gray-300 hover:bg-gray-50 hover:border-gray-500'
                }`}
              >
                <Mail size={20} /> Email
              </a>
              <a
                href="https://www.linkedin.com/in/aditi-nagendra/"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-6 py-3 rounded-lg border transition-all hover:scale-105 ${
                  darkMode 
                    ? 'border-gray-700 hover:bg-gray-900 hover:border-gray-600' 
                    : 'border-gray-300 hover:bg-gray-50 hover:border-gray-500'
                }`}
              >
                <Linkedin size={20} /> LinkedIn
              </a>
              <a
                href="https://github.com/aditinagendra05"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-6 py-3 rounded-lg border transition-all hover:scale-105 ${
                  darkMode 
                    ? 'border-gray-700 hover:bg-gray-900 hover:border-gray-600' 
                    : 'border-gray-300 hover:bg-gray-50 hover:border-gray-500'
                }`}
              >
                <Github size={20} /> GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`border-t py-8 px-6 ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-5xl mx-auto text-center">
          <p className={darkMode ? 'text-gray-500' : 'text-gray-500'}>
            © 2025 Aditi Nagendra. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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
        
        @keyframes fade-scale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
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
        
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
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
        
        .skill-tag-active {
          animation: fade-scale 0.5s ease-out forwards;
        }
        
        .skill-category-active {
          animation: skill-category-slide 0.6s ease-out forwards;
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        /* Add smooth transitions for all interactive elements */
        * {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
}