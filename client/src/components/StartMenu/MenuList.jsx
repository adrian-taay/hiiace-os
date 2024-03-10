import MenuItem from "./MenuItem";
import PropTypes from "prop-types";

function MenuList({ list = [] }) {
  return (
    <>
      <ul>
        {list && list.length
          ? list.map((listItem, index) => (
              <MenuItem key={index} item={listItem} />
            ))
          : null}
      </ul>
    </>
  );
}

MenuList.propTypes = {
  list: PropTypes.array,
};

export default MenuList;
