import { useContext } from "react";
import { menu } from "./menu.jsx";
import PropTypes from "prop-types";
import { OpenAppsContext } from "../../OpenAppsProvider.jsx";

function StartMenuPopup({ setShowStartMenu }) {
  const { openApps, updateOpenApps } = useContext(OpenAppsContext);

  console.log(openApps);

  return (
    <>
      <div className="absolute bottom-11 left-1 z-20 bg-stone-900 opacity-80 text-white p-6 rounded-md">
        {menu.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 my-3"
            onClick={() =>
              updateOpenApps({
                ...menu[index],
                minimized: false,
                maximized: false,
              })
            }
          >
            {item.icon} {item.title}
          </div>
        ))}
      </div>
      <div
        onClick={() => setShowStartMenu(false)}
        className="absolute top-0 overlay z-10 w-full h-screen"
      ></div>
    </>
  );
}

StartMenuPopup.propTypes = {
  setShowStartMenu: PropTypes.func,
};

export default StartMenuPopup;
