import { useContext } from "react";
import { OpenAppsContext } from "../providers/OpenAppsProvider";

function ModalWindow() {
  const { shutDownScreen, command, setShowScreen } =
    useContext(OpenAppsContext);

  return (
    <div className="absolute w-full h-full top-0 left-0 flex items-center z-40 bg-black bg-opacity-50">
      <div className="mx-auto w-96 shadow-md rounded-lg overflow-hidden text-sm text-center z-50 select-none">
        <div className="bg-[#FAFAFA] px-7 py-3">
          <p className="text-lg mb-3">{shutDownScreen[0].prompt.header}</p>
          <p className="pb-3">{shutDownScreen[0].prompt.body}</p>
        </div>
        <div className="flex bg-[#EDEDED] divide-x-2">
          <div
            className="flex-1 p-3 hover:bg-neutral-400"
            onClick={() => command({ type: "cancel" })}
          >
            Cancel
          </div>
          <div
            className="flex-1 p-3 hover:bg-neutral-400"
            onClick={() => setShowScreen(true)}
          >
            {shutDownScreen[0].prompt.header}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalWindow;
