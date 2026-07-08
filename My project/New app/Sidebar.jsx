import {
  Home,
  Clapperboard,
  FolderOpen,
  LayoutTemplate,
  Sparkles,
  Image,
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
  X,
} from "lucide-react";
import { useUI } from "../../context/UIContext";

const NAV_ITEMS = [
  { id: "home", label: "Home", icon: Home },
  { id: "create-video", label: "Create Video", icon: Clapperboard },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "templates", label: "Templates", icon: LayoutTemplate },
  { id: "ai-tools", label: "AI Tools", icon: Sparkles },
  { id: "assets", label: "Assets", icon: Image },
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
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${EASE} md:hidden ${
          isMobileSidebarOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex h-dvh flex-col border-r border-white/[0.08] bg-[#0B0F19]/95 backdrop-blur-xl transition-transform duration-300 ${EASE} md:transition-[width] ${
          isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 w-[280px] ${isSidebarExpanded ? "md:w-[280px]" : "md:w-[90px]"}`}
      >
        {/* ambient brand glow, premium touch */}
        <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-[#7C5CFF]/10 blur-3xl" />

        {/* Header: Logo + Collapse toggle (desktop) / Close (mobile) */}
        <div className="relative flex h-[72px] shrink-0 items-center border-b border-white/[0.08] px-4">
          <div
            className={`flex items-center gap-3 overflow-hidden transition-all duration-300 ${EASE} ${
              isSidebarExpanded ? "md:w-full md:opacity-100" : "md:w-0 md:opacity-0"
            } w-full opacity-100`}
          >
            <LogoMark />
            <span
              className={`whitespace-nowrap text-[15px] font-semibold tracking-tight text-white transition-all duration-300 ${EASE} ${
                isSidebarExpanded ? "md:translate-x-0 md:opacity-100" : "md:-translate-x-2 md:opacity-0"
              }`}
            >
              MCvid <span className="text-[#9D7CFF]">AI</span>
            </span>
          </div>

          {/* Desktop collapse toggle */}
          <button
            type="button"
            onClick={toggleSidebar}
            aria-label={isSidebarExpanded ? "Collapse sidebar" : "Expand sidebar"}
            className={`hidden h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-slate-400 transition-all duration-200 ${EASE} hover:border-[#7C5CFF]/40 hover:bg-[#7C5CFF]/10 hover:text-white md:flex ${
              isSidebarExpanded ? "ml-auto" : "mx-auto"
            }`}
          >
            {isSidebarExpanded ? (
              <ChevronsLeft size={18} strokeWidth={2} />
            ) : (
              <ChevronsRight size={18} strokeWidth={2} />
            )}
          </button>

          {/* Mobile close */}
          <button
            type="button"
            onClick={closeMobileSidebar}
            aria-label="Close menu"
            className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-slate-400 transition-colors hover:border-white/20 hover:text-white md:hidden"
          >
            <X size={18} strokeWidth={2} />
          </button>
        </div>

        {/* Logo mark only, centered when collapsed on desktop */}
        {!isSidebarExpanded && (
          <div className="hidden justify-center pt-4 md:flex">
            <LogoMark />
          </div>
        )}

        {/* Nav */}
        <nav
          className={`flex-1 overflow-y-auto overflow-x-hidden px-3 py-4
            [&::-webkit-scrollbar]:w-1.5
            [&::-webkit-scrollbar-track]:bg-transparent
            [&::-webkit-scrollbar-thumb]:rounded-full
            [&::-webkit-scrollbar-thumb]:bg-white/10
            hover:[&::-webkit-scrollbar-thumb]:bg-white/20`}
          style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(255,255,255,0.12) transparent" }}
        >
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeNavItem === item.id;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => setActiveNavItem(item.id)}
                    title={!isSidebarExpanded ? item.label : undefined}
                    className={`group relative flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-medium transition-all duration-200 ${EASE} ${
                      isSidebarExpanded ? "justify-start" : "md:justify-center"
                    } ${
                      isActive
                        ? "bg-gradient-to-r from-[#7C5CFF]/25 via-[#7C5CFF]/10 to-transparent text-white shadow-[0_0_0_1px_rgba(124,92,255,0.35),0_0_18px_-4px_rgba(124,92,255,0.45)] hover:shadow-[0_0_0_1px_rgba(124,92,255,0.5),0_0_26px_-2px_rgba(124,92,255,0.65)]"
                        : "text-slate-400 hover:bg-white/[0.05] hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <span className="absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-full bg-[#7C5CFF] shadow-[0_0_8px_2px_rgba(124,92,255,0.65)]" />
                    )}
                    <Icon
                      size={19}
                      strokeWidth={2}
                      className={`shrink-0 transition-colors duration-200 ${
                        isActive ? "text-[#9D7CFF]" : "text-slate-500 group-hover:text-white"
                      }`}
                    />
                    <span
                      className={`overflow-hidden whitespace-nowrap transition-all duration-200 ${EASE} ${
                        isSidebarExpanded ? "opacity-100 md:translate-x-0" : "md:w-0 md:-translate-x-2 md:opacity-0"
                      }`}
                    >
                      {item.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom area */}
        <div className="flex flex-col gap-3 border-t border-white/[0.08] p-3">
          {/* Upgrade to Pro card */}
          <div
            className={`relative overflow-hidden rounded-[20px] border border-[#7C5CFF]/25 bg-white/[0.04] backdrop-blur-xl shadow-[0_8px_30px_rgba(124,92,255,0.12)] transition-all duration-300 ${EASE} ${
              isSidebarExpanded ? "p-4 opacity-100" : "md:h-11 md:w-11 md:self-center md:p-0 p-4 opacity-100"
            }`}
          >
            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#5BE7FF]/10 blur-2xl" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#7C5CFF]/15 via-transparent to-transparent" />

            {isSidebarExpanded ? (
              <div className="relative hidden md:block">
                <div className="mb-2 flex items-center gap-2 text-[#9D7CFF]">
                  <Crown size={16} strokeWidth={2} />
                  <span className="text-[13px] font-semibold text-white">Upgrade to Pro</span>
                </div>
                <p className="mb-3 text-xs leading-relaxed text-slate-400">
                  Unlock unlimited videos, premium features and priority support.
                </p>
                <button
                  type="button"
                  className={`w-full rounded-xl bg-[#7C5CFF] py-2 text-xs font-semibold text-white shadow-[0_4px_16px_rgba(124,92,255,0.4)] transition-all duration-200 ${EASE} hover:bg-[#8F6FFF] hover:shadow-[0_6px_20px_rgba(124,92,255,0.55)]`}
                >
                  Upgrade Now
                </button>
              </div>
            ) : (
              <button
                type="button"
                title="Upgrade to Pro"
                className="relative hidden h-11 w-11 items-center justify-center text-[#9D7CFF] md:flex"
              >
                <Crown size={18} strokeWidth={2} />
              </button>
            )}

            {/* Mobile: always show full card content regardless of desktop `isSidebarExpanded` state */}
            <div className="relative md:hidden">
              <div className="mb-2 flex items-center gap-2 text-[#9D7CFF]">
                <Crown size={16} strokeWidth={2} />
                <span className="text-[13px] font-semibold text-white">Upgrade to Pro</span>
              </div>
              <p className="mb-3 text-xs leading-relaxed text-slate-400">
                Unlock unlimited videos, premium features and priority support.
              </p>
              <button
                type="button"
                className={`w-full rounded-xl bg-[#7C5CFF] py-2 text-xs font-semibold text-white shadow-[0_4px_16px_rgba(124,92,255,0.4)] transition-all duration-200 ${EASE} hover:bg-[#8F6FFF] hover:shadow-[0_6px_20px_rgba(124,92,255,0.55)]`}
              >
                Upgrade Now
              </button>
            </div>
          </div>

          {/* Theme toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className={`flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-medium text-slate-400 transition-all duration-200 ${EASE} hover:bg-white/[0.05] hover:text-white ${
              isSidebarExpanded ? "justify-start" : "md:justify-center"
            }`}
          >
            {isDark ? (
              <Moon size={18} strokeWidth={2} className="shrink-0 text-slate-500" />
            ) : (
              <Sun size={18} strokeWidth={2} className="shrink-0 text-slate-500" />
            )}
            <span
              className={`flex flex-1 items-center justify-between overflow-hidden whitespace-nowrap transition-all duration-200 ${EASE} ${
                isSidebarExpanded ? "opacity-100 md:translate-x-0" : "md:w-0 md:-translate-x-2 md:opacity-0"
              }`}
            >
              Dark Mode
              <span
                className={`relative ml-2 h-5 w-9 shrink-0 rounded-full transition-colors duration-300 ${EASE} ${
                  isDark ? "bg-[#7C5CFF]" : "bg-white/10"
                }`}
              >
                <span
                  className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-all duration-300 ${EASE} ${
                    isDark ? "left-[18px]" : "left-0.5"
                  }`}
                />
              </span>
            </span>
          </button>

          {/* Profile card */}
          <button
            type="button"
            title={!isSidebarExpanded ? "John Doe" : undefined}
            className={`group flex items-center gap-3 rounded-[20px] border border-white/[0.08] bg-white/[0.02] p-2 transition-all duration-200 ${EASE} hover:border-[#7C5CFF]/30 hover:bg-white/[0.05] ${
              isSidebarExpanded ? "justify-start" : "md:justify-center"
            }`}
          >
            <span className="relative shrink-0">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#7C5CFF] to-[#5BE7FF] text-xs font-semibold text-white ring-2 ring-white/[0.06] transition-all duration-200 group-hover:ring-[#7C5CFF]/40">
                JD
              </span>
              <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#0B0F19] bg-emerald-400" />
            </span>
            <span
              className={`flex flex-1 items-center justify-between overflow-hidden transition-all duration-200 ${EASE} ${
                isSidebarExpanded ? "opacity-100 md:translate-x-0" : "md:w-0 md:-translate-x-2 md:opacity-0"
              }`}
            >
              <span className="flex flex-col items-start overflow-hidden text-left">
                <span className="w-full truncate text-[13px] font-medium text-white">John Doe</span>
                <span className="w-full truncate text-[11px] text-slate-500">john@example.com</span>
              </span>
              <ChevronRight
                size={15}
                className="shrink-0 text-slate-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-white"
              />
            </span>
          </button>
        </div>
      </aside>
    </>
  );
}

function LogoMark() {
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#7C5CFF] to-[#5BE7FF] shadow-[0_4px_14px_rgba(124,92,255,0.45)]">
      <Sparkles size={17} strokeWidth={2.25} className="text-white" />
    </span>
  );
}
