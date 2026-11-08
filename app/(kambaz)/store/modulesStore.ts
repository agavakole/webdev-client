
"use client";

import { create } from "zustand";
import modulesJson from "../database/modules.json";

export type CourseModule = (typeof modulesJson)[number] & {
  editing?: boolean;
};

type ModulesStore = {
  modules: CourseModule[];
  addModule: (module: { name: string; course: string }) => void;
  deleteModule: (moduleId: string) => void;
  updateModule: (module: CourseModule) => void;
  editModule: (moduleId: string) => void;
};

export const useModulesStore = create<ModulesStore>((set) => ({
  modules: modulesJson as CourseModule[],

  addModule: (module) =>
    set((state) => ({
      modules: [
        ...state.modules,
        {
          _id: crypto.randomUUID(),
          name: module.name,
          description: "",
          course: module.course,
          lessons: [],
        },
      ],
    })),

  deleteModule: (moduleId) =>
    set((state) => ({
      modules: state.modules.filter((module) => module._id !== moduleId),
    })),

  updateModule: (module) =>
    set((state) => ({
      modules: state.modules.map((item) =>
        item._id === module._id ? module : item
      ),
    })),

  editModule: (moduleId) =>
    set((state) => ({
      modules: state.modules.map((module) =>
        module._id === moduleId ? { ...module, editing: true } : module
      ),
    })),
}));
