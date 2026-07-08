import { UIProvider } from "../../context/UIContext";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function LayoutShell({ children }) {
  return (
    <div className="min-h-dvh bg-[#0B0F19]">
      <Sidebar />

      {/* Content column. The sidebar is fixed + overlays (z-50) rather than
          reflowing, so this column only ever reserves the collapsed 90px
          on desktop — expanding never shifts this layout. On mobile the
          sidebar is an off-canvas drawer, so no reserved space is needed. */}
      <div className="flex min-h-dvh w-full flex-col pl-0 transition-[padding] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] md:pl-[90px]">
        <Navbar />
        <main className="flex-1">{children}</main>
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
