import { UIProvider } from "../../context/UIContext";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

// Kept in sync with the easing used inside Sidebar/Navbar so the padding
// transition below animates with the same feel as the rest of the shell.
const EASE = "ease-[cubic-bezier(0.16,1,0.3,1)]";

function LayoutShell({ children }) {
  return (
    <div className="min-h-dvh w-full bg-[var(--bg-canvas)] transition-colors duration-300">
      <Sidebar />

      {/* Content column. The sidebar is fixed + overlays (z-50) rather than
          reflowing, so this column only ever reserves the collapsed 90px
          on desktop — expanding never shifts this layout. On mobile the
          sidebar is an off-canvas drawer, so no reserved space is needed.
          `min-w-0` keeps this column free to size purely off the viewport
          rather than being pushed wide by any unbreakable content inside
          Navbar (e.g. the search bar + pill cluster at the md breakpoint). */}
      <div
        className={`flex min-h-dvh w-full min-w-0 flex-col pl-0 transition-[padding] duration-300 ${EASE} md:pl-[90px]`}
      >
        <Navbar />

        {/* overflow-x-hidden is a defensive backstop so no section's
            decorative or wide content (marquees, absolutely-positioned
            glows, etc.) can force the page to scroll horizontally on
            narrow viewports — each section should still clip its own
            decoration, this just guarantees it at the layout level too. */}
        <main className="w-full flex-1 overflow-x-hidden">{children}</main>
      </div>
    </div>
  );
}

export default function Layout({ children }) {
  return (
    <UIProvider>
      <LayoutShell>{children}</LayoutShell>
    </UIProvider>
  );
}
