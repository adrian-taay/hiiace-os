import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { OpenAppsContext } from "../providers/OpenAppsProvider";
import { MdMinimize } from "react-icons/md";
import { FiSquare } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Rnd } from "react-rnd";

// Reference at Viewport.jsx
function Window({
  id,
  title,
  content,
  zindex,
  size,
  position,
  minWidth,
  minHeight,
  bgBackground,
  maximized,
  unMaximizable,
}) {
  const { dispatch, viewportWidth, viewportHeight } =
    useContext(OpenAppsContext);
  const [winPosition, setWinPosition] = useState({});
  const [winDimension, setWinDimension] = useState({});

  function handleWindowDrag(_, d) {
    dispatch({ type: "drag-app", payload: { id: id, x: d.x, y: d.y } });
    setWinPosition({ x: d.x, y: d.y });
  }

  function handleWindowResize(e, _, ref) {
    dispatch({
      type: "resize-app",
      payload: {
        id: id,
        width: ref.style.width,
        height: ref.style.height,
      },
    });
    setWinDimension({ width: ref.style.width, height: ref.style.height });
  }

  function handleToggleMaximize() {
    if (unMaximizable != undefined && unMaximizable == true) return;

    if (!maximized) {
      dispatch({
        type: "maximize-app",
        payload: {
          id: id,
          x: 0,
          y: 0,
          width: viewportWidth,
          height: viewportHeight - 40,
        },
      });
    } else {
      dispatch({
        type: "maximize-app",
        payload: { id: id, ...winPosition, ...winDimension },
      });
    }
  }

  function handleMinimizeApp() {
    dispatch({
      type: "minimize-app",
      payload: {
        id: id,
        ...winPosition,
        ...winDimension,
      },
    });
  }

  function handleRestoreApp() {
    dispatch({
      type: "restore-app",
      payload: {
        id: id,
        minimized: false,
      },
    });
    setWinPosition(position);
    setWinDimension(size);
  }

  return (
    <>
      <Rnd
        size={size}
        position={position}
        minWidth={minWidth}
        minHeight={minHeight}
        cancel=".content, .buttons"
        className="drop-shadow-lg overflow-hidden"
        style={{ zIndex: zindex }}
        onDrag={() => dispatch({ type: "active-app", payload: { id: id } })}
        onClick={() => dispatch({ type: "active-app", payload: { id: id } })}
        onDragStop={(_, d) => handleWindowDrag(_, d)}
        onResizeStop={(e, _, ref) => handleWindowResize(e, _, ref)}
        disableDragging={maximized}
        enableResizing={!maximized}
      >
        <div
          className="flex flex-col z-20 cursor-auto h-full"
          style={{
            backgroundColor:
              bgBackground == undefined ? "rgb(237, 237, 237)" : bgBackground,
          }}
        >
          <div className="title-bar flex flex-shrink-0 items-center justify-center w-full h-9 bg-neutral-800 text-white text-xs font-semibold">
            <p className="cursor-default">{title}</p>
            <div className="buttons absolute right-3 buttons flex gap-3 items-center cursor-pointer">
              <MdMinimize size={14} onClick={handleMinimizeApp} />
              <FiSquare
                size={10}
                onClick={() => handleToggleMaximize()}
                color={
                  unMaximizable != undefined && unMaximizable ? "gray" : "white"
                }
              />
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
          <div className="content flex-1 w-full relative">{content}</div>
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
  size: PropTypes.object,
  position: PropTypes.object,
  minWidth: PropTypes.string,
  minHeight: PropTypes.string,
  bgBackground: PropTypes.string,
  maximized: PropTypes.bool,
  unMaximizable: PropTypes.bool,
};

export default Window;
