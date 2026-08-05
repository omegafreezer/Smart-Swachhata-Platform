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

import { getCategoryStats } from "../../services/complaintService";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

function CategoryChart() {
  const [labels, setLabels] = useState([]);
  const [values, setValues] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await getCategoryStats();

        setLabels(data.map((item) => item._id));
        setValues(data.map((item) => item.count));
      } catch (error) {
        console.error(error);
      }
    };

    loadCategories();
  }, []);

  const data = {
    labels,
    datasets: [
      {
        label: "Complaints",
        data: values,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="dashboard-card">
      <h3>Complaints by Category</h3>

      <div style={{ height: "300px" }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default CategoryChart;