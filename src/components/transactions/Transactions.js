import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from "./tableData";

function Transactions() {
  const tr = data.map((row) => (
    <tr>
      <td className="text-center text-slate-700 p-3">{row.num}</td>
      <td className="text-center text-slate-500 p-3">{row.bill}</td>
      <td className="text-center text-slate-500 p-3">{row.issue}</td>
      <td className="text-center text-slate-500 p-3">{row.due}</td>
      <td className="text-center text-slate-500 p-3">{row.total}</td>
      <td className="text-center p-3">{row.status}</td>
    </tr>
  ));
  return (
    <div>
      {/* Upper part from "Transactions" to search and gear icon */}
      <div className="mt-10 space-y-2 p-2">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div>
            <h2 className="text-[1.3rem]">Transactions</h2>
            <p className="text-slate-700">
              Your web analytics dashboard template.
            </p>
          </div>
          <div className="rounded-[7px] border border-black w-32 p-2 divide-x-[1px] divide-black">
            <span className="pr-1">Share</span>
            <span className="pl-1">Export</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <input
            placeholder="Search.."
            className="p-4 rounded-md h-7 w-[60%] md:w-[40%] border-[1px] border-slate-700"
          />
          <div className="text-[1.4rem] text-slate-800">
            <FontAwesomeIcon icon={faGear} />
          </div>
        </div>
      </div>
      {/* Table div */}
      <div className="rounded-md border border-slate-300 mt-4 bg-white">
        <div className="overflow-auto">
          <table className="table-auto w-full text-[0.9rem] big-table">
            <thead className="p-4">
              <tr className="text-slate-800 text-[0.8rem] border-b border-slate-300">
                <th className="p-2">#</th>
                <th className="p-2">BILL FOR</th>
                <th className="p-2">ISSUE DATE</th>
                <th className="p-2">DUE DATE</th>
                <th className="p-2">TOTAL</th>
                <th className="p-2">STATUS</th>
              </tr>
            </thead>
            <tbody className="divide-y-[1px]">{tr}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Transactions;
