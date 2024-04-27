import { useContext, useEffect, useRef, useState } from "react";
import { MathelMemoryContext } from "../utils/MathelMemoryProvider";
import { FaCheck } from "react-icons/fa";

function QuestionItems() {
  const {
    questions,
    questionIndex,
    playerStats,
    setPlayerStats,
    gamePaused,
    setGamePaused,
  } = useContext(MathelMemoryContext);
  const [playerAnswer, setPlayerAnswer] = useState("");
  let gameAnswer = questions[questionIndex].answer();
  const [itemResult, setItemResult] = useState(true);

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, [questionIndex]);

  function handleCheckAnswer() {
    if (playerAnswer.trim() === "") {
      return;
    }

    if (Number(playerAnswer) === gameAnswer) {
      setPlayerAnswer("");
      setGamePaused(true);
      setPlayerStats((p) => ({ ...p, Score: p.Score + 1 }));
    } else if (Number(playerAnswer) !== gameAnswer && playerStats.Lives > 1) {
      setPlayerAnswer("");
      setPlayerStats((p) => ({ ...p, Lives: p.Lives - 1 }));
    } else {
      setGamePaused(true);
      setPlayerAnswer("");
      setPlayerStats((p) => ({ ...p, Lives: p.Lives - 1 }));
    }
  }

  function handleNumberInput(e) {
    if (/^[0-9\b]+$/.test(e.target.value)) {
      setPlayerAnswer(e.target.value);
    }
  }

  function handleEnterCheckAnswer(e) {
    if (e.key === "Enter") {
      handleCheckAnswer();
    }
  }

  return (
    <>
      <ul className="flex justify-center items-center my-4 text-xl font-semibold">
        <li className="px-5 py-3 mx-3 rounded-md bg-stone-300">
          {questions[questionIndex].d1}
        </li>
        <li className="px-5 py-3 mx-3 rounded-md bg-stone-300">
          {questions[questionIndex].d2}
        </li>
        <li className="px-5 py-3 mx-3 rounded-md bg-stone-300">
          {questions[questionIndex].d3}
        </li>
      </ul>
      <p className="text-center">
        Time&apos;s up! Correct answer is: {gameAnswer}
      </p>
      <div className="flex justify-center items-center my-5">
        <input
          type="text"
          value={playerAnswer}
          className="w-24 text-center p-[9px] rounded-l-md bg-zinc-300"
          onChange={(e) => handleNumberInput(e)}
          disabled={gamePaused}
          ref={inputRef}
          onKeyDown={handleEnterCheckAnswer}
        />
        <button
          className="bg-[rgb(127,80,171)] p-3 rounded-r-md"
          style={
            gamePaused
              ? { backgroundColor: "grey" }
              : { backgroundColor: "rgb(127,80,171)" }
          }
          onClick={handleCheckAnswer}
          disabled={gamePaused}
        >
          <FaCheck color="white" />
        </button>
      </div>
    </>
  );
}

export default QuestionItems;
