import { NavLink, useNavigate } from "react-router-dom";
import {
  FaRecycle,
  FaTachometerAlt,
  FaClipboardList,
  FaHistory,
  FaChartBar,
  FaGift,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import { useAuth } from "../../context/AuthContext";

function Sidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="sidebar-logo">
        <FaRecycle className="logo-icon" />
        <h2>Smart Swachhata</h2>
      </div>

      {/* Navigation */}
      <nav className="sidebar-menu">
        <NavLink to="/dashboard" end className="menu-item">
          <FaTachometerAlt />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/dashboard/report" className="menu-item">
          <FaClipboardList />
          <span>Report Complaint</span>
        </NavLink>

        <NavLink
          to="/dashboard/mycomplaints"
          className="menu-item"
        >
          <FaHistory />
          <span>My Complaints</span>
        </NavLink>

        <NavLink
          to="/dashboard/analytics"
          className="menu-item"
        >
          <FaChartBar />
          <span>Analytics</span>
        </NavLink>

        <NavLink
          to="/dashboard/rewards"
          className="menu-item"
        >
          <FaGift />
          <span>Rewards</span>
        </NavLink>

        <NavLink
          to="/dashboard/profile"
          className="menu-item"
        >
          <FaUser />
          <span>Profile</span>
        </NavLink>

        <NavLink
          to="/dashboard/settings"
          className="menu-item"
        >
          <FaCog />
          <span>Settings</span>
        </NavLink>
      </nav>

      {/* Logout */}
      <button className="logout-btn" onClick={handleLogout}>
        <FaSignOutAlt />
        <span>Logout</span>
      </button>
    </aside>
  );
}

export default Sidebar;