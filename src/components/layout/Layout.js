import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import xavier from "../../xavier.jpg";
import { Outlet } from "react-router-dom";

function Layout() {
  const d = new Date().getFullYear();
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <div>
          <input
            placeholder="Search.."
            className="pl-2 rounded-md h-7 w-[70%] outline outline-slate-500"
          />
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faBell} />
          <img src={xavier} className="w-10 h-10 rounded-[50%] ml-6" />
        </div>
      </div>

      <Outlet />

      <div className="flex flex-col md:flex-row md:justify-around  md:space-y-0 mt-[6rem] mb-10">
        <p className="text-slate-700 font-[500] text-center">
          Copyright &copy; 2021-{d}{" "}
          <a
            className="text-purple-700"
            href="https://github.com/Olowokere-Destiny"
            target="_blank"
          >
            Destiny
          </a>
        </p>
        <div className="flex place-content-center space-x-5 text-slate-500">
          <a>About</a>
          <a>Company</a>
          <a>Blog</a>
          <a>Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Layout;
