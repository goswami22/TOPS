import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, Linkedin, Mail, FileText, ArrowRight, Sparkles, Terminal, Code2 } from "lucide-react";
// @ts-ignore
import bhaveshProfile from "../assets/images/bhavesh_profile_1779768387302.png";

export default function Hero() {
  const words = ["Full Stack Developer", "Python Developer", "Frontend Developer"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // Typewriter effect
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2000); // Wait 2s before starting to erase
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 120);

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, index, words]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleDownloadCV = async () => {
    // Elegant download toast
    const infoMessage = document.createElement("div");
    infoMessage.className = "fixed bottom-5 right-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-sans text-sm font-semibold px-6 py-4 rounded-xl shadow-2xl z-50 flex items-center space-x-3 transition-all duration-300 transform animate-bounce";
    infoMessage.innerHTML = `
      <svg class="h-5 w-5 fill-none stroke-current animate-spin" viewBox="0 0 24 24" stroke-width="2">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <span>Generating Resume PDF...</span>
    `;
    document.body.appendChild(infoMessage);

    try {
      // Programmatic, high-fidelity client-side PDF generation
      const { generateResumePDF } = await import("../utils/cvGenerator");
      const pdfBytes = await generateResumePDF();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const blobUrl = URL.createObjectURL(blob);

      // Create anchor and trigger download
      const link = document.createElement("a");
      link.href = blobUrl;
      link.setAttribute("download", "Bhavesh_Goswami_CV.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);

      infoMessage.innerHTML = `
        <svg class="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <span>CV Downloaded Successfully!</span>
      `;
    } catch (err) {
      console.error("PDF generation failed, using standard fallback download...", err);
      // Fallback
      const link = document.createElement("a");
      link.href = "/Bhavesh_Goswami_CV.pdf";
      link.setAttribute("download", "Bhavesh_Goswami_CV.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      infoMessage.innerHTML = `
        <span class="text-amber-400">⚠️ Error generating CV. Downloaded copy.</span>
      `;
    }

    setTimeout(() => {
      infoMessage.remove();
    }, 4000);
  };

  const techIcons = [
    { name: "Python", color: "text-amber-400" },
    { name: "Django", color: "text-emerald-500" },
    { name: "React", color: "text-cyan-400" },
    { name: "Tailwind CSS", color: "text-blue-400" },
    { name: "JavaScript", color: "text-yellow-400" },
    { name: "MySQL", color: "text-indigo-400" },
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
    >
      {/* Background radial glowing gradients */}
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12">
        
        {/* Intro Left Info Column */}
        <div className="lg:col-span-7 flex flex-col space-y-8 text-left order-2 lg:order-1">
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 px-4 py-1.5 rounded-full w-fit"
          >
            <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
            <span className="font-mono text-xs text-purple-300 font-semibold tracking-wide uppercase">
              Ready for hire & freelance tasks
            </span>
          </motion.div>

          <div className="space-y-4">
            <motion.h4 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="font-mono text-base text-gray-400 font-medium uppercase tracking-[0.3em]"
            >
              HI, THERE! I AM
            </motion.h4>
            
            <div className="flex flex-row items-center justify-between sm:justify-start gap-4 sm:gap-8 mt-4">
              <motion.h1 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="font-display font-extrabold text-5xl sm:text-7xl text-white tracking-tight leading-none"
              >
                Bhavesh <br />
                <span className="text-gradient">Goswami</span>
              </motion.h1>
            </div>

            {/* Simulated Typewriter Roles Display */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="h-12 flex items-center"
            >
              <span className="font-mono text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                {words[index].slice(0, subIndex)}
              </span>
              <span className="w-[1.5px] h-6 bg-purple-400 ml-1.5 animate-pulse inline-block" />
            </motion.div>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="font-sans text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl"
          >
            Passionate Full Stack Developer focused on building responsive, scalable, and high-performance web applications with modern technologies.
          </motion.p>

          {/* Social Links Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center space-x-4"
          >
            <a 
              href="https://linkedin.com/in/bhavesh-goswami-dev" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-600 hover:border-purple-500 hover:scale-110 text-gray-300 hover:text-white transition-all duration-300 hover:glow-purple"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/goswami22" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 hover:scale-110 text-gray-300 hover:text-white transition-all duration-300 hover:glow-blue"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="mailto:goswamibhavesh22@gmail.com" 
              className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-teal-600 hover:border-teal-500 hover:scale-110 text-gray-300 hover:text-white transition-all duration-300"
              aria-label="Email Address"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
          >
            <button 
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 rounded-xl font-display font-bold text-sm bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:glow-purple text-white hover:opacity-95 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Hire Me</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={handleDownloadCV}
              className="px-8 py-4 rounded-xl font-display font-semibold text-sm bg-white/5 hover:bg-white/10 border border-white/10 text-white transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-purple-400" />
              <span>Download CV</span>
            </button>
            <button 
              onClick={() => scrollToSection("projects")}
              className="px-8 py-4 rounded-xl font-display font-semibold text-sm border border-purple-500/30 text-purple-300 hover:text-white hover:border-purple-500 hover:glow-purple transition-all duration-300 flex items-center justify-center"
            >
              <span>View Projects</span>
            </button>
          </motion.div>

        </div>

        {/* Luxurious Profile Photo Showcase Column Right */}
        <div className="lg:col-span-12 xl:col-span-5 flex items-center justify-center lg:py-8 order-1 lg:order-2">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ y: -10, transition: { duration: 0.3, ease: "easeOut" } }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative group/profile cursor-pointer"
          >
            {/* Extremely luxurious multilayer dynamic glow rings backing the profile photo */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-600 via-pink-600 to-blue-600 rounded-full blur-3xl opacity-35 group-hover/profile:opacity-65 transition-opacity duration-700 pointer-events-none" />
            <div className="absolute -inset-1.5 sm:-inset-2.5 bg-gradient-to-tr from-purple-500 via-pink-400 to-blue-400 rounded-full blur-xl opacity-60 group-hover/profile:opacity-80 transition-opacity duration-500 pointer-events-none" />
            
            {/* Conic glowing background rotating outline */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-500 via-pink-400 to-blue-400 p-[3.5px] sm:p-[4.5px] animate-[spin_12s_linear_infinite]" />

            {/* Inner main photo wrapper, luxurious double borders and pure absolute rendering */}
            <div className="relative w-64 h-64 xs:w-72 xs:h-72 sm:w-88 sm:h-88 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] xl:w-[420px] xl:h-[420px] rounded-full p-1.5 bg-[#050507] overflow-hidden flex items-center justify-center">
              <div className="w-full h-full rounded-full overflow-hidden border border-white/10 bg-[#09090b] relative">
                <img 
                  src={bhaveshProfile} 
                  alt="Bhavesh Goswami Portfolio Headshot" 
                  className="w-full h-full object-cover object-center transition-transform duration-[800ms] ease-out group-hover/profile:scale-108"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
