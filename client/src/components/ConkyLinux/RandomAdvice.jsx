import { useEffect, useState } from "react";

function RandomAdvice() {
  const [advice, setAdvice] = useState("");

  async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();

    setAdvice(data.slip.advice);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="text-white text-xs text-center w-1/2 mt-4">
      {advice ? advice : "Loading..."}
    </div>
  );
}

export default RandomAdvice;
