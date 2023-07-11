import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGear, faHandHoldingDollar, faPieChart, faTimes } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import xavier from "../../xavier.jpg";
import { useEffect, useState } from "react";
function NavBar() {

  // State to control mobile nav open and close
  const [open, setOpen] = useState(false);


  const openStyle = {right: 0}
  const closeStyle = {right: "-1500px"}
  const varStyle = open ? openStyle : closeStyle;
  function toggleOpen() {
    setOpen(!open)
  }
  document.body.style.overflow = open ? "hidden" : "auto"


  return (
    <div className="md:w-1/4">
      {/* For mobile */}
      <div className="w-[100%] py-2 bg-[#262B40] md:hidden">
        <div className="max-w-[90%] flex justify-between mx-auto items-center">
          <div className="text-[2rem]">
            <FontAwesomeIcon icon={faPieChart} color="white" />
          </div>
          <div onClick={toggleOpen} className="text-[2rem] border border-slate-500 rounded-md cursor-pointer px-2">
            <FontAwesomeIcon icon={faBars} color="white" />
          </div>
        </div>
        {/* Mobile menu */}
        <div className="w-screen fixed top-0 h-screen bg-[#262B40] mobile-menu" style={varStyle}>
          {/* Heading */}
          <div className="flex w-[90%] mx-auto justify-between items-center p-4 border-b border-slate-600">
            <div className="flex items-center gap-x-3">
              <img src={xavier} className="w-8 h-8 rounded-[50%]" />
              <div className="space-y-2">
                <h2 className="text-md font-[600] text-white">Hi, Xavier</h2>
                <button className="p-2 text-[0.6rem] rounded-md bg-[#61DAFB]">
                  Sign Out
                </button>
              </div>
            </div>
            <div onClick={toggleOpen} className="text-[1.2rem] text-white">
              <FontAwesomeIcon icon={faTimes} />
            </div>
          </div>
          {/* Link lists */}
          <div className="w-[80%] mx-auto text-white font-semibold">
            <li onClick={toggleOpen} className="flex items-center rounded-md p-3">
              <NavLink
              to="/"
                className={({ isActive }) =>
                  isActive
                    ? "border border-[#49537C] bg-[#2E3650] w-full p-3 rounded-md"
                    : "hover:bg-[#2E3650] w-full p-3 rounded-md"
                }
              >
                <FontAwesomeIcon icon={faPieChart} className="mr-2"/> Overview
              </NavLink>
            </li>
            <li onClick={toggleOpen} className="flex items-center rounded-md p-3">
              <NavLink
              to="transactions"
                className={({ isActive }) =>
                  isActive
                    ? "border border-[#49537C] bg-[#2E3650] w-full p-3 rounded-md"
                    : "hover:bg-[#2E3650] w-full p-3 rounded-md"
                }
              >
                <FontAwesomeIcon icon={faHandHoldingDollar} className="mr-2" /> Transactions
              </NavLink>
            </li>
            <li onClick={toggleOpen} className="flex items-center rounded-md p-3">
              <NavLink
              to="settings"
                className={({ isActive }) =>
                  isActive
                    ? "border border-[#49537C] bg-[#2E3650] w-full p-3 rounded-md"
                    : "hover:bg-[#2E3650] w-full p-3 rounded-md"
                }
              >
                <FontAwesomeIcon icon={faGear} className="mr-2" /> Settings
              </NavLink>
            </li>
          </div>
        </div>
      </div>

      {/* For tablet above */}
      <div className="fixed left-0 w-1/4 h-screen bg-[#262B40] hidden md:block">
        <div className="text-lg text-[#ededed] md:pt-3 lg:pt-4 pl-3">
          <FontAwesomeIcon icon={faPieChart} size="3x" />
        </div>
      <div className="text-white font-semibold md:mt-[10vh] lg:mt-20">
            <li className="flex items-center rounded-md p-3">
              <NavLink
              to="/"
                className={({ isActive }) =>
                  isActive
                    ? "border border-[#49537C] bg-[#2E3650] w-full p-3 rounded-md"
                    : "hover:bg-[#2E3650] w-full p-3 rounded-md"
                }
              >
                <FontAwesomeIcon icon={faPieChart} className="mr-2"/> Overview
              </NavLink>
            </li>
            <li className="flex items-center rounded-md p-3">
              <NavLink
              to="transactions"
                className={({ isActive }) =>
                  isActive
                    ? "border border-[#49537C] bg-[#2E3650] w-full p-3 rounded-md"
                    : "hover:bg-[#2E3650] w-full p-3 rounded-md"
                }
              >
                <FontAwesomeIcon icon={faHandHoldingDollar} className="mr-2" /> Transactions
              </NavLink>
            </li>
            <li className="flex items-center rounded-md p-3">
              <NavLink
              to="settings"
                className={({ isActive }) =>
                  isActive
                    ? "border border-[#49537C] bg-[#2E3650] w-full p-3 rounded-md"
                    : "hover:bg-[#2E3650] w-full p-3 rounded-md"
                }
              >
                <FontAwesomeIcon icon={faGear} className="mr-2" /> Settings
              </NavLink>
            </li>
          </div>
      </div>
    </div>
  );
}

export default NavBar;
