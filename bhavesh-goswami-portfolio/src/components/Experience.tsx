import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin, Building2, CheckCircle, GraduationCap } from "lucide-react";

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  type: "work" | "study";
  bullets: string[];
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      role: "Full Stack Developer Trainee",
      company: "Tops Technologies",
      location: "India",
      period: "Present",
      isCurrent: true,
      type: "study",
      bullets: [
        "Building backend business logic and REST APIs using Python and Django",
        "Designing secure APIs for dynamic data handling",
        "Optimizing MySQL database schemas and query performance",
        "Developing scalable backend systems",
        "Integrating responsive frontend pages with robust backend services",
      ],
    },
    {
      id: 2,
      role: "Web Designer",
      company: "Rock Technolabs",
      location: "Ahmedabad, Gujarat",
      period: "September 2022 – March 2025",
      type: "work",
      bullets: [
        "Converted high-fidelity UI/UX mockups into pixel-perfect responsive HTML/CSS websites",
        "Developed custom mobile-first layouts using Bootstrap framework",
        "Integrated modern frontend designs directly into Magento and Shopify e-commerce platforms",
        "Debugged website display issues and improved rendering and speed parameters",
        "Optimized website assets using modern image compression and code minification tools",
        "Maintained client branding consistency across all production deliverables",
        "Collaborated closely with both frontend engineering and backend system developers",
        "Conducted thorough usability testing and targeted user-experience web improvements",
      ],
    },
    {
      id: 3,
      role: "Jr. Web Designer",
      company: "Thinkwik India Online Services LLP",
      location: "Ahmedabad, Gujarat",
      period: "March 2022 – August 2022",
      type: "work",
      bullets: [
        "Converted complex client design mockups into semantic clean HTML/CSS layouts",
        "Implemented adaptive responsive web design specs optimized for multiple viewports",
        "Fixed critical frontend layout bugs and rendering irregularities rapidly",
        "Ensured seamless cross-browser layout compatibility and modern aesthetic alignment",
        "Maintained strict clean-code and consistent UI system development standards",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-black/10">
      {/* Background radial effects */}
      <div className="absolute top-[30%] left-[-10%] w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[350px] h-[350px] bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-20 space-y-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-1 font-mono text-xs uppercase text-purple-400 font-bold bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Milestones</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight"
          >
            Employment <span className="text-gradient">Timeline</span>
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full" />
        </div>

        {/* Timeline Path Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Continuous Center Track Line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-purple-500 via-indigo-500 to-cyan-500 opacity-20 transform -translate-x-1/2" />

          {/* Timeline Nodes List */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={exp.id} 
                  className={`flex flex-col md:flex-row items-stretch relative ${
                    isEven ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  
                  {/* Outer Timeline Hub Node with dynamic glowing effects */}
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 top-6 z-20">
                    <motion.div 
                      whileHover={{ scale: 1.2 }}
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-lg border transition-all duration-300 ${
                        exp.isCurrent
                          ? "bg-purple-600 border-purple-400 text-white shadow-purple-500/30 glow-purple"
                          : "bg-black border-white/10 text-gray-400"
                      }`}
                    >
                      {exp.type === "study" ? (
                        <GraduationCap className="w-5 h-5" />
                      ) : (
                        <Briefcase className="w-5 h-5" />
                      )}
                    </motion.div>
                  </div>

                  {/* Left-hand placeholder spacing or Info for centered look on large screens */}
                  <div className="hidden md:block w-1/2 px-12 text-right md:text-left self-center">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5 }}
                      className={`space-y-1.5 ${isEven ? "text-left" : "text-right"}`}
                    >
                      <div className="flex items-center space-x-2 text-purple-400 font-mono text-sm leading-none justify-end md:justify-start">
                        <Calendar className="w-4 h-4 text-purple-400/80" />
                        <span className="font-semibold">{exp.period}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-gray-500 font-mono text-xs justify-end md:justify-start">
                        <MapPin className="w-3.5 h-3.5 text-gray-600" />
                        <span>{exp.location}</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Right side Detailed Glassmorphic Card */}
                  <div className="w-full md:w-1/2 pl-14 pr-4 md:px-12 text-left">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className="glass-panel-heavy p-6 sm:p-8 rounded-2xl relative shadow-2xl border border-white/5 bg-gradient-to-b from-[#0a0a0a] to-black hover:border-purple-500/20 hover:scale-[1.01] transition-all duration-300 group"
                    >
                      {/* Responsive Date helper badge visible exclusively on mobile */}
                      <div className="flex md:hidden flex-wrap gap-2 items-center text-[10px] font-mono mb-3 text-purple-400">
                        <span className="bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">{exp.period}</span>
                        <span className="text-gray-500">{exp.location}</span>
                      </div>

                      <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-3">
                        <div className="space-y-1">
                          <h4 className="font-display font-extrabold text-lg text-white group-hover:text-purple-400 transition-colors">
                            {exp.role}
                          </h4>
                          <span className="font-mono text-xs text-cyan-400 flex items-center space-x-1.5">
                            <Building2 className="w-3.5 h-3.5 text-cyan-500" />
                            <span>{exp.company}</span>
                          </span>
                        </div>
                        {exp.isCurrent && (
                          <span className="self-start text-[9px] font-mono tracking-widest font-bold bg-purple-500/20 text-purple-300 uppercase px-2 py-1 rounded">
                            ACTIVE
                          </span>
                        )}
                      </div>

                      {/* Content Bullet lists */}
                      <ul className="space-y-2.5">
                        {exp.bullets.map((bullet, index) => (
                          <li key={index} className="flex items-start space-x-2.5 text-sm text-gray-400 leading-relaxed">
                            <CheckCircle className="w-4 h-4 text-purple-500/60 mt-0.5 flex-shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
