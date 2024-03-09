import { useState } from "react";

/** 
 * short date: dd/mm/yy
long date: dd march yyyy

24-hr: hh:mm
12-hr: hh:mm PM 
*/

function TimeDate() {
  const [shortDate, setShortDate] = useState(false);
  const [twelveHour, setTwelveHour] = useState(false);

  // Date and Date Formats
  const localTime = new Date();

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

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const year = localTime.getFullYear();
  const month = localTime.getMonth();
  const date = padZero(localTime.getDate());
  const day = days[localTime.getDay()];
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

  return (
    <>
      <p>
        {shortDate
          ? shortDateFormat(date, month, year)
          : longDateFormat(date, month, year)}
      </p>
      <p>{day}</p>
      <p>
        {twelveHour
          ? twelveHourFormat(hour, mins)
          : twentyFourFormat(hour, mins)}
      </p>
    </>
  );
}

export default TimeDate;
