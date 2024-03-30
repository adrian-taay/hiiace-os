import { useContext, useEffect } from "react";
import { OpenAppsContext } from "../../providers/OpenAppsProvider";
import Window from "../../templates/Window";
import ConkyLinux from "../../components/ConkyLinux/ConkyLinux";

function Viewport() {
  const viewportWidth = document.body.clientWidth;
  const viewportHeight = document.body.clientHeight;
  const { openApps, shutDownScreen, setShowScreen } =
    useContext(OpenAppsContext);

  // I didn't know that I can create error handling outside the JSX.
  useEffect(() => {
    if (shutDownScreen[0].modal == undefined) {
      setShowScreen(true);
    }
  });

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
      {shutDownScreen.length === 1 ? shutDownScreen[0].modal : null}
    </>
  );
}

export default Viewport;
