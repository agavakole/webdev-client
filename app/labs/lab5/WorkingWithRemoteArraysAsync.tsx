"use client";

import { useEffect, useState } from "react";
import { FaPlusCircle, FaTrash, FaPencilAlt } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import {
  createNewTodo,
  fetchTodos,
  removeTodo,
  postNewTodo,
  deleteTodo,
  updateTodo,
} from "./client";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
  description?: string;
  editing?: boolean;
};

export default function WorkingWithRemoteArraysAsync() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

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

  const postTodoToServer = async () => {
    const newTodo = await postNewTodo({
      title: "New Posted Todo",
      completed: false,
    });
    setTodos([...todos, newTodo]);
  };

  const deleteTodoFromServer = async (todo: Todo) => {
    setErrorMessage("");

    try {
      await deleteTodo(todo);
      setTodos(todos.filter((item) => item.id !== todo.id));
    } catch (error) {
      const message = (error as {
        response?: { data?: { message?: string } };
      }).response?.data?.message;
      setErrorMessage(message || "Unable to delete this todo.");
    }
  };

  const editTodo = (todo: Todo) => {
    setTodos(todos.map((item) => {
      if (item.id === todo.id) {
        return { ...todo, editing: true };
      }
      return item;
    }));
  };

  const saveTodo = async (todo: Todo) => {
    setErrorMessage("");

    try {
      await updateTodo({ ...todo, editing: false });
      setTodos(todos.map((item) => {
        if (item.id === todo.id) {
          return { ...todo, editing: false };
        }
        return item;
      }));
    } catch (error) {
      const message = (error as {
        response?: { data?: { message?: string } };
      }).response?.data?.message;
      setErrorMessage(message || "Unable to update this todo.");
    }
  };

  const changeTodoTitle = (todo: Todo, title: string) => {
    setTodos(todos.map((item) => {
      if (item.id === todo.id) {
        return { ...todo, title };
      }
      return item;
    }));
  };

  const changeTodoCompleted = async (todo: Todo, completed: boolean) => {
    await saveTodo({ ...todo, completed });
  };

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <div id="wd-working-with-remote-arrays-async" className="space-y-3">
      <h3>Working with Arrays Asynchronously</h3>
      {errorMessage && (
        <p
          id="wd-todo-error-message"
          className="rounded bg-red-100 px-3 py-2 text-red-800"
        >
          {errorMessage}
        </p>
      )}

      <div className="flex items-center gap-3">
        <h4>Todos</h4>
        <FaPlusCircle
          id="wd-create-todo-async"
          className="cursor-pointer text-xl text-green-600"
          onClick={createTodoOnServer}
        />
        <FaPlusCircle
          id="wd-post-todo"
          className="cursor-pointer text-xl text-blue-600"
          onClick={postTodoToServer}
        />
      </div>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li key={todo.id} className="flex flex-wrap items-center gap-2">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={(event) => changeTodoCompleted(todo, event.target.checked)}
            />

            {todo.editing ? (
              <input
                className="rounded border px-2 py-1"
                value={todo.title}
                onChange={(event) => changeTodoTitle(todo, event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    saveTodo(todo);
                  }
                }}
              />
            ) : (
              <span className={todo.completed ? "line-through" : ""}>
                {todo.title}
              </span>
            )}

            <FaPencilAlt
              id={`wd-edit-todo-${todo.id}`}
              className="cursor-pointer text-blue-600"
              onClick={() => editTodo(todo)}
            />

            <FaTrash
              id={`wd-remove-todo-${todo.id}`}
              className="cursor-pointer text-red-600"
              onClick={() => removeTodoFromServer(todo)}
            />

            <TiDelete
              id={`wd-delete-todo-${todo.id}`}
              className="cursor-pointer text-2xl text-red-600"
              onClick={() => deleteTodoFromServer(todo)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
