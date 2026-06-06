/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Terminal, Bot, Cpu, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import SidebarNav from "./components/SidebarNav";
import Hero from "./components/Hero";
import Objective from "./components/Objective";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackgroundParticles from "./components/BackgroundParticles";

export default function App() {
  const [currentSection, setCurrentSection] = useState("home");
  const [loading, setLoading] = useState(true);
  const [loadingStep, setLoadingStep] = useState(0);

  // Terminal loader sequences
  const loadingMessages = [
    "INITIALIZING_VECTORS_ENGINE...",
    "LOADING_GEOMETRIC_COORDINATES...",
    "BINDING_PYTHON_DJANGO_SCHEMAS...",
    "COMPILING_BHAVESH_PORTFOLIO_SYSTEMS...",
    "CONNECTION_ESTABLISHED_SUCCESSFULLY",
  ];

  useEffect(() => {
    if (!loading) return;

    const interval = setInterval(() => {
      setLoadingStep((prev) => {
        if (prev < loadingMessages.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          // Small delay before fading out
          setTimeout(() => setLoading(false), 800);
          return prev;
        }
      });
    }, 350);

    return () => clearInterval(interval);
  }, [loading, loadingMessages.length]);

  // Section observer scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "objective", "skills", "experience", "projects", "services", "contact"];
      const scrollPosition = window.scrollY + 220; // offset trigger

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen font-sans bg-[#030303] text-gray-200 overflow-x-hidden selection:bg-purple-600/30 selection:text-white">
      
      <AnimatePresence mode="wait">
        {loading ? (
          /* Futuristic Startup Terminal Loader Screen */
          <motion.div
            key="preloader"
            className="fixed inset-0 bg-[#030303] z-50 flex flex-col items-center justify-center p-6"
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            id="preloader-overlay"
          >
            {/* Ambient circular glow around center */}
            <div className="absolute w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-md w-full space-y-8 relative z-10 text-center">
              {/* Spinner icon wheel */}
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 to-blue-500 flex items-center justify-center shadow-xl shadow-purple-500/15 group relative overflow-hidden">
                  <Terminal className="w-8 h-8 text-white animate-pulse" />
                  <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </div>

              {/* Loader Terminal Text Container */}
              <div className="glass-panel p-6 rounded-2xl border border-white/5 text-left font-mono text-[11px] sm:text-xs text-gray-400 space-y-2 max-w-sm mx-auto shadow-2xl relative">
                {/* Simulated Mac topbar pins */}
                <div className="flex items-center space-x-1.5 border-b border-white/5 pb-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/50 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/50 inline-block" />
                </div>

                {loadingMessages.slice(0, loadingStep + 1).map((msg, index) => {
                  const isCurrent = index === loadingStep;
                  const isSuccess = index === loadingMessages.length - 1;
                  return (
                    <div key={index} className="flex items-start space-x-2">
                      <span className="text-purple-500 select-none">&gt;&gt;</span>
                      <span className={isSuccess ? "text-emerald-400 font-bold" : isCurrent ? "text-white" : "text-gray-500"}>
                        {msg}
                      </span>
                    </div>
                  );
                })}

                <div className="h-4" /> {/* Gap spacer */}
                
                {/* Smooth percentage indicators */}
                <div className="flex justify-between items-center text-[10px] text-gray-500 pt-2 border-t border-white/5">
                  <span>MODULE: MAIN_LOADER.JS</span>
                  <span className="text-cyan-400 font-bold animate-pulse">
                    {Math.round(((loadingStep + 1) / loadingMessages.length) * 100)}%
                  </span>
                </div>
              </div>

              {/* Minimal footer brand inside preloader */}
              <div className="flex items-center justify-center space-x-1.5 font-mono text-[10px] text-gray-600 tracking-wider">
                <Bot className="w-3.5 h-3.5" />
                <span>BHAVESH GOSWAMI PORTFOLIO // VER 2.6.5</span>
              </div>
            </div>
          </motion.div>
        ) : (
          /* Actual Portfolio Platform UI Layout */
          <motion.div
            key="core-app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Interactive Particle Animation Background under layer */}
            <BackgroundParticles />

            {/* Primary Sticky Header Menu */}
            <Navbar currentSection={currentSection} />

            {/* Sidebar Hover Menu on Desktop */}
            <SidebarNav currentSection={currentSection} />

            {/* Structured view parts */}
            <main className="relative z-10">
              <Hero />
              <Objective />
              <Skills />
              <Experience />
              <Projects />
              <Services />
              <Contact />
            </main>

            {/* High-fidelity Footer System with LinkedIn vector QR marker card */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

