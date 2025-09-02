import React from "react";
import { Route } from "react-router-dom";
import CreateQuiz from "../staffs/pages/CreateQuiz";
import Staff404Page from "../staffs/pages/Staff404";

const StaffLayout = React.lazy(() => import("../staffs/layouts/StaffLayout"));
const StaffHomePage = React.lazy(() => import("../staffs/pages/StaffHomePage"));
const StaffDashboard = React.lazy(() => import("../staffs/pages/StaffDashboard"));
const StaffProfile = React.lazy(() => import("../staffs/pages/StaffProfile"));

export const StaffRoutes = (
  <Route path="/staff" element={<StaffLayout />}>
    <Route index element={<StaffHomePage />} />
    <Route path="dashboard" element={<StaffDashboard />} />
    <Route path="profile" element={<StaffProfile />} />
    <Route path="create-quiz" element={<CreateQuiz />} />
    <Route path="*" element={<Staff404Page />} />
  </Route>
);
