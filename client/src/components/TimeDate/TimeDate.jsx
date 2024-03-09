import PropTypes from "prop-types";

function TimeDate({ shortDate, twelveHour }) {
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

  const days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];

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
    <div className="flex flex-col items-center text-xs">
      <p>
        <span className="mr-1">{day},</span>
        {twelveHour
          ? twelveHourFormat(hour, mins)
          : twentyFourFormat(hour, mins)}
      </p>
      <p>
        {shortDate
          ? shortDateFormat(date, month, year)
          : longDateFormat(date, month, year)}
      </p>
    </div>
  );
}

TimeDate.propTypes = {
  shortDate: PropTypes.bool,
  twelveHour: PropTypes.bool,
};

export default TimeDate;
