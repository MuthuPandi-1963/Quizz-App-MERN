import { Route } from "react-router-dom";
import StudentLayout from "../students/layouts/StudentLayout";
import StudentHomePage from "../students/pages/StudentHomePage";
import StudentDashboard from "../students/pages/StudentDashboard";
import StudentProfile from "../students/pages/StudentProfile";

export const StudentRoutes = (
    <Route path="/student" element={<StudentLayout/>}>
        <Route index element={<StudentHomePage/>}/>
        <Route path="dashboard" element={<StudentDashboard/>}/>
        <Route path="profile" element={<StudentProfile/>}/>
    </Route>
)