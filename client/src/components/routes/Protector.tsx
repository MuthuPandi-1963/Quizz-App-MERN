import type React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import type { AuthState } from "../../store/slices/AuthSlice";

export const ProtectedRoutes: React.FC<{ auth: AuthState }> = ({ auth }) => {
  const {
    isLoading,
    data: { is_verified, role },
  } = auth;
  const { pathname } = useLocation();

  if (isLoading) {
    return <Outlet />;
  }

  if (!is_verified) {
    return <Navigate to="/auth/login" replace />;
  }

  // Allow anything under the role path (e.g., /student/*, /admin/*, /staff/*)

  if (!pathname.startsWith(`/${role}`)) {
    return <Navigate to={`/${role}`} replace />;
  }

  return <Outlet />;
};
