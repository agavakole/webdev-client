"use client";

export default function CounterBroken() {
  let count = 7;

  const increment = () => {
    count++;
    console.log(count);
  };

  const decrement = () => {
    count--;
    console.log(count);
  };

  return (
    <div id="wd-counter-broken">
      <h2>Counter Broken</h2>
      <h3>{count}</h3>

      <button
        type="button"
        onClick={increment}
        className="me-2 rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Up
      </button>

      <button
        type="button"
        onClick={decrement}
        className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Down
      </button>

      <hr />
    </div>
  );
}
