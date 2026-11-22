"use client";

import { useState } from "react";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`;
const MODULE_API_URL = `${HTTP_SERVER}/lab5/module`;

export default function WorkingWithRemoteObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  const [module, setModule] = useState({
    id: "1",
    name: "Introduction to Node.js",
    description: "Learn Express HTTP routes",
    course: "CS5610",
  });

  return (
    <div id="wd-working-with-remote-objects" className="space-y-5">
      <h3>Working With Objects</h3>

      <section className="space-y-2">
        <h4>Retrieving Objects</h4>
        <a
          id="wd-retrieve-assignments"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
          href={ASSIGNMENT_API_URL}
        >
          Get Assignment
        </a>
      </section>

      <section className="space-y-2">
        <h4>Retrieving Properties</h4>
        <a
          id="wd-retrieve-assignment-title"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
          href={`${ASSIGNMENT_API_URL}/title`}
        >
          Get Title
        </a>
      </section>

      <section className="space-y-2">
        <h4>Modifying Properties</h4>
        <div className="flex flex-wrap items-center gap-2">
          <a
            id="wd-update-assignment-title"
            className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
            href={`${ASSIGNMENT_API_URL}/title/${encodeURIComponent(assignment.title)}`}
          >
            Update Title
          </a>
          <input
            id="wd-assignment-title"
            className="rounded border px-2 py-1"
            value={assignment.title}
            onChange={(event) => setAssignment({ ...assignment, title: event.target.value })}
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <a
            id="wd-update-assignment-score"
            className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
            href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
          >
            Update Score
          </a>
          <input
            id="wd-assignment-score"
            type="number"
            className="rounded border px-2 py-1"
            value={assignment.score}
            onChange={(event) => setAssignment({ ...assignment, score: Number(event.target.value) })}
          />
        </div>

        <div className="flex items-center gap-2">
          <a
            id="wd-update-assignment-completed"
            className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
            href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
          >
            Update Completed
          </a>
          <input
            id="wd-assignment-completed"
            type="checkbox"
            checked={assignment.completed}
            onChange={(event) => setAssignment({ ...assignment, completed: event.target.checked })}
          />
          <label htmlFor="wd-assignment-completed">Completed</label>
        </div>
      </section>

      <section className="space-y-3">
        <h4>Module (On Your Own)</h4>
        <div className="flex flex-wrap gap-2">
          <a
            id="wd-retrieve-module"
            className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
            href={MODULE_API_URL}
          >
            Get Module
          </a>
          <a
            id="wd-retrieve-module-name"
            className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
            href={`${MODULE_API_URL}/name`}
          >
            Get Module Name
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <a
            id="wd-update-module-name"
            className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
            href={`${MODULE_API_URL}/name/${encodeURIComponent(module.name)}`}
          >
            Update Module Name
          </a>
          <input
            id="wd-module-name"
            className="rounded border px-2 py-1"
            value={module.name}
            onChange={(event) => setModule({ ...module, name: event.target.value })}
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <a
            id="wd-update-module-description"
            className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
            href={`${MODULE_API_URL}/description/${encodeURIComponent(module.description)}`}
          >
            Update Module Description
          </a>
          <input
            id="wd-module-description"
            className="rounded border px-2 py-1"
            value={module.description}
            onChange={(event) => setModule({ ...module, description: event.target.value })}
          />
        </div>
      </section>
    </div>
  );
}
