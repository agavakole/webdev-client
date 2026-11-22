"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import Module from "./Module";
import ModuleEditor from "./ModuleEditor";
import Lesson from "./Lesson";
import { useModulesStore, type CourseModule } from "../../../store/modulesStore";
import * as client from "../../client";

export default function Modules() {
  const { cid } = useParams();
  const courseId = typeof cid === "string" ? cid : "";

  const modules = useModulesStore((state) => state.modules);
  const setModules = useModulesStore((state) => state.setModules);
  const addModule = useModulesStore((state) => state.addModule);
  const deleteModule = useModulesStore((state) => state.deleteModule);
  const updateModule = useModulesStore((state) => state.updateModule);

  useEffect(() => {
    const loadModules = async () => {
      const courseModules = await client.findModulesForCourse(courseId);
      setModules(courseModules);
    };

    if (courseId) {
      loadModules();
    }
  }, [courseId, setModules]);

  const onAddModule = async (moduleName: string) => {
    const createdModule = await client.createModuleForCourse(courseId, {
      name: moduleName,
      description: "",
      lessons: [],
    });
    addModule(createdModule);
  };

  const onRemoveModule = async (moduleId: string) => {
    await client.deleteModule(moduleId);
    deleteModule(moduleId);
  };

  const onUpdateModule = async (module: CourseModule) => {
    const savedModule = await client.updateModule(module);
    updateModule(savedModule);
  };

  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <button
          type="button"
          className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
        >
          Collapse All
        </button>

        <button
          type="button"
          className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
        >
          View Progress
        </button>

        <select
          defaultValue="publish-all"
          className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
        >
          <option value="publish-all">Publish All</option>
          <option value="unpublish-all">Unpublish All</option>
        </select>

        <ModuleEditor onAddModule={onAddModule} />
      </div>

      <ul id="wd-modules" className="m-0 list-none p-0">
        {modules.map((module) => (
          <Module
            key={module._id}
            module={module}
            onRemove={() => onRemoveModule(module._id)}
            onUpdate={onUpdateModule}
          >
            {module.lessons?.map((lesson) => (
              <Lesson key={lesson._id} title={lesson.name} />
            ))}
          </Module>
        ))}
      </ul>
    </div>
  );
}
