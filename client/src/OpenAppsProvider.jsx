import PropTypes from "prop-types";
import { createContext, useReducer } from "react";

export const OpenAppsContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "open-app":
      return [...state, action.payload];
    case "minimize-app":
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, minimized: !item.minimized };
        }
        return { ...item };
      });
    case "close-app":
      return state.filter((item) => item.id !== action.payload.id);
    case "active-app":
      return state.map((item) => {
        if (item.id === action.payload.id) return { ...item, zindex: 10 };
        return { ...item, zindex: 0 };
      });
  }
}

export default function OpenAppsProvider({ children }) {
  const [openApps, dispatch] = useReducer(reducer, []);

  const settings = { openApps, dispatch };

  return (
    <>
      <OpenAppsContext.Provider value={settings}>
        {children}
      </OpenAppsContext.Provider>
    </>
  );
}

OpenAppsProvider.propTypes = {
  children: PropTypes.array,
};
