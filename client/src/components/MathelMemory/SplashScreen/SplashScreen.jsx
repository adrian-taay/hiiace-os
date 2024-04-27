import { useContext, useState } from "react";
import MathelMemoryLogo from "../../../assets/mathel-memory/mathel-game-logo.png";
import { MathelMemoryContext } from "../utils/MathelMemoryProvider";

function SplashScreen() {
  const { setPlayerStats, setSwitchPage } = useContext(MathelMemoryContext);
  const [name, setName] = useState("");

  function handlePlay() {
    if (name.trim() === "") {
      return;
    }
    setPlayerStats((p) => ({ ...p, Player: name }));
    setSwitchPage(1);
    setName("");
  }

  return (
    <div className="flex flex-col items-center">
      <img src={MathelMemoryLogo} alt="Mathel Memory Logo" className="p-2" />
      <span
        style={{ textShadow: "2px 2px 5px #000000" }}
        className="font-bowlby text-yellow-300 text-2xl mt-4"
      >
        MATHEL MEMORY
      </span>
      <span className="font-saira">A Math and Memory Game</span>
      <div className="flex flex-col items-center mt-6">
        <label className="text-xs">Enter your name:</label>
        <input
          type="text"
          value={name}
          className="mt-1 h-8 rounded-md text-center"
          onChange={(e) => setName(e.target.value)}
          autoFocus
        />
        <button
          className="my-3 px-4 py-2 bg-green-600 text-white rounded-md shadow-md"
          style={
            name.length >= 3
              ? { backgroundColor: "rgb(22 163 74)" }
              : { backgroundColor: "grey" }
          }
          onClick={handlePlay}
        >
          PLAY!
        </button>
      </div>
    </div>
  );
}

export default SplashScreen;
