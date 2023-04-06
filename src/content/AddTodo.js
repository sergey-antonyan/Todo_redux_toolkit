import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/counter/TodoSlice";

export default function AddTodo() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    if (value) {
      dispatch(addTodo({ title: value }));
    }
  };

  return (
    <div className="addTodoForm">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={(event) => setValue(event.target.value)}
          value={value}
          placeholder="Add todo"
          className="todoInput"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
