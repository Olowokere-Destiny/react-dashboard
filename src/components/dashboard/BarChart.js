import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)
function BarChart() {
    const data = {
        labels: ["mon", "tue", "wed", "thur", "fri"],
        datasets: [
            {
                label: "",
                data: [4, 9, 13, 7, 5],
                backgroundColor: "#17A5CE",
            },
            {
                label: "",
                data: [7, 12, 3, 9, 10],
                backgroundColor: "#1B998B",
            }
        ]
    };
    const options = {
        barThickness: 10,
        borderRadius: 4,
        scales: {
            y: {
                display: false
            }
        }
    }
  return (
    <Bar data={data} options={options} ></Bar>
  )
}

export default BarChart;