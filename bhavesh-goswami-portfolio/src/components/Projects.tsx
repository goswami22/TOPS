import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FolderGit2, ExternalLink, Github, Layers, Code, ShoppingBag, Eye, Smartphone, Cpu } from "lucide-react";

interface ProjectItem {
  id: number;
  title: string;
  category: "fullstack" | "frontend" | "design";
  description: string;
  tech: string[];
  imageUrl: string;
  liveUrl: string;
  gitUrl: string;
  icon: React.ReactNode;
}

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "fullstack" | "frontend" | "design">("all");

  const projects: ProjectItem[] = [
    {
      id: 1,
      title: "Django CRUD Application",
      category: "fullstack",
      description: "A highly secure Python & Django powered dynamic data registry app with streamlined user auth, real-time relational validations, and optimized query operations.",
      tech: ["Python", "Django", "MySQL", "Bootstrap", "REST API"],
      imageUrl: "https://picsum.photos/seed/py_django/800/600?blur=1",
      liveUrl: "https://github.com/goswami22",
      gitUrl: "https://github.com/goswami22",
      icon: <Cpu className="w-5 h-5 text-purple-400" />,
    },
    {
      // E-commerce Website
      id: 2,
      title: "Premium E-commerce Website",
      category: "fullstack", // Full stack category
      description: "An immersive digital storefront featuring fluid navigation, modern checkout mechanisms, secure billing configurations, and state-of-the-art catalog filters.",
      tech: ["React.js", "Tailwind CSS", "Python API", "MySQL", "Context State"],
      imageUrl: "https://picsum.photos/seed/ecommerce/800/600?blur=1",
      liveUrl: "https://github.com/goswami22",
      gitUrl: "https://github.com/goswami22",
      icon: <ShoppingBag className="w-5 h-5 text-emerald-400" />,
    },
    {
      id: 3,
      title: "Modern Portfolio Website",
      category: "frontend",
      description: "Bhavesh's own futuristic personal platform with micro-effects, custom canvas background particles, scroll speed metrics, and fully responsive layouts.",
      tech: ["React.js", "Tailwind CSS", "Framer Motion", "Vite Engine"],
      imageUrl: "https://picsum.photos/seed/portfolio_v2/800/600?blur=1",
      liveUrl: "#",
      gitUrl: "https://github.com/goswami22",
      icon: <Code className="w-5 h-5 text-cyan-400" />,
    },
    {
      id: 4,
      title: "Shopify Store Experience",
      category: "design",
      description: "Highly customized high-conversion design implementation built onto the Shopify theme engine matching elegant branding guides and lightning load speeds.",
      tech: ["Shopify Liquid", "Liquid Theme", "JavaScript", "Responsive Design"],
      imageUrl: "https://picsum.photos/seed/shopify/800/600?blur=1",
      liveUrl: "https://linkedin.com/in/bhavesh-goswami-dev",
      gitUrl: "https://github.com/goswami22",
      icon: <ShoppingBag className="w-5 h-5 text-pink-400" />,
    },
    {
      id: 5,
      title: "Responsive Landing Page",
      category: "frontend",
      description: "Highly interactive layout optimized for rapid landing captures. Seamless conversion of Figma mockups with 100% Google Lighthouse score rankings.",
      tech: ["HTML5", "CSS3 / SCSS", "Bootstrap", "Website Optimization"],
      imageUrl: "https://picsum.photos/seed/landing/800/600?blur=1",
      liveUrl: "https://linkedin.com/in/bhavesh-goswami-dev",
      gitUrl: "https://github.com/goswami22",
      icon: <Smartphone className="w-5 h-5 text-indigo-400" />,
    },
  ];

  const filteredProjects = filter === "all" ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-black/40">
      {/* Background radial atmosphere */}
      <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[15%] left-[5%] w-[350px] h-[350px] bg-purple-600/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Title */}
        <div className="text-center mb-16 space-y-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-1 font-mono text-xs uppercase text-cyan-400 font-bold bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Showcase</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto rounded-full" />
        </div>

        {/* Filter Selection Panel */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
          {([
            { id: "all", label: "All Projects" },
            { id: "fullstack", label: "Full Stack" },
            { id: "frontend", label: "Frontend Work" },
            { id: "design", label: "E-comm & Design" },
          ] as const).map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className={`px-5 py-2.5 rounded-xl font-display text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                filter === btn.id
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg glow-purple scale-105"
                  : "bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:border-white/10 hover:bg-white/10"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Projects Grid Container with stagger and smooth transition */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass-panel hover:border-purple-500/30 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between group transform hover:-translate-y-1.5 transition-all duration-300 hover:glow-purple"
              >
                
                {/* Project Image block with hover zoom overlay */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-black flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 z-10" />
                  
                  {/* Technology category chip overlay */}
                  <div className="absolute top-4 left-4 z-20 flex items-center space-x-1.5 bg-black/75 backdrop-blur px-3 py-1.5 rounded-lg border border-white/10 font-mono text-[10px] font-bold text-cyan-400 block">
                    {project.icon}
                    <span className="uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  {/* Dark mask on hover */}
                  <div className="absolute inset-0 bg-purple-900/10 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10" />

                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content Block */}
                <div className="p-6 text-left flex-grow flex flex-col justify-between">
                  <div className="space-y-4">
                    <h3 className="font-display font-extrabold text-lg sm:text-xl text-white group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 space-y-4">
                    {/* Tags List */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t, idx) => (
                        <span 
                          key={idx} 
                          className="font-mono text-[10px] text-gray-400 bg-white/5 px-2 py-0.5 rounded border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Panel Buttons */}
                    <div className="flex items-center space-x-3 pt-4 border-t border-white/5">
                      <a
                        href={project.liveUrl}
                        target={project.liveUrl === "#" ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        className="flex-1 py-2.5 rounded-xl font-display font-bold text-[11px] sm:text-xs text-center border-gradient border-gradient-hover text-white flex items-center justify-center space-x-1.5 transition-all w-full"
                      >
                        <Eye className="w-3.5 h-3.5 text-purple-400" />
                        <span>Live Demo</span>
                      </a>
                      <a
                        href={project.gitUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white flex items-center justify-center transition-all"
                        aria-label="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
