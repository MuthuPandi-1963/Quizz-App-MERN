import React from "react";
import { Route } from "react-router-dom";

const StudentLayout = React.lazy(() => import("../students/layouts/StudentLayout"));
const StudentHomePage = React.lazy(() => import("../students/pages/StudentHomePage"));
const StudentDashboard = React.lazy(() => import("../students/pages/StudentDashboard"));
const StudentProfile = React.lazy(() => import("../students/pages/StudentProfile"));

export const StudentRoutes = (
  <Route path="/student" element={<StudentLayout />}>
    <Route index element={<StudentHomePage />} />
    <Route path="dashboard" element={<StudentDashboard />} />
    <Route path="profile" element={<StudentProfile />} />
  </Route>
);
