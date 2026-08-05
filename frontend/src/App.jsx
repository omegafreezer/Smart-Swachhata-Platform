import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import Dashboard from "./pages/dashboard/Dashboard";
import ReportComplaint from "./pages/dashboard/ReportComplaint";
import MyComplaints from "./pages/dashboard/MyComplaints";
import Analytics from "./pages/dashboard/Analytics";
import Rewards from "./pages/dashboard/Rewards";
import Profile from "./pages/dashboard/Profile";
import Settings from "./pages/dashboard/Settings";

import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Dashboard */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* Report Complaint */}
      <Route
        path="/dashboard/report"
        element={
          <ProtectedRoute>
            <ReportComplaint />
          </ProtectedRoute>
        }
      />

      {/* My Complaints */}
     <Route
  path="/dashboard/mycomplaints"
  element={
    <ProtectedRoute>
      <MyComplaints />
    </ProtectedRoute>
  }
/>

      {/* Analytics */}
      <Route
        path="/analytics"
        element={
          <ProtectedRoute>
            <Analytics />
          </ProtectedRoute>
        }
      />

      {/* Rewards */}
      <Route
        path="/rewards"
        element={
          <ProtectedRoute>
            <Rewards />
          </ProtectedRoute>
        }
      />

      {/* Profile */}
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      {/* Settings */}
      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;