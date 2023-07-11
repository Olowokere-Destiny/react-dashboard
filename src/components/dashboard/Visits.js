import tabledata from "./tabledata";
export default function Visits() {
  const tr = tabledata.map((row, i) => (
    <tr key={i} className="text-center text-slate-600 text-[0.8rem]">
      <td className="px-5 py-3">{row.name}</td>
      <td className="px-5 py-3">{row.views}</td>
      <td className="px-5 py-3">{row.value}</td>
      <td className="px-5 py-3">{row.rate}</td>
    </tr>
  ));

  return (
    <div className="bg-white mt-7 border-slate-300 rounded-md border">
      <div className="p-6 border-b border-slate-300 flex justify-between items-center">
        <h1 className="text-[1.18rem]">Page Visits</h1>
        <button className="rounded-md p-2 bg-[#61DAFB]">See all</button>
      </div>

      <div className="overflow-auto">
        <table className="table-auto w-full">
          <thead>
            <tr className="text-center text-slate-800 text-[0.8rem] border-b border-slate-300 bg-slate-200">
              <th>PAGE NAME</th>
              <th>PAGE VIEWS</th>
              <th>PAGE VALUE</th>
              <th>BOUNCE RATE</th>
            </tr>
          </thead>
          <tbody className="divide-y-[1px]">{tr}</tbody>
        </table>
      </div>
    </div>
  );
}
