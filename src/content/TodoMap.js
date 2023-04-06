import React from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'

const TodoMap = () => {

  // const todos = useSelector((state) => state.todos)
  // console.log(todos)
  const todos = useSelector((state) => state.todos)
  console.log(todos)
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key = {todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
      ))}

    </ul>
  )
}

export default TodoMap
