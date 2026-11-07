"use client";

type PassingFunctionsProps = {
  message: string;
  theFunction: (message: string) => void;
  sayKole: () => void;
  theOtherFunction: () => void;
};

export default function PassingFunctions({
  message,
  theFunction,
  sayKole,
  theOtherFunction,
}: PassingFunctionsProps) {
  return (
    <div id="wd-passing-functions">
      <h2>Passing Functions</h2>

      <button
        type="button"
        onClick={() => theFunction(`From parent: ${message}`)}
        id="wd-pass-functions-click"
        className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Call Parent Function
      </button>

      <button
        type="button"
        onClick={sayKole}
        id="wd-pass-functions-kole-click"
        className="ml-2 rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Say Hello to Kole
      </button>

      <button
        type="button"
        onClick={theOtherFunction}
        id="wd-pass-functions-other-click"
        className="ml-2 rounded bg-gray-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Call Sample Function
      </button>

      <hr />
    </div>
  );
}
