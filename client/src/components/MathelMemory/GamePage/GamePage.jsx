import { useContext } from "react";
import { MathelMemoryContext } from "../utils/MathelMemoryProvider";
import QuestionItems from "./QuestionItems";
import QuitModal from "./QuitModal";

function GamePage() {
  const { playerStats, timer, showQuitModal, setShowQuitModal } =
    useContext(MathelMemoryContext);

  return (
    <>
      <div className="relative">
        <ul className="flex justify-around">
          {Object.entries(playerStats).map(([key, value]) => {
            return (
              <li key={key} className="flex flex-col items-center">
                <span className="font-bold">{key}</span>
                <span>{value}</span>
              </li>
            );
          })}
          <li className="font-bold">Question</li>
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
          <button className="mt-3 px-4 py-2 bg-[rgb(130,189,21)] rounded-md shadow-md">
            Next
          </button>
        </div>
        {showQuitModal && <QuitModal />}
      </div>
    </>
  );
}

export default GamePage;
