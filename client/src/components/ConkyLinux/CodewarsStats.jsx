import { useEffect, useState } from "react";

function CodewarsStats() {
  const [stats, setStats] = useState({});

  async function getStats() {
    const response = await fetch(
      "https://github.r2v.ch/codewars?user=adrian.taay",
      { mode: "no-cors" }
    );
    const data = await response.json();

    console.log(data);
  }

  useEffect(() => {
    getStats();
  }, []);

  return <div></div>;
}

export default CodewarsStats;
