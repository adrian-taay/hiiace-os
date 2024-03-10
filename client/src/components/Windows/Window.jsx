import { useRef } from "react";
import Draggable from "react-draggable";
import { Resizable } from "re-resizable";
import { MdMinimize } from "react-icons/md";
import { FiSquare } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";

function Window({ content, setShowWindow }) {
  const nodeRef = useRef(null);

  return (
    <>
      <Draggable nodeRef={nodeRef}>
        <Resizable
          defaultSize={{
            width: 320,
            height: 200,
          }}
          className="absolute top-1/3 left-1/3 bg-neutral-200 rounded-t-lg rounded-b-sm drop-shadow-lg"
        >
          <div ref={nodeRef}>
            <div className="title-bar flex items-center justify-center w-full h-9 bg-neutral-800 rounded-t-lg text-white text-xs font-semibold">
              <p className="cursor-default">Explorer</p>
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
            <div className="content">{content}</div>
          </div>
        </Resizable>
      </Draggable>
    </>
  );
}

export default Window;
