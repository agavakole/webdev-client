import { createContext, useContext, useState, type ReactNode } from "react";

export type Todo = {
  id: string;
  title: string;
};

type TodosContextValue = {
  todos: Todo[];
  addTodo: (title: string) => void;
  updateTodo: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
};

const TodosContext = createContext<TodosContextValue | null>(null);

export function TodosProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", title: "Learn HTML" },
    { id: "2", title: "Learn CSS" },
    { id: "3", title: "Learn React" },
  ]);

  const addTodo = (title: string) => {
    if (title.trim() === "") return;

    setTodos([...todos, { id: crypto.randomUUID(), title: title }]);
  };

  const updateTodo = (todo: Todo) => {
    setTodos(todos.map((item) => (item.id === todo.id ? todo : item)));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <TodosContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo }}>
      {children}
    </TodosContext.Provider>
  );
}

export function useTodosContext() {
  const value = useContext(TodosContext);

  if (!value) {
    throw new Error("useTodosContext must be used inside TodosProvider");
  }

  return value;
}
