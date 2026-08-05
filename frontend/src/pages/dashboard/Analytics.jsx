import { useEffect, useState } from "react";

import DashboardLayout from "../../components/dashboard/DashboardLayout";
import StatsCards from "../../components/dashboard/StatsCards";
import MonthlyChart from "../../components/dashboard/MonthlyChart";
import ComplaintPieChart from "../../components/dashboard/ComplaintPieChart";
import CategoryChart from "../../components/analytics/CategoryChart";

import { getDashboardStats } from "../../services/complaintService";

function Analytics() {
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

  return (
    <DashboardLayout>
      <h2 style={{ marginBottom: "20px" }}>
        Analytics Dashboard
      </h2>

      {/* Statistics Cards */}
      <StatsCards />

      {/* Charts */}
      <div className="chart-grid">
        <MonthlyChart />
        <ComplaintPieChart />
      </div>

      {/* Category Analytics */}
      <CategoryChart />

      {/* Summary */}
      <div className="dashboard-card">
        <h3>Analytics Summary</h3>

        <table className="table table-bordered">
          <tbody>
            <tr>
              <td>Total Complaints</td>
              <td>{stats.total}</td>
            </tr>

            <tr>
              <td>Pending</td>
              <td>{stats.pending}</td>
            </tr>

            <tr>
              <td>In Progress</td>
              <td>{stats.inProgress}</td>
            </tr>

            <tr>
              <td>Resolved</td>
              <td>{stats.resolved}</td>
            </tr>

            <tr>
              <td>Rejected</td>
              <td>{stats.rejected}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* AI Insights */}
      <div className="dashboard-card">
        <h3>🤖 AI Insights</h3>

        <ul>
          <li>
            {stats.pending > stats.resolved
              ? "Pending complaints require immediate attention."
              : "Complaint resolution rate is improving."}
          </li>

          <li>
            {stats.total === 0
              ? "No complaints have been registered yet."
              : `A total of ${stats.total} complaints have been registered.`}
          </li>

          <li>
            Continue resolving pending complaints to improve city cleanliness.
          </li>
        </ul>
      </div>
    </DashboardLayout>
  );
}

export default Analytics;