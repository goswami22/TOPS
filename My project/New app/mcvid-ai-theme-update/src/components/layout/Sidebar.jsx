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
const EASE = "ease-[cubic-bezier(0.16,1,0.3,1)]";

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
        className={`fixed inset-0 z-40 bg-[var(--scrim)] backdrop-blur-sm transition-opacity duration-300 ${EASE} md:hidden ${
          isMobileSidebarOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex h-dvh flex-col border-r border-[var(--border)] bg-[var(--bg-canvas)]/95 shadow-[8px_0_40px_-24px_var(--shadow-color-strong)] backdrop-blur-xl transition-[transform,background-color,border-color] duration-300 ${EASE} md:transition-[width,background-color,border-color] ${
          isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 w-[280px] ${isSidebarExpanded ? "md:w-[280px]" : "md:w-[90px]"}`}
      >
        {/* ambient brand glow, premium touch */}
        <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-[var(--glow-violet)] blur-3xl" />

        {/* Header: Logo + Collapse toggle (desktop) / Close (mobile) */}
        <div className="relative flex h-[72px] shrink-0 items-center border-b border-[var(--border)] px-4">
          <div
            className={`flex items-center gap-3 overflow-hidden transition-all duration-300 ${EASE} ${
              isSidebarExpanded ? "md:w-full md:opacity-100" : "md:w-0 md:opacity-0"
            } w-full opacity-100`}
          >
            <LogoMark />
            <span
              className={`whitespace-nowrap text-[15px] font-semibold tracking-tight text-[var(--text-primary)] transition-all duration-300 ${EASE} ${
                isSidebarExpanded ? "md:translate-x-0 md:opacity-100" : "md:-translate-x-2 md:opacity-0"
              }`}
            >
              MCvid <span className="text-[var(--accent-2)]">AI</span>
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
            className={`hidden h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] transition-colors duration-200 hover:border-[var(--border-hover)] hover:bg-[var(--accent-soft)] hover:text-[var(--text-primary)] hover:shadow-[0_4px_16px_-4px_var(--shadow-accent)] md:flex ${
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
            className={`ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] transition-colors duration-200 hover:border-[var(--border-strong)] hover:text-[var(--text-primary)] md:hidden`}
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
          className={`flex-1 overflow-y-auto overflow-x-hidden px-3 py-5
            [&::-webkit-scrollbar]:w-1.5
            [&::-webkit-scrollbar-track]:bg-transparent
            [&::-webkit-scrollbar-thumb]:rounded-full
            [&::-webkit-scrollbar-thumb]:bg-[var(--scrollbar-thumb)]
            hover:[&::-webkit-scrollbar-thumb]:bg-[var(--scrollbar-thumb-hover)]`}
          style={{ scrollbarWidth: "thin", scrollbarColor: "var(--scrollbar-thumb) transparent" }}
        >
          <ul className="flex flex-col gap-1.5">
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
                    className={`group relative flex w-full items-center gap-3 rounded-2xl px-3.5 py-3 text-sm transition-colors duration-200 ${
                      isSidebarExpanded ? "justify-start" : "md:justify-center"
                    } ${
                      isActive
                        ? "font-semibold text-[var(--text-primary)] ring-1 ring-inset ring-[var(--border-accent)] bg-gradient-to-r from-[var(--accent)]/25 via-[var(--accent)]/10 to-transparent shadow-[0_0_0_1px_var(--shadow-accent),0_0_18px_-4px_var(--shadow-accent)] hover:shadow-[0_0_0_1px_var(--shadow-accent-strong),0_0_26px_-2px_var(--shadow-accent-strong)]"
                        : "font-medium text-[var(--text-muted)] hover:bg-[var(--surface-hover)] hover:text-[var(--text-primary)]"
                    }`}
                  >
                    {isActive && (
                      <span className="absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-full bg-gradient-to-b from-[var(--accent-2)] to-[var(--accent)] shadow-[0_0_10px_2px_var(--shadow-accent-strong)]" />
                    )}
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-200 ${EASE} ${
                        isActive ? "bg-[var(--accent)]/20" : "group-hover:scale-110"
                      }`}
                    >
                      <Icon
                        size={19}
                        strokeWidth={isActive ? 2.25 : 2}
                        className={`shrink-0 transition-colors duration-200 ${
                          isActive ? "text-[var(--accent-2)]" : "text-[var(--text-faint)] group-hover:text-[var(--text-primary)]"
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
        <div className="flex flex-col gap-3.5 border-t border-[var(--border)] p-3.5">
          {/* Upgrade to Pro card */}
          <div
            className={`relative overflow-hidden rounded-[20px] border border-[var(--border-accent)] bg-[var(--surface-strong)] backdrop-blur-xl shadow-[0_8px_30px_var(--shadow-accent)] transition-all duration-300 ${EASE} ${
              isSidebarExpanded ? "p-4 opacity-100" : "md:h-11 md:w-11 md:self-center md:p-0 p-4 opacity-100"
            }`}
          >
            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[var(--glow-cyan)] blur-2xl" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--accent)]/15 via-transparent to-transparent" />

            {isSidebarExpanded ? (
              <div className="relative hidden md:block">
                <div className="mb-2 flex items-center gap-2 text-[var(--accent-2)]">
                  <Crown size={16} strokeWidth={2} />
                  <span className="text-[13px] font-semibold text-[var(--text-primary)]">Upgrade to Pro</span>
                </div>
                <p className="mb-3 text-xs leading-relaxed text-[var(--text-muted)]">
                  Unlock unlimited videos, premium features and priority support.
                </p>
                <motion.button
                  type="button"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="w-full rounded-xl bg-[var(--accent)] py-2 text-xs font-semibold text-white shadow-[0_4px_16px_var(--shadow-accent)] transition-colors duration-200 hover:bg-[var(--accent-hover)] hover:shadow-[0_6px_20px_var(--shadow-accent-strong)]"
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
                className="relative hidden h-11 w-11 items-center justify-center text-[var(--accent-2)] md:flex"
              >
                <Crown size={18} strokeWidth={2} />
              </motion.button>
            )}

            {/* Mobile: always show full card content regardless of desktop `isSidebarExpanded` state */}
            <div className="relative md:hidden">
              <div className="mb-2 flex items-center gap-2 text-[var(--accent-2)]">
                <Crown size={16} strokeWidth={2} />
                <span className="text-[13px] font-semibold text-[var(--text-primary)]">Upgrade to Pro</span>
              </div>
              <p className="mb-3 text-xs leading-relaxed text-[var(--text-muted)]">
                Unlock unlimited videos, premium features and priority support.
              </p>
              <motion.button
                type="button"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="w-full rounded-xl bg-[var(--accent)] py-2 text-xs font-semibold text-white shadow-[0_4px_16px_var(--shadow-accent)] transition-colors duration-200 hover:bg-[var(--accent-hover)] hover:shadow-[0_6px_20px_var(--shadow-accent-strong)]"
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
            className={`group flex items-center gap-3 rounded-2xl px-3.5 py-3 text-sm font-medium text-[var(--text-muted)] transition-colors duration-200 hover:bg-[var(--surface-hover)] hover:text-[var(--text-primary)] ${
              isSidebarExpanded ? "justify-start" : "md:justify-center"
            }`}
          >
            {isDark ? (
              <Moon size={18} strokeWidth={2} className="shrink-0 text-[var(--text-faint)] transition-transform duration-200 group-hover:scale-110" />
            ) : (
              <Sun size={18} strokeWidth={2} className="shrink-0 text-[var(--text-faint)] transition-transform duration-200 group-hover:scale-110" />
            )}
            <span
              className={`flex flex-1 items-center justify-between overflow-hidden whitespace-nowrap transition-all duration-200 ${EASE} ${
                isSidebarExpanded ? "opacity-100 md:translate-x-0" : "md:w-0 md:-translate-x-2 md:opacity-0"
              }`}
            >
              Dark Mode
              <span
                className={`relative ml-2 h-5 w-9 shrink-0 rounded-full transition-colors duration-300 ${EASE} ${
                  isDark ? "bg-[var(--accent)]" : "bg-[var(--border-strong)]"
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
            className={`group flex items-center gap-3 rounded-[20px] border border-[var(--border)] bg-[var(--surface-faint)] p-2 transition-colors duration-200 hover:border-[var(--border-accent)] hover:bg-[var(--surface-hover)] hover:shadow-[0_8px_20px_-8px_var(--shadow-accent)] ${
              isSidebarExpanded ? "justify-start" : "md:justify-center"
            }`}
          >
            <span className="relative shrink-0">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-cyan)] text-xs font-semibold text-white ring-2 ring-[var(--border)] transition-all duration-200 group-hover:ring-[var(--border-hover)]">
                JD
              </span>
              <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-[var(--bg-canvas)] bg-emerald-400" />
            </span>
            <span
              className={`flex flex-1 items-center justify-between overflow-hidden transition-all duration-200 ${EASE} ${
                isSidebarExpanded ? "opacity-100 md:translate-x-0" : "md:w-0 md:-translate-x-2 md:opacity-0"
              }`}
            >
              <span className="flex flex-col items-start overflow-hidden text-left">
                <span className="w-full truncate text-[13px] font-medium text-[var(--text-primary)]">John Doe</span>
                <span className="w-full truncate text-[11px] text-[var(--text-faint)]">john@example.com</span>
              </span>
              <ChevronRight
                size={15}
                className="shrink-0 text-[var(--text-faint)] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-[var(--text-primary)]"
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
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-cyan)] shadow-[0_4px_14px_var(--shadow-accent)]">
      <Sparkles size={18} strokeWidth={2.25} className="text-white" />
    </span>
  );
}
