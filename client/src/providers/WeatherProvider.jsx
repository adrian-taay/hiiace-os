import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

export const WeatherContext = createContext();

export default function WeatherProvider({ children }) {
  const [weatherData, setWeatherData] = useState({});
  const [mainWeatherIcon, setMainWeatherIcon] = useState(0);
  const hours = new Date().getHours();
  const isDayTime = hours > 6 && hours < 18;

  async function fetchWeather() {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=manila&appid=${
          import.meta.env.VITE_OPENWEATHERMAP_KEY
        }&units=metric`,
        {
          method: "GET",
        }
      );

      if (response.ok) {
        const data = await response.json();

        localStorage.setItem("cachedWeatherData", JSON.stringify(data));

        setWeatherData(data);
        setMainWeatherIcon(data.weather[0].id);
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    const cachedWeatherData = localStorage.getItem("cachedWeatherData");

    if (cachedWeatherData) {
      const data = JSON.parse(cachedWeatherData);
      setWeatherData(data);
      setMainWeatherIcon(data.weather[0].id);
    }
    fetchWeather();
  }, []);

  const settings = { weatherData, mainWeatherIcon, isDayTime };

  return (
    <>
      <WeatherContext.Provider value={settings}>
        {children}
      </WeatherContext.Provider>
    </>
  );
}

WeatherProvider.propTypes = {
  children: PropTypes.object,
};
