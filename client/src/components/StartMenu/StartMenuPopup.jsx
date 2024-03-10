import MenuList from "./MenuList";
import { menu } from "./menu.js";

function StartMenuPopup({ setShowStartMenu }) {
  return (
    <>
      <div className="absolute bottom-11 left-1 z-20 bg-stone-900 opacity-80 text-white p-6 rounded-md">
        <MenuList list={menu} />
      </div>
      <div
        onClick={() => setShowStartMenu(false)}
        className="absolute top-0 overlay z-10 w-full h-screen"
      ></div>
    </>
  );
}

export default StartMenuPopup;
