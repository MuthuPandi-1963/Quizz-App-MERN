import { Route } from "react-router-dom";
import StudentLayout from "../students/layouts/StudentLayout";

export const StudentRoutes = (
    <Route path="/students" element={<StudentLayout/>}>
    </Route>
)