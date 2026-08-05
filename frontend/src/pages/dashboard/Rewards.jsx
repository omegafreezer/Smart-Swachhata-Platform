import DashboardLayout from "../../components/dashboard/DashboardLayout";
import {
  FaCoins,
  FaTrophy,
  FaClipboardCheck,
  FaAward,
} from "react-icons/fa";
import { getRewards, getBadge } from "../../data/rewards";

function Rewards() {
  const rewards = getRewards();
  const badge = getBadge(rewards.points);

  const nextLevel =
    rewards.points < 50
      ? 50
      : rewards.points < 100
      ? 100
      : rewards.points < 200
      ? 200
      : 200;

  const progress = Math.min((rewards.points / nextLevel) * 100, 100);

  const cards = [
    {
      title: "Total Points",
      value: rewards.points,
      icon: <FaCoins />,
      color: "#f59e0b",
    },
    {
      title: "Current Badge",
      value: badge,
      icon: <FaTrophy />,
      color: "#2563eb",
    },
    {
      title: "Complaints",
      value: rewards.complaints,
      icon: <FaClipboardCheck />,
      color: "#16a34a",
    },
    {
      title: "Next Badge",
      value: nextLevel,
      icon: <FaAward />,
      color: "#7c3aed",
    },
  ];

  return (
    <DashboardLayout>
      <h2 style={{ marginBottom: "20px" }}>Rewards Dashboard</h2>

      {/* Same card layout as Dashboard */}
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

      {/* Same layout as Analytics */}
      <div className="chart-grid">
        <div className="dashboard-card">
          <h3>Reward Progress</h3>

          <div className="progress-container">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>

          <h4 style={{ marginTop: "25px" }}>
            {rewards.points} / {nextLevel} Points
          </h4>

          <p style={{ marginTop: "15px", color: "#6b7280" }}>
            Keep reporting issues to unlock higher reward badges.
          </p>
        </div>

        <div className="dashboard-card">
          <h3>Current Badge</h3>

          <div
            style={{
              textAlign: "center",
              padding: "35px 0",
            }}
          >
            <div
              style={{
                fontSize: "70px",
                marginBottom: "15px",
              }}
            >
              🏆
            </div>

            <h2>{badge}</h2>

            <p style={{ color: "#6b7280" }}>
              Citizen Reward Level
            </p>
          </div>
        </div>
      </div>

      {/* Same summary card style as Analytics */}
      <div className="dashboard-card">
        <h3>Reward Summary</h3>

        <table className="table">
          <tbody>
            <tr>
              <td>Total Reward Points</td>
              <td>{rewards.points}</td>
            </tr>

            <tr>
              <td>Current Badge</td>
              <td>{badge}</td>
            </tr>

            <tr>
              <td>Complaints Submitted</td>
              <td>{rewards.complaints}</td>
            </tr>

            <tr>
              <td>Next Milestone</td>
              <td>{nextLevel} Points</td>
            </tr>
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}

export default Rewards;