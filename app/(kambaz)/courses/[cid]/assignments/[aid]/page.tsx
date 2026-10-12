import Link from "next/link";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid } = await params;

  return (
    <div id="wd-assignments-editor">
      {/* Assignment Name */}
      <div className="mb-3">
        <label htmlFor="wd-name" className="mb-1 block font-medium">
          Assignment Name
        </label>
        <input
          id="wd-name"
          defaultValue="A1 - ENV + HTML"
          className="w-full rounded border border-neutral-300 px-3 py-1.5"
        />
      </div>

      {/* Description */}
      <div className="mb-3">
        <label htmlFor="wd-description" className="mb-1 block font-medium">
          Description
        </label>
        <textarea
          id="wd-description"
          defaultValue="The assignment is available online. Submit a link to the landing page of your Web application running on Vercel."
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
          defaultValue={100}
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
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-white px-4 py-2 text-sm"
        >
          Cancel
        </Link>

        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-save"
          className="rounded bg-red-600 px-4 py-2 text-sm text-white"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
