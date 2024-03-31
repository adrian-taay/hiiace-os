import Taskbar from "./Taskbar";
import Viewport from "./Viewport";

function Environment() {
  return (
    <div className="relative overflow-hidden">
      <div className="w-full h-screen bg-[url('./assets/bg-wallpaper.jpg')] bg-cover bg-center">
        <Viewport />
      </div>
      <Taskbar />
    </div>
  );
}

export default Environment;
