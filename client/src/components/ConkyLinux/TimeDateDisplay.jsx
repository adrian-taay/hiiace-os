import { useContext } from "react";
import { TimeContext } from "../../TimeProvider";

function TimeDateDisplay() {
  const { months, days, year, month, date, day, hour, mins } =
    useContext(TimeContext);

  return (
    <div className="relative mt-24 flex flex-col items-center text-2xl text-center text-white text-opacity-40">
      <div className="flex font-extralight gap-5 relative top-4">
        <div>{date - 1}</div>
        <div>{months[month - 1].slice(0, 3)}</div>
        <div>{year - 1}</div>
        <div>
          {hour}:{mins - 1}
        </div>
        <div>{days[day - 1]}</div>
      </div>
      <div
        style={{ color: "rgba(255, 255, 255)" }}
        className="flex font-semibold gap-2"
      >
        <div>{date}</div>
        <span className="font-extralight">|</span>
        <div>{months[month].slice(0, 3)}</div>
        <span className="font-extralight">|</span>
        <div>{year}</div>
        <span className="font-extralight">|</span>
        <div>
          {hour}:{mins}
        </div>
        <span className="font-extralight">|</span>
        <div>{days[day]}</div>
      </div>
      <div className="flex font-extralight gap-5 relative bottom-4">
        <div>{date + 1}</div>
        <div>{months[month + 1].slice(0, 3)}</div>
        <div>{year + 1}</div>
        <div>
          {hour}:{mins + 1}
        </div>
        <div>{days[day + 1]}</div>
      </div>
    </div>
  );
}

export default TimeDateDisplay;
