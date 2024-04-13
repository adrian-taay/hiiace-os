import { useContext } from "react";
import { WeatherContext } from "../../providers/WeatherProvider";
import "weather-react-icons/lib/css/weather-icons.css";
import { WeatherIcon } from "weather-react-icons";

function WeatherApp() {
  const { weatherData, mainWeatherIcon, isDayTime } =
    useContext(WeatherContext);

  return (
    <div className="flex flex-col text-sm pb-4">
      <div className="flex justify-center p-1 bg-black bg-opacity-30">
        <span>
          {weatherData.name ? weatherData.name : "Loading..."},{" "}
          {weatherData.sys.country ? weatherData.sys.country : "Loading..."}
        </span>
      </div>
      <div className="flex justify-center my-5">
        <WeatherIcon
          iconId={mainWeatherIcon}
          name="owm"
          night={!isDayTime}
          className="text-6xl"
        />
      </div>
      <div className="flex items-center px-4 ">
        <div className="flex flex-col">
          <span className="text-5xl">
            {weatherData.main.temp
              ? `${weatherData.main.temp.toFixed(0)}°C`
              : "0°C"}
          </span>
          <span>
            {weatherData.weather[0].main
              ? weatherData.weather[0].main
              : "Loading..."}
          </span>
        </div>
        <ul className="ml-9">
          <li>
            Humidity:{" "}
            {weatherData.main.humidity ? `${weatherData.main.humidity}%` : "0%"}
          </li>
          <li>
            Wind:{" "}
            {weatherData.wind.speed ? `${weatherData.wind.speed}km/h` : "0%"}
          </li>
          <li>
            Feels like:{" "}
            {weatherData.main.feels_like
              ? `${weatherData.main.feels_like.toFixed(0)}°C`
              : "0°C"}
          </li>
        </ul>
      </div>
      {/* <ul className="flex flex-col mt-4 px-4">
        <li className="flex">
          <span className="flex-1">Sunday</span> <span>30°C</span>
          <span className="ml-3">Sunny</span>
        </li>
        <li className="flex">
          <span className="flex-1">Sunday</span> <span>30°C</span>
          <span className="ml-3">Sunny</span>
        </li>
        <li className="flex">
          <span className="flex-1">Sunday</span> <span>30°C</span>
          <span className="ml-3">Sunny</span>
        </li>
        <li className="flex">
          <span className="flex-1">Sunday</span> <span>30°C</span>
          <span className="ml-3">Sunny</span>
        </li>
        <li className="flex">
          <span className="flex-1">Sunday</span> <span>30°C</span>
          <span className="ml-3">Sunny</span>
        </li>
      </ul> */}
    </div>
  );
}

export default WeatherApp;
