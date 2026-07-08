import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home, Clapperboard, LayoutGrid, FolderKanban, CreditCard,
  Code2, BookOpen, Users, LifeBuoy, Sun, Moon, X, Sparkles, ArrowUpRight
} from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", icon: Home, href: "#" },
  { label: "AI Video", icon: Clapperboard, href: "#hero" },
  { label: "Templates", icon: LayoutGrid, href: "#templates" },
  { label: "My Projects", icon: FolderKanban, href: "#" },
  { label: "Pricing", icon: CreditCard, href: "#pricing" },
  { label: "API", icon: Code2, href: "#" },
  { label: "Documentation", icon: BookOpen, href: "#" },
  { label: "Affiliate", icon: Users, href: "#" },
  { label: "Support", icon: LifeBuoy, href: "#" },
];

function SidebarContent({ active, setActive, isDark, setIsDark, onNavigate }) {
  return (
    <div className="flex flex-col h-full w-[250px] vz-glass lg:border-r lg:vz-border">
      {/* Logo */}
      <div className="px-6 h-16 flex items-center vz-border-b shrink-0">
        <span className="font-display font-bold text-lg tracking-tight">
          Velora <span className="vz-grad-text">AI</span>
        </span>
      </div>

      {/* Menu */}
      <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
        {NAV_ITEMS.map((item) => {
          const isActive = active === item.label;
          return (
            <a
              key={item.label}
              href={item.href}
              onClick={() => { setActive(item.label); onNavigate && onNavigate(); }}
              className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all relative ${
                isActive ? "text-[color:var(--text)]" : "vz-muted hover:text-[color:var(--text)]"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="sidebar-active"
                  className="absolute inset-0 rounded-xl vz-surface-soft border vz-border"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <item.icon size={17} className="relative z-10" style={isActive ? { color: "var(--primary)" } : {}} />
              <span className="relative z-10">{item.label}</span>
            </a>
          );
        })}
      </nav>

      {/* Bottom: theme switch + upgrade card */}
      <div className="px-4 pb-5 pt-3 vz-border-t shrink-0 space-y-4">
        <button
          onClick={() => setIsDark(!isDark)}
          className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl vz-surface-soft border vz-border text-sm font-medium"
        >
          <span className="flex items-center gap-2 vz-muted">
            {isDark ? <Moon size={16} /> : <Sun size={16} />} Theme
          </span>
          <span className={`w-9 h-5 rounded-full relative transition-colors ${isDark ? "bg-[color:var(--primary)]" : "bg-slate-200"}`}>
            <span
              className="absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform"
              style={{ transform: isDark ? "translateX(18px)" : "translateX(2px)" }}
            />
          </span>
        </button>

        <div className="rounded-2xl p-4 vz-grad-btn text-white relative overflow-hidden">
          <Sparkles size={16} className="mb-2" />
          <p className="font-display font-semibold text-sm">Upgrade to Pro</p>
          <p className="text-xs opacity-90 mt-1 leading-relaxed">Unlock 4K exports and priority rendering.</p>
          <button className="mt-3 w-full bg-white/15 hover:bg-white/25 transition rounded-lg py-2 text-xs font-semibold flex items-center justify-center gap-1">
            Upgrade <ArrowUpRight size={13} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Sidebar({ mobileOpen, setMobileOpen }) {
  const [active, setActive] = useState("Home");
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:block fixed top-0 left-0 h-screen z-40">
        <SidebarContent active={active} setActive={setActive} isDark={isDark} setIsDark={setIsDark} />
      </aside>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-slate-900/40 z-40 lg:hidden"
            />
            <motion.aside
              initial={{ x: -260 }} animate={{ x: 0 }} exit={{ x: -260 }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              className="fixed top-0 left-0 h-screen z-50 lg:hidden"
            >
              <div className="relative h-full">
                <button
                  onClick={() => setMobileOpen(false)}
                  className="absolute top-4 -right-11 w-9 h-9 rounded-full bg-white vz-border shadow flex items-center justify-center"
                  aria-label="Close menu"
                >
                  <X size={16} />
                </button>
                <SidebarContent active={active} setActive={setActive} isDark={isDark} setIsDark={setIsDark} onNavigate={() => setMobileOpen(false)} />
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
