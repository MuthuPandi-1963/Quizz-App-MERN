import { Outlet } from "react-router-dom";
import Footer from "../../common/Footer";
import StudentNavbar from "./StudentNavbar";
import { useAppSelector } from "../../interfaces/hook";

export default function StudentLayout() {
  const {isLoading,isVerified,data} = useAppSelector(state=>state.auth)
  console.log(data);
  
  return (
    <div className="flex  flex-col">
    <StudentNavbar studentName={data?.username} data={data}/>
    <div className="flex-1 min-h-screen"><Outlet/></div>
    <Footer/>
    </div>
  )
}
