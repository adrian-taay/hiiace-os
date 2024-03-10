import { useRef } from "react";
import PropTypes from "prop-types";
import Draggable from "react-draggable";
import { Resizable } from "re-resizable";
import { MdMinimize } from "react-icons/md";
import { FiSquare } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";

function Window({ defaultSize, title, content, setShowWindow }) {
  const nodeRef = useRef(null);

  return (
    <>
      <Draggable nodeRef={nodeRef}>
        <Resizable
          defaultSize={defaultSize}
          className="absolute top-24 left-48 bg-neutral-200 rounded-t-lg rounded-b-sm drop-shadow-lg overflow-hidden"
        >
          <div ref={nodeRef} className="flex flex-wrap h-full">
            <div className="title-bar flex items-center justify-center w-full h-9 bg-neutral-800 rounded-t-lg text-white text-xs font-semibold">
              <p className="cursor-default">{title}</p>
              <div className="absolute right-3 buttons flex gap-3 items-center cursor-pointer">
                <MdMinimize size={14} />
                <FiSquare size={10} />
                <AiFillCloseCircle
                  size={16}
                  fill="rgb(233,84,32)"
                  color="white"
                  onClick={() => setShowWindow(false)}
                />
              </div>
            </div>
            <div className="content h-full">{content}</div>
          </div>
        </Resizable>
      </Draggable>
    </>
  );
}

Window.propTypes = {
  defaultSize: PropTypes.object,
  title: PropTypes.string,
  content: PropTypes.element,
  setShowWindow: PropTypes.func,
};

export default Window;
