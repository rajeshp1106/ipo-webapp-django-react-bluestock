// src/routes/userRoutes.js
import { lazy } from "react";
import ProtectedRoute from "./ProtectedRoute";

const Home = lazy(() => import("../pages/Home"));
// const UserIPOs = lazy(() => import("../pages/user/UserIPOs"));
// const Profile = lazy(() => import("../pages/user/Profile"));

const userRoutes = [
  {
    path: "/user",
    element: (
      <ProtectedRoute allowedRoles={["user"]}>
        <Home />
      </ProtectedRoute>
    ),
  },
//   {
//     path: "/user/ipos",
//     element: (
//       <ProtectedRoute allowedRoles={["user"]}>
//         <UserIPOs />
//       </ProtectedRoute>
//     ),
//   },
//   {
//     path: "/user/profile",
//     element: (
//       <ProtectedRoute allowedRoles={["user"]}>
//         <Profile />
//       </ProtectedRoute>
//     ),
//   },
];

export default userRoutes;
