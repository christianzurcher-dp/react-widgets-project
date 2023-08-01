import { useState } from "react";

export default function CounterWidget() {
  const [count, setCount] = useState(1);

  return (
    <div className="counter-widget">
      <h1>counter: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>Add</button>
      <button
        onClick={() => (count !== 1 ? setCount((count) => count - 1) : null)}
      >
        Subtract
      </button>
    </div>
  );
}
