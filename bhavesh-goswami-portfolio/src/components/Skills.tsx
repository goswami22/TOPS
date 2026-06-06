import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Laptop, Database, Cpu, Wrench, Sparkles, Brain, CheckCircle2, Award, Zap } from "lucide-react";

interface SkillItem {
  name: string;
  level: number; // percentage confidence e.g. 90
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  tags: SkillItem[];
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const categories: SkillCategory[] = [
    {
      title: "Frontend Development",
      icon: <Laptop className="w-5 h-5 text-cyan-400" />,
      tags: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 95 },
        { name: "SCSS", level: 90 },
        { name: "JavaScript", level: 90 },
        { name: "jQuery", level: 90 },
        { name: "React", level: 85 },
        { name: "Bootstrap", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Responsive Web Design", level: 95 },
        { name: "Website Optimization", level: 88 },
      ],
    },
    {
      title: "Backend Development",
      icon: <Database className="w-5 h-5 text-purple-400" />,
      tags: [
        { name: "Python", level: 90 },
        { name: "Django", level: 85 },
        { name: "SQL", level: 85 },
      ],
    },
    {
      title: "Full Stack & Architecture",
      icon: <Cpu className="w-5 h-5 text-amber-400" />,
      tags: [
        { name: "REST APIs", level: 90 },
        { name: "CRUD Operations", level: 92 },
        { name: "Database Integration", level: 88 },
        { name: "Authentication Systems", level: 85 },
        { name: "Frontend & Backend Integration", level: 90 },
        { name: "Scalable Web App Development", level: 83 },
      ],
    },
    {
      title: "Tools & Design",
      icon: <Wrench className="w-5 h-5 text-emerald-400" />,
      tags: [
        { name: "Figma", level: 85 },
        { name: "Adobe Photoshop", level: 75 },
        { name: "Git", level: 90 },
        { name: "GitHub", level: 92 },
      ],
    },
    {
      title: "AI & Modern Workflow",
      icon: <Sparkles className="w-5 h-5 text-pink-400" />,
      tags: [
        { name: "ChatGPT", level: 95 },
        { name: "Antigravity", level: 95 },
        { name: "Google AI Studio", level: 95 },
        { name: "AI-Assisted Development", level: 95 },
        { name: "Modern Development Workflow", level: 90 },
      ],
    },
    {
      title: "Soft Skills",
      icon: <Brain className="w-5 h-5 text-indigo-400" />,
      tags: [
        { name: "Communication", level: 95 },
        { name: "Problem Solving", level: 90 },
        { name: "Team Collaboration", level: 95 },
        { name: "Adaptability", level: 92 },
        { name: "Time Management", level: 90 },
        { name: "Creative Thinking", level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-black/30">
      {/* Background neon glows */}
      <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16 space-y-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-1 font-mono text-xs uppercase text-cyan-400 font-bold bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Powerhouse</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight"
          >
            Technical <span className="text-gradient">Skills</span>
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Tab & Grid container split into a clean Interactive Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Categories Sidebar List Selector (Left 4 columns) */}
          <div className="lg:col-span-4 flex flex-col space-y-3">
            <span className="font-mono text-xs font-semibold text-gray-500 uppercase tracking-widest text-left pl-2">
              Technology Domains
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center space-x-3.5 p-4 rounded-xl text-left border transition-all duration-300 ${
                    activeTab === idx
                      ? "glass-panel-heavy border-cyan-500/30 text-white shadow-xl glow-purple bg-gradient-to-r from-cyan-950/10 to-transparent"
                      : "bg-[#0b0b0b] border-white/5 text-gray-400 hover:text-white hover:border-white/10"
                  }`}
                >
                  <div className={`p-2 rounded-lg ${activeTab === idx ? "bg-cyan-500/10" : "bg-white/5"}`}>
                    {cat.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display font-bold text-sm leading-tight">
                      {cat.title}
                    </span>
                    <span className="font-mono text-[10px] text-gray-500 mt-0.5">
                      {cat.tags.length} Technologies
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Active Skill Category Grid containing interactive slider nodes */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="glass-panel-heavy p-6 sm:p-8 rounded-2xl relative shadow-2xl overflow-hidden"
              >
                {/* Background ambient accent element in active container */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-center space-x-3 border-b border-white/5 pb-4 mb-8">
                  <div className="p-2.5 rounded-lg bg-white/5">
                    {categories[activeTab].icon}
                  </div>
                  <div className="text-left">
                    <h3 className="font-display font-extrabold text-xl text-white">
                      {categories[activeTab].title}
                    </h3>
                    <p className="font-mono text-xs text-gray-500 uppercase tracking-wider">
                      Confidence Index & Fluency Metrics
                    </p>
                  </div>
                </div>

                {/* Skill List with progress metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  {categories[activeTab].tags.map((skill, index) => (
                    <div key={index} className="space-y-2 group text-left">
                      <div className="flex justify-between items-center">
                        <span className="font-display font-semibold text-sm text-gray-200 group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </span>
                        <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Slider Outer track */}
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden relative border border-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, delay: index * 0.05 }}
                          className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full relative"
                          style={{ width: `${skill.level}%` }}
                        >
                          {/* Pulsing glow tip */}
                          <div className="absolute top-0 right-0 w-1.5 h-full bg-white animate-ping" />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer seal */}
                <div className="mt-8 border-t border-white/5 pt-4 flex items-center justify-between font-mono text-[10px] text-gray-500">
                  <span className="flex items-center space-x-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Real-world client project applied</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Award className="w-3.5 h-3.5 text-amber-500" />
                    <span>Industry Competent</span>
                  </span>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
