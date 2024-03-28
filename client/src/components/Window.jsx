import PropTypes from "prop-types";
import { useContext } from "react";
import { OpenAppsContext } from "../OpenAppsProvider";
import { MdMinimize } from "react-icons/md";
import { FiSquare } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Rnd } from "react-rnd";

// Reference at Viewport.jsx
function Window({ id, title, content, zindex, dimensions }) {
  const { dispatch } = useContext(OpenAppsContext);

  return (
    <>
      <Rnd
        default={dimensions}
        minWidth={dimensions.width}
        minHeight={dimensions.height}
        cancel=".content"
        className="bg-neutral-200 rounded-t-lg rounded-b-sm drop-shadow-lg"
        style={{ zIndex: zindex }}
        onDrag={() => dispatch({ type: "active-app", payload: { id: id } })}
        onClick={() => dispatch({ type: "active-app", payload: { id: id } })}
      >
        <div className="flex flex-wrap z-20 cursor-auto">
          <div className="title-bar flex items-center justify-center w-full h-9 bg-neutral-800 rounded-t-lg text-white text-xs font-semibold">
            <p className="cursor-default">{title}</p>
            <div className="absolute right-3 buttons flex gap-3 items-center cursor-pointer">
              <MdMinimize
                size={14}
                onClick={() =>
                  dispatch({ type: "minimize-app", payload: { id: id } })
                }
              />
              <FiSquare size={10} />
              <AiFillCloseCircle
                size={16}
                fill="rgb(233,84,32)"
                color="white"
                onClick={() =>
                  dispatch({ type: "close-app", payload: { id: id } })
                }
              />
            </div>
          </div>
          <div className="content h-full">{content}</div>
        </div>
      </Rnd>
    </>
  );
}

Window.propTypes = {
  defaultSize: PropTypes.object,
  id: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.element,
  zindex: PropTypes.number,
  dimensions: PropTypes.object,
};

export default Window;
