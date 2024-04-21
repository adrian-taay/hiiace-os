import { useState, useContext } from "react";
import { OpenAppsContext } from "../../providers/OpenAppsProvider";

function Neofetch() {
  const { viewportWidth, viewportHeight } = useContext(OpenAppsContext);

  const [osDetails, setOsDetails] = useState({
    Model: "Web Browser",
    OS: "Hiiace OS 24.04",
    Kernel: "5.something-generic",
    Uptime: "0 secs",
    Packages: 10,
    Shell: "bash 5.0",
    Resolution: `${viewportWidth}px x ${viewportHeight}px`,
    DE: "GNOME",
    WM: "Mutter",
    Theme: "Adwaita",
    Icons: "react-icons",
    Terminal: "rupert-holmesh",
    Memory: "localStorage",
  });

  const colors = [
    "bg-[rgb(49,50,54)]",
    "bg-[rgb(206,1,0)]",
    "bg-[rgb(73,156,0)]",
    "bg-[rgb(200,159,0)]",
    "bg-[rgb(49,99,171)]",
    "bg-[rgb(117,78,123)]",
    "bg-[rgb(0,153,153)]",
    "bg-white",
  ];

  return (
    <>
      <ul>
        {Object.entries(osDetails).map(([key, value]) => {
          return (
            <li key={key}>
              <span className="font-bold text-red-500">{key}:</span> {value}
            </li>
          );
        })}
      </ul>
      <div className="mt-2 flex text-xs">
        {colors.map((color, index) => (
          <div key={index} className={color}>
            <span className="px-3"></span>
          </div>
        ))}
      </div>
    </>
  );
}

export default Neofetch;
