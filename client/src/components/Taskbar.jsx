import { FiTarget, FiChevronUp, FiSun } from "react-icons/fi";
import TimeDate from "./TimeDate";

function Taskbar() {
  return (
    <div className="absolute bottom-0 bg-slate-900 opacity-80 w-full h-10 flex items-center px-2 text-white">
      <FiTarget size={20} />
      <p className="ml-2">Start</p>
      <FiChevronUp />
      <FiSun />
      <TimeDate />
    </div>
  );
}

export default Taskbar;
