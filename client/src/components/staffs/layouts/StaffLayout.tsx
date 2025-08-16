import { Outlet } from "react-router-dom";
import StaffNavbar from "./StaffNavbar";
import Footer from "../../common/Footer";

export default function StaffLayout() {
  return (
    <div className="min-h-full flex flex-col">
        <StaffNavbar />
        <div className="flex-1 min-h-screen"><Outlet/></div>
        <Footer/>
    </div>
  )
}    
