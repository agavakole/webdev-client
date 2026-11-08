
"use client";

import { create } from "zustand";
import assignmentsJson from "../database/assignments.json";

export type Assignment = (typeof assignmentsJson)[number] & {
  editing?: boolean;
  until?: string;
};

type AssignmentsStore = {
  assignments: Assignment[];
  addAssignment: (assignment: {
    title: string;
    description: string;
    points: number;
    due: string;
    available: string;
    until: string;
    course: string;
  }) => void;
  deleteAssignment: (assignmentId: string) => void;
  updateAssignment: (assignment: Assignment) => void;
  editAssignment: (assignmentId: string) => void;
};

export const useAssignmentsStore = create<AssignmentsStore>((set) => ({
  assignments: assignmentsJson as Assignment[],

  addAssignment: (assignment) =>
    set((state) => ({
      assignments: [
        ...state.assignments,
        {
          _id: crypto.randomUUID(),
          title: assignment.title,
          description: assignment.description,
          points: assignment.points,
          due: assignment.due,
          available: assignment.available,
          until: assignment.until,
          course: assignment.course,
        },
      ],
    })),

  deleteAssignment: (assignmentId) =>
    set((state) => ({
      assignments: state.assignments.filter(
        (assignment) => assignment._id !== assignmentId
      ),
    })),

  updateAssignment: (assignment) =>
    set((state) => ({
      assignments: state.assignments.map((item) =>
        item._id === assignment._id ? assignment : item
      ),
    })),

  editAssignment: (assignmentId) =>
    set((state) => ({
      assignments: state.assignments.map((assignment) =>
        assignment._id === assignmentId
          ? { ...assignment, editing: true }
          : assignment
      ),
    })),
}));
