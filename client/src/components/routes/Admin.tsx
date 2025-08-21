import React from "react";
import { Route } from "react-router-dom";

const AdminLayout = React.lazy(() => import("../admin/layouts/AdminLayout"));
const AdminHomePage = React.lazy(() => import("../admin/pages/AdminHomePage"));
const AdminDashboard = React.lazy(() => import("../admin/pages/AdminDashBoard"));
const AdminProfile = React.lazy(() => import("../admin/pages/AdminProfile"));

export const AdminRoutes = (
  <Route path="/admin" element={<AdminLayout />}>
    <Route index element={<AdminHomePage />} />
    <Route path="dashboard" element={<AdminDashboard />} />
    <Route path="profile" element={<AdminProfile />} />
  </Route>
);
