import PropTypes from "prop-types";
import { createContext, useReducer, useState } from "react";
import ShutDownUI from "../pages/Screen/ShutDownUI";
import RestartUI from "../pages/Screen/RestartUI";
import ModalWindow from "../templates/ModalWindow";

export const OpenAppsContext = createContext();

// Reference at StartMenuPopup.jsx
function reducer(state, action) {
  switch (action.type) {
    case "open-app":
      if (state.find((item) => item.id === action.payload.id))
        return [...state].map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, minimized: false, zindex: state.length };
          } else {
            return { ...item, zindex: 0 };
          }
        });

      return [...state, action.payload];
    case "minimize-app":
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            minimized: !item.minimized,
          };
        }
        return { ...item };
      });
    case "close-app":
      return state.filter((item) => item.id !== action.payload.id);
    case "active-app":
      return state.map((item) => {
        if (item.id === action.payload.id)
          return { ...item, zindex: state.length };
        return { ...item, zindex: 0 };
      });
    case "minimize-all":
      return state.map((item) => {
        return { ...item, minimized: true };
      });
    case "maximize-app":
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            maximized: !item.maximized,
          };
        }
        return { ...item };
      });
    case "drag-app":
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            position: { x: action.payload.x, y: action.payload.y },
          };
        }
        return { ...item };
      });
    case "resize-app":
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            dimension: {
              width: action.payload.width,
              height: action.payload.height,
            },
          };
        }
        return { ...item };
      });
  }
}

function options(state, action) {
  switch (action.type) {
    case "shut-down":
      return state.filter((item) => item.option === action.payload);
    case "restart":
      return state.filter((item) => item.option === action.payload);
    default:
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
  const [showLockUI, setShowLockUI] = useState(false);

  const viewportWidth = document.body.clientWidth;
  const viewportHeight = document.body.clientHeight;

  const settings = {
    openApps,
    dispatch,
    shutDownScreen,
    command,
    showScreen,
    setShowScreen,
    showLockUI,
    setShowLockUI,
    viewportWidth,
    viewportHeight,
  };

  console.log(openApps);

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
