import { useState } from "react";
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
} from "lucide-react";

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

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);
  const [active, setActive] = useState("home");
  const [isDark, setIsDark] = useState(true);

  return (
    <aside
      className={`fixed left-0 top-0 z-50 flex h-screen flex-col border-r border-white/[0.08] bg-[#0B0F19]/95 backdrop-blur-xl transition-[width] duration-300 ease-in-out ${
        expanded ? "w-[280px]" : "w-[90px]"
      }`}
    >
      {/* subtle ambient glow, premium touch */}
      <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-[#7C5CFF]/10 blur-3xl" />

      {/* Header: Logo + Collapse toggle */}
      <div className="relative flex h-[72px] shrink-0 items-center border-b border-white/[0.08] px-4">
        <div
          className={`flex items-center gap-3 overflow-hidden transition-all duration-300 ${
            expanded ? "w-full opacity-100" : "w-0 opacity-0"
          }`}
        >
          <LogoMark />
          <span className="whitespace-nowrap text-[15px] font-semibold tracking-tight text-white">
            MCvid <span className="text-[#9D7CFF]">AI</span>
          </span>
        </div>

        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
          className={`group flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-slate-400 transition-all duration-200 hover:border-[#7C5CFF]/40 hover:bg-[#7C5CFF]/10 hover:text-white ${
            expanded ? "ml-auto" : "mx-auto"
          }`}
        >
          {expanded ? (
            <ChevronsLeft size={18} strokeWidth={2} />
          ) : (
            <ChevronsRight size={18} strokeWidth={2} />
          )}
        </button>
      </div>

      {/* Logo mark only, shown centered when collapsed */}
      {!expanded && (
        <div className="flex justify-center pt-4">
          <LogoMark />
        </div>
      )}

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto overflow-x-hidden px-3 py-4">
        <ul className="flex flex-col gap-1">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => setActive(item.id)}
                  title={!expanded ? item.label : undefined}
                  className={`group relative flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                    expanded ? "justify-start" : "justify-center"
                  } ${
                    isActive
                      ? "bg-gradient-to-r from-[#7C5CFF]/25 to-[#7C5CFF]/5 text-white shadow-[0_0_0_1px_rgba(124,92,255,0.35)]"
                      : "text-slate-400 hover:bg-white/[0.05] hover:text-white"
                  }`}
                >
                  {isActive && (
                    <span className="absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-full bg-[#7C5CFF]" />
                  )}
                  <Icon
                    size={19}
                    strokeWidth={2}
                    className={`shrink-0 transition-colors ${
                      isActive ? "text-[#9D7CFF]" : "text-slate-500 group-hover:text-white"
                    }`}
                  />
                  <span
                    className={`whitespace-nowrap transition-all duration-200 ${
                      expanded ? "opacity-100" : "w-0 opacity-0"
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
        {expanded ? (
          <div className="relative overflow-hidden rounded-2xl border border-[#7C5CFF]/25 bg-gradient-to-br from-[#7C5CFF]/15 via-[#111827] to-[#111827] p-4 shadow-[0_8px_30px_rgba(124,92,255,0.12)]">
            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#5BE7FF]/10 blur-2xl" />
            <div className="mb-2 flex items-center gap-2 text-[#9D7CFF]">
              <Crown size={16} strokeWidth={2} />
              <span className="text-[13px] font-semibold text-white">Upgrade to Pro</span>
            </div>
            <p className="mb-3 text-xs leading-relaxed text-slate-400">
              Unlock unlimited videos, premium features and priority support.
            </p>
            <button
              type="button"
              className="w-full rounded-xl bg-[#7C5CFF] py-2 text-xs font-semibold text-white shadow-[0_4px_16px_rgba(124,92,255,0.4)] transition-all duration-200 hover:bg-[#8F6FFF] hover:shadow-[0_6px_20px_rgba(124,92,255,0.55)]"
            >
              Upgrade Now
            </button>
          </div>
        ) : (
          <button
            type="button"
            title="Upgrade to Pro"
            className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl border border-[#7C5CFF]/30 bg-[#7C5CFF]/10 text-[#9D7CFF] transition-all duration-200 hover:bg-[#7C5CFF]/20"
          >
            <Crown size={18} strokeWidth={2} />
          </button>
        )}

        {/* Theme toggle */}
        <button
          type="button"
          onClick={() => setIsDark((v) => !v)}
          className={`flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-medium text-slate-400 transition-all duration-200 hover:bg-white/[0.05] hover:text-white ${
            expanded ? "justify-start" : "justify-center"
          }`}
        >
          {isDark ? (
            <Moon size={18} strokeWidth={2} className="shrink-0 text-slate-500" />
          ) : (
            <Sun size={18} strokeWidth={2} className="shrink-0 text-slate-500" />
          )}
          {expanded && (
            <span className="flex flex-1 items-center justify-between whitespace-nowrap">
              Dark Mode
              <span
                className={`relative ml-2 h-5 w-9 rounded-full transition-colors duration-200 ${
                  isDark ? "bg-[#7C5CFF]" : "bg-white/10"
                }`}
              >
                <span
                  className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-all duration-200 ${
                    isDark ? "left-[18px]" : "left-0.5"
                  }`}
                />
              </span>
            </span>
          )}
        </button>

        {/* Profile card */}
        <button
          type="button"
          title={!expanded ? "John Doe" : undefined}
          className={`flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-2 transition-all duration-200 hover:border-white/[0.15] hover:bg-white/[0.05] ${
            expanded ? "justify-start" : "justify-center"
          }`}
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#7C5CFF] to-[#5BE7FF] text-xs font-semibold text-white">
            JD
          </span>
          {expanded && (
            <span className="flex flex-1 items-center justify-between overflow-hidden">
              <span className="flex flex-col items-start overflow-hidden text-left">
                <span className="w-full truncate text-[13px] font-medium text-white">
                  John Doe
                </span>
                <span className="w-full truncate text-[11px] text-slate-500">
                  john@example.com
                </span>
              </span>
              <ChevronRight size={15} className="shrink-0 text-slate-500" />
            </span>
          )}
        </button>
      </div>
    </aside>
  );
}

function LogoMark() {
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#7C5CFF] to-[#5BE7FF] shadow-[0_4px_14px_rgba(124,92,255,0.45)]">
      <Sparkles size={17} strokeWidth={2.25} className="text-white" />
    </span>
  );
}
