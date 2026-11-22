"use client";

import { create } from "zustand";
import modulesJson from "../database/modules.json";

export type CourseModule = (typeof modulesJson)[number] & {
  editing?: boolean;
};

type ModulesStore = {
  modules: CourseModule[];
  setModules: (modules: CourseModule[]) => void;
  addModule: (module: CourseModule) => void;
  deleteModule: (moduleId: string) => void;
  updateModule: (module: CourseModule) => void;
  editModule: (moduleId: string) => void;
};

export const useModulesStore = create<ModulesStore>((set) => ({
  modules: [],

  setModules: (modules) => set({ modules }),

  addModule: (module) =>
    set((state) => ({
      modules: [...state.modules, module],
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
