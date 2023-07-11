import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import dataArr from "./dataArray";
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);
export default function LineDiv() {
  const data = {
    labels: dataArr.map((obj) => obj.day),
    datasets: [
      {
        label: "",
        data: dataArr.map(obj=>obj.num),
        backgroundColor: "transparent",
        borderColor: "#17A5CE",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        tension: 0.5
      },
    ],
  };

  const options = {
    plugins: {
        legend: false
    },
    scales: {
        y: {
            grid: {
                display: false
            }
        }
    }
  }

  return (
    <div className="bg-[#ACEBFD] rounded-[10px] p-3 border border-slate-300">
      {/* Heading */}
      <div className="border-b border-slate-300 flex md:flex-row flex-col md:justify-around p-4">
        <div>
          <h1 className="text-[1.2rem] font-semibold">Sales Value</h1>
          <h1 className="text-[1.4rem]">$10,567</h1>
          <p className="text-[0.8rem] my-2">
            <span className="text-slate-500">Yesterday</span>
            <span className="text-green-500 pl-1">10.57%</span>
          </p>
        </div>

        <div className="flex gap-x-2 items-center">
          <button className="p-2 text-[0.7rem] rounded-md bg-[#61DAFB]">
            Month
          </button>
          <button className="p-2 text-white text-[0.7rem] rounded-md bg-black">
            Week
          </button>
        </div>
      </div>
      {/* Line chart */}

      <div className="mx-auto md:w-[80%] mt-4 w-[95%]">
        <Line data={data} options={options}></Line>
      </div>
    </div>
  );
}
