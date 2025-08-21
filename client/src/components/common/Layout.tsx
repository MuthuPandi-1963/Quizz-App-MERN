import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout ({children}:any)  {
  return (
    <>
    <Navbar onLoginClick={()=>{}} onSignupClick={()=>{}}/>
      <div className="md:mt-16 mt-10">
        {children}
    <Outlet/>
    </div>
    <Footer/>

    </>
  )
}
