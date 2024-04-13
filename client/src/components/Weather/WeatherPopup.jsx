import PropTypes from "prop-types";
import { motion } from "framer-motion";
import WeatherApp from "./WeatherApp";

function WeatherPopup({ setShowWeatherPopup }) {
  return (
    <>
      <motion.div
        className="absolute bottom-11 right-1 z-20 bg-zinc-800 text-stone-300 rounded-md select-none overflow-hidden"
        initial={{ y: 25 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.2 }}
        style={{
          background: "linear-gradient(180deg, #91C0BF 0%, #27272a 75%)",
        }}
      >
        <WeatherApp />
      </motion.div>
      <div
        onClick={() => setShowWeatherPopup(false)}
        className="absolute top-0 overlay z-10 w-full h-screen"
      ></div>
    </>
  );
}

WeatherPopup.propTypes = {
  setShowWeatherPopup: PropTypes.func,
};

export default WeatherPopup;
