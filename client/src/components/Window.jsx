import PropTypes from "prop-types";
import { MdMinimize } from "react-icons/md";
import { FiSquare } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Rnd } from "react-rnd";

function Window({ title, content, setShowWindow }) {
  const viewportWidth = document.body.clientWidth;
  const viewportHeight = document.body.clientHeight;

  return (
    <>
      <Rnd
        default={{
          x: (viewportWidth - 550) / 2,
          y: (viewportHeight - 550) / 2,
          width: 550,
          height: 380,
        }}
        minWidth={550}
        minHeight={380}
        cancel=".content"
        className="bg-neutral-200 rounded-t-lg rounded-b-sm drop-shadow-lg"
      >
        <div className="flex flex-wrap z-20 cursor-auto">
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
      </Rnd>
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
