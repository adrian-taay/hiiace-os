import { useContext } from "react";
import { MathelMemoryContext } from "./MathelMemoryProvider";

function PageSwitcher() {
  const { switchPage, pageDisplay } = useContext(MathelMemoryContext);

  return (
    <div className="my-5 p-3 rounded-lg justify-center items-center bg-neutral-100 w-4/5 md:w-1/2 h-2/3 shadow-lg min-h-96 font-saira text-zinc-800">
      {pageDisplay(switchPage)}
    </div>
  );
}

export default PageSwitcher;
