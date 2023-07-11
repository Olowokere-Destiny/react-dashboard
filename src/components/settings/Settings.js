import { faAdd, faClipboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Info from "./Info";
import Profile from "./Profile";

function Settings() {
  return (
    <div className="mt-6">
      {/* Upper buttons */}
      <div className="flex justify-between items-center md:px-6">
        <button className="flex gap-x-2 p-1 rounded-md font-[700] items-center bg-[#61DAFB] text-[#262B40] text-[1.2rem]">
          <FontAwesomeIcon icon={faAdd} />
          <p>New</p>
        </button>
        <button className="flex gap-x-2 py-1 px-2 rounded-md font-[700] items-center bg-[#202536] text-white text-[1.2rem]">
          <FontAwesomeIcon icon={faClipboard} />
          <p>Reports</p>
        </button>
      </div>

      {/* Forms div and profile div */}
      <div className="flex flex-col lg:grid lg:gap-x-4 lg:grid-cols-7 mt-5">
        <div className="p-3 rounded-md border-[1px] border-slate-300 bg-white lg:col-span-4">
            <h2 className="font-semibold text-[1.1rem] md:text-[1.3rem] mb-3 underline">General Information</h2>
            <Info />
        </div>
      {/* profile */}
      <div className="mt-3 lg:col-span-3 lg:mt-0 lg:h-[90%] rounded-md border-[1px] border-slate-300 bg-white w-full">
        <Profile />
      </div>
      </div>
    </div>
  );
}

export default Settings;
