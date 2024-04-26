import { useContext } from "react";
import { MathelMemoryContext } from "../utils/MathelMemoryProvider";

function ResultsPage() {
  const { playerStats, setPlayerStats } = useContext(MathelMemoryContext);

  function handleRestartWindow() {
    setPlayerStats({
      Player: "Guest",
      Score: 0,
      Lives: 5,
    });
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-2xl">GAME OVER!</h1>
      <p className="mt-4">Want to practice some more?</p>
      <p>Play again!</p>

      <div className="flex-1 flex flex-col items-center my-6">
        <span className="font-bold text-xl">Final Score:</span>
        <span className="text-lg">{playerStats.Player}</span>
        <span className="text-4xl my-2">{playerStats.Score}</span>
      </div>

      <div
        className="mt-3 px-4 py-2 bg-[rgb(160,53,52)] rounded-md shadow-md cursor-pointer text-white font-bold"
        onClick={handleRestartWindow}
      >
        Quit
      </div>
      <div className="mt-4 text-center text-xs text-zinc-500 w-4/5">
        See original vanilla{" "}
        <a
          href="https://mathel-memory-game.netlify.app/"
          target="_blank"
          className="underline"
        >
          JS project
        </a>{" "}
        through the guidance of{" "}
        <a
          href="https://www.upliftcodecamp.com/"
          target="_blank"
          className="underline"
        >
          UPLIFT Code Camp
        </a>
      </div>
    </div>
  );
}

export default ResultsPage;
