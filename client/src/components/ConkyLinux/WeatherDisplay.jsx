import { TiWeatherPartlySunny } from "react-icons/ti";

function WeatherDisplay() {
  return (
    <div className="mt-6 flex text-white text-sm">
      <div className="icon">
        <TiWeatherPartlySunny size={40} />
      </div>
      <div className="ml-3">
        <div className="temperature">30°C</div>
        <div className="location">Manila, Philippines</div>
      </div>
    </div>
  );
}

export default WeatherDisplay;
