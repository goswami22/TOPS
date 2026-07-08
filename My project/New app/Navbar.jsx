import { useEffect, useRef, useState } from "react";
import {
  Menu,
  Search,
  Bell,
  Globe,
  Moon,
  Sun,
  Zap,
  ChevronDown,
  Sparkles,
  Check,
} from "lucide-react";
import { useUI } from "../../context/UIContext";

// Shared premium easing curve — keep in sync with Sidebar's so the whole
// shell (Sidebar + Navbar) animates with one consistent feel.
const EASE = "ease-[cubic-bezier(0.16,1,0.3,1)]";

// Sidebar owns the canonical nav item list (id -> icon) internally and
// doesn't export it, so Navbar keeps its own small id -> label lookup
// purely for the page title. This is the only piece of duplication and
// it's presentation-only (no state, no logic) — safe to keep in sync by hand.
const NAV_LABELS = {
  home: "Home",
  "create-video": "Create Video",
  projects: "Projects",
  templates: "Templates",
  "ai-tools": "AI Tools",
  assets: "Assets",
  pricing: "Pricing",
  api: "API",
  documentation: "Documentation",
  community: "Community",
  settings: "Settings",
};

const LANGUAGES = [
  { code: "EN", label: "English" },
  { code: "ES", label: "Español" },
  { code: "FR", label: "Français" },
  { code: "DE", label: "Deutsch" },
];

