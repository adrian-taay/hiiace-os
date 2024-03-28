import { useContext } from "react";
import { TimeContext } from "../../TimeProvider";

function TimeDateDisplay() {
  const { months, days, year, month, date, day, hour, mins } =
    useContext(TimeContext);

  return (
    <div className="relative mt-24 grid grid-rows-3 text-2xl text-center text-white text-opacity-40">
      <div className="grid grid-cols-5 font-extralight gap-4 relative top-4">
        <div>{date - 1}</div>
        <div>{months[month - 1]}</div>
        <div>{year - 1}</div>
        <div>
          {hour}:{mins - 1}
        </div>
        <div>{days[day - 1]}</div>
      </div>
      <div
        style={{ color: "rgba(255, 255, 255)" }}
        className="grid grid-cols-5 font-semibold gap-4"
      >
        <div>{date}</div>
        <div>{months[month]}</div>
        <div>{year}</div>
        <div>
          {hour}:{mins}
        </div>
        <div>{days[day]}</div>
      </div>
      <div className="grid grid-cols-5 font-extralight gap-4 relative bottom-4">
        <div>{date + 1}</div>
        <div>{months[month + 1]}</div>
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
