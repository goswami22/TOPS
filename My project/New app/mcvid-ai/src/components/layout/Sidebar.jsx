import { motion } from "framer-motion";
import {
  Home,
  Clapperboard,
  FolderOpen,
  LayoutTemplate,
  Wand2,
  Images,
  CreditCard,
  Code2,
  BookOpen,
  Users,
  Settings,
  ChevronsLeft,
  ChevronsRight,
  Crown,
  Moon,
  Sun,
  ChevronRight,
  Sparkles,
  X,
} from "lucide-react";
import { useUI } from "../../context/UIContext";
import { EASE_CLASS as EASE } from "../../lib/motion";

const NAV_ITEMS = [
  { id: "home", label: "Home", icon: Home },
  { id: "create-video", label: "Create Video", icon: Clapperboard },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "templates", label: "Templates", icon: LayoutTemplate },
  { id: "ai-tools", label: "AI Tools", icon: Wand2 },
  { id: "assets", label: "Assets", icon: Images },
  { id: "pricing", label: "Pricing", icon: CreditCard },
  { id: "api", label: "API", icon: Code2 },
  { id: "documentation", label: "Documentation", icon: BookOpen },
  { id: "community", label: "Community", icon: Users },
  { id: "settings", label: "Settings", icon: Settings },
];

// Shared premium easing curve — used everywhere a sidebar surface animates
// so every transition in this component feels like one coordinated motion.
// (Imported as EASE_CLASS from ../../lib/motion, aliased to EASE below.)

