import { useContext, useEffect } from "react";
import { OpenAppsContext } from "../../providers/OpenAppsProvider";
import Window from "../../templates/Window";
import ConkyLinux from "../../components/ConkyLinux/ConkyLinux";
import LockUI from "../Screen/LockUI";
import { menu } from "../../components/StartMenu/menu";

// Reference at StartMenuPopup.jsx
function Viewport() {
  const { openApps, dispatch, shutDownScreen, showLockUI } =
    useContext(OpenAppsContext);

  const welcomeWindow = menu.find((item) => item.title === "Welcome");

  useEffect(() => {
    const viewportWidth = document.body.clientWidth;
    const viewportHeight = document.body.clientHeight;

    const widthInNumber = Number(welcomeWindow.minWidth.slice(0, 3));
    const heightInNumber = Number(welcomeWindow.minHeight.slice(0, 3));

    const showWelcome = setTimeout(() => {
      dispatch({
        type: "open-app",
        payload: {
          ...welcomeWindow,
          minimized: false,
          maximized: false,
          zindex: openApps.length,
          position: {
            x: viewportWidth <= 640 ? 0 : (viewportWidth - widthInNumber) / 2,
            y: (viewportHeight - 40 - heightInNumber) / 2,
          },
          dimension: {
            width:
              viewportWidth <= 640 ? viewportWidth : welcomeWindow.minWidth,
            height: "auto",
          },
        },
      });
    }, 3000);

    return () => clearTimeout(showWelcome);
  }, []);

  return (
    <>
      <ConkyLinux />
      <div>
        {openApps.map((item, index) => {
          return item.minimized ? null : (
            <Window
              key={index}
              id={item.id}
              title={item.title}
              content={item.content}
              zindex={item.zindex}
              dimension={item.dimension}
              position={item.position}
              minWidth={item.minWidth}
              minHeight={item.minHeight}
              maximized={item.maximized}
              unMaximizable={item.unMaximizable}
              bgBackground={item.bgBackground}
              lastPosition={item.lastPosition}
              lastDimension={item.lastDimension}
            />
          );
        })}
      </div>
      {shutDownScreen && shutDownScreen.length && shutDownScreen.length === 1
        ? shutDownScreen[0].modal
        : null}
      {showLockUI ? <LockUI /> : null}
    </>
  );
}

export default Viewport;

// size={{
//   width: item.maximized ? viewportWidth : item.minWidth,
//   height: item.maximized ? viewportHeight - 40 : item.minHeight,
// }}
// position={{
//   x: item.maximized
//     ? 0
//     : (viewportWidth - item.minWidth) / 2 + index * 25,
//   y: item.maximized
//     ? 0
//     : (viewportHeight - item.minWidth) / 2 + index * 25,
// }}
