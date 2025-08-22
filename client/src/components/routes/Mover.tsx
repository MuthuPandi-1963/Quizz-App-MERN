import React from 'react'
import type { AuthState } from '../../store/slices/AuthSlice'
import { Navigate, Outlet } from 'react-router-dom';

const Mover : React.FC<{auth:AuthState}> = ({auth})=> {
    const {isVerified,data:{role}} = auth
  // const {pathname } = useLocation()
  if(isVerified){
    return <Navigate to={`/${role ?? ""}`} replace />
  }
  return <Outlet/>
}

export default Mover
