"use client";

import { create } from "zustand";
import assignmentsJson from "../database/assignments.json";

export type Assignment = (typeof assignmentsJson)[number] & {
  editing?: boolean;
  until?: string;
};

type AssignmentsStore = {
  assignments: Assignment[];
  setAssignments: (assignments: Assignment[]) => void;
  addAssignment: (assignment: Assignment) => void;
  deleteAssignment: (assignmentId: string) => void;
  updateAssignment: (assignment: Assignment) => void;
  editAssignment: (assignmentId: string) => void;
};

export const useAssignmentsStore = create<AssignmentsStore>((set) => ({
  assignments: [],

  setAssignments: (assignments) => set({ assignments }),

  addAssignment: (assignment) =>
    set((state) => ({
      assignments: [...state.assignments, assignment],
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
