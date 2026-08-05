import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";

import { getDashboardStats } from "../../services/complaintService";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function ComplaintPieChart() {
  const [stats, setStats] = useState({
    pending: 0,
    resolved: 0,
    inProgress: 0,
    rejected: 0,
  });

  useEffect(() => {
    const loadStats = async () => {
      try {
        const data = await getDashboardStats();
        setStats(data);
      } catch (error) {
        console.error("Failed to load chart data:", error);
      }
    };

    loadStats();
  }, []);

  const data = {
    labels: [
      "Pending",
      "Resolved",
      "In Progress",
      "Rejected",
    ],
    datasets: [
      {
        label: "Complaints",
        data: [
          stats.pending,
          stats.resolved,
          stats.inProgress,
          stats.rejected,
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="dashboard-card chart-card">
      <h3>Complaint Status</h3>

      <div style={{ height: "300px" }}>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}

export default ComplaintPieChart;