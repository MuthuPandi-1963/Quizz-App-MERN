import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../interfaces/hook";
import type { JSX } from "react";

export function AuthWrapper({ children }: { children: JSX.Element }) {
  const { id, role, is_verified } = useAppSelector((state) => state.auth.data);
  const location = useLocation();

  if (id && is_verified) {
    // already logged in → go to their dashboard
    return <Navigate to={`/${role}`} state={{ from: location }} replace />;
  }

  return children; // show login/signup
}
