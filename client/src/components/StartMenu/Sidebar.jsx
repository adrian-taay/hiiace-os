import PropTypes from "prop-types";
import { useContext } from "react";
import { RxAvatar } from "react-icons/rx";
import { RiLock2Fill, RiRestartLine, RiShutDownLine } from "react-icons/ri";
import { sidemenu } from "./menu";
import { OpenAppsContext } from "../../providers/OpenAppsProvider";

function Sidebar({ setShowStartMenu }) {
  const { command, setShowLockUI } = useContext(OpenAppsContext);

  function handlePress(id) {
    command({ type: id, payload: id });
    setShowStartMenu(false);
  }

  function handleLockUIPress() {
    setShowLockUI(true);
    setShowStartMenu(false);
  }

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
            id="restart"
            onClick={(e) => handlePress(e.target.id)}
          />
        </div>
        <div className="hover:bg-stone-900 hover:bg-opacity-60 p-1.5">
          <RiLock2Fill id="lock" onClick={handleLockUIPress} />
        </div>
        <div className="hover:bg-stone-900 hover:bg-opacity-60 p-1.5">
          <RiShutDownLine
            id="shut-down"
            onClick={(e) => handlePress(e.target.id)}
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

Sidebar.propTypes = {
  setShowStartMenu: PropTypes.func,
};
