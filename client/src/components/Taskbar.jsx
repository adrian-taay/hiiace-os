import { useContext, useState } from "react";
import TimeDate from "./TimeDate/TimeDate";
import TimeDateSettings from "./TimeDate/TimeDateSettings";
import { FiTarget, FiChevronUp, FiSun } from "react-icons/fi";
import StartMenuPopup from "./StartMenu/StartMenuPopup";
import { OpenAppsContext } from "../OpenAppsProvider";

function Taskbar() {
  // Start Menu
  const [showStartMenu, setShowStartMenu] = useState(false);
  const { openApps } = useContext(OpenAppsContext);

  // Time and Date
  const [shortDate, setShortDate] = useState(false);
  const [twelveHour, setTwelveHour] = useState(false);
  const [showTimeDateSettings, setShowTimeDateSettings] = useState(false);

  // Show Time and Date settings
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
          <p className="ml-2 text-sm">Start</p>
        </div>
        <div className="ml-1 flex-1 flex">
          {openApps.map((item, index) => {
            return (
              <div
                key={index}
                className="flex ml-3 text-sm items-center px-5 hover:bg-slate-700"
              >
                <span className="mr-2">{item.icon}</span> {item.title}
              </div>
            );
          })}
        </div>
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
