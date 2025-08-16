import { Outlet } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import Footer from "../../common/Footer";

export default function AdminLayout() {
  return (
    <div className="min-h-full flex flex-col">
    <AdminNavbar/>
    <div className="flex-1 min-h-screen"><Outlet/></div>
    <Footer/>
    </div>
  )
}
