import MathelMemoryLogo from "../../assets/mathel-memory/mathel-game-logo.png";

function MathelMemory() {
  return (
    <div className="bg-purple-400 bg-cover bg-center text-sm">
      <div className="p-3 mx-auto rounded-lg flex flex-col justify-center items-center bg-slate-200 w-1/2">
        <img src={MathelMemoryLogo} alt="Mathel Memory Logo" />
        <span>MATHEL MEMORY</span>
        <span>A Math and Memory Game</span>
        <div className="flex flex-col items-center">
          <input type="text" className="h-8 rounded-md text-center" />
          <button className="mt-3 px-4 py-2 bg-green-600 text-white rounded-md shadow-md">
            PLAY!
          </button>
        </div>
      </div>
    </div>
  );
}

export default MathelMemory;
