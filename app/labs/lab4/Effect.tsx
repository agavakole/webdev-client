"use client";

import { useEffect, useState } from "react";

export default function Effect() {
  const [name, setName] = useState("Kole");
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `${name} clicked ${count} times`;
    console.log(name, count);
  }, [name, count]);

  return (
    <div id="wd-effect">
      <h2>useEffect</h2>
      <p>
        The document title updates after React paints, whenever name or count
        changes.
      </p>

      <label>
        Name:
        <input
          className="ml-2 rounded border border-neutral-300 px-2 py-1"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="wd-effect-name"
        />
      </label>

      <p>Clicked {count}</p>

      <button
        type="button"
        onClick={() => setCount(count + 1)}
        className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        id="wd-effect-click"
      >
        Click me
      </button>
    </div>
  );
}
