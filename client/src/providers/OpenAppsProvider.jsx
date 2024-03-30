import PropTypes from "prop-types";
import { createContext, useReducer } from "react";
import ShutDownUI from "../components/ShutDownScreen/ShutDownUI";
import RestartUI from "../components/ShutDownScreen/RestartUI";
import LockUI from "../components/ShutDownScreen/LockUI";

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
    case "minimize-all":
      return state.map((item) => {
        return { ...item, minimized: true };
      });
  }
}

function options(state, action) {
  switch (action.type) {
    case "shut-down":
      return state.filter((item) => item.option === action.payload);
    case "restart":
      return state.filter((item) => item.option === action.payload);
    case "lock":
      return state.filter((item) => item.option === action.payload);
  }
}

const screenStates = [
  {
    option: "restart",
    content: <RestartUI />,
  },
  {
    option: "lock",
    content: <LockUI />,
  },
  {
    option: "shut-down",
    content: <ShutDownUI />,
  },
];

export default function OpenAppsProvider({ children }) {
  const [openApps, dispatch] = useReducer(reducer, []);

  const [shutDownScreen, command] = useReducer(options, screenStates);

  const settings = { openApps, dispatch, shutDownScreen, command };

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
