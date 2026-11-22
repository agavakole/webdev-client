"use client";

import { useEffect, useState } from "react";
import { fetchAssignment, updateTitle } from "./client";

type Assignment = {
  id: number;
  title: string;
  description: string;
  due: string;
  completed: boolean;
  score: number;
};

export default function WorkingWithRemoteObjectsAsync() {
  const [assignment, setAssignment] = useState<Assignment | null>(null);

  const loadAssignment = async () => {
    const remoteAssignment = await fetchAssignment();
    setAssignment(remoteAssignment);
  };

  const saveTitle = async () => {
    if (assignment) {
      const updatedAssignment = await updateTitle(assignment.title);
      setAssignment(updatedAssignment);
    }
  };

  useEffect(() => {
    loadAssignment();
  }, []);

  return (
    <div id="wd-working-with-remote-objects-async" className="space-y-3">
      <h3>Working with Objects Asynchronously</h3>
      <h4>Assignment</h4>

      {assignment && (
        <div className="space-y-2">
          <input
            id="wd-async-assignment-title"
            className="block rounded border px-2 py-1"
            value={assignment.title}
            onChange={(event) => setAssignment({ ...assignment, title: event.target.value })}
          />
          <input
            id="wd-async-assignment-due"
            type="date"
            className="block rounded border px-2 py-1"
            value={assignment.due}
            readOnly
          />
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={assignment.completed} readOnly />
            Completed
          </label>
          <button
            id="wd-async-update-assignment-title"
            type="button"
            className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
            onClick={saveTitle}
          >
            Update Title
          </button>
        </div>
      )}

      <pre id="wd-async-assignment-json" className="overflow-x-auto rounded bg-gray-100 p-3 text-sm">
        {JSON.stringify(assignment, null, 2)}
      </pre>
    </div>
  );
}
