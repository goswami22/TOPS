import { Home, Compass, Cpu, Briefcase, Code2, Sparkles, Mail } from "lucide-react";
import { motion } from "motion/react";

interface SidebarNavProps {
  currentSection: string;
}

export default function SidebarNav({ currentSection }: SidebarNavProps) {
  const sidebarItems = [
    { label: "Home", id: "home", icon: Home },
    { label: "Objective", id: "objective", icon: Compass },
    { label: "Skills", id: "skills", icon: Cpu },
    { label: "Experience", id: "experience", icon: Briefcase },
    { label: "Projects", id: "projects", icon: Code2 },
    { label: "Services", id: "services", icon: Sparkles },
    { label: "Contact", id: "contact", icon: Mail },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed navbar offset
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
    <div
      id="desktop-sidebar-menu"
      className="fixed left-5 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center"
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        className="glass-panel-heavy bg-[#030303]/40 border border-white/5 backdrop-blur-lg px-2.5 py-5 rounded-2xl flex flex-col items-center gap-4 shadow-2xl relative"
      >
        {/* Glow effect at the core of sidebar container */}
        <div className="absolute -inset-px -z-10 bg-gradient-to-b from-purple-500/10 via-transparent to-blue-500/10 rounded-2xl pointer-events-none" />

        {sidebarItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = currentSection === item.id;

          return (
            <div key={item.id} className="relative group flex items-center">
              {/* Sidebar Icon Button */}
              <button
                id={`sidebar-item-${item.id}`}
                onClick={() => scrollToSection(item.id)}
                className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 relative outline-none select-none ${
                  isActive
                    ? "text-purple-400 border-purple-500/30 bg-purple-500/10 shadow-[0_0_15px_rgba(168,85,247,0.15)]"
                    : "text-gray-400 border-transparent hover:text-white hover:bg-white/5 hover:border-white/5"
                }`}
                aria-label={item.label}
              >
                <IconComponent className="w-[18px] h-[18px] transition-transform duration-300 group-hover:scale-110" />

                {/* Left Active border indicator dot */}
                {isActive && (
                  <span className="absolute -left-1 w-1 h-3 rounded-r-md bg-gradient-to-b from-purple-500 to-blue-500" />
                )}
              </button>

              {/* Sleek Tooltip slide-out dynamically */}
              <div
                id={`sidebar-tooltip-${item.id}`}
                className="absolute left-14 pl-1 opacity-0 pointer-events-none -translate-x-2 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-x-0 transition-all duration-300"
              >
                <div className="relative bg-[#070707]/95 border border-white/5 backdrop-blur-md px-3.5 py-1.5 rounded-lg shadow-xl flex items-center">
                  {/* Small triangular caret facing left */}
                  <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-[#070707]/95 border-l border-b border-white/5" />
                  
                  <span className="font-display font-medium text-xs text-white tracking-wide leading-none select-none">
                    {item.label}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
