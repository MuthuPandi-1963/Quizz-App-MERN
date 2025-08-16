import { Route } from "react-router-dom";
import StaffLayout from "../staffs/layouts/StaffLayout";
import StaffHomePage from "../staffs/pages/StaffHomePage";
import StaffDashboard from "../staffs/pages/StaffDashboard";
import StaffProfile from "../staffs/pages/StaffProfile";

export const StaffRoutes = (
    <Route path="/staff" element={<StaffLayout/>}>
        <Route index element={<StaffHomePage/>}/>
        <Route path="dashboard" element={<StaffDashboard/>}/>
        <Route path="profile" element={<StaffProfile/>}/>
    </Route>
)