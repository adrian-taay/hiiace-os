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

  return <div className="text-white">{advice ? advice : "Loading..."}</div>;
}

export default RandomAdvice;
