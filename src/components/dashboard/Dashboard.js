import BarAndMembers from "./BarAndMembers";
import LineDiv from "./LineDiv";
import Stats from "./Stats";
import Visits from "./Visits";

export default function Dashboard() {
  return (
    <div className="mt-6">
        <LineDiv />
        <Stats />
        <Visits />
        {/* Members and bar chart */}
        <BarAndMembers />
    </div>
  )
}
