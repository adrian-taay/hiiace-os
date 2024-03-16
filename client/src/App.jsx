import { useState } from "react";
import Taskbar from "./components/Taskbar";
import Window from "./components/Windows/Window";
import WelcomeScreen from "./components/Windows/WelcomeScreen";
import Calculator from "./components/Calculator/Calculator";

function App() {
  const [showWindow, setShowWindow] = useState(false);

  return (
    <>
      <div className="w-full h-screen bg-[url('./assets/bg-wallpaper.jpg')] bg-cover bg-center">
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
      <div className="calculator absolute top-1/3 left-1/4">
        <Calculator />
      </div>
      <Taskbar />
    </>
  );
}

export default App;
