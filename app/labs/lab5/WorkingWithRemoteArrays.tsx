"use client";

import { useState } from "react";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const API = `${HTTP_SERVER}/lab5/todos`;

export default function WorkingWithRemoteArrays() {
  const [todo, setTodo] = useState({
    id: "1",
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    completed: false,
  });

  return (
    <div id="wd-working-with-remote-arrays" className="space-y-5">
      <h3>Working with Arrays</h3>

      <section className="space-y-2">
        <h4>Retrieving Arrays</h4>
        <a id="wd-retrieve-todos" className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white" href={API}>
          Get Todos
        </a>
      </section>

      <section className="space-y-2">
        <h4>Retrieving an Item from an Array by ID</h4>
        <div className="flex flex-wrap items-center gap-2">
          <a id="wd-retrieve-todo-by-id" className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white" href={`${API}/${todo.id}`}>
            Get Todo by ID
          </a>
          <input
            id="wd-todo-id"
            className="rounded border px-2 py-1"
            value={todo.id}
            onChange={(event) => setTodo({ ...todo, id: event.target.value })}
          />
        </div>
      </section>

      <section className="space-y-2">
        <h4>Filtering Array Items</h4>
        <a id="wd-retrieve-completed-todos" className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white" href={`${API}?completed=true`}>
          Get Completed Todos
        </a>
      </section>

      <section className="space-y-2">
        <h4>Creating new Items in an Array</h4>
        <a id="wd-create-todo" className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white" href={`${API}/create`}>
          Create Todo
        </a>
      </section>

      <section className="space-y-2">
        <h4>Removing from an Array</h4>
        <a id="wd-remove-todo" className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white" href={`${API}/${todo.id}/delete`}>
          Remove Todo with ID = {todo.id}
        </a>
      </section>

      <section className="space-y-2">
        <h4>Updating an Item in an Array</h4>
        <div className="flex flex-wrap items-center gap-2">
          <a
            id="wd-update-todo-title"
            className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
            href={`${API}/${todo.id}/title/${encodeURIComponent(todo.title)}`}
          >
            Update Todo
          </a>
          <input
            id="wd-todo-title"
            className="rounded border px-2 py-1"
            value={todo.title}
            onChange={(event) => setTodo({ ...todo, title: event.target.value })}
          />
        </div>
      </section>

      <section className="space-y-2">
        <h4>On Your Own: Update Todo Properties</h4>
        <div className="flex flex-wrap items-center gap-2">
          <a
            id="wd-update-todo-completed"
            className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
            href={`${API}/${todo.id}/completed/${todo.completed}`}
          >
            Complete Todo ID = {todo.id}
          </a>
          <input
            id="wd-todo-completed"
            type="checkbox"
            checked={todo.completed}
            onChange={(event) => setTodo({ ...todo, completed: event.target.checked })}
          />
          <label htmlFor="wd-todo-completed">Completed</label>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <a
            id="wd-update-todo-description"
            className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
            href={`${API}/${todo.id}/description/${encodeURIComponent(todo.description)}`}
          >
            Describe Todo ID = {todo.id}
          </a>
          <input
            id="wd-todo-description"
            className="rounded border px-2 py-1"
            value={todo.description}
            onChange={(event) => setTodo({ ...todo, description: event.target.value })}
          />
        </div>
      </section>
    </div>
  );
}
