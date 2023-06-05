import React from "react";

import TodoItem from "./TodoItem";
import './Todo.css'

const Todos = (props) => {
  return (
    <div>
    {props.todos.map(todo => (
      <TodoItem
        item={todo.item}
        category={todo.category}
        date={todo.date}
        key={todo.id}
      />
    ))}
      {/* <TodoItem
        item={props.todos[1].item}
        category={props.todos[1].category}
        date={props.todos[1].thisDate}
      />
      <TodoItem
        item={props.todos[2].item}
        category={props.todos[2].category}
        date={props.todos[2].thisDate}
      /> */}
    </div>
  );
};

export default Todos;
