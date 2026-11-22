"use client";

import { useState } from "react";

type Calculation = {
  a?: number;
  b?: number;
  operation?: string;
  result?: number;
  error?: string;
};

export default function Calculator() {
  const [a, setA] = useState("3");
  const [b, setB] = useState("5");
  const [operation, setOperation] = useState("add");
  const [calculation, setCalculation] = useState<Calculation>({});

  const calculate = async () => {
    const response = await fetch(
      `/api/lab5/calculator?a=${a}&b=${b}&operation=${operation}`
    );
    const data = await response.json();
    setCalculation(data);
  };

  const operationSymbol = () => {
    if (operation === "add") return "+";
    if (operation === "subtract") return "-";
    if (operation === "multiply") return "×";
    return "÷";
  };

  return (
    <div id="wd-next-calculator" className="space-y-3">
      <h3>Calculator (Next.js Web API)</h3>

      <div className="flex flex-wrap items-center gap-2">
        <label htmlFor="wd-calculator-a">A:</label>
        <input
          id="wd-calculator-a"
          className="w-24 rounded border px-2 py-1"
          value={a}
          onChange={(event) => setA(event.target.value)}
        />
        <label htmlFor="wd-calculator-b">B:</label>
        <input
          id="wd-calculator-b"
          className="w-24 rounded border px-2 py-1"
          value={b}
          onChange={(event) => setB(event.target.value)}
        />
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <label htmlFor="wd-calculator-operation">Operation:</label>
        <select
          id="wd-calculator-operation"
          className="rounded border px-2 py-1"
          value={operation}
          onChange={(event) => setOperation(event.target.value)}
        >
          <option value="add">+</option>
          <option value="subtract">−</option>
          <option value="multiply">×</option>
          <option value="divide">÷</option>
        </select>
        <button
          id="wd-calculator-calculate"
          type="button"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
          onClick={calculate}
        >
          Calculate
        </button>
      </div>

      <input
        id="wd-calculator-result"
        className="w-full rounded border px-2 py-1"
        readOnly
        value={
          calculation.error
            ? calculation.error
            : calculation.result !== undefined
              ? `${calculation.a} ${operationSymbol()} ${calculation.b} = ${calculation.result}`
              : ""
        }
      />
    </div>
  );
}
