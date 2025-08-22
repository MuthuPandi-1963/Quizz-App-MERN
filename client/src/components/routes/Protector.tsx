import type React from "react";
import type { AuthState } from "../../store/slices/AuthSlice";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

export const ProtectedRoutes :React.FC<{auth : AuthState}> = ({auth})=>{
  
  
  const {isLoading,isVerified,data:{role}} = auth
  const {pathname} = useLocation()
  useEffect(()=>{
    localStorage.setItem("path",pathname)
  },[pathname])

  if(isLoading) return null;

  if (!isVerified) {
  return <Navigate to="/" />;
}

if (!pathname.includes(role)) {
  
  return <Navigate to={`/${role}`} />;
}

  
  return <Outlet/>

}