import { createContext, useState } from "react";

export const OpenAppsContext = createContext();

export default function OpenAppsProvider({ children }) {
  const [openApps, setOpenApps] = useState([]);

  function updateOpenApps(newApp) {
    setOpenApps([...openApps, newApp]);
  }

  const settings = { openApps, updateOpenApps };

  return (
    <>
      <OpenAppsContext.Provider value={settings}>
        {children}
      </OpenAppsContext.Provider>
    </>
  );
}
