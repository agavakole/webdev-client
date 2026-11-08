"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(7);

  return (
    <div id="wd-counter">
      <h2>Counter</h2>
      <h3>{count}</h3>

      <button
        type="button"
        onClick={() => setCount(count + 1)}
        className="me-2 rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Up
      </button>

      <button
        type="button"
        onClick={() => setCount(count - 1)}
        className="me-2 rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Down
      </button>

      <button
        type="button"
        onClick={() => setCount(7)}
        className="me-2 rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Reset
      </button>

      <button
        type="button"
        id="wd-counter-reset-click"
        onClick={() => setCount(7)}
        className="rounded bg-gray-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Reset to 7
      </button>

      <hr />
    </div>
  );
}
