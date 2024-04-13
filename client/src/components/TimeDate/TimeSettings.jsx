import PropTypes from "prop-types";
import { PiToggleLeftFill, PiToggleRightFill } from "react-icons/pi";
import { FaCircleCheck } from "react-icons/fa6";

function TimeSettings({ shortDate, setShortDate, setTwelveHour, twelveHour }) {
  function toggleTimeFormat() {
    setTwelveHour(!twelveHour);
  }

  return (
    <div className="mt-1 ml-2">
      <div className="date-settings">
        <p>Date Format:</p>
        <div className="flex flex-col p-1">
          <label
            className="flex justify-between items-center"
            onClick={() => setShortDate(true)}
          >
            <span>Short (dd/mm/yyyy)</span>
            {shortDate ? <FaCircleCheck fill="orange" /> : null}
          </label>
          <label
            className="flex justify-between items-center"
            onClick={() => setShortDate(false)}
          >
            <span>Long (dd MMM yyyy)</span>
            {shortDate ? null : <FaCircleCheck fill="orange" />}
          </label>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex-1 border-t-2 border-zinc-700 my-2"></div>
      </div>
      <div className="time-settings">
        <p>Time Format:</p>
        <div className="flex items-center mt-2 justify-center">
          <span>12-hour</span>
          <span
            className="mx-3"
            onClick={() => {
              toggleTimeFormat();
            }}
          >
            {twelveHour ? (
              <PiToggleLeftFill size={20} />
            ) : (
              <PiToggleRightFill size={20} />
            )}
          </span>
          <span>24-hour</span>
        </div>
      </div>
    </div>
  );
}

TimeSettings.propTypes = {
  shortDate: PropTypes.bool,
  setShortDate: PropTypes.func,
  setTwelveHour: PropTypes.func,
  twelveHour: PropTypes.bool,
};

export default TimeSettings;
