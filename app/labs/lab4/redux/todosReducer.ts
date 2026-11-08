import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Todo = {
  id: string;
  title: string;
};

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [
      { id: "1", title: "Learn HTML" },
      { id: "2", title: "Learn CSS" },
      { id: "3", title: "Learn JavaScript" },
    ] as Todo[],
  },
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({
        id: crypto.randomUUID(),
        title: action.payload,
      });
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todosSlice.actions;
export default todosSlice.reducer;