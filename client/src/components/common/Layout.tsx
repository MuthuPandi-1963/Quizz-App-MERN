import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
    <Navbar onLoginClick={()=>{}} onSignupClick={()=>{}}/>
      <div className="md:mt-16 mt-10"></div>
    <Outlet/>
    <Footer/>

    </>
  )
}
