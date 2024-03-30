import { useContext } from "react";
import { RxAvatar } from "react-icons/rx";
import { RiLock2Fill, RiRestartLine, RiShutDownLine } from "react-icons/ri";
import { sidemenu } from "./menu";
import { OpenAppsContext } from "../../providers/OpenAppsProvider";

function Sidebar() {
  const { command } = useContext(OpenAppsContext);

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex items-center gap-2 mb-3">
        <RxAvatar size={28} />
        <span>Guest</span>
      </div>
      <div className="flex-grow">
        <ul className="text-sm">
          {sidemenu.map((item) => (
            <a
              key={item.title}
              href={item.url}
              target="_blank"
              className="flex gap-2 items-center hover:bg-stone-900 hover:bg-opacity-60 select-none py-0.5"
            >
              {item.icon} {item.title}
            </a>
          ))}
        </ul>
      </div>
      <div className="flex justify-between">
        <div className="hover:bg-stone-900 hover:bg-opacity-60 p-1.5">
          <RiRestartLine
            onClick={() => command({ type: "restart", payload: "restart" })}
          />
        </div>
        <div className="hover:bg-stone-900 hover:bg-opacity-60 p-1.5">
          <RiLock2Fill
            onClick={() => command({ type: "lock", payload: "lock" })}
          />
        </div>
        <div className="hover:bg-stone-900 hover:bg-opacity-60 p-1.5">
          <RiShutDownLine
            onClick={() => command({ type: "shut-down", payload: "shut-down" })}
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
