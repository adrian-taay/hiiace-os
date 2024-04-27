import { useContext, useEffect } from "react";
import { MathelMemoryContext } from "../utils/MathelMemoryProvider";
import QuestionItems from "./QuestionItems";
import QuitModal from "./QuitModal";

function GamePage() {
  const {
    playerStats,
    timer,
    setTimer,
    gamePaused,
    setGamePaused,
    showQuitModal,
    setShowQuitModal,
    questions,
    questionIndex,
    setQuestionIndex,
    setSwitchPage,
  } = useContext(MathelMemoryContext);

  useEffect(() => {
    let interval;

    if (timer > 0 && !gamePaused) {
      interval = setInterval(() => {
        setTimer((t) => {
          if (t > 0 && !gamePaused) {
            return t - 1;
          } else {
            clearInterval(interval);
            setGamePaused(true);
            return t;
          }
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [gamePaused, questionIndex]);

  function handleNextQuestion() {
    if (questionIndex < questions.length - 1 && playerStats.Lives > 1) {
      setTimer(20);
      setGamePaused(false);
      setQuestionIndex((q) => q + 1);
    } else {
      setSwitchPage(3);
    }
  }

  // useEffect(() => {
  //   document.addEventListener("keydown", (e) => {
  //     if (e.key === "n") {
  //       handleNextQuestion();
  //     }
  //   });

  //   return () => {
  //     document.addEventListener("keydown", (e) => {
  //       if (e.key === "n") {
  //         handleNextQuestion();
  //       }
  //     });
  //   };
  // }, []);

  return (
    <>
      <div className="relative">
        <ul className="flex justify-around mt-2">
          {Object.entries(playerStats).map(([key, value]) => {
            return (
              <li key={key} className="flex flex-col items-center">
                <span className="font-bold">{key}</span>
                <span>{value}</span>
              </li>
            );
          })}
          <li className="flex flex-col items-center">
            <span className="font-bold">Question</span>
            <span>
              {questionIndex + 1} of {questions.length}
            </span>
          </li>
        </ul>
        <div className="flex justify-center my-3 text-5xl">{timer}</div>
        <QuestionItems />
        <div className="flex justify-around text-white font-bold">
          <button
            onClick={() => setShowQuitModal(!showQuitModal)}
            className="mt-3 px-4 py-2 bg-[rgb(160,53,52)] rounded-md shadow-md"
          >
            Quit
          </button>
          <button
            className="mt-3 px-4 py-2 rounded-md shadow-md"
            disabled={!gamePaused}
            style={
              gamePaused
                ? { backgroundColor: "rgb(130,189,21)" }
                : { backgroundColor: "grey" }
            }
            onClick={handleNextQuestion}
          >
            Next
          </button>
        </div>
        {showQuitModal && <QuitModal />}
      </div>
    </>
  );
}

export default GamePage;
