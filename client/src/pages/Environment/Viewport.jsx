import { useContext } from "react";
import { OpenAppsContext } from "../../providers/OpenAppsProvider";
import Window from "../../templates/Window";
import ConkyLinux from "../../components/ConkyLinux/ConkyLinux";
import LockUI from "../Screen/LockUI";

function Viewport() {
  const viewportWidth = document.body.clientWidth;
  const viewportHeight = document.body.clientHeight;
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
              dimensions={{
                x: (viewportWidth - item.minWidth) / 2 + index * 25,
                y: (viewportHeight - item.minWidth) / 2 + index * 25,
                width: item.minWidth,
                height: item.minHeight,
              }}
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
