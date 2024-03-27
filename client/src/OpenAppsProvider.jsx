import PropTypes from "prop-types";
import { createContext, useReducer } from "react";

export const OpenAppsContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "open-app":
      return [...state, action.payload];
    case "close-app":
      return state.filter((item) => item.id !== action.payload.id);
  }
}

export default function OpenAppsProvider({ children }) {
  // const [openApps, setOpenApps] = useState([]);
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
  children: PropTypes.object,
};
