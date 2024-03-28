import Taskbar from "./components/Taskbar";
import OpenAppsProvider from "./providers/OpenAppsProvider";
import TimeProvider from "./providers/TimeProvider";
import Viewport from "./components/Viewport";

function App() {
  return (
    <>
      <TimeProvider>
        <OpenAppsProvider>
          <div className="w-full h-screen bg-[url('./assets/bg-wallpaper.jpg')] bg-cover bg-center">
            <Viewport />
          </div>
          <Taskbar />
        </OpenAppsProvider>
      </TimeProvider>
    </>
  );
}

export default App;
