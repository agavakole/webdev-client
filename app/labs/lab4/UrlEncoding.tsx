"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function UrlEncoding() {
  const [a, setA] = useState("5");
  const [b, setB] = useState("10");

  // Your own third number
  const [thirdNumber, setThirdNumber] = useState("3");

  // AI sample third number
  const [c, setC] = useState("2");

  const router = useRouter();
  const baseUrl = "/labs/lab4/url-encoding";

  const goToQueryVersion = () => {
    router.push(
      `${baseUrl}/query-params?a=${encodeURIComponent(a)}&b=${encodeURIComponent(b)}&thirdNumber=${encodeURIComponent(thirdNumber)}&c=${encodeURIComponent(c)}`,
    );
  };

  const goToPathVersion = () => {
    router.push(
      `${baseUrl}/path-params/${encodeURIComponent(a)}/${encodeURIComponent(b)}/${encodeURIComponent(thirdNumber)}`,
    );
  };

  return (
    <div id="wd-url-encoding">
      <h2>Encoding State in the URL</h2>
      <p>Enter three numbers and navigate using buttons or links:</p>

      <input
        type="number"
        value={a}
        onChange={(e) => setA(e.target.value)}
        className="mb-2 block w-full rounded border border-neutral-300 px-3 py-1.5"
        id="wd-url-a"
      />

      <input
        type="number"
        value={b}
        onChange={(e) => setB(e.target.value)}
        className="mb-2 block w-full rounded border border-neutral-300 px-3 py-1.5"
        id="wd-url-b"
      />

      <input
        type="number"
        value={thirdNumber}
        onChange={(e) => setThirdNumber(e.target.value)}
        className="mb-2 block w-full rounded border border-neutral-300 px-3 py-1.5"
        id="wd-url-third-number"
      />

      <input
        type="number"
        value={c}
        onChange={(e) => setC(e.target.value)}
        className="mb-3 block w-full rounded border border-neutral-300 px-3 py-1.5"
        id="wd-url-c"
      />

      <h4>Programmatic navigation (using router.push):</h4>

      <button
        type="button"
        onClick={goToQueryVersion}
        className="mb-2 block w-full rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
        id="wd-url-query-programmatic"
      >
        Query Parameters
      </button>

      <button
        type="button"
        onClick={goToPathVersion}
        className="mb-3 block w-full rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
        id="wd-url-path-programmatic"
      >
        Path Parameters
      </button>

      <h4>Declarative navigation (using Link):</h4>

      <Link
        href={`${baseUrl}/query-params?a=${encodeURIComponent(a)}&b=${encodeURIComponent(b)}&thirdNumber=${encodeURIComponent(thirdNumber)}&c=${encodeURIComponent(c)}`}
        className="mb-2 block w-full rounded bg-blue-600 px-3 py-1.5 text-center text-sm font-medium text-white no-underline"
        id="wd-url-query-link"
      >
        Query Parameters (Link)
      </Link>

      <Link
        href={`${baseUrl}/path-params/${encodeURIComponent(a)}/${encodeURIComponent(b)}/${encodeURIComponent(thirdNumber)}`}
        className="mb-2 block w-full rounded bg-blue-600 px-3 py-1.5 text-center text-sm font-medium text-white no-underline"
        id="wd-url-path-link"
      >
        Path Parameters (Link)
      </Link>

      <hr />
    </div>
  );
}
