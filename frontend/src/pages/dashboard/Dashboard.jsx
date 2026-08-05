import DashboardLayout from "../../components/dashboard/DashboardLayout";
import WelcomeCard from "../../components/dashboard/WelcomeCard";
import StatsCards from "../../components/dashboard/StatsCards";
import ComplaintTable from "../../components/dashboard/ComplaintTable";
import MonthlyChart from "../../components/dashboard/MonthlyChart";
import ComplaintPieChart from "../../components/dashboard/ComplaintPieChart";
import QuickActions from "../../components/dashboard/QuickActions";

function Dashboard() {
  return (
    <DashboardLayout>
      {/* Welcome */}
      <WelcomeCard />

      {/* Statistics */}
      <StatsCards />

      {/* Recent Complaints */}
      <ComplaintTable />

      {/* Charts */}
      <div className="chart-grid">
        <MonthlyChart />
        <ComplaintPieChart />
      </div>

      {/* Quick Actions */}
      <QuickActions />
    </DashboardLayout>
  );
}

export default Dashboard;