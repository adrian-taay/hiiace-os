import { useEffect, useState } from "react";

const lineProcess = [
  {
    line: "Deconfiguring network interfaces...",
    t: 500,
  },
  {
    line: "Unmounting temporary filesystems...",
    t: 1000,
  },
  {
    line: "Deactivating swap...",
    t: 1150,
  },
  {
    line: "Stopping remaining crypto disks...",
    t: 1180,
  },
  {
    line: "Stopping early crypto disks...",
    t: 2000,
  },
  {
    line: "umount: /run/lock: not mounted",
    t: 1000,
  },
  {
    line: "casper is resyncing snapshots and caching reboot files...",
    t: 500,
  },
];

function ShutDownUI() {
  const [index, setIndex] = useState(0);
  const [showLines, setShowLines] = useState([]);

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     setShowLines((sL) => [...sL, lineProcess[index].line]);
  //   }, lineProcess[index].t);

  //   return () => clearTimeout(timeoutId);
  // }, [index]);

  // useEffect(() => {
  //   if (index < lineProcess.length - 1) {
  //     setIndex((i) => i + 1);
  //     console.log(index);
  //   } else return;
  // }, [showLines]);

  useEffect(() => {
    if (index > lineProcess.length - 1) {
      return;
    }

    const timeoutId = setTimeout(() => {
      setShowLines((sL) => [...sL, lineProcess[index].line]);
      setIndex((i) => i + 1);
    }, lineProcess[index].t);

    return () => clearTimeout(timeoutId);
  }, [index]);

  return (
    <div className="absolute w-full p-4 text-sm">
      <div className="w-full text-center my-6">Hiiace OS 24.04</div>
      <ul>
        {showLines && showLines.length
          ? showLines.map((item, index) => {
              return (
                <li key={index} className="flex justify-between items-center">
                  <span className="flex-none px-2">*</span>
                  <span className="flex-1">{item}</span>
                  <span>[ OK ]</span>
                </li>
              );
            })
          : null}
        {index < lineProcess.length ? null : (
          <li>
            Please remove installation media and close the tray (if any) then
            press ENTER:
          </li>
        )}
      </ul>
    </div>
  );
}

export default ShutDownUI;
