import { useState, useEffect } from "react";
import { Menu, X, Terminal, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  currentSection: string;
}

export default function Navbar({ currentSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Objective", id: "objective" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Services", id: "services" },
    { label: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
      
      // Update scrolled status for visual weight
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: id === "home" ? 0 : offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#030303]/80 backdrop-blur-md border-b border-purple-500/10 py-3"
          : "bg-transparent py-5"
      }`}
      id="main-navbar"
    >
      {/* Scroll Progress Bar */}
      <div 
        className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <div 
            onClick={() => scrollToSection("home")}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-blue-600 flex items-center justify-center glow-purple transition-transform duration-300 group-hover:scale-105">
              <Terminal className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold tracking-wider text-xl text-white group-hover:text-purple-400 transition-colors">
                BHAVESH<span className="text-purple-500">.</span>DEV
              </span>
              <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest leading-none">
                Portfolio v2.6.5
              </span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-panel-heavy border-t border-purple-500/10 absolute top-full left-0 w-full py-4 px-6 animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => {
              const isActive = currentSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`py-3 px-4 font-display text-base font-semibold text-left transition-all duration-200 rounded-xl ${
                    isActive
                      ? "bg-purple-600/10 text-purple-400 border-l-2 border-purple-500"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full mt-2 py-4 rounded-xl font-display font-semibold bg-gradient-to-r from-purple-600 to-blue-600 text-white flex items-center justify-center space-x-2 transition-transform hover:scale-95"
            >
              <span>Connect Now</span>
              <ArrowUpRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
