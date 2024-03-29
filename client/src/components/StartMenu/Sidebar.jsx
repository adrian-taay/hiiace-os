import { RxAvatar } from "react-icons/rx";
import { RiLock2Fill, RiRestartLine, RiShutDownLine } from "react-icons/ri";
import { sidemenu } from "./menu";

function Sidebar() {
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
        <RiRestartLine />
        <RiLock2Fill />
        <RiShutDownLine />
      </div>
    </div>
  );
}

export default Sidebar;
