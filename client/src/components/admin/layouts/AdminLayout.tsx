import { Outlet } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import Footer from "../../common/Footer";

export default function AdminLayout() {
  return (
    <div className="min-h-full flex">
    <AdminNavbar/>
    <div className="flex-1"><Outlet/></div>
    <Footer/>
    </div>
  )
}
