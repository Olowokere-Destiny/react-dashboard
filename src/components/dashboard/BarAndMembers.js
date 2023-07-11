import hairy from "../../hairy_man.jpg";
import suit from "../../suit-man.jpg";
import up from "../../up-man.jpg";
import woman from "../../woman.jpg";
import BarChart from "./BarChart";
function BarAndMembers() {
  return (
    <div className="mt-5 flex flex-col lg:grid lg:grid-cols-5 lg:gap-x-3">
        {/* members div */}
      <div className="bg-white rounded-md border border-slate-300 p-4 lg:col-span-3">
        {/* Heading */}
        <div className="border-b pb-3 border-slate-300 flex items-center justify-between">
          <h1 className="text-[1.1rem]">Team members</h1>
          <button className="rounded-md p-2 bg-[#61DAFB]">See all</button>
        </div>
        {/* People */}
        <div className="p-2 space-y-3">

          <div className="flex items-center justify-between">
            <div className="flex justify-between gap-x-3">
              <img src={hairy} className="w-10 h-10 rounded-[50%]" />
              <div>
              <h2 className="text-[0.9rem] font-[600]">Jaiye Jaiye</h2>
              <p className="text-[0.7rem] text-slate-600">Online</p>
              </div>
            </div>
            <button className="bg-[#1B998B] p-2 rounded-[10px] text-[0.9rem] text-white">Invite</button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex justify-between gap-x-3">
              <img src={up} className="w-10 h-10 rounded-[50%]" />
              <div>
              <h2 className="text-[0.9rem] font-[600]">Egbon Sunday</h2>
              <p className="text-[0.7rem] text-slate-600">In a meeting</p>
              </div>
            </div>
            <button className="bg-[#1B998B] p-2 rounded-[10px] text-[0.9rem] text-white">Message</button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex justify-between gap-x-3">
              <img src={suit} className="w-10 h-10 rounded-[50%]" />
              <div>
              <h2 className="text-[0.9rem] font-[600]">Emmanuel Josh</h2>
              <p className="text-[0.7rem] text-slate-600">Offline</p>
              </div>
            </div>
            <button className="bg-[#1B998B] p-2 rounded-[10px] text-[0.9rem] text-white">Invite</button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex justify-between gap-x-3">
              <img src={woman} className="w-10 h-10 rounded-[50%]" />
              <div>
              <h2 className="text-[0.9rem] font-[600]">Mariam Kee</h2>
              <p className="text-[0.7rem] text-slate-600">Online</p>
              </div>
            </div>
            <button className="bg-[#1B998B] p-2 rounded-[10px] text-[0.9rem] text-white">Message</button>
          </div>

        </div>
      </div>

      {/* Bar chart div */}

      <div className="rounded-md lg:col-span-2 bg-white mt-4 lg:mt-0 border-[1px] border-slate-300">
        {/* Graph heading */}
        <div className="py-3 px-7 border-b border-slate-300">
            <h1 className="text-slate-700">Total orders</h1>
            <h2 className="text-[1.4rem]">452</h2>
            <p className="text-sm text-green-500">18.2%</p>
        </div>
        <div>
            <BarChart />
        </div>
      </div>
    </div>
  );
}

export default BarAndMembers;
