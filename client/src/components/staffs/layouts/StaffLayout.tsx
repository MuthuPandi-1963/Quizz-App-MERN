import { Outlet } from "react-router-dom";
import StaffNavbar from "./StaffNavbar";
import Footer from "../../common/Footer";

export default function StaffLayout() {
  return (
    <div className="min-h-full flex">
        <StaffNavbar />
        <div className="flex-1"><Outlet/></div>
        <Footer/>
    </div>
  )
}    