export default function Navbar() {
  const { openMobileSidebar, activeNavItem, isDark, toggleTheme } = useUI();

  const pageTitle = NAV_LABELS[activeNavItem] ?? "Home";

  // Purely local, ephemeral UI (dropdown open state) — not shared shell
  // state, so it stays out of UIContext by design.
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [language, setLanguage] = useState(LANGUAGES[0]);
  const langMenuRef = useRef(null);

  useEffect(() => {
    if (!isLangOpen) return;

    const handleClickOutside = (e) => {
      if (langMenuRef.current && !langMenuRef.current.contains(e.target)) {
        setIsLangOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsLangOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLangOpen]);

  return (
    <header
      className={`sticky top-0 z-30 flex h-[72px] shrink-0 items-center gap-3 border-b border-white/[0.08] bg-[#0B0F19]/80 px-4 backdrop-blur-xl transition-shadow duration-300 ${EASE} shadow-[0_1px_0_rgba(255,255,255,0.04),0_8px_24px_-12px_rgba(0,0,0,0.6)] md:px-6`}
    >
      {/* LEFT: mobile hamburger + logo, or desktop page title */}
      <div className="flex min-w-0 shrink-0 items-center gap-3">
        <button
          type="button"
          onClick={openMobileSidebar}
          aria-label="Open menu"
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-slate-300 transition-all duration-200 ${EASE} hover:border-[#7C5CFF]/40 hover:bg-[#7C5CFF]/10 hover:text-white md:hidden`}
        >
          <Menu size={18} strokeWidth={2} />
        </button>

        <div className="flex items-center gap-2 md:hidden">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#7C5CFF] to-[#5BE7FF] shadow-[0_4px_14px_rgba(124,92,255,0.45)]">
            <Sparkles size={15} strokeWidth={2.25} className="text-white" />
          </span>
          <span className="whitespace-nowrap text-[14px] font-semibold tracking-tight text-white">
            MCvid <span className="text-[#9D7CFF]">AI</span>
          </span>
        </div>

        <h1 className="hidden truncate text-[17px] font-semibold tracking-tight text-white md:block">
          {pageTitle}
        </h1>
      </div>

      {/* CENTER: search — full bar on tablet/desktop, icon-only on mobile */}
      <div className="hidden min-w-0 flex-1 justify-center md:flex md:px-2 lg:px-8">
        <SearchBar />
      </div>

      <button
        type="button"
        aria-label="Search"
        className={`ml-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-slate-300 transition-all duration-200 ${EASE} hover:border-[#7C5CFF]/40 hover:bg-[#7C5CFF]/10 hover:text-white md:hidden`}
      >
        <Search size={17} strokeWidth={2} />
      </button>

      {/* RIGHT: credits, notifications, language, theme, auth actions */}
      <div className="flex shrink-0 items-center gap-2 md:gap-3">
        {/* Credits — desktop/tablet only */}
        <div className="hidden items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] py-2 pl-3 pr-3.5 transition-colors duration-200 hover:border-[#7C5CFF]/30 md:flex">
          <Zap size={15} strokeWidth={2.25} className="shrink-0 text-[#5BE7FF]" />
          <span className="whitespace-nowrap text-xs text-slate-400">
            Credits Left <span className="font-semibold text-white">1,250</span>
          </span>
        </div>

        {/* Notifications — all breakpoints */}
        <button
          type="button"
          aria-label="Notifications"
          className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-slate-300 transition-all duration-200 ${EASE} hover:border-[#7C5CFF]/40 hover:bg-[#7C5CFF]/10 hover:text-white`}
        >
          <Bell size={18} strokeWidth={2} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#5BE7FF] shadow-[0_0_6px_2px_rgba(91,231,255,0.6)]" />
        </button>

        {/* Language dropdown — desktop/tablet only */}
        <div ref={langMenuRef} className="relative hidden md:block">
          <button
            type="button"
            onClick={() => setIsLangOpen((v) => !v)}
            aria-haspopup="listbox"
            aria-expanded={isLangOpen}
            className={`flex h-10 items-center gap-1.5 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 text-sm font-medium text-slate-300 transition-all duration-200 ${EASE} hover:border-[#7C5CFF]/40 hover:bg-[#7C5CFF]/10 hover:text-white`}
          >
            <Globe size={15} strokeWidth={2} className="shrink-0" />
            {language.code}
            <ChevronDown
              size={14}
              strokeWidth={2}
              className={`shrink-0 transition-transform duration-200 ${EASE} ${isLangOpen ? "rotate-180" : "rotate-0"}`}
            />
          </button>

          <ul
            role="listbox"
            className={`absolute right-0 top-[calc(100%+8px)] w-40 origin-top-right overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111827]/95 p-1.5 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.7)] backdrop-blur-xl transition-all duration-200 ${EASE} ${
              isLangOpen
                ? "pointer-events-auto translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-1 opacity-0"
            }`}
          >
            {LANGUAGES.map((lang) => (
              <li key={lang.code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={language.code === lang.code}
                  onClick={() => {
                    setLanguage(lang);
                    setIsLangOpen(false);
                  }}
                  className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm text-slate-300 transition-colors duration-150 hover:bg-white/[0.06] hover:text-white"
                >
                  <span>{lang.label}</span>
                  {language.code === lang.code && (
                    <Check size={14} strokeWidth={2.5} className="text-[#9D7CFF]" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Theme toggle — all breakpoints */}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-slate-300 transition-all duration-200 ${EASE} hover:border-[#7C5CFF]/40 hover:bg-[#7C5CFF]/10 hover:text-white`}
        >
          {isDark ? (
            <Moon size={17} strokeWidth={2} />
          ) : (
            <Sun size={17} strokeWidth={2} />
          )}
        </button>

        {/* Auth actions — desktop/tablet only */}
        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            className={`h-10 whitespace-nowrap rounded-xl px-3.5 text-sm font-medium text-slate-300 transition-all duration-200 ${EASE} hover:bg-white/[0.06] hover:text-white`}
          >
            Sign In
          </button>
          <button
            type="button"
            className={`h-10 whitespace-nowrap rounded-xl bg-gradient-to-r from-[#7C5CFF] to-[#9D7CFF] px-4 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(124,92,255,0.4)] transition-all duration-200 ${EASE} hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(124,92,255,0.55)] active:translate-y-0`}
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}

function SearchBar() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={`flex w-full max-w-[220px] items-center gap-2 rounded-full border bg-white/[0.03] px-4 py-2.5 transition-all duration-300 ${EASE} md:max-w-xs lg:max-w-md ${
        isFocused
          ? "border-[#7C5CFF]/50 shadow-[0_0_0_4px_rgba(124,92,255,0.15)]"
          : "border-white/[0.08] hover:border-white/[0.15]"
      }`}
    >
      <Search
        size={16}
        strokeWidth={2}
        className={`shrink-0 transition-colors duration-200 ${isFocused ? "text-[#9D7CFF]" : "text-slate-500"}`}
      />
      <input
        type="text"
        placeholder="Search anything..."
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full min-w-0 bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
      />
      <kbd className="hidden shrink-0 items-center gap-0.5 rounded-md border border-white/[0.08] bg-white/[0.04] px-1.5 py-0.5 text-[10px] font-medium text-slate-500 lg:inline-flex">
        Ctrl+K
      </kbd>
    </div>
  );
}
