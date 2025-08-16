import { Route } from "react-router-dom";
import AdminLayout from "../admin/layouts/AdminLayout";
import AdminDashboard from "../admin/pages/AdminDashBoard";
import AdminHomePage from "../admin/pages/AdminHomePage";
import AdminProfile from "../admin/layouts/AdminProfile";

export const AdminRoutes = (
    <Route path="/admin" element={<AdminLayout/>}>
        <Route index element={<AdminHomePage/>}/>
        <Route path="dashboard" element={<AdminDashboard/>}/>
        <Route path="profile" element={<AdminProfile/>}/>
    </Route>
)