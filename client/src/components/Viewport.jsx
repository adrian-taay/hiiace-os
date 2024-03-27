import { useContext } from "react";
import { OpenAppsContext } from "../OpenAppsProvider";
import Window from "./Window";

function Viewport() {
  const { openApps } = useContext(OpenAppsContext);

  return (
    <div>
      {openApps.map((item, index) => (
        <Window
          key={index}
          id={item.id}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
}

export default Viewport;
