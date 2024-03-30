import PropTypes from "prop-types";
import { createContext, useReducer, useState } from "react";
import ShutDownUI from "../pages/Screen/ShutDownUI";
import RestartUI from "../pages/Screen/RestartUI";
import LockUI from "../pages/Screen/LockUI";
import ModalWindow from "../templates/ModalWindow";

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
    case "cancel":
      return screenStates;
  }
}

const screenStates = [
  {
    option: "restart",
    prompt: {
      header: "Restart",
      body: "The system will restart automatically in 10 seconds.",
    },
    modal: <ModalWindow />,
    content: <RestartUI />,
  },
  {
    option: "lock",
    prompt: null,
    modal: null,
    content: <LockUI />,
  },
  {
    option: "shut-down",
    prompt: {
      header: "Power Off",
      body: "The system will power off automatically in 10 seconds.",
    },
    modal: <ModalWindow />,
    content: <ShutDownUI />,
  },
];

export default function OpenAppsProvider({ children }) {
  const [openApps, dispatch] = useReducer(reducer, []);
  const [shutDownScreen, command] = useReducer(options, screenStates);

  const [showScreen, setShowScreen] = useState(false);

  const settings = {
    openApps,
    dispatch,
    shutDownScreen,
    command,
    showScreen,
    setShowScreen,
  };

  console.log(shutDownScreen);

  return (
    <>
      <OpenAppsContext.Provider value={settings}>
        {children}
      </OpenAppsContext.Provider>
    </>
  );
}

OpenAppsProvider.propTypes = {
  children: PropTypes.object,
};
