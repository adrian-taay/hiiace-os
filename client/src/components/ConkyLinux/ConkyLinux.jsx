import TimeDateDisplay from "./TimeDateDisplay";
import RandomAdvice from "./RandomAdvice";
import WeatherDisplay from "./WeatherDisplay";

function ConkyLinux() {
  return (
    <div className="container absolute flex flex-col items-center">
      <TimeDateDisplay />
      <RandomAdvice />
      <WeatherDisplay />
    </div>
  );
}

export default ConkyLinux;
