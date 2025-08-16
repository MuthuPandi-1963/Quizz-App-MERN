import { Outlet } from "react-router-dom";
import Footer from "../../common/Footer";
import StudentNavbar from "./StudentNavbar";

export default function StudentLayout() {
  return (
    <div className="flex  flex-col">
    <StudentNavbar/>
    <div className="flex-1"><Outlet/></div>
    <Footer/>
    </div>
  )
}
