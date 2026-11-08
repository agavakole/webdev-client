"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useAssignmentsStore } from "../../../../store/assignmentsStore";

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid: string }>();
  const router = useRouter();

  const assignment = useAssignmentsStore((state) =>
    state.assignments.find((item) => item._id === aid && item.course === cid),
  );

  const addAssignment = useAssignmentsStore((state) => state.addAssignment);
  const updateAssignment = useAssignmentsStore(
    (state) => state.updateAssignment,
  );

  const [title, setTitle] = useState(assignment?.title ?? "");
  const [description, setDescription] = useState(assignment?.description ?? "");
  const [points, setPoints] = useState(assignment?.points ?? 100);
  const [due, setDue] = useState(assignment?.due.slice(0, 10) ?? "");
  const [available, setAvailable] = useState(
    assignment?.available.slice(0, 10) ?? "",
  );
  const [until, setUntil] = useState(assignment?.until?.slice(0, 10) ?? "");

  const save = () => {
    if (aid === "new") {
      addAssignment({
        title,
        description,
        points,
        due,
        available,
        until,
        course: cid,
      });
    } else if (assignment) {
      updateAssignment({
        ...assignment,
        title,
        description,
        points,
        due,
        available,
        until,
        editing: false,
      });
    }

    router.push(`/courses/${cid}/assignments`);
  };

  return (
    <div id="wd-assignments-editor">
      {/* Assignment Name */}
      <div className="mb-3">
        <label htmlFor="wd-name" className="mb-1 block font-medium">
          Assignment Name
        </label>
        <input
          id="wd-name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded border border-neutral-300 px-3 py-1.5"
        />
        <p>Assignment id: {aid}</p>
      </div>

      {/* Description */}
      <div className="mb-3">
        <label htmlFor="wd-description" className="mb-1 block font-medium">
          Description
        </label>
        <textarea
          id="wd-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="h-32 w-full rounded border border-neutral-300 px-3 py-1.5"
        />
      </div>

      {/* Points */}
      <div className="mb-3">
        <label htmlFor="wd-points" className="mb-1 block font-medium">
          Points
        </label>
        <input
          id="wd-points"
          type="number"
          value={points}
          onChange={(e) => setPoints(Number(e.target.value))}
          className="w-full rounded border border-neutral-300 px-3 py-1.5"
        />
      </div>

      {/* Assignment Group */}
      <div className="mb-3">
        <label htmlFor="wd-group" className="mb-1 block font-medium">
          Assignment Group
        </label>
        <select
          id="wd-group"
          className="w-full rounded border border-neutral-300 px-3 py-1.5"
        >
          <option>ASSIGNMENTS</option>
          <option>QUIZZES</option>
          <option>EXAMS</option>
          <option>PROJECT</option>
        </select>
      </div>

      {/* Display Grade as */}
      <div className="mb-3">
        <label htmlFor="wd-display-grade-as" className="mb-1 block font-medium">
          Display Grade as
        </label>
        <select
          id="wd-display-grade-as"
          className="w-full rounded border border-neutral-300 px-3 py-1.5"
        >
          <option>Percentage</option>
          <option>Points</option>
        </select>
      </div>

      {/* Submission Type */}
      <div className="mb-3">
        <label htmlFor="wd-submission-type" className="mb-1 block font-medium">
          Submission Type
        </label>
        <select
          id="wd-submission-type"
          className="w-full rounded border border-neutral-300 px-3 py-1.5"
        >
          <option>Online</option>
          <option>In Person</option>
        </select>
      </div>

      {/* Online Entry Options */}
      <div className="mb-3">
        <label className="mb-1 block font-medium">Online Entry Options</label>

        <div className="flex items-center gap-2">
          <input type="checkbox" id="wd-text-entry" />
          <label htmlFor="wd-text-entry">Text Entry</label>
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" id="wd-website-url" />
          <label htmlFor="wd-website-url">Website URL</label>
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" id="wd-media-recordings" />
          <label htmlFor="wd-media-recordings">Media Recordings</label>
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" id="wd-student-annotation" />
          <label htmlFor="wd-student-annotation">Student Annotation</label>
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" id="wd-file-upload" />
          <label htmlFor="wd-file-upload">File Upload</label>
        </div>
      </div>

      {/* Assign to */}
      <div className="mb-3">
        <label htmlFor="wd-assign-to" className="mb-1 block font-medium">
          Assign to
        </label>
        <input
          id="wd-assign-to"
          defaultValue="Everyone"
          className="w-full rounded border border-neutral-300 px-3 py-1.5"
        />
      </div>

      {/* Due */}
      <div className="mb-3">
        <label htmlFor="wd-due-date" className="mb-1 block font-medium">
          Due
        </label>
        <input
          type="date"
          id="wd-due-date"
          value={due}
          onChange={(e) => setDue(e.target.value)}
          className="w-full rounded border border-neutral-300 px-3 py-1.5"
        />
      </div>

      {/* Available from */}
      <div className="mb-3">
        <label htmlFor="wd-available-from" className="mb-1 block font-medium">
          Available from
        </label>
        <input
          type="date"
          id="wd-available-from"
          value={available}
          onChange={(e) => setAvailable(e.target.value)}
          className="w-full rounded border border-neutral-300 px-3 py-1.5"
        />
      </div>

      {/* Until */}
      <div className="mb-3">
        <label htmlFor="wd-available-until" className="mb-1 block font-medium">
          Until
        </label>
        <input
          type="date"
          id="wd-available-until"
          value={until}
          onChange={(e) => setUntil(e.target.value)}
          className="w-full rounded border border-neutral-300 px-3 py-1.5"
        />
      </div>

      {/* AI sample notes */}
      <div id="wd-ai-editor-notes" className="mb-3">
        <label htmlFor="wd-ai-notes" className="mb-1 block font-medium">
          Sample notes
        </label>
        <textarea
          id="wd-ai-notes"
          className="w-full rounded border border-neutral-300 px-3 py-1.5"
        />
      </div>

      <hr />

      {/* Buttons */}
      <div className="mt-4 flex justify-end gap-2">
        <button
          type="button"
          id="wd-cancel"
          onClick={() => router.push(`/courses/${cid}/assignments`)}
          className="rounded border border-neutral-300 bg-white px-4 py-2 text-sm"
        >
          Cancel
        </button>

        <button
          type="button"
          id="wd-save"
          onClick={save}
          className="rounded bg-red-600 px-4 py-2 text-sm text-white"
        >
          Save
        </button>
      </div>
    </div>
  );
}
