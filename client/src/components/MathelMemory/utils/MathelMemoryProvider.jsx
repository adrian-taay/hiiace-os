import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const MathelMemoryContext = createContext();

const totalQuestions = 9;
const questions = [...Array(totalQuestions)].map((_, index) => {
  let level = {};
  switch (true) {
    case index <= 2:
      level = { d: 3, m: 2 };
      break;
    case index <= 5:
      level = { d: 5, m: 3 };
      break;
    default:
      level = { d: 9, m: 3 };
      break;
  }

  return {
    d1: Math.floor(Math.random() * level.d) + 1,
    d2: Math.floor(Math.random() * level.d) + 1,
    d3: Math.floor(Math.random() * level.d) + 1,
    m1: Math.floor(Math.random() * level.m) + 1,
    m2: Math.floor(Math.random() * level.m) + 1,
    m3: Math.floor(Math.random() * level.m) + 1,
    answer() {
      return this.d1 * this.m1 + this.d2 * this.m2 + this.d3 * this.m3;
    },
  };
});

export default function MathelMemoryProvider({ children }) {
  const [switchPage, setSwitchPage] = useState(0);
  const [showQuitModal, setShowQuitModal] = useState(false);

  const [playerStats, setPlayerStats] = useState({
    Player: "Guest",
    Score: 0,
    Lives: 5,
  });
  const [timer, setTimer] = useState(20);
  const [gamePaused, setGamePaused] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);

  const settings = {
    playerStats,
    setPlayerStats,
    questions,
    questionIndex,
    setQuestionIndex,
    timer,
    setTimer,
    gamePaused,
    setGamePaused,
    showQuitModal,
    setShowQuitModal,
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
