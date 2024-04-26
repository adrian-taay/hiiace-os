import { useContext } from "react";
import { MathelMemoryContext } from "./MathelMemoryProvider";
import SplashScreen from "../SplashScreen/SplashScreen";
import InstructionsPage from "../InstructionsPage/InstructionsPage";
import GamePage from "../GamePage/GamePage";
import ResultsPage from "../ResultsPage/ResultsPage";

function pageDisplay(page) {
  switch (page) {
    case 0:
      return <SplashScreen />;
    case 1:
      return <InstructionsPage />;
    case 2:
      return <GamePage />;
    default:
      return <ResultsPage />;
  }
}

function PageSwitcher() {
  const { switchPage } = useContext(MathelMemoryContext);

  return (
    <div className="my-5 p-3 rounded-lg justify-center items-center bg-neutral-100 w-4/5 md:w-1/2 h-2/3 shadow-lg min-h-96 font-saira text-zinc-800">
      {pageDisplay(switchPage)}
    </div>
  );
}

export default PageSwitcher;
