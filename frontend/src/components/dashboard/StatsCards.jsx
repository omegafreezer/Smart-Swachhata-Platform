import { useEffect, useState } from "react";
import {
  FaClipboardList,
  FaCheckCircle,
  FaClock,
  FaSpinner,
  FaTimesCircle,
} from "react-icons/fa";

import { getDashboardStats } from "../../services/complaintService";

function StatsCards() {
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
        console.error("Failed to load dashboard stats:", error);
      }
    };

    loadStats();
  }, []);

  const cards = [
    {
      title: "Total Complaints",
      value: stats.total,
      icon: <FaClipboardList />,
      color: "#2563eb",
    },
    {
      title: "Pending",
      value: stats.pending,
      icon: <FaClock />,
      color: "#f59e0b",
    },
    {
      title: "In Progress",
      value: stats.inProgress,
      icon: <FaSpinner />,
      color: "#7c3aed",
    },
    {
      title: "Resolved",
      value: stats.resolved,
      icon: <FaCheckCircle />,
      color: "#16a34a",
    },
    {
      title: "Rejected",
      value: stats.rejected,
      icon: <FaTimesCircle />,
      color: "#dc2626",
    },
  ];

  return (
    <div className="stats-container">
      {cards.map((card, index) => (
        <div className="stat-card" key={index}>
          <div
            className="stat-icon"
            style={{ background: card.color }}
          >
            {card.icon}
          </div>

          <div className="stat-info">
            <h2>{card.value}</h2>
            <p>{card.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;