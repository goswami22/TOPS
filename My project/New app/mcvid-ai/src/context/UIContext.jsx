import { createContext, useCallback, useContext, useEffect, useState } from "react";

/**
 * UIContext centralizes the shell-level UI state that multiple layout
 * pieces need to agree on:
 *  - desktop sidebar collapsed/expanded
 *  - mobile sidebar drawer open/closed
 *  - active nav item (Sidebar sets it, Navbar can read it for breadcrumbs/title)
 *  - theme (dark/light)
 *
 * Sidebar and Navbar both consume this via `useUI()` instead of holding
 * their own local state, so toggling one always stays in sync with the other.
 */
const UIContext = createContext(undefined);

export function UIProvider({ children }) {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("home");
  const [isDark, setIsDark] = useState(true);

  const toggleSidebar = useCallback(() => setIsSidebarExpanded((v) => !v), []);
  const openMobileSidebar = useCallback(() => setIsMobileSidebarOpen(true), []);
  const closeMobileSidebar = useCallback(() => setIsMobileSidebarOpen(false), []);
  const toggleMobileSidebar = useCallback(() => setIsMobileSidebarOpen((v) => !v), []);
  const toggleTheme = useCallback(() => setIsDark((v) => !v), []);

  // Reflect the theme choice on <html> so any `dark:` Tailwind variants
  // used elsewhere in the app stay in sync with this single source of truth.
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  // Cross-cutting mobile-drawer behavior lives here (not inside Sidebar)
  // so it stays correct no matter which component opens/closes the drawer.
  useEffect(() => {
    if (!isMobileSidebarOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeMobileSidebar();
    };

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileSidebarOpen, closeMobileSidebar]);

  const value = {
    // sidebar (desktop collapse)
    isSidebarExpanded,
    setIsSidebarExpanded,
    toggleSidebar,
    // sidebar (mobile drawer)
    isMobileSidebarOpen,
    openMobileSidebar,
    closeMobileSidebar,
    toggleMobileSidebar,
    // active nav item
    activeNavItem,
    setActiveNavItem,
    // theme
    isDark,
    setIsDark,
    toggleTheme,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export function useUI() {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error("useUI must be used within a <UIProvider>");
  }
  return context;
}
