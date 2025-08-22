import { Outlet } from "react-router-dom";
import Footer from "../../common/Footer";
import StudentNavbar from "./StudentNavbar";
import { useAppSelector } from "../../interfaces/hook";
import type { AuthState } from "../../../store/slices/AuthSlice";

export default function StudentLayout() {
  const {isLoading,isVerified,data,message,success} : AuthState = useAppSelector(state=>state.auth) 
  return (
    <div className="flex  flex-col">
    <StudentNavbar studentName={data.full_name} role={data.role} />
    <div className="flex-1 min-h-screen">
      <Outlet context={{isLoading,isVerified,data,message,success}}/>
      </div>
    <Footer/>
    </div>
  )
}
