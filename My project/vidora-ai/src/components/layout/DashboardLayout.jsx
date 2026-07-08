import { Outlet } from "react-router-dom";

/**
 * Layout shell for authenticated dashboard pages.
 * Sidebar/topbar components will be composed here in a later module.
 */
function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-[rgb(var(--color-bg-muted))] text-[rgb(var(--color-text))]">
      <div className="flex flex-1 flex-col">
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