export default function Sidebar() {
  // All shared state (collapse, mobile drawer, active item, theme) now
  // lives in UIContext so Navbar can read/drive the same state later.
  const {
    isSidebarExpanded,
    toggleSidebar,
    isMobileSidebarOpen,
    closeMobileSidebar,
    activeNavItem,
    setActiveNavItem,
    isDark,
    toggleTheme,
  } = useUI();

  return (
    <>
      {/* Mobile overlay — sits behind the drawer, closes it on click.
          Always mounted so opacity can transition instead of popping in/out. */}
      <div
        aria-hidden={!isMobileSidebarOpen}
        onClick={closeMobileSidebar}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${EASE} md:hidden ${
          isMobileSidebarOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex h-dvh flex-col border-r border-line bg-surface-glass shadow-[8px_0_40px_-24px_var(--shadow-tint)] backdrop-blur-2xl transition-transform duration-300 ${EASE} md:transition-[width] ${
          isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 w-[280px] ${isSidebarExpanded ? "md:w-[280px]" : "md:w-[90px]"}`}
      >
        {/* ambient brand glow, premium touch */}
        <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-[#7C5CFF]/10 blur-3xl" />
        {/* subtle glass sheen along the right edge, mirrors Navbar's top sheen */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-line-strong to-transparent" />

        {/* Header: Logo + Collapse toggle (desktop) / Close (mobile) */}
        <div className="relative flex h-[72px] shrink-0 items-center border-b border-line px-4">
          <div
            className={`flex items-center gap-3 overflow-hidden transition-all duration-300 ${EASE} ${
              isSidebarExpanded ? "md:w-full md:opacity-100" : "md:w-0 md:opacity-0"
            } w-full opacity-100`}
          >
            <LogoMark />
            <span
              className={`whitespace-nowrap text-base font-bold tracking-tight text-ink transition-all duration-300 ${EASE} ${
                isSidebarExpanded ? "md:translate-x-0 md:opacity-100" : "md:-translate-x-2 md:opacity-0"
              }`}
            >
              MCvid <span className="text-[#9D7CFF]">AI</span>
            </span>
          </div>

          {/* Desktop collapse toggle */}
          <motion.button
            type="button"
            onClick={toggleSidebar}
            aria-label={isSidebarExpanded ? "Collapse sidebar" : "Expand sidebar"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
            className={`hidden h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-line bg-glass-1 text-muted transition-colors duration-200 hover:border-[#7C5CFF]/40 hover:bg-[#7C5CFF]/10 hover:text-ink hover:shadow-[0_4px_16px_-4px_rgba(124,92,255,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5CFF]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg md:flex ${
              isSidebarExpanded ? "ml-auto" : "mx-auto"
            }`}
          >
            {isSidebarExpanded ? (
              <ChevronsLeft size={18} strokeWidth={2} />
            ) : (
              <ChevronsRight size={18} strokeWidth={2} />
            )}
          </motion.button>

          {/* Mobile close */}
          <motion.button
            type="button"
            onClick={closeMobileSidebar}
            aria-label="Close menu"
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
            className={`ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-line bg-glass-1 text-muted transition-colors duration-200 hover:border-line-strong hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5CFF]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg md:hidden`}
          >
            <X size={18} strokeWidth={2} />
          </motion.button>
        </div>

        {/* Logo mark only, centered when collapsed on desktop */}
        {!isSidebarExpanded && (
          <div className="hidden justify-center pt-5 md:flex">
            <LogoMark />
          </div>
        )}

        {/* Nav */}
        <nav
          className={`flex-1 overflow-y-auto overflow-x-hidden px-3 pt-6 pb-5
            [&::-webkit-scrollbar]:w-1.5
            [&::-webkit-scrollbar-track]:bg-transparent
            [&::-webkit-scrollbar-thumb]:rounded-full
            [&::-webkit-scrollbar-thumb]:bg-glass-3
            hover:[&::-webkit-scrollbar-thumb]:bg-line-strong`}
          style={{ scrollbarWidth: "thin", scrollbarColor: "var(--color-line-strong) transparent" }}
        >
          <ul className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeNavItem === item.id;
              return (
                <li key={item.id}>
                  <motion.button
                    type="button"
                    onClick={() => setActiveNavItem(item.id)}
                    title={!isSidebarExpanded ? item.label : undefined}
                    whileHover={!isActive ? { x: 3 } : undefined}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className={`group relative flex w-full items-center gap-3 rounded-2xl px-3.5 py-3 text-sm tracking-tight transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5CFF]/50 focus-visible:ring-inset ${
                      isSidebarExpanded ? "justify-start" : "md:justify-center"
                    } ${
                      isActive
                        ? "font-semibold text-ink ring-1 ring-inset ring-[#7C5CFF]/30 bg-gradient-to-r from-[#7C5CFF]/25 via-[#7C5CFF]/10 to-transparent shadow-[0_0_0_1px_rgba(124,92,255,0.35),0_0_18px_-4px_rgba(124,92,255,0.45)] hover:shadow-[0_0_0_1px_rgba(124,92,255,0.5),0_0_26px_-2px_rgba(124,92,255,0.65)]"
                        : "font-medium text-muted hover:bg-glass-2 hover:text-ink"
                    }`}
                  >
                    {isActive && (
                      <span className="absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-full bg-gradient-to-b from-[#9D7CFF] to-[#7C5CFF] shadow-[0_0_10px_2px_rgba(124,92,255,0.7)]" />
                    )}
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-200 ${EASE} ${
                        isActive ? "bg-[#7C5CFF]/20" : "group-hover:scale-110"
                      }`}
                    >
                      <Icon
                        size={19}
                        strokeWidth={isActive ? 2.25 : 2}
                        className={`shrink-0 transition-colors duration-200 ${
                          isActive ? "text-[#9D7CFF]" : "text-subtle group-hover:text-ink"
                        }`}
                      />
                    </span>
                    <span
                      className={`overflow-hidden whitespace-nowrap transition-all duration-200 ${EASE} ${
                        isSidebarExpanded ? "opacity-100 md:translate-x-0" : "md:w-0 md:-translate-x-2 md:opacity-0"
                      }`}
                    >
                      {item.label}
                    </span>
                  </motion.button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom area */}
        <div className="flex flex-col gap-4 border-t border-line p-4">
          {/* Upgrade to Pro card */}
          <div
            className={`relative overflow-hidden rounded-[20px] border border-[#7C5CFF]/25 bg-glass-2 backdrop-blur-xl shadow-[0_8px_30px_rgba(124,92,255,0.12)] transition-all duration-300 ${EASE} ${
              isSidebarExpanded ? "p-4 opacity-100" : "md:h-11 md:w-11 md:self-center md:p-0 p-4 opacity-100"
            }`}
          >
            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#5BE7FF]/10 blur-2xl" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#7C5CFF]/15 via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#9D7CFF]/50 to-transparent" />

            {isSidebarExpanded ? (
              <div className="relative hidden md:block">
                <div className="mb-2 flex items-center gap-2 text-[#9D7CFF]">
                  <Crown size={16} strokeWidth={2} />
                  <span className="text-[13px] font-semibold text-ink">Upgrade to Pro</span>
                </div>
                <p className="mb-3 text-xs leading-relaxed text-muted">
                  Unlock unlimited videos, premium features and priority support.
                </p>
                <motion.button
                  type="button"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="w-full rounded-xl bg-[#7C5CFF] py-2 text-xs font-semibold text-ink shadow-[0_4px_16px_rgba(124,92,255,0.4)] transition-colors duration-200 hover:bg-[#8F6FFF] hover:shadow-[0_6px_20px_rgba(124,92,255,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5CFF]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                >
                  Upgrade Now
                </motion.button>
              </div>
            ) : (
              <motion.button
                type="button"
                title="Upgrade to Pro"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
                className="relative hidden h-11 w-11 items-center justify-center rounded-xl text-[#9D7CFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5CFF]/50 md:flex"
              >
                <Crown size={18} strokeWidth={2} />
              </motion.button>
            )}

            {/* Mobile: always show full card content regardless of desktop `isSidebarExpanded` state */}
            <div className="relative md:hidden">
              <div className="mb-2 flex items-center gap-2 text-[#9D7CFF]">
                <Crown size={16} strokeWidth={2} />
                <span className="text-[13px] font-semibold text-ink">Upgrade to Pro</span>
              </div>
              <p className="mb-3 text-xs leading-relaxed text-muted">
                Unlock unlimited videos, premium features and priority support.
              </p>
              <motion.button
                type="button"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="w-full rounded-xl bg-[#7C5CFF] py-2 text-xs font-semibold text-ink shadow-[0_4px_16px_rgba(124,92,255,0.4)] transition-colors duration-200 hover:bg-[#8F6FFF] hover:shadow-[0_6px_20px_rgba(124,92,255,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5CFF]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                Upgrade Now
              </motion.button>
            </div>
          </div>

          {/* Theme toggle */}
          <motion.button
            type="button"
            onClick={toggleTheme}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className={`group flex items-center gap-3 rounded-2xl px-3.5 py-3 text-sm font-medium tracking-tight text-muted transition-colors duration-200 hover:bg-glass-2 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5CFF]/50 focus-visible:ring-inset ${
              isSidebarExpanded ? "justify-start" : "md:justify-center"
            }`}
          >
            {isDark ? (
              <Moon size={18} strokeWidth={2} className="shrink-0 text-subtle transition-transform duration-200 group-hover:scale-110" />
            ) : (
              <Sun size={18} strokeWidth={2} className="shrink-0 text-subtle transition-transform duration-200 group-hover:scale-110" />
            )}
            <span
              className={`flex flex-1 items-center justify-between overflow-hidden whitespace-nowrap transition-all duration-200 ${EASE} ${
                isSidebarExpanded ? "opacity-100 md:translate-x-0" : "md:w-0 md:-translate-x-2 md:opacity-0"
              }`}
            >
              Dark Mode
              <span
                className={`relative ml-2 h-5 w-9 shrink-0 rounded-full transition-colors duration-300 ${EASE} ${
                  isDark ? "bg-[#7C5CFF]" : "bg-glass-3"
                }`}
              >
                <span
                  className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-all duration-300 ${EASE} ${
                    isDark ? "left-[18px]" : "left-0.5"
                  }`}
                />
              </span>
            </span>
          </motion.button>

          {/* Profile card */}
          <motion.button
            type="button"
            title={!isSidebarExpanded ? "John Doe" : undefined}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            className={`group flex items-center gap-3 rounded-[20px] border border-line bg-glass-1 p-2 transition-colors duration-200 hover:border-[#7C5CFF]/30 hover:bg-glass-2 hover:shadow-[0_8px_20px_-8px_rgba(124,92,255,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5CFF]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${
              isSidebarExpanded ? "justify-start" : "md:justify-center"
            }`}
          >
            <span className="relative shrink-0">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#7C5CFF] to-[#5BE7FF] text-xs font-semibold text-ink ring-2 ring-glass-2 transition-all duration-200 group-hover:ring-[#7C5CFF]/40">
                JD
              </span>
              <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-bg bg-emerald-400" />
            </span>
            <span
              className={`flex flex-1 items-center justify-between overflow-hidden transition-all duration-200 ${EASE} ${
                isSidebarExpanded ? "opacity-100 md:translate-x-0" : "md:w-0 md:-translate-x-2 md:opacity-0"
              }`}
            >
              <span className="flex flex-col items-start overflow-hidden text-left">
                <span className="w-full truncate text-[13px] font-medium text-ink">John Doe</span>
                <span className="w-full truncate text-[11px] text-subtle">john@example.com</span>
              </span>
              <ChevronRight
                size={15}
                className="shrink-0 text-subtle transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-ink"
              />
            </span>
          </motion.button>
        </div>
      </aside>
    </>
  );
}

function LogoMark() {
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#7C5CFF] to-[#5BE7FF] shadow-[0_4px_14px_rgba(124,92,255,0.45)]">
      <Sparkles size={18} strokeWidth={2.25} className="text-ink" />
    </span>
  );
}
