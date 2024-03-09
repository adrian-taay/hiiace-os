import PropTypes from "prop-types";
import { PiToggleLeftFill, PiToggleRightFill } from "react-icons/pi";

function TimeDateSettings({
  setShowTimeDateSettings,
  setShortDate,
  setTwelveHour,
  twelveHour,
}) {
  function toggleTimeFormat() {
    setTwelveHour(!twelveHour);
  }

  return (
    <>
      <div className="absolute bottom-11 right-1 z-20 bg-stone-900 opacity-80 text-white p-6 rounded-md">
        <div className="wrapper">
          <div className="date-settings">
            <p>Date Format:</p>
            <ul>
              <li onClick={() => setShortDate(true)}>Short: dd/mm/yyyy</li>
              <li onClick={() => setShortDate(false)}>Long: dd MMM yyyy</li>
            </ul>
          </div>
          <div className="time-settings">
            <p>Time Format:</p>
            <div className="flex items-center">
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
      </div>
      <div
        onClick={() => setShowTimeDateSettings(false)}
        className="absolute top-0 overlay z-10 w-full h-screen"
      ></div>
    </>
  );
}

TimeDateSettings.propTypes = {
  setShowTimeDateSettings: PropTypes.func,
  setShortDate: PropTypes.func,
  setTwelveHour: PropTypes.func,
  twelveHour: PropTypes.bool,
};

export default TimeDateSettings;
