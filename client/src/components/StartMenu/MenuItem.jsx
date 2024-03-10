import { useState } from "react";
import MenuList from "./MenuList";
import PropTypes from "prop-types";

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

MenuItem.propTypes = {
  item: PropTypes.object,
};

export default MenuItem;
