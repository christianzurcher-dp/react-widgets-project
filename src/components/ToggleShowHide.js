import { useState } from "react";

export default function ToggleShowHide() {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="toggle-show-hide">
      <h1>{toggle && "Hide Me"}</h1>
      <button onClick={() => setToggle((toggle) => !toggle)}>Hide Text</button>
    </div>
  );
}
