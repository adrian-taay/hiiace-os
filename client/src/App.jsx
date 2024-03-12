import { useEffect, useState } from "react";
import Taskbar from "./components/Taskbar";
import Window from "./components/Windows/Window";
import WelcomeScreen from "./components/Windows/WelcomeScreen";

function App() {
  const [showWindow, setShowWindow] = useState(false);

  useEffect(() => {});

  return (
    <>
      <div className="w-full h-screen bg-[url('./assets/bg-wallpaper.jpg')] bg-cover bg-center">
        <button onClick={() => setShowWindow(!showWindow)}>Show</button>
        {showWindow ? (
          <Window
            setShowWindow={setShowWindow}
            content={<WelcomeScreen />}
            title={"Welcome!"}
          />
        ) : null}
      </div>
      <Taskbar />
    </>
  );
}

export default App;
