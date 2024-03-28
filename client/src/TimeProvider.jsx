import PropTypes from "prop-types";
import { createContext, useState, useEffect } from "react";

export const TimeContext = createContext();

export default function TimeProvider({ children }) {
  const [localTime, setLocalTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setLocalTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];

  const year = localTime.getFullYear();
  const month = localTime.getMonth();
  const date = padZero(localTime.getDate());
  const day = localTime.getDay();
  const hour = padZero(localTime.getHours());
  const mins = padZero(localTime.getMinutes());

  function padZero(num) {
    return num < 10 ? "0" + num : num;
  }

  function shortDateFormat(dd, mm, yy) {
    return `${dd}/${padZero(mm + 1)}/${yy}`;
  }

  function longDateFormat(dd, mm, yy) {
    return `${dd} ${months[mm]} ${yy}`;
  }

  function twelveHourFormat(h, m) {
    return `${h > 12 ? h % 12 : h}:${m} ${h >= 12 ? "PM" : "AM"}`;
  }

  function twentyFourFormat(h, m) {
    return `${h}:${m}`;
  }

  const settings = {
    months,
    days,
    year,
    month,
    date,
    day,
    hour,
    mins,
    shortDateFormat,
    longDateFormat,
    twelveHourFormat,
    twentyFourFormat,
  };

  return (
    <>
      <TimeContext.Provider value={settings}>{children}</TimeContext.Provider>
    </>
  );
}

TimeProvider.propTypes = {
  children: PropTypes.object,
};
