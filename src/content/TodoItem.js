import React from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../features/counter/TodoSlice";

const TodoItem = ({ id, title, completed }) => {
  // console.log({title})
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleComplete({ id }));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id }));
  };

  return (
    <li className="todoList">
      <div>
        <span>
          <input type="checkbox" onChange={handleClick} checked={completed} />
          {title}
        </span>
        <button onClick={handleDeleteClick}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;
