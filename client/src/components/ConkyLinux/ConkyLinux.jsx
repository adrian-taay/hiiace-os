import TimeDateDisplay from "./TimeDateDisplay";
import RandomAdvice from "./RandomAdvice";

function ConkyLinux() {
  return (
    <div className="container absolute flex justify-center flex-col items-center">
      <TimeDateDisplay />
      <RandomAdvice />
    </div>
  );
}

export default ConkyLinux;
