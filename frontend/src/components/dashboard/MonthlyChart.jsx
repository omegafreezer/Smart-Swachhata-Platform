import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import { getComplaints } from "../../services/complaintService";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

function MonthlyChart() {
  const [monthlyData, setMonthlyData] = useState(
    new Array(12).fill(0)
  );

  useEffect(() => {
    const loadChart = async () => {
      try {
        const complaints = await getComplaints();

        const months = new Array(12).fill(0);

        complaints.forEach((complaint) => {
          const month = new Date(
            complaint.createdAt
          ).getMonth();

          months[month]++;
        });

        setMonthlyData(months);
      } catch (error) {
        console.error(error);
      }
    };

    loadChart();
  }, []);

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],

    datasets: [
      {
        label: "Complaints",
        data: monthlyData,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="dashboard-card chart-card">
      <h3>Monthly Complaints</h3>

      <div style={{ height: "300px" }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default MonthlyChart;