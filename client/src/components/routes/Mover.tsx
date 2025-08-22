import React from 'react'
import type { AuthState } from '../../store/slices/AuthSlice'
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const Mover : React.FC<{auth:AuthState}> = ({auth})=> {
    const {isLoading,isVerified,data:{role}} = auth
  console.log(isLoading,isVerified,role);
  const {pathname,...location } = useLocation()
  if(isVerified){
    return <Navigate to={`/${role ?? ""}`} replace />
  }
  return <Outlet/>
}

export default Mover
