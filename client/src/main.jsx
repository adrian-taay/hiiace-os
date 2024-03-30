import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import OpenAppsProvider from "./providers/OpenAppsProvider.jsx";
import TimeProvider from "./providers/TimeProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TimeProvider>
      <OpenAppsProvider>
        <App />
      </OpenAppsProvider>
    </TimeProvider>
  </React.StrictMode>
);
