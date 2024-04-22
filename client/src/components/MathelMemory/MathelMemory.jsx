import Instructions from "./Instructions";
import SplashScreen from "./SplashScreen";

function MathelMemory() {
  return (
    <div className="bg-[url('./assets/mathel-memory/mathel-main-bg.jpg')] bg-cover bg-center text-sm h-full flex justify-center items-center">
      <div className="mt-4 p-3 rounded-lg flex flex-col justify-center items-center bg-neutral-100 w-1/2 h-2/3 shadow-lg min-h-96 font-saira text-zinc-800">
        <SplashScreen />
        {/* <Instructions /> */}
      </div>
    </div>
  );
}

export default MathelMemory;
