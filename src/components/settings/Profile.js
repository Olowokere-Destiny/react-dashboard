import bgImage from "../../profile-bg.png";
import profilepic from "../../hairy_man.jpg";
import { faMessage, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Profile() {
    const styling1 = {
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    };
    const styling2 = {
        backgroundImage: `url(${profilepic})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }
  return (
    <div className="rounded-md relative pb-16">
        {/* Background image */}
        <div className="h-[200px] rounded-t-md" style={styling1}>
        </div>
        {/* Profile pic */}
        <div className="rounded-[50%] md:h-40 md:w-40 w-32 h-32 md:top-[120px] absolute top-[130px] border-4 border-white p-pic" style={styling2}></div>
        <div className="p-3 mt-16 md:mt-24">
            <h1 className="md:text-[1.2rem] text-md text-center font-[800]">Jaiye Jaiye</h1>
            <h1 className="text-md text-slate-700 text-center font-[600]">Senior Software Engineer</h1>
            <h1 className="text-md text-slate-700 text-center font-[500]">Edo state, Nigeria</h1>
        </div>
        <div className="flex justify-between px-4 items-center">
        <button className="flex gap-x-2 py-1 px-2 rounded-md font-[700] items-center bg-[#202536] text-white">
          <FontAwesomeIcon icon={faUser} />
          <p>Connect</p>
        </button>
        <button className="flex gap-x-2 p-1 px-2 rounded-md font-[700] items-center bg-[#61DAFB] text-[#262B40]">
          <p>Send Message</p>
        </button>
        </div>
    </div>
  )
}
