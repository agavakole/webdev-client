"use client";

import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import {
  emptyCourse,
  useCoursesStore,
  type Course,
} from "../store/coursesStore";
import { useAccountContext } from "../account/AccountContext";
import * as client from "../courses/client";

export default function Dashboard() {
  const courses = useCoursesStore((state) => state.courses);
  const setCourses = useCoursesStore((state) => state.setCourses);
  const addCourse = useCoursesStore((state) => state.addCourse);
  const deleteCourse = useCoursesStore((state) => state.deleteCourse);
  const updateCourse = useCoursesStore((state) => state.updateCourse);
  const { currentUser } = useAccountContext();

  const [course, setCourse] = useState<Course>(emptyCourse);

  useEffect(() => {
    const loadCourses = async () => {
      if (!currentUser) {
        setCourses([]);
        return;
      }

      try {
        const enrolledCourses = await client.findMyCourses();
        setCourses(enrolledCourses);
      } catch {
        setCourses([]);
      }
    };

    loadCourses();
  }, [currentUser, setCourses]);

  const onAddCourse = async () => {
    const newCourse = await client.createCourse(course);
    addCourse(newCourse);
    setCourse(emptyCourse);
  };

  const onDeleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    deleteCourse(courseId);
  };

  const onUpdateCourse = async () => {
    const savedCourse = await client.updateCourse(course);
    updateCourse(savedCourse);
  };

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
          onClick={onAddCourse}
        >
          Add
        </button>
        <button
          type="button"
          className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
          id="wd-update-course-click"
          onClick={onUpdateCourse}
        >
          Update
        </button>
      </h5>

      <input
        className="mb-2 mt-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        placeholder="Course name"
        value={course.name}
        onChange={(event) => setCourse({ ...course, name: event.target.value })}
        id="wd-course-name"
      />

      <textarea
        className="mb-3 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        rows={3}
        placeholder="Course description"
        value={course.description}
        onChange={(event) =>
          setCourse({ ...course, description: event.target.value })
        }
        id="wd-course-description"
      />

      <input
        className="mb-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        placeholder="My course number"
        value={course.number}
        onChange={(event) => setCourse({ ...course, number: event.target.value })}
        id="wd-my-course-number"
      />

      <label className="mb-2 block">
        My course start date
        <input
          type="date"
          className="ml-2 rounded border border-neutral-300 px-3 py-1.5"
          value={course.startDate}
          onChange={(event) => setCourse({ ...course, startDate: event.target.value })}
          id="wd-course-start-date"
        />
      </label>

      <hr />

      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>
      <hr />

      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        {courses.map((item) => (
          <CourseCard
            key={item._id}
            course={item}
            onEdit={() => setCourse(item)}
            onDelete={() => onDeleteCourse(item._id)}
          />
        ))}
      </div>
    </div>
  );
}
