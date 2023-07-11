import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Phones", "Tablets", "Computers"],
  datasets: [
    {
      label: "",
      data: [30, 50, 20],
      backgroundColor: ["#262B40", "#1B998B", "#17A5CE"],
    },
  ],
};

function PieChart() {
  return <Doughnut data={data} />;
}

export default PieChart;
