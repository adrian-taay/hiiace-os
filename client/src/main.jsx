import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import OpenAppsProvider from "./providers/OpenAppsProvider.jsx";
import TimeProvider from "./providers/TimeProvider.jsx";
import WeatherProvider from "./providers/WeatherProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TimeProvider>
      <WeatherProvider>
        <OpenAppsProvider>
          <App />
        </OpenAppsProvider>
      </WeatherProvider>
    </TimeProvider>
  </React.StrictMode>
);
