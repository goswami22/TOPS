import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
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
      className={`sticky top-0 z-30 flex h-[72px] shrink-0 items-center gap-2 border-b border-[var(--border)] bg-[var(--bg-canvas)]/75 px-4 backdrop-blur-2xl transition-[background-color,border-color,box-shadow] duration-300 ${EASE} shadow-[0_1px_0_var(--border),0_8px_30px_-12px_var(--shadow-color)] sm:gap-3 md:gap-6 md:px-6 lg:px-8`}
    >
      {/* subtle glass sheen along the top edge, premium touch */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--border-strong)] to-transparent" />

      {/* LEFT: mobile hamburger + logo, or desktop page title */}
      <div className="flex min-w-0 shrink-0 items-center gap-3">
        <motion.button
          type="button"
          onClick={openMobileSidebar}
          aria-label="Open menu"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 400, damping: 18 }}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] transition-colors duration-200 hover:border-[var(--border-hover)] hover:bg-[var(--accent-soft)] hover:text-[var(--text-primary)] md:hidden"
        >
          <Menu size={18} strokeWidth={2} />
        </motion.button>

        <div className="flex items-center gap-2.5 md:hidden">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--accent)] to-[var(--accent-cyan)] shadow-[0_4px_14px_var(--shadow-accent)]">
            <Sparkles size={15} strokeWidth={2.25} className="text-white" />
          </span>
          <span className="whitespace-nowrap text-[14px] font-semibold tracking-tight text-[var(--text-primary)]">
            MCvid <span className="text-[var(--accent-2)]">AI</span>
          </span>
        </div>

        <h1 className="hidden truncate text-[18px] font-semibold tracking-tight text-[var(--text-primary)] md:block">
          {pageTitle}
        </h1>
      </div>

      {/* CENTER: search — full bar on tablet/desktop, icon-only on mobile */}
      <div className="hidden min-w-0 flex-1 justify-center md:flex md:px-2 lg:px-8">
        <SearchBar />
      </div>

      <motion.button
        type="button"
        aria-label="Search"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.92 }}
        transition={{ type: "spring", stiffness: 400, damping: 18 }}
        className="ml-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] transition-colors duration-200 hover:border-[var(--border-hover)] hover:bg-[var(--accent-soft)] hover:text-[var(--text-primary)] md:hidden"
      >
        <Search size={17} strokeWidth={2} />
      </motion.button>

      {/* RIGHT: credits, notifications, language, theme, auth actions */}
      <div className="flex shrink-0 items-center gap-2.5 md:gap-3">
        {/* Credits — desktop only. Deferred to lg (not md) because at
            tablet width the combined credits + language + auth cluster
            doesn't fit alongside the search bar without overflowing. */}
        <motion.div
          whileHover={{ y: -2 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="hidden h-11 items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] pl-3.5 pr-4 backdrop-blur-sm transition-colors duration-200 hover:border-[var(--border-accent)] hover:bg-[var(--surface-hover)] lg:flex"
        >
          <Zap size={15} strokeWidth={2.25} className="shrink-0 text-[var(--accent-cyan)]" />
          <span className="whitespace-nowrap text-xs text-[var(--text-muted)]">
            Credits Left <span className="font-semibold text-[var(--text-primary)]">1,250</span>
          </span>
        </motion.div>

        {/* Notifications — all breakpoints */}
        <motion.button
          type="button"
          aria-label="Notifications"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 400, damping: 18 }}
          className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] transition-colors duration-200 hover:border-[var(--border-hover)] hover:bg-[var(--accent-soft)] hover:text-[var(--text-primary)]"
        >
          <Bell size={18} strokeWidth={2} />
          <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-[var(--accent-cyan)] shadow-[0_0_6px_2px_var(--shadow-accent)]" />
        </motion.button>

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
            className="flex h-11 items-center gap-1.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3.5 text-sm font-medium text-[var(--text-secondary)] transition-colors duration-200 hover:border-[var(--border-hover)] hover:bg-[var(--accent-soft)] hover:text-[var(--text-primary)]"
          >
            <Globe size={15} strokeWidth={2} className="shrink-0" />
            {language.code}
            <motion.span
              animate={{ rotate: isLangOpen ? 180 : 0 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
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
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 top-[calc(100%+10px)] w-44 origin-top-right overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)]/95 p-1.5 shadow-[0_16px_40px_-12px_var(--shadow-color-strong)] backdrop-blur-2xl"
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
                  className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm text-[var(--text-secondary)] transition-colors duration-150 hover:bg-[var(--surface-hover)] hover:text-[var(--text-primary)]"
                >
                  <span>{lang.label}</span>
                  {language.code === lang.code && (
                    <Check size={14} strokeWidth={2.5} className="text-[var(--accent-2)]" />
                  )}
                </button>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Theme toggle — all breakpoints */}
        <motion.button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 400, damping: 18 }}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] transition-colors duration-200 hover:border-[var(--border-hover)] hover:bg-[var(--accent-soft)] hover:text-[var(--text-primary)]"
        >
          {isDark ? (
            <Moon size={17} strokeWidth={2} />
          ) : (
            <Sun size={17} strokeWidth={2} />
          )}
        </motion.button>

        {/* Auth actions — Sign In deferred to lg for the same overflow
            reason as Credits/Language; Get Started is the primary CTA so
            it stays visible from md up. */}
        <div className="flex items-center gap-2">
          <motion.button
            type="button"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="hidden h-11 whitespace-nowrap rounded-xl px-4 text-sm font-medium text-[var(--text-secondary)] transition-colors duration-200 hover:bg-[var(--surface-hover)] hover:text-[var(--text-primary)] lg:inline-flex"
          >
            Sign In
          </motion.button>
          <motion.button
            type="button"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="hidden h-11 whitespace-nowrap rounded-xl bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] px-5 text-sm font-semibold text-white shadow-[0_4px_16px_var(--shadow-accent)] transition-shadow duration-200 hover:shadow-[0_10px_28px_var(--shadow-accent-strong)] md:inline-flex"
          >
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
      className={`flex h-11 w-full max-w-[240px] items-center gap-2.5 rounded-full border bg-[var(--surface)] px-4 backdrop-blur-sm transition-all duration-300 ${EASE} md:max-w-sm lg:max-w-lg ${
        isFocused
          ? "scale-[1.01] border-[var(--border-hover)] bg-[var(--surface-hover)] shadow-[0_0_0_4px_var(--accent-soft-strong)]"
          : "border-[var(--border)] hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)]"
      }`}
    >
      <Search
        size={16}
        strokeWidth={2}
        className={`shrink-0 transition-colors duration-200 ${isFocused ? "text-[var(--accent-2)]" : "text-[var(--text-faint)]"}`}
      />
      <input
        type="text"
        placeholder="Search anything..."
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full min-w-0 bg-transparent text-sm text-[var(--text-primary)] placeholder:text-[var(--text-faint)] focus:outline-none"
      />
      <kbd className="hidden shrink-0 items-center gap-0.5 rounded-md border border-[var(--border)] bg-[var(--surface-hover)] px-1.5 py-1 text-[10px] font-medium text-[var(--text-faint)] lg:inline-flex">
        Ctrl+K
      </kbd>
    </div>
  );
}
