import { useContext } from "react";
import { MathelMemoryContext } from "../utils/MathelMemoryProvider";
import { MdOutlineClose, MdOutlinePlayArrow, MdReplay } from "react-icons/md";

function QuitModal() {
  const { timer, setShowQuitModal, setSwitchPage, setPlayerStats } =
    useContext(MathelMemoryContext);

  function handleQuit() {
    setSwitchPage(3);
  }

  function handleRestart() {
    setPlayerStats((p) => ({ ...p, Score: 0, Lives: 5 }));
    setShowQuitModal(false);
    setSwitchPage(2);
  }

  return (
    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-[#FAFAFA] w-4/5 text-center p-5 rounded-lg shadow-lg">
        <h1 className="font-bold text-lg">Are you sure?</h1>
        <p>
          Timer is still running! The game will pause only after the correct
          answer has been entered or the time has run out!
        </p>
        <p className="text-2xl my-4">{timer}</p>
        <div className="flex justify-around text-white">
          <div
            className="mt-3 px-4 py-2 bg-[rgb(130,189,21)] rounded-md shadow-md cursor-pointer"
            onClick={() => setShowQuitModal(false)}
          >
            <MdOutlinePlayArrow color="white" />
          </div>
          <div
            className="mt-3 px-4 py-2 bg-[rgb(215,160,42)] rounded-md shadow-md cursor-pointer"
            onClick={handleRestart}
          >
            <MdReplay color="white" />
          </div>
          <div
            className="mt-3 px-4 py-2 bg-[rgb(160,53,52)] rounded-md shadow-md cursor-pointer"
            onClick={handleQuit}
          >
            <MdOutlineClose color="white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuitModal;
