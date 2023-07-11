import { faDollar, faLineChart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PieChart from "./Pie";

function Stats() {
  return (
    <div className="mt-4">
      <div className="flex flex-col gap-y-4 md:gap-x-4 md:flex-row">
        {/*  two boxes */}
        <div className="bg-white rounded-md text-center p-2 w-full border border-slate-300">
          <div className="text-[1.5rem] text-slate-700">
            <FontAwesomeIcon icon={faLineChart} />
          </div>
          <div>
            <h2 className="my-1">Customers</h2>
            <p className="my-1 text-[1.2rem]">345K</p>
            <p className="my-1 text-[0.7rem] text-slate-600">Feb 1 - Apr 1</p>
            <p className="my-1 text-[0.7rem] text-slate-600">Worldwide</p>
            <p className="my-1 text-[0.7rem] text-slate-700">
              <span className="text-green-400">18.2%</span> since last month
            </p>
          </div>
        </div>

        <div className="bg-white rounded-md text-center p-2 w-full border border-slate-300">
          <div className="text-[1.5rem] text-slate-700">
            <FontAwesomeIcon icon={faDollar} />
          </div>
          <div>
            <h2 className="my-1">Revenue</h2>
            <p className="my-1 text-[1.2rem]">$43,594</p>
            <p className="my-1 text-[0.7rem] text-slate-600">Feb 1 - Apr 1</p>
            <p className="my-1 text-[0.7rem] text-slate-600">Worldwide</p>
            <p className="my-1 text-[0.7rem] text-slate-700">
              <span className="text-green-400">28.4%</span> since last month
            </p>
          </div>
        </div>
      </div>

      {/* Pie box */}
      <div className="bg-white rounded-md border border-slate-300 md:w-3/5 md:py-8 lg:w-2/5 mt-3 mx-auto p-4">
        <div className="mx-auto w-[60%] md:w-full">
          <PieChart />
        </div>
        <div className="ml-10 mt-4 md:mt-8">
          <h1 className="text-[1.1rem] font-semibold">Traffic Share</h1>
          <p className="text-[0.9rem] text-slate-700">Desktop: 20%</p>
          <p className="text-[0.9rem] text-slate-700">Phones: 30%</p>
          <p className="text-[0.9rem] text-slate-700">Tablets: 50%</p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
