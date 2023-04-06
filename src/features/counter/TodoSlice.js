import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [
    { id: 1, title: "Look at list of todos", completed: false },
    { id: 2, title: "Find the bug", completed: false },
    { id: 3, title: "Commit your code", completed: false },
    { id: 4, title: "Make coffee", completed: false },
    { id: 5, title: "Clean your code", completed: false },
  ],

  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.push(todo);
    },
    toggleComplete: (state = todoSlice.initialState, action) => {
      const todo = state.find((todo) => todo.id === action.payload.id);

      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, deleteTodo, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;
