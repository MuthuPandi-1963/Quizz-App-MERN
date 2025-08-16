import { Routes } from "react-router-dom";
import { AdminRoutes } from "./components/routes/Admin";
import { StaffRoutes } from "./components/routes/Staff";
import { StudentRoutes } from "./components/routes/Student";
import { AuthRoutes } from "./components/routes/Auth";
import { CommonRoutes } from "./components/routes/Common";

export default function App(){
  return (
    <>
    <Routes>
      {CommonRoutes}
      {AuthRoutes}
      {AdminRoutes}
      {StaffRoutes}
      {StudentRoutes}
    </Routes>
    </>
  )
}
