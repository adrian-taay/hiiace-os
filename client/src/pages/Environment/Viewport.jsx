import { useContext } from "react";
import { OpenAppsContext } from "../../providers/OpenAppsProvider";
import Window from "../../templates/Window";
import ConkyLinux from "../../components/ConkyLinux/ConkyLinux";
import LockUI from "../Screen/LockUI";

// Reference at StartMenuPopup.jsx
function Viewport() {
  const { openApps, shutDownScreen, showLockUI } = useContext(OpenAppsContext);

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
