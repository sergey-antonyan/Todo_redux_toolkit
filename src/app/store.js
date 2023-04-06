import { configureStore } from '@reduxjs/toolkit';
import todoReducer from "../features/counter/TodoSlice";

export default  configureStore({
  reducer: {
    todos: todoReducer,
  },
});
