import { Navigate, Routes, Route } from "react-router-dom";
import { AdminRoutes } from "./components/routes/Admin";
import { StaffRoutes } from "./components/routes/Staff";
import { StudentRoutes } from "./components/routes/Student";
import { AuthRoutes } from "./components/routes/Auth";
import { CommonRoutes } from "./components/routes/Common";
import { useAppDispatch, useAppSelector } from "./components/interfaces/hook";
import { VerifyUser } from "./store/thunks/auth/VerifyUser";
import { useEffect } from "react";
import { useMsg } from "./store/context/MsgContext";
import type { AuthState } from "./store/slices/AuthSlice";
import { Suspense } from "react";
import { Loader } from "./utils/form/Loader";

export default function App() {
  const dispatch = useAppDispatch();
  const {isVerified,isLoading , data}: AuthState = useAppSelector((state) => state.auth);
  const { showMessage, destroyMessage } = useMsg();

  useEffect(() => {
    dispatch(VerifyUser());
  }, [dispatch]);

  useEffect(() => {
    if (isLoading) {
      showMessage({
        content: "Fetching user details...",
        duration: 0,
        type: "loading",
      });
    } else {
      destroyMessage();
    }
  }, [isLoading, showMessage, destroyMessage]);

  if (isLoading) return <Loader/>

  


return (
  <Suspense fallback={<Loader/>}>
    <Routes>
      {CommonRoutes}
      {AuthRoutes}
      {AdminRoutes}
      {StaffRoutes}
      {StudentRoutes}
    </Routes>
  </Suspense>
);

}
