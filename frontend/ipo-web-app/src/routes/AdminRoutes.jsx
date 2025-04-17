// src/routes/adminRoutes.js
import { lazy } from "react";
import ProtectedRoute from "./ProtectedRoute";

const AdminDashboard = lazy(() => import("../pages/admin/AdminDashboard"));
// const ManageIPOs = lazy(() => import("../pages/admin/ManageIPOs"));
// const Settings = lazy(() => import("../pages/admin/Settings"));

const adminRoutes = [
  {
    path: "/admin",
    element: (
      <ProtectedRoute allowedRoles={["admin"]}>
        <AdminDashboard />
      </ProtectedRoute>
    ),
  },
//   {
//     path: "/admin/ipos",
//     element: (
//       <ProtectedRoute allowedRoles={["admin"]}>
//         <ManageIPOs />
//       </ProtectedRoute>
//     ),
//   },
//   {
//     path: "/admin/settings",
//     element: (
//       <ProtectedRoute allowedRoles={["admin"]}>
//         <Settings />
//       </ProtectedRoute>
//     ),
//   },
];

export default adminRoutes;
