import { useContext } from "react";
import { OpenAppsContext } from "../OpenAppsProvider";
import Window from "./Window";
import ConkyLinux from "./ConkyLinux/ConkyLinux";

function Viewport() {
  const viewportWidth = document.body.clientWidth;
  const viewportHeight = document.body.clientHeight;
  const { openApps } = useContext(OpenAppsContext);

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
                x: (viewportWidth - 550) / 2 + index * 25,
                y: (viewportHeight - 550) / 2 + index * 25,
                width: 550,
                height: 380,
              }}
            />
          );
        })}
      </div>
    </>
  );
}

export default Viewport;
