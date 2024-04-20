import { useState } from "react";
import { Rnd } from "react-rnd";

function Win() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dimension, setDimension] = useState({ width: 550, height: 380 });

  return (
    <Rnd
      className="text-white bg-slate-700"
      size={dimension}
      position={position}
      onDragStop={(_, d) => {
        setPosition({ x: d.x, y: d.y });
      }}
      onResizeStop={(e, _, ref) => {
        setDimension({
          width: ref.style.width,
          height: ref.style.height,
        });
      }}
    >
      001
    </Rnd>
  );
}

export default Win;
