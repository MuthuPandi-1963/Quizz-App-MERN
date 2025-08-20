import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../interfaces/hook";

type Props = {
  allowedRoles: string[];
};

export default function ProtectedRoute({ allowedRoles }: Props) {
  const { data :{id, role, is_verified}, isLoading } = useAppSelector(
    (state) => state.auth
  );
  const location = useLocation();

  if (isLoading) {
    return <div>Loading...</div>; // spinner
  }

  // 🚫 Not logged in → go to /auth
  if (!id) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  // 🚫 Not verified → go to /auth
  if (!is_verified) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  // 🚫 Wrong role → send them to their own dashboard
  if (!allowedRoles.includes(role)) {
    return <Navigate to={`/${role}`} replace />;
  }

  // ✅ Role matches → allow access
  return <Outlet />;
}
