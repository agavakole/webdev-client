"use client";

import { useEffect, useState } from "react";
import { FaPlusCircle, FaTrash } from "react-icons/fa";
import { createNewTodo, fetchTodos, removeTodo } from "./client";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
  description?: string;
};

export default function WorkingWithRemoteArraysAsync() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const loadTodos = async () => {
    const remoteTodos = await fetchTodos();
    setTodos(remoteTodos);
  };

  const removeTodoFromServer = async (todo: Todo) => {
    const remainingTodos = await removeTodo(todo);
    setTodos(remainingTodos);
  };

  const createTodoOnServer = async () => {
    const updatedTodos = await createNewTodo();
    setTodos(updatedTodos);
  };

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <div id="wd-working-with-remote-arrays-async" className="space-y-3">
      <h3>Working with Arrays Asynchronously</h3>
      <div className="flex items-center gap-3">
        <h4>Todos</h4>
        <FaPlusCircle
          id="wd-create-todo-async"
          className="cursor-pointer text-xl text-green-600"
          onClick={createTodoOnServer}
        />
      </div>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center gap-2">
            <input type="checkbox" checked={todo.completed} readOnly />
            <span className={todo.completed ? "line-through" : ""}>{todo.title}</span>
            <FaTrash
              id={`wd-remove-todo-${todo.id}`}
              className="cursor-pointer text-red-600"
              onClick={() => removeTodoFromServer(todo)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
