import PromptLine from "./PromptLine";
import Neofetch from "./Neofetch";
import ASCIILogo from "./ASCIILogo";

function Terminal() {
  return (
    <div className="px-2 py-1 bg-zinc-900 bg-opacity-80 font-ubuntu text-sm text-white border-l-2 border-b-2 border-r-2 border-neutral-800">
      <div className="flex">
        <PromptLine />
        <span>neofetch</span>
      </div>
      <div className="flex">
        <ASCIILogo />
        <div className="flex flex-col ml-3">
          <Neofetch />
        </div>
      </div>
      <div className="flex">
        <PromptLine />
        <span>_</span>
      </div>
    </div>
  );
}

export default Terminal;
