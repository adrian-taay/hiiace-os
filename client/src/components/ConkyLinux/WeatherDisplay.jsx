import { useContext } from "react";
import { WeatherContext } from "../../providers/WeatherProvider";
import "weather-react-icons/lib/css/weather-icons.css";
import { WeatherIcon } from "weather-react-icons";

function WeatherDisplay() {
  const { weatherData, mainWeatherIcon, isDayTime } =
    useContext(WeatherContext);

  if (
    !weatherData ||
    !weatherData.main ||
    !weatherData.wind ||
    !mainWeatherIcon
  )
    return <div>Loading...</div>;

  return (
    <div className="mt-6 flex text-white text-sm">
      <div className="icon">
        <WeatherIcon
          iconId={mainWeatherIcon}
          name="owm"
          className="text-4xl"
          night={!isDayTime}
        />
      </div>
      <div className="ml-3">
        <div className="temperature">
          {weatherData.main.temp
            ? `${weatherData.main.temp.toFixed(0)}°C`
            : "0°C"}
        </div>
        <div className="location">
          {weatherData.name ? weatherData.name : "Loading..."}
        </div>
      </div>
      <div className="ml-3">
        <div>
          Humidity:
          {weatherData.main.humidity ? ` ${weatherData.main.humidity}%` : "0%"}
        </div>
        <div>
          Wind:
          {weatherData.wind.speed ? ` ${weatherData.wind.speed}km/h` : "0%"}
        </div>
      </div>
    </div>
  );
}

export default WeatherDisplay;
