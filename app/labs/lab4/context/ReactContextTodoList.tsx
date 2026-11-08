"use client";

import { useState } from "react";
import { useTodosContext, type Todo } from "./todosContext";

export default function ReactContextTodoList() {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodosContext();

  const [newTitle, setNewTitle] = useState("");
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);

  const handleAdd = () => {
    addTodo(newTitle);
    setNewTitle("");
  };

  const handleUpdate = () => {
    if (editingTodo) {
      updateTodo(editingTodo);
      setEditingTodo(null);
    }
  };

  return (
    <div id="wd-react-context-todo-list">
      <h3>React Context Todo List</h3>

      <input
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        placeholder="New todo title"
        id="wd-context-todo-title"
        className="rounded border border-neutral-300 px-3 py-1.5"
      />

      <button
        type="button"
        onClick={handleAdd}
        id="wd-context-add-todo-click"
        className="ml-2 rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Add
      </button>

      <ul className="mt-3 max-w-lg list-none p-0">
        {todos.map((todo) => (
          <li key={todo.id} className="mb-2 flex items-center gap-2">
            {editingTodo?.id === todo.id ? (
              <>
                <input
                  value={editingTodo.title}
                  onChange={(e) =>
                    setEditingTodo({
                      ...editingTodo,
                      title: e.target.value,
                    })
                  }
                  className="rounded border border-neutral-300 px-3 py-1.5"
                />

                <button type="button" onClick={handleUpdate}>
                  Save
                </button>
              </>
            ) : (
              <>
                <span className="flex-1">{todo.title}</span>

                <button
                  type="button"
                  onClick={() => setEditingTodo({ ...todo })}
                >
                  Edit
                </button>
              </>
            )}

            <button
              type="button"
              onClick={() => deleteTodo(todo.id)}
              className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
