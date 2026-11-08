"use client";

import { useSearchParams } from "next/navigation";

export default function QueryCalculator() {
  const searchParams = useSearchParams();

  const aRaw = searchParams.get("a") || "0";
  const bRaw = searchParams.get("b") || "0";
  const thirdNumberRaw = searchParams.get("thirdNumber") || "0";
  const cRaw = searchParams.get("c") || "0";

  const a = parseFloat(aRaw);
  const b = parseFloat(bRaw);
  const thirdNumber = parseFloat(thirdNumberRaw);

  const sum = a + b + thirdNumber;

  return (
    <div id="wd-query-calculator">
      <h1>Calculator – Query Parameters</h1>

      <p>
        a = <code>{aRaw}</code>
      </p>
      <p>
        b = <code>{bRaw}</code>
      </p>
      <p>
        Your third number = <code>{thirdNumberRaw}</code>
      </p>
      <p>
        Sample c = <code>{cRaw}</code>
      </p>

      <h2 className="text-green-700">Sum = {sum}</h2>
    </div>
  );
}
