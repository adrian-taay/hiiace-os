import { useContext, useState } from "react";
import { OpenAppsContext } from "../../providers/OpenAppsProvider";
import TimeDate from "../../components/TimeDate/TimeDate";
import TimeDateSettings from "../../components/TimeDate/TimeDateSettings";
import StartMenuPopup from "../../components/StartMenu/StartMenuPopup";
import { FiChevronUp, FiSun } from "react-icons/fi";
import { FcRating } from "react-icons/fc";

function Taskbar() {
  // Start Menu
  const [showStartMenu, setShowStartMenu] = useState(false);
  const { openApps, dispatch } = useContext(OpenAppsContext);

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
      <div className="absolute bottom-0 bg-stone-900 opacity-80 w-full h-10 flex items-center text-white select-none overflow-hidden z-20">
        <div
          className="flex items-center hover:bg-white hover:bg-opacity-20 p-2.5"
          onClick={() => setShowStartMenu(!showStartMenu)}
        >
          <FcRating size={24} />
          <p className="ml-2 text-sm">Start</p>
        </div>
        <div className="ml-1 flex-1 flex">
          {openApps.map((item, index) => {
            return (
              <div
                key={index}
                className="flex text-sm items-center hover:bg-white hover:bg-opacity-20 px-3 py-2.5"
                onClick={() =>
                  dispatch({ type: "minimize-app", payload: { id: item.id } })
                }
              >
                <span className="mr-2">{item.icon}</span> {item.title}
              </div>
            );
          })}
        </div>
        <div className="flex gap-0 items-center">
          <div className="hover:bg-white hover:bg-opacity-20 p-3">
            <FiChevronUp />
          </div>
          <div className="hover:bg-white hover:bg-opacity-20 p-3">
            <FiSun />
          </div>
          <div>
            <span
              onClick={() => handleShowTimeDateSettings()}
              className="flex hover:bg-white hover:bg-opacity-20 p-2.5"
            >
              <TimeDate shortDate={shortDate} twelveHour={twelveHour} />
            </span>
          </div>
        </div>
        <div
          className="w-3 hover:bg-white hover:bg-opacity-20 py-5"
          onClick={() => dispatch({ type: "minimize-all" })}
        >
          &nbsp;
        </div>
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
