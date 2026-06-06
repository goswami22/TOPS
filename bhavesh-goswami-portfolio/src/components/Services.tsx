import React from "react";
import { motion } from "motion/react";
import { Laptop, Cpu, Server, Smartphone, PenTool, CheckCircle2 } from "lucide-react";

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  checkpoints: string[];
}

export default function Services() {
  const services: ServiceItem[] = [
    {
      id: 1,
      title: "Frontend Development",
      description: "Creating highly immersive, modern UI/UX workflows and high-speed React screens using Tailwind styling with elegant user journey animations.",
      icon: <Laptop className="w-6 h-6 text-cyan-400" />,
      checkpoints: ["React & Vite setup", "Tailwind CSS v4 config", "Fluid Micro-animations"],
    },
    {
      id: 2,
      title: "Full Stack Development",
      description: "Seamlessly combining interactive client assets with structural server logic, security parameters, and relational database systems.",
      icon: <Cpu className="w-6 h-6 text-purple-400" />,
      checkpoints: ["Dynamic API proxying", "Relational database binding", "Authentication flow setup"],
    },
    {
      id: 3,
      title: "Python Django Development",
      description: "Developing robust backend applications with secure REST APIs, clean object models, session tokens, and performance optimization.",
      icon: <Server className="w-6 h-6 text-amber-500" />,
      checkpoints: ["Robust Django frameworks", "Secure REST operations", "MySQL relational storage"],
    },
    {
      id: 5,
      title: "Responsive Web Design",
      description: "Adhering strictly to mobile-first practices. Ensuring robust compatibility across all devices, mobile platforms, and major browsers.",
      icon: <Smartphone className="w-6 h-6 text-indigo-400" />,
      checkpoints: ["Fluid breakpoint parameters", "Cross-browser consistency", "Interactive flex layouts"],
    },
    {
      id: 6,
      title: "UI/UX Translation",
      description: "Translating high-fidelity Figma and Photoshop wireframes into clean, semantic, and highly maintainable components.",
      icon: <PenTool className="w-6 h-6 text-teal-400" />,
      checkpoints: ["Figma mapping precision", "Visual consistency review", "Design component building"],
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-black/20">
      {/* Ambient background blur */}
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] bg-cyan-600/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Heading */}
        <div className="text-center mb-16 space-y-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-1 font-mono text-xs uppercase text-purple-400 font-bold bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Offerings</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight"
          >
            Expertise & <span className="text-gradient">Services</span>
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        {/* Services Grid with elegant layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((srv, idx) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="glass-panel hover:border-purple-500/20 p-8 rounded-2xl flex flex-col justify-between text-left relative overflow-hidden group shadow-2xl transition-all duration-300 hover:glow-purple hover:scale-[1.01]"
            >
              <div className="space-y-6">
                
                {/* Icon Hub with subtle border glow card */}
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-purple-600/10 group-hover:border-purple-500/30 group-hover:scale-105 transition-all duration-300">
                  {srv.icon}
                </div>

                <div className="space-y-3">
                  <h3 className="font-display font-extrabold text-xl text-white group-hover:text-purple-400 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="font-sans text-sm text-gray-400 leading-relaxed">
                    {srv.description}
                  </p>
                </div>

              </div>

              {/* Core Deliverable bullet stamps inside services cards */}
              <div className="mt-8 pt-6 border-t border-white/5 space-y-2">
                {srv.checkpoints.map((pt, index) => (
                  <div key={index} className="flex items-center space-x-2.5 text-xs text-gray-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400/80" />
                    <span className="font-mono">{pt}</span>
                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
