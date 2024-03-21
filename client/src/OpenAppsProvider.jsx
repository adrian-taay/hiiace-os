import { createContext, useReducer, useState } from "react";
import { menu } from "./components/StartMenu/menu";

export const OpenAppsContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'open-app':
      return {
        ...state,
        {
          
        }
      }
  }
}

export default function OpenAppsProvider({ children }) {
  // const [openApps, setOpenApps] = useState([]);
  const [state, dispatch] = useReducer(reducer, []);

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
