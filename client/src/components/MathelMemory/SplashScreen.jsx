import MathelMemoryLogo from "../../assets/mathel-memory/mathel-game-logo.png";

function SplashScreen() {
  return (
    <>
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
        <input type="text" className="mt-1 h-8 rounded-md text-center" />
        <button className="mt-3 px-4 py-2 bg-green-600 text-white rounded-md shadow-md">
          PLAY!
        </button>
      </div>
    </>
  );
}

export default SplashScreen;
