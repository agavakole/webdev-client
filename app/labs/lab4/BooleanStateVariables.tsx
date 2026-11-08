"use client";

import { useState } from "react";

export default function BooleanStateVariables() {
  const [done, setDone] = useState(true);
  const [urgent, setUrgent] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <div id="wd-boolean-state-variables">
      <h2>Boolean State Variables</h2>

      <label>
        <input
          type="checkbox"
          checked={done}
          onChange={(e) => setDone(e.target.checked)}
          id="wd-boolean-done"
        />
        Done
      </label>

      {done && <div>Congratulations! This task is done.</div>}

      <hr />

      <label>
        <input
          type="checkbox"
          checked={urgent}
          onChange={(e) => setUrgent(e.target.checked)}
          id="wd-boolean-urgent"
        />
        Urgent
      </label>

      {urgent && <div>This task is urgent!</div>}

      <hr />

      <label>
        <input
          type="checkbox"
          checked={saved}
          onChange={(e) => setSaved(e.target.checked)}
          id="wd-boolean-saved"
        />
        Saved
      </label>

      {saved && <div>Saved</div>}

      <hr />
    </div>
  );
}
