import { useCounterContext } from "./CounterContext";

export default function ContextCounterWrite() {
  const { count, setCount } = useCounterContext();

  return (
    <div id="wd-context-counter-write">
      <h3>Writer</h3>

      <button
        type="button"
        onClick={() => setCount(count + 1)}
        id="wd-context-up-click"
      >
        Up
      </button>

      <button
        type="button"
        onClick={() => setCount(count - 1)}
        id="wd-context-down-click"
      >
        Down
      </button>

      <button type="button" onClick={() => setCount(7)}>
        My Reset
      </button>

      <button
        type="button"
        onClick={() => setCount(7)}
        id="wd-context-reset-click"
      >
        Sample Reset
      </button>
    </div>
  );
}
