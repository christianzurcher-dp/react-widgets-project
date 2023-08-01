import { useState } from "react";

export default function ColorChanger() {
  const [text, setText] = useState("");
  const [textInput, setTextInput] = useState("");

  const handleClick = () => {
    setText(textInput);
  };

  return (
    <div className="color-changer">
      <h1 style={{ color: text }}>{text}</h1>
      <input
        type="text"
        value={textInput}
        onChange={(input) => setTextInput(input.target.value)}
      />
      <button onClick={handleClick}>update</button>
    </div>
  );
}
