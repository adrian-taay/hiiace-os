import { TiWeatherPartlySunny } from "react-icons/ti";

function WeatherDisplay() {
  return (
    <div className="mt-6 flex text-white text-sm">
      <div className="icon">
        <TiWeatherPartlySunny size={40} />
      </div>
      <div className="ml-3">
        <div className="temperature">30°C</div>
        <div className="location">Manila</div>
      </div>
      <div className="ml-3">
        <div>Humidity: 80%</div>
        <div>Wind Speed: 4km/h</div>
      </div>
    </div>
  );
}

export default WeatherDisplay;
