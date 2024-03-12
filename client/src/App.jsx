import { useState } from "react";
import Taskbar from "./components/Taskbar";
import Window from "./components/Windows/Window";
import WelcomeScreen from "./components/Windows/WelcomeScreen";
import Test from "./components/Windows/Test";

import OpenWindowProvider from "./OpenWindowsProvider";

function App() {
  const [showWindow, setShowWindow] = useState(false);

  return (
    <>
      <OpenWindowProvider>
        <Window />
        <Taskbar />
      </OpenWindowProvider>
      <div className="w-full h-screen bg-[url('./assets/bg-wallpaper.jpg')] bg-cover bg-center overflow-hidden">
        <button onClick={() => setShowWindow(!showWindow)}>Show</button>
        {showWindow ? (
          <>
            <Window
              setShowWindow={setShowWindow}
              content={<WelcomeScreen />}
              title={"Welcome!"}
            />
          </>
        ) : null}
      </div>
    </>
  );
}

export default App;
