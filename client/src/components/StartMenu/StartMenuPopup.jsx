import { useContext } from "react";
import { menu } from "./menu.jsx";
import PropTypes from "prop-types";
import { OpenAppsContext } from "../../OpenAppsProvider.jsx";
import { motion } from "framer-motion";

function StartMenuPopup({ setShowStartMenu }) {
  const { openApps, dispatch } = useContext(OpenAppsContext);

  function handleOpenApp(itemIndex) {
    dispatch({
      type: "open-app",
      payload: {
        ...menu[itemIndex],
        minimized: false,
        maximized: false,
        zindex: 1,
      },
    });
    setShowStartMenu(false);
  }

  console.log(openApps);

  return (
    <>
      <motion.div
        className="absolute bottom-11 left-1 z-20 bg-stone-900 opacity-80 text-white p-6 rounded-md"
        initial={{ y: 0 }}
        animate={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        {menu.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 my-3 cursor-default"
            onClick={() => handleOpenApp(index)}
          >
            {item.icon} {item.title}
          </div>
        ))}
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
