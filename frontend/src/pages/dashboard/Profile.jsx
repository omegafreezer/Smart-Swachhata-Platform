import { useEffect, useState } from "react";
import DashboardLayout from "../../components/dashboard/DashboardLayout";

import { getRewards, getBadge } from "../../data/rewards";
import { getDashboardStats } from "../../services/complaintService";

import {
  FaUserCircle,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Profile() {
  const rewards = getRewards();
  const badge = getBadge(rewards.points);

  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    inProgress: 0,
    resolved: 0,
    rejected: 0,
  });

  useEffect(() => {
    const loadStats = async () => {
      try {
        const data = await getDashboardStats();
        setStats(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadStats();
  }, []);

  const user = {
    name: "Saksham",
    email: "saksham@email.com",
    phone: "+91 9876543210",
    city: "Bhubaneswar",
  };

  return (
    <DashboardLayout>
      <h2 style={{ marginBottom: "25px" }}>
        My Profile
      </h2>

      <div className="dashboard-card">
        <div
          style={{
            display: "flex",
            gap: "30px",
            alignItems: "center",
          }}
        >
          <FaUserCircle size={120} color="#16a34a" />

          <div>
            <h2>{user.name}</h2>

            <p>
              <FaEnvelope /> {user.email}
            </p>

            <p>
              <FaPhone /> {user.phone}
            </p>

            <p>
              <FaMapMarkerAlt /> {user.city}
            </p>
          </div>
        </div>
      </div>

      <div className="stats-container">
        <div className="stat-card">
          <div className="stat-info">
            <h2>{stats.total}</h2>
            <p>Total Complaints</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-info">
            <h2>{stats.pending}</h2>
            <p>Pending</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-info">
            <h2>{stats.resolved}</h2>
            <p>Resolved</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-info">
            <h2>{rewards.points}</h2>
            <p>Reward Points</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-info">
            <h2>{badge}</h2>
            <p>Badge</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Profile;