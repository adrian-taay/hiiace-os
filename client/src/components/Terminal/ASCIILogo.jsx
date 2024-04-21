function ASCIILogo() {
  const asciiLogo = [
    "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@",
    "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@",
    "@@@@@@@@&(((((((((((((#@@@@@@@@@",
    "@@@@@@((((((((((((((((((((@@@@@@",
    "@@@@#((((((((&&&&#(((((((((@@@@@",
    "@@@&(((((&@@((((((&@%(((((((&@@@",
    "@@@&((((@@((((((((((@@(((((((@@@",
    "@@@&((((@@((((#%((((#@#((((((@@@",
    "@@@@(((((&@@@@@(((((#@#((((((@@@",
    "@@@@@%(((((((((((((%@&((((((&@@@",
    "@@@@@@@@#(((((((#@@@(((((((#@@@@",
    "@@@@@@@@@@@@@@@@@@@@@@@((#@@@@@@",
    "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@",
  ];

  function fillColor(char) {
    switch (char) {
      case "(":
        return "text-[rgb(120,168,119)]";
      case "&":
        return "text-zinc-600";
      case "%":
        return "text-zinc-500";
      case "#":
        return "text-zinc-700";
      default:
        return "text-transparent";
    }
  }

  return (
    <ul className="flex flex-col font-mono">
      {asciiLogo.map((line, index) => {
        return (
          <li key={index}>
            {[...line].map((char, index) => {
              return (
                <span key={index} className={fillColor(char)}>
                  {char}
                </span>
              );
            })}
          </li>
        );
      })}
    </ul>
  );
}

export default ASCIILogo;
