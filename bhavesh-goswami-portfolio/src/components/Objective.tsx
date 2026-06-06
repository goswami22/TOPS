import { motion } from "motion/react";
import { Compass, Target, Linkedin, Github, Award, ChevronRight, CheckCircle } from "lucide-react";

export default function Objective() {
  const socialLinks = [
    {
      name: "LinkedIn Profile",
      url: "https://linkedin.com/in/bhavesh-goswami-dev",
      username: "bhavesh-goswami-dev",
      icon: <Linkedin className="w-5 h-5 text-blue-400" />,
      color: "hover:border-blue-500 hover:bg-blue-500/10",
    },
    {
      name: "GitHub Repository",
      url: "https://github.com/goswami22",
      username: "goswami22",
      icon: <Github className="w-5 h-5 text-purple-400" />,
      color: "hover:border-purple-500 hover:bg-purple-500/10",
    },
  ];

  const valueAesthetics = [
    {
      title: "UI/UX & Frontend Polish",
      desc: "Pixel-perfect conversion of complex mockups into fast, accessible, fluid React pages.",
    },
    {
      title: "Scalable Python Backend",
      desc: "Robust business logic, structured schemas, safe dynamically integrated REST APIs.",
    },
    {
      title: "End-to-End Synergy",
      desc: "Fusing client-side performance, responsive parameters, and performance tuning.",
    },
  ];

  return (
    <section 
      id="objective" 
      className="py-24 relative overflow-hidden"
    >
      {/* Background radial highlight */}
      <div className="absolute top-[30%] right-[10%] w-[350px] h-[350px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16 space-y-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-1 font-mono text-xs uppercase text-purple-400 font-bold bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Core Vision</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight"
          >
            Career <span className="text-gradient">Objective</span>
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Main Statement Glassmorphic Card (Left 7 Columns) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 flex flex-col justify-between p-8 sm:p-10 rounded-2xl glass-panel-heavy border-l-4 border-l-purple-500/80 shadow-2xl relative"
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-3 text-purple-400">
                <Target className="w-6 h-6 animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-widest font-bold">Growth Strategy</span>
              </div>

              <div className="space-y-4 text-left">
                <p className="font-sans text-gray-200 text-lg leading-relaxed">
                  Strong Web Designer with proven industry experience at{" "}
                  <strong className="text-white hover:text-purple-400 transition-colors">Rock Technolabs</strong>, specializing in transforming high-fidelity designs into responsive and user-friendly interfaces.
                </p>
                <p className="font-sans text-purple-300 font-medium text-lg leading-relaxed border-l-2 border-purple-500/45 pl-4">
                  Currently evolving into a Full Stack Developer with expertise in Python, Django, MySQL, and modern web technologies.
                </p>
                <p className="font-sans text-gray-400 text-base sm:text-lg leading-relaxed">
                  Skilled in combining UI/UX design principles, frontend development, backend business logic, and performance optimization to build scalable, secure, and high-performance web applications with seamless end-to-end integration.
                </p>
              </div>
            </div>

            {/* Micro value badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/5">
              {valueAesthetics.map((item, idx) => (
                <div key={idx} className="space-y-1.5 text-left">
                  <div className="flex items-center space-x-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="font-display font-semibold text-xs text-white">{item.title}</span>
                  </div>
                  <p className="font-sans text-[11px] text-gray-500 leading-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Social connections & Credentials Card (Right 4 Columns) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex flex-col justify-between p-8 rounded-2xl glass-panel border border-white/5 relative bg-gradient-to-b from-[#0e0e0e] to-black"
          >
            <div className="space-y-6 text-left">
              <div className="flex items-center space-x-2 text-cyan-400">
                <Award className="w-5 h-5" />
                <span className="font-mono text-xs uppercase tracking-widest font-bold">Online Registry</span>
              </div>
              <p className="font-sans text-xs text-gray-400 leading-relaxed">
                Connect on social developer registries to view real repositories, open source, and interactive career logs.
              </p>

              {/* Connected Links list */}
              <div className="space-y-4">
                {socialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block p-4 rounded-xl bg-black/40 border border-white/5 transition-all duration-300 ${link.color} group`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-lg bg-white/5">
                          {link.icon}
                        </div>
                        <div className="text-left">
                          <p className="font-display text-xs font-semibold text-white group-hover:text-purple-300 transition-colors">
                            {link.name}
                          </p>
                          <p className="font-mono text-[10px] text-gray-500">
                            {link.username}
                          </p>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Graphic stamp decorative */}
            <div className="mt-8 border-t border-white/5 pt-4 text-center">
              <span className="font-mono text-[10px] text-gray-600 uppercase tracking-widest block">
                AHMEDABAD, GUJARAT, INDIA
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
