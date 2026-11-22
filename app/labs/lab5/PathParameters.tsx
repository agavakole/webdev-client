"use client";

import { useState } from "react";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function PathParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");

  return (
    <div id="wd-path-parameters" className="space-y-3">
      <h4>Path Parameters</h4>
      <div className="flex gap-2">
        <input
          className="rounded border px-2 py-1"
          value={a}
          onChange={(event) => setA(event.target.value)}
          aria-label="First number"
        />
        <input
          className="rounded border px-2 py-1"
          value={b}
          onChange={(event) => setB(event.target.value)}
          aria-label="Second number"
        />
      </div>
      <div className="flex flex-wrap gap-2">
        <a id="wd-path-parameter-add" className="rounded bg-blue-600 px-3 py-1.5 text-white" href={`${HTTP_SERVER}/lab5/add/${a}/${b}`}>
          Add {a} + {b}
        </a>
        <a id="wd-path-parameter-subtract" className="rounded bg-blue-600 px-3 py-1.5 text-white" href={`${HTTP_SERVER}/lab5/subtract/${a}/${b}`}>
          Subtract {a} - {b}
        </a>
        <a id="wd-path-parameter-multiply" className="rounded bg-blue-600 px-3 py-1.5 text-white" href={`${HTTP_SERVER}/lab5/multiply/${a}/${b}`}>
          Multiply {a} × {b}
        </a>
        <a id="wd-path-parameter-divide" className="rounded bg-blue-600 px-3 py-1.5 text-white" href={`${HTTP_SERVER}/lab5/divide/${a}/${b}`}>
          Divide {a} ÷ {b}
        </a>
      </div>
    </div>
  );
}
