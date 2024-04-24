import { useContext } from "react";
import { menu } from "./menu.jsx";
import PropTypes from "prop-types";
import { OpenAppsContext } from "../../providers/OpenAppsProvider";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar.jsx";

function StartMenuPopup({ setShowStartMenu }) {
  const { openApps, dispatch } = useContext(OpenAppsContext);

  const viewportWidth = document.body.clientWidth;
  const viewportHeight = document.body.clientHeight;

  function handleOpenApp(itemObj, itemIndex) {
    const widthInNumber = Number(itemObj.minWidth.slice(0, 3));
    const heightInNumber = Number(itemObj.minHeight.slice(0, 3));

    console.log(widthInNumber);
    dispatch({
      type: "open-app",
      payload: {
        ...menu[itemIndex],
        minimized: false,
        maximized: false,
        zindex: openApps.length,
        position: {
          x: viewportWidth <= 550 ? 0 : (viewportWidth - widthInNumber) / 2,
          y: (viewportHeight - 40 - heightInNumber) / 2,
        },
        dimension: {
          width: viewportWidth <= 550 ? `${viewportWidth}px` : itemObj.minWidth,
          height: itemObj.minHeight,
        },
      },
    });
    setShowStartMenu(false);
  }

  return (
    <>
      <motion.div
        className="absolute bottom-11 left-1 z-20 bg-zinc-800 text-stone-300 rounded-md flex py-4"
        initial={{ y: 25 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.1 }}
      >
        <div>
          {menu.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 cursor-default text-sm hover:bg-stone-900 hover:bg-opacity-60 px-5 py-2"
              onClick={() => handleOpenApp(item, index)}
            >
              {item.icon} {item.title}
            </div>
          ))}
        </div>
        <div className="w-36 px-5">
          <Sidebar setShowStartMenu={setShowStartMenu} />
        </div>
      </motion.div>
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
