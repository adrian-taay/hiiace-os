import { useState, createContext } from "react";

export const OpenWindowsContext = createContext();

const OpenWindowProvider = ({ children }) => {
  const [openWindows, setOpenWindows] = useState([]);

  const updateOpenWindows = (newWindow) => {
    setOpenWindows([...openWindows, newWindow]);
  };

  const windowSettings = {
    openWindows,
    updateOpenWindows,
  };

  return (
    <OpenWindowsContext.Provider value={windowSettings}>
      {children}
    </OpenWindowsContext.Provider>
  );
};

export default OpenWindowProvider;
