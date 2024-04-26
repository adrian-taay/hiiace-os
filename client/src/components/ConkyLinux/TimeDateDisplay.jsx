import { useContext } from "react";
import { TimeContext } from "../../providers/TimeProvider";
import "./TimeDateDisplay.css";

function TimeDateDisplay() {
  const { months, days, year, month, date, day, hour, mins } =
    useContext(TimeContext);

  return (
    <div className="mt-24 flex flex-col items-center text-2xl text-center text-white">
      <div className="flex font-semibold gap-2">
        <div>{date}</div>
        <span className="font-extralight">|</span>
        <div>{months[month].slice(0, 3)}</div>
        <span className="font-extralight">|</span>
        <div>{year}</div>
        <span className="font-extralight">|</span>
        <div>
          {hour}
          <span className="blink">:</span>
          {mins}
        </div>
        <span className="font-extralight">|</span>
        <div>{days[day]}</div>
      </div>
    </div>
  );
}

export default TimeDateDisplay;
