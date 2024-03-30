import { useContext } from "react";
import Environment from "./pages/Environment/Environment";
import Screen from "./pages/Screen/Screen";
import { OpenAppsContext } from "./providers/OpenAppsProvider";

function App() {
  const { showScreen } = useContext(OpenAppsContext);
  return <>{showScreen ? <Screen /> : <Environment />}</>;
}

export default App;
