import TimeDateDisplay from "./TimeDateDisplay";
import RandomAdvice from "./RandomAdvice";
import WeatherDisplay from "./WeatherDisplay";
import MusicPlayer from "../MusicPlayer/MusicPlayer";

function ConkyLinux() {
  return (
    <div className="w-full absolute flex flex-col items-center select-none">
      <TimeDateDisplay />
      <RandomAdvice />
      <WeatherDisplay />
      <MusicPlayer />
    </div>
  );
}

export default ConkyLinux;
