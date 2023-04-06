import React from "react";
import "./App.css";
import AddTodo from "./content/AddTodo";
import TodoMap from "./content/TodoMap";

function App() {
  return (
    <div className="container">
      <div className="contChild">
        <h1>To Do List</h1>
        <AddTodo />
        <TodoMap />
      </div>
    </div>
  );
}

export default App;
