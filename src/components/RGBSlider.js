import { useState } from "react";

export default function RGBSlider() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <div className="rgb-slider">
      <div
        className="color-box"
        style={{ backgroundColor: `rgba(${red},${green},${blue})` }}
      ></div>
      <h4>Red</h4>
      <input
        type="range"
        min={0}
        max={255}
        defaultValue={0}
        onChange={(e) => setRed(e.target.value)}
      />
      <h4>Green</h4>
      <input
        type="range"
        min={0}
        max={255}
        defaultValue={0}
        onChange={(e) => setGreen(e.target.value)}
      />
      <h4>Blue</h4>
      <input
        type="range"
        min={0}
        max={255}
        defaultValue={0}
        onChange={(e) => setBlue(e.target.value)}
      />
    </div>
  );
}
