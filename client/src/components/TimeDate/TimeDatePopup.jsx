import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { TimeContext } from "../../providers/TimeProvider";

import Calendar from "react-calendar";
import TimeSettings from "./TimeSettings";

import { motion } from "framer-motion";
import { FaAngleDown } from "react-icons/fa6";

function TimeDatePopup({
  shortDate,
  setShowTimeDatePopup,
  setShortDate,
  setTwelveHour,
  twelveHour,
}) {
  const { months, days, year, month, date, day } = useContext(TimeContext);
  const [showTimeSettings, setShowTimeSettings] = useState(false);

  return (
    <>
      <motion.div
        className="absolute bottom-11 right-1 z-20 bg-zinc-800 text-stone-300 p-6 rounded-md select-none"
        initial={{ y: 25 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex flex-col">
          <span className="text-sm">{days[day]}</span>
          <span className="text-lg">
            {months[month]} {date} {year}
          </span>
        </div>
        <div className="flex items-center">
          <div className="flex-1 border-t-2 border-zinc-700 my-2"></div>
        </div>
        <div className="wrapper w-60 text-center">
          <Calendar />
        </div>
        <div className="flex items-center">
          <div className="flex-1 border-t-2 border-zinc-700 my-4"></div>
        </div>
        <div className="wrapper text-sm">
          <div className="flex items-center justify-between">
            <span>Time and Date Settings...</span>
            <div className="hover:bg-slate-300 hover:bg-opacity-30 p-1 hover:rounded-full">
              <FaAngleDown
                onClick={() => setShowTimeSettings(!showTimeSettings)}
              />
            </div>
          </div>
          {showTimeSettings ? (
            <TimeSettings
              shortDate={shortDate}
              setShortDate={setShortDate}
              setTwelveHour={setTwelveHour}
              twelveHour={twelveHour}
            />
          ) : null}
        </div>
      </motion.div>
      <div
        onClick={() => setShowTimeDatePopup(false)}
        className="absolute top-0 overlay z-10 w-full h-screen"
      ></div>
    </>
  );
}

TimeDatePopup.propTypes = {
  shortDate: PropTypes.bool,
  setShowTimeDatePopup: PropTypes.func,
  setShortDate: PropTypes.func,
  setTwelveHour: PropTypes.func,
  twelveHour: PropTypes.bool,
};

export default TimeDatePopup;
