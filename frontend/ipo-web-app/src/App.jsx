// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import Login from "./pages/auth/Login";
import Landing from "./pages/Landing";
import AdminRoutes from "./routes/AdminRoutes";
import UserRoutes from "./routes/UserRoutes";

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />

          {/* Admin Routes */}
          {AdminRoutes.map((route, i) => (
            <Route key={i} path={route.path} element={route.element} />
          ))}

          {/* User Routes */}
          {UserRoutes.map((route, i) => (
            <Route key={i} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
