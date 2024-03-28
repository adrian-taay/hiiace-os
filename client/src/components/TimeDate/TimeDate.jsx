import PropTypes from "prop-types";
import { useContext } from "react";
import { TimeContext } from "../../TimeProvider";

function TimeDate({ shortDate, twelveHour }) {
  const {
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
  } = useContext(TimeContext);

  return (
    <div className="flex flex-col items-center text-xs">
      <p>
        <span className="mr-1">{days[day]},</span>
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
