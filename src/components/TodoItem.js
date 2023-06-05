import React from "react";

import "./TodoItem.css";

const TodoItem = (props) => {
  return (
      <div className="todo">
        <h1 className="todo_title">{props.item}</h1>
        <h1 className="todo_category">{props.category}</h1>
        <h1 className="todo_date">{props.date}</h1>
      </div>
  );
};

export default TodoItem;
