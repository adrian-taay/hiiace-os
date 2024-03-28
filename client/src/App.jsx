import Taskbar from "./components/Taskbar";
import OpenAppsProvider from "./OpenAppsProvider";
import TimeProvider from "./TimeProvider";
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
