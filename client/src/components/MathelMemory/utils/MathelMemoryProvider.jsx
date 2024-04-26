import { createContext, useState } from "react";
import PropTypes from "prop-types";
import SplashScreen from "../SplashScreen/SplashScreen";
import InstructionsPage from "../InstructionsPage/InstructionsPage";
import GamePage from "../GamePage/GamePage";
import ResultsPage from "../ResultsPage/ResultsPage";

export const MathelMemoryContext = createContext();

function pageDisplay(page) {
  switch (page) {
    case 0:
      return <SplashScreen />;
    case 1:
      return <InstructionsPage />;
    case 2:
      return <GamePage />;
    default:
      return <ResultsPage />;
  }
}

export default function MathelMemoryProvider({ children }) {
  const [switchPage, setSwitchPage] = useState(0);
  const [showQuitModal, setShowQuitModal] = useState(false);

  const [playerStats, setPlayerStats] = useState({
    Player: "Guest",
    Score: 0,
    Lives: 5,
  });
  const [timer, setTimer] = useState(20);
  const [questions, setQuestions] = useState({});

  const settings = {
    playerStats,
    setPlayerStats,
    questions,
    setQuestions,
    timer,
    setTimer,
    showQuitModal,
    setShowQuitModal,
    pageDisplay,
    switchPage,
    setSwitchPage,
  };

  return (
    <>
      <MathelMemoryContext.Provider value={settings}>
        {children}
      </MathelMemoryContext.Provider>
    </>
  );
}

MathelMemoryProvider.propTypes = {
  children: PropTypes.object,
};
