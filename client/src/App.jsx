import { useState } from "react";
import Taskbar from "./components/Taskbar";
import Window from "./components/Windows/Window";
import About from "./components/Windows/About";

function App() {
  const [showWindow, setShowWindow] = useState(false);

  return (
    <>
      <div className="w-full h-screen bg-[url('./assets/bg-wallpaper.jpg')] bg-cover bg-center">
        <button onClick={() => setShowWindow(!showWindow)}>Show</button>
        {showWindow ? (
          <Window setShowWindow={setShowWindow} content={<About />} />
        ) : null}
      </div>
      <Taskbar />
    </>
  );
}

export default App;
