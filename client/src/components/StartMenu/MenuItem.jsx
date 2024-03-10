import { useState } from "react";
import MenuList from "./MenuList";

function MenuItem({ item }) {
  const [displayChildren, setDisplayChildren] = useState({});

  function handleToggleChildren(getCurrentLabel) {
    setDisplayChildren({
      ...displayChildren,
      [getCurrentLabel]: !displayChildren[getCurrentLabel],
    });
  }

  return (
    <>
      <li>
        <p onClick={() => handleToggleChildren(item.label)}>{item.label}</p>
        {item &&
        item.children &&
        item.children.length > 0 &&
        displayChildren[item.label] ? (
          <MenuList list={item.children} />
        ) : null}
      </li>
    </>
  );
}

export default MenuItem;
