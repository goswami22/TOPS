import { Outlet } from "react-router-dom";

/**
 * Layout shell for public-facing pages (landing, auth, marketing).
 * Dashboard-specific chrome (sidebar, app header) lives in DashboardLayout.
 */
function PublicLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-[rgb(var(--color-bg))] text-[rgb(var(--color-text))]">
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}

export default PublicLayout;
