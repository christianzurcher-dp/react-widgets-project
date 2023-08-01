import { useState } from "react";

export default function ToggleGreeting() {
  const [greeting, setGreeting] = useState(true);

  return (
    <div className="toggle-greeting">
      <h1>{greeting === true ? "Hello" : "Goodbye"}</h1>
      <button onClick={() => setGreeting((greeting) => !greeting)}>
        Toggle
      </button>
    </div>
  );
}
