import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "@constants/routes";
import { STORAGE_KEYS } from "@constants/config";

/**
 * Gatekeeper for authenticated routes.
 * Actual auth/session logic will be wired in via AuthContext in a later module.
 */
function ProtectedRoute() {
  const token = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);

  if (!token) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
