import DashboardLayout from "../../components/dashboard/DashboardLayout";
import { useState } from "react";
import { FaUserCog, FaLock, FaBell, FaMoon, FaTrash } from "react-icons/fa";

function Settings() {
  const [user, setUser] = useState({
    name: "Saksham Singh",
    email: "saksham@gmail.com",
    phone: "9876543210",
    city: "Bhubaneswar",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const saveProfile = () => {
    localStorage.setItem("userProfile", JSON.stringify(user));
    alert("Profile updated successfully!");
  };

  return (
    <DashboardLayout>
      <h2 style={{ marginBottom: "25px" }}>Settings</h2>

      {/* Account Settings */}
      <div className="dashboard-card">
        <h3>
          <FaUserCog /> Account Settings
        </h3>

        <div className="form-grid">
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            placeholder="Full Name"
          />

          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Email"
          />

          <input
            type="text"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            placeholder="Phone Number"
          />

          <input
            type="text"
            name="city"
            value={user.city}
            onChange={handleChange}
            placeholder="City"
          />
        </div>

        <button
          className="btn btn-success"
          style={{ marginTop: "20px" }}
          onClick={saveProfile}
        >
          Save Changes
        </button>
      </div>

      {/* Password + Notifications */}
      <div className="chart-grid">
        <div className="dashboard-card">
          <h3>
            <FaLock /> Change Password
          </h3>

          <div className="complaint-form">
            <input type="password" placeholder="Current Password" />
            <input type="password" placeholder="New Password" />
            <input type="password" placeholder="Confirm Password" />

            <button className="btn btn-primary">
              Update Password
            </button>
          </div>
        </div>

        <div className="dashboard-card">
          <h3>
            <FaBell /> Notifications
          </h3>

          <div style={{ lineHeight: "2.2" }}>
            <label>
              <input type="checkbox" defaultChecked /> Email Notifications
            </label>

            <br />

            <label>
              <input type="checkbox" defaultChecked /> Complaint Updates
            </label>

            <br />

            <label>
              <input type="checkbox" /> SMS Alerts
            </label>

            <br />

            <label>
              <input type="checkbox" /> Push Notifications
            </label>
          </div>
        </div>
      </div>

      {/* Preferences */}
      <div className="dashboard-card">
        <h3>
          <FaMoon /> Preferences
        </h3>

        <label>
          <input type="checkbox" /> Enable Dark Mode
        </label>
      </div>

      {/* Danger Zone */}
      <div
        className="dashboard-card"
        style={{ borderLeft: "6px solid #dc2626" }}
      >
        <h3 style={{ color: "#dc2626" }}>
          <FaTrash /> Danger Zone
        </h3>

        <button className="btn btn-danger">
          Delete Account
        </button>
      </div>
    </DashboardLayout>
  );
}

export default Settings;