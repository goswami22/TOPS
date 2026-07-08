import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#0B0F19]">
      <Sidebar />

      {/* Content area offset by the collapsed sidebar width.
          The sidebar overlays expanded content on top (fixed + z-50),
          so the shell itself only ever reserves the collapsed width. */}
      <main className="min-h-screen w-full pl-[90px] transition-[padding] duration-300 ease-in-out">
        {children}
      </main>
    </div>
  );
}
