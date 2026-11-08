"use client";

import { useState } from "react";
import CourseCard from "./CourseCard";
import {
  emptyCourse,
  useCoursesStore,
  type Course,
} from "../store/coursesStore";
import { useAccountContext } from "../account/AccountContext";
import * as db from "../database";

export default function Dashboard() {
  const courses = useCoursesStore((state) => state.courses);
  const addCourse = useCoursesStore((state) => state.addCourse);
  const updateCourse = useCoursesStore((state) => state.updateCourse);

  const { currentUser } = useAccountContext();

  const [course, setCourse] = useState<Course>(emptyCourse);

  const visibleCourses = currentUser
    ? courses.filter((c) =>
        db.enrollments.some(
          (enrollment) =>
            enrollment.user === currentUser._id && enrollment.course === c._id,
        ),
      )
    : courses;

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      <h5 className="flex flex-wrap items-center gap-2">
        New Course
        <button
          type="button"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
          id="wd-add-new-course-click"
          onClick={() => addCourse(course)}
        >
          Add
        </button>
        <button
          type="button"
          className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
          id="wd-update-course-click"
          onClick={() => updateCourse(course)}
        >
          Update
        </button>
      </h5>

      <input
        className="mb-2 mt-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        placeholder="Course name"
        value={course.name}
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
        id="wd-course-name"
      />

      <textarea
        className="mb-3 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        rows={3}
        placeholder="Course description"
        value={course.description}
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
        id="wd-course-description"
      />

      {/* Your On your own: course number */}
      <input
        className="mb-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        placeholder="My course number"
        value={course.number}
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
        id="wd-my-course-number"
      />

      {/* Your On your own: start date */}
      <label className="mb-2 block">
        My course start date
        <input
          type="date"
          className="ml-2 rounded border border-neutral-300 px-3 py-1.5"
          value={course.startDate}
          onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
          id="wd-course-start-date"
        />
      </label>

      {/* With AI: sample course-number field */}
      <input
        className="mb-3 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        placeholder="Sample course number"
        value={course.number}
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
        id="wd-course-number"
      />

      <hr />

      <h2 id="wd-dashboard-published">
        Published Courses ({visibleCourses.length})
      </h2>

      <hr />

      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        {visibleCourses.map((c) => (
          <CourseCard key={c._id} course={c} onEdit={() => setCourse(c)} />
        ))}
      </div>
    </div>
  );
}
