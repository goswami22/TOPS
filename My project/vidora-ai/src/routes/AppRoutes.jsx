import { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import PublicLayout from "@components/layout/PublicLayout";
import DashboardLayout from "@components/layout/DashboardLayout";
import ProtectedRoute from "@routes/ProtectedRoute";
import ErrorBoundary from "@components/common/ErrorBoundary";

import NotFound from "@pages/errors/NotFound";
import ServerError from "@pages/errors/ServerError";
// import Home from "@pages/Home";

import { ROUTES } from "@constants/routes";
import LandingPage from "../pages/LandingPage";

/**
 * Central route registry.
 * Public and Dashboard page modules will be registered here in later modules.
 * Foundation only — no feature pages are defined yet.
 */
function AppRoutes() {
  return (
    <ErrorBoundary>
      <Suspense fallback={null}>
        <Routes>
          {/* Public routes */}
          <Route element={<PublicLayout />}>
            <Route path={ROUTES.HOME} element={<LandingPage />} />
            {/* Additional feature pages (auth, marketing) register here in Module 2+ */}
          </Route>

          {/* Protected dashboard routes */}
          <Route element={<ProtectedRoute />}>
            <Route element={<DashboardLayout />}>
              {/* Dashboard feature pages register here in Module 2+ */}
            </Route>
          </Route>

          {/* Error routes */}
          <Route path={ROUTES.SERVER_ERROR} element={<ServerError />} />
          <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
          <Route path="*" element={<Navigate to={ROUTES.NOT_FOUND} replace />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default AppRoutes;
