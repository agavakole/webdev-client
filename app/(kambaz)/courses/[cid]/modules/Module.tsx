"use client";

import type { ReactNode } from "react";
import GreenCheckmark from "./GreenCheckmark";
import ModuleControlButtons from "./ModuleControlButtons";
import type { CourseModule } from "../../../store/modulesStore";

export default function Module({
  module,
  children,
  onRemove,
  onUpdate,
}: {
  module: CourseModule;
  children?: ReactNode;
  onRemove: () => void;
  onUpdate: (module: CourseModule) => void;
}) {
  return (
    <li className="wd-module mb-5 overflow-hidden border border-neutral-400 p-0">
      <div className="wd-title flex items-center justify-between bg-neutral-200 p-3">
        {module.editing ? (
          <input
            defaultValue={module.name}
            className="rounded border border-neutral-300 px-2 py-1"
            autoFocus
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                onUpdate({
                  ...module,
                  name: event.currentTarget.value,
                  editing: false,
                });
              }
            }}
          />
        ) : (
          <span>{module.name}</span>
        )}

        <div className="flex items-center gap-3">
          <GreenCheckmark />
          <ModuleControlButtons moduleId={module._id} onRemove={onRemove} />
        </div>
      </div>

      <ul className="wd-lessons m-0 list-none p-0">{children}</ul>
    </li>
  );
}
