import { useContext } from "react";
import { OpenAppsContext } from "../../providers/OpenAppsProvider";

function Screen() {
  const { showScreen, shutDownScreen } = useContext(OpenAppsContext);
  return <>{showScreen ? shutDownScreen[0].content : null}</>;
}

export default Screen;
