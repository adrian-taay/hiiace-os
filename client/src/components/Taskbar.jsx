import { useState } from "react";
import TimeDate from "./TimeDate/TimeDate";
import TimeDateSettings from "./TimeDate/TimeDateSettings";
import { FiTarget, FiChevronUp, FiSun } from "react-icons/fi";
import StartMenuPopup from "./StartMenu/StartMenuPopup";

function Taskbar() {
  // Start Menu
  const [showStartMenu, setShowStartMenu] = useState(false);

  // Time and Date
  const [shortDate, setShortDate] = useState(false);
  const [twelveHour, setTwelveHour] = useState(false);
  const [showTimeDateSettings, setShowTimeDateSettings] = useState(false);

  // Show Modal Window
  function handleShowTimeDateSettings() {
    setShowTimeDateSettings(!showTimeDateSettings);
  }

  return (
    <>
      <div className="absolute bottom-0 bg-stone-900 opacity-80 w-full h-10 flex items-center px-2 text-white">
        <div
          className="flex items-center"
          onClick={() => setShowStartMenu(!showStartMenu)}
        >
          <FiTarget size={20} />
          <p className="ml-2">Start</p>
        </div>
        <div className="flex-1"></div>
        <div className="flex gap-3 items-center">
          <FiChevronUp />
          <FiSun />
          <div>
            <span
              onClick={() => handleShowTimeDateSettings()}
              className="flex ml-2"
            >
              <TimeDate shortDate={shortDate} twelveHour={twelveHour} />
            </span>
          </div>
        </div>
        <div className="w-3"></div>
      </div>

      {showStartMenu ? (
        <StartMenuPopup setShowStartMenu={setShowStartMenu} />
      ) : null}

      {showTimeDateSettings ? (
        <TimeDateSettings
          setShowTimeDateSettings={setShowTimeDateSettings}
          setShortDate={setShortDate}
          setTwelveHour={setTwelveHour}
          twelveHour={twelveHour}
        />
      ) : null}
    </>
  );
}

export default Taskbar;
