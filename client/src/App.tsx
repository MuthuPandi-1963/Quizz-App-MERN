import { Routes, Route } from "react-router-dom";
import { AdminRoutes } from "./components/routes/Admin";
import { StaffRoutes } from "./components/routes/Staff";
import { StudentRoutes } from "./components/routes/Student";
import { AuthRoutes } from "./components/routes/Auth";
import { CommonRoutes } from "./components/routes/Common";
import { useAppDispatch, useAppSelector } from "./components/interfaces/hook";
import { VerifyUser } from "./store/thunks/auth/VerifyUser";
import { useEffect } from "react";
import ProtectedRoute from "./components/routes/Protecter";
import { AuthWrapper } from "./components/routes/AuthWrapper";

export default function App() {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector(state => state.auth)
  console.log(isLoading);


  useEffect(() => {
    dispatch(VerifyUser());
  }, [dispatch]);

  return (
    <Routes>
      {CommonRoutes}
      <Route element={<AuthWrapper>
        {AuthRoutes}
      </AuthWrapper>} />

      {/* ✅ Protect admin routes */}
      <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
        {AdminRoutes}
      </Route>

      {/* ✅ Protect staff routes */}
      <Route element={<ProtectedRoute allowedRoles={["staff"]} />}>
        {StaffRoutes}
      </Route>

      {/* ✅ Protect student routes */}
      <Route element={<ProtectedRoute allowedRoles={["student"]} />}>
        {StudentRoutes}
      </Route>
    </Routes>
  );
}
