import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  Search,
  Bell,
  Moon,
  Sun,
  Zap,
  ChevronDown,
  Sparkles,
  Check,
} from "lucide-react";
import { useUI } from "../../context/UIContext";
import { IconButton } from "../ui";
import { EASE, EASE_CLASS } from "../../lib/motion";

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
  { code: "EN", label: "English", flag: "🇺🇸" },
  { code: "ES", label: "Español", flag: "🇪🇸" },
  { code: "FR", label: "Français", flag: "🇫🇷" },
  { code: "DE", label: "Deutsch", flag: "🇩🇪" },
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
      className={`sticky top-0 z-30 flex h-[72px] shrink-0 items-center gap-2 border-b border-line bg-surface-glass px-6 backdrop-blur-2xl transition-shadow duration-300 ${EASE_CLASS} shadow-card sm:gap-3 md:gap-6 md:px-10 lg:px-12`}
    >
      {/* subtle glass sheen along the top edge, premium touch */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line-strong to-transparent" />

      {/* LEFT: mobile hamburger + logo, or desktop page title */}
      <div className="flex min-w-0 shrink-0 items-center gap-3">
        <IconButton
          onClick={openMobileSidebar}
          ariaLabel="Open menu"
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5CFF]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg md:hidden"
        >
          <Menu size={18} strokeWidth={2} />
        </IconButton>

        <div className="flex items-center gap-2.5 md:hidden">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#7C5CFF] to-[#5BE7FF] shadow-[0_4px_14px_rgba(124,92,255,0.45)]">
            <Sparkles size={15} strokeWidth={2.25} className="text-ink" />
          </span>
          <span className="whitespace-nowrap text-[15px] font-bold tracking-tight text-ink">
            MCvid <span className="text-[#9D7CFF]">AI</span>
          </span>
        </div>

        <h1 className="hidden truncate text-xl font-bold tracking-tight text-ink md:block">
          {pageTitle}
        </h1>
      </div>

      {/* CENTER: search — full bar on tablet/desktop, icon-only on mobile */}
      <div className="hidden min-w-0 flex-1 justify-center md:flex md:px-4 lg:px-6">
        <SearchBar />
      </div>

      <IconButton
        ariaLabel="Search"
        className="ml-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5CFF]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg md:hidden"
      >
        <Search size={17} strokeWidth={2} />
      </IconButton>

      {/* RIGHT: credits, notifications, language, theme, auth actions */}
      <div className="flex shrink-0 items-center gap-2.5 md:gap-3">
        {/* Credits — desktop only. Deferred to lg (not md) because at
            tablet width the combined credits + language + auth cluster
            doesn't fit alongside the search bar without overflowing. */}
        <motion.div
          whileHover={{ y: -2 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="hidden h-11 items-center gap-2 rounded-full border border-line bg-glass-1 pl-3.5 pr-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm transition-colors duration-200 hover:border-[#7C5CFF]/30 hover:bg-glass-2 lg:flex"
        >
          <span className="relative flex shrink-0">
            <Zap size={15} strokeWidth={2.25} className="text-[#5BE7FF]" />
            <motion.span
              className="absolute inset-0 rounded-full bg-[#5BE7FF]/40 blur-[3px]"
              animate={{ opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
          <span className="whitespace-nowrap text-xs text-muted">
            Credits Left <span className="font-semibold text-ink">1,250</span>
          </span>
        </motion.div>

        {/* Notifications — all breakpoints */}
        <IconButton
          ariaLabel="Notifications"
          className="relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5CFF]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        >
          <Bell size={18} strokeWidth={2} />
          <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-[#5BE7FF] shadow-[0_0_6px_2px_rgba(91,231,255,0.6)]" />
        </IconButton>

        {/* Language dropdown — desktop only, same reasoning as Credits above */}
        <div ref={langMenuRef} className="relative hidden lg:block">
          <motion.button
            type="button"
            onClick={() => setIsLangOpen((v) => !v)}
            aria-haspopup="listbox"
            aria-expanded={isLangOpen}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
            className="flex h-11 items-center gap-1.5 rounded-xl border border-line bg-glass-1 px-3.5 text-sm font-medium tracking-tight text-ink-soft transition-colors duration-200 hover:border-[#7C5CFF]/40 hover:bg-[#7C5CFF]/10 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5CFF]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            <span className="text-sm leading-none">{language.flag}</span>
            {language.code}
            <motion.span
              animate={{ rotate: isLangOpen ? 180 : 0 }}
              transition={{ duration: 0.2, ease: EASE }}
              className="flex shrink-0"
            >
              <ChevronDown size={14} strokeWidth={2} />
            </motion.span>
          </motion.button>

          <motion.ul
            role="listbox"
            initial={false}
            animate={
              isLangOpen
                ? { opacity: 1, y: 0, pointerEvents: "auto" }
                : { opacity: 0, y: -6, pointerEvents: "none" }
            }
            transition={{ duration: 0.2, ease: EASE }}
            className="absolute right-0 top-[calc(100%+10px)] w-44 origin-top-right overflow-hidden rounded-2xl border border-line bg-surface-card p-1.5 shadow-card-lg backdrop-blur-2xl"
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
                  className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm text-ink-soft transition-colors duration-150 hover:bg-glass-2 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5CFF]/50 focus-visible:ring-inset"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-sm leading-none">{lang.flag}</span>
                    {lang.label}
                  </span>
                  {language.code === lang.code && (
                    <Check size={14} strokeWidth={2.5} className="text-[#9D7CFF]" />
                  )}
                </button>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Theme toggle — all breakpoints */}
        <IconButton
          onClick={toggleTheme}
          ariaLabel="Toggle theme"
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5CFF]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        >
          {isDark ? (
            <Moon size={17} strokeWidth={2} />
          ) : (
            <Sun size={17} strokeWidth={2} />
          )}
        </IconButton>

        {/* Auth actions — Sign In deferred to lg for the same overflow
            reason as Credits/Language; Get Started is the primary CTA so
            it stays visible from md up. */}
        <div className="flex items-center gap-2">
          <motion.button
            type="button"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="hidden h-11 whitespace-nowrap rounded-xl px-4 text-sm font-medium tracking-tight text-ink-soft transition-colors duration-200 hover:bg-glass-2 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5CFF]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg lg:inline-flex"
          >
            Sign In
          </motion.button>
          <motion.button
            type="button"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="relative hidden h-11 overflow-hidden whitespace-nowrap rounded-xl bg-gradient-to-r from-[#7C5CFF] to-[#9D7CFF] px-5 text-sm font-semibold tracking-tight text-ink shadow-[0_4px_16px_rgba(124,92,255,0.4)] transition-shadow duration-200 hover:shadow-[0_10px_28px_rgba(124,92,255,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5CFF]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg md:inline-flex"
          >
            <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/30" />
            Get Started
          </motion.button>
        </div>
      </div>
    </header>
  );
}

function SearchBar() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={`flex h-11 w-full max-w-[240px] items-center gap-2.5 rounded-full border bg-glass-1 px-4 shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] backdrop-blur-sm transition-all duration-300 ${EASE_CLASS} md:max-w-sm lg:max-w-lg ${
        isFocused
          ? "scale-[1.01] border-[#7C5CFF]/50 bg-glass-2 shadow-[0_0_0_4px_rgba(124,92,255,0.15)]"
          : "border-line hover:border-line-strong hover:bg-glass-2"
      }`}
    >
      <Search
        size={16}
        strokeWidth={2}
        className={`shrink-0 transition-colors duration-200 ${isFocused ? "text-[#9D7CFF]" : "text-subtle"}`}
      />
      <input
        type="text"
        placeholder="Search anything..."
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full min-w-0 bg-transparent text-sm text-ink placeholder:text-subtle focus:outline-none"
      />
      <kbd className="hidden shrink-0 items-center gap-0.5 rounded-md border border-line bg-glass-2 px-1.5 py-1 text-[10px] font-medium text-subtle lg:inline-flex">
        Ctrl+K
      </kbd>
    </div>
  );
}
