import React, { useState } from "react";

import "./App.css";

import Todos from "./components/Todos";
import NewTodo from "./components/Newtodos/NewTodo";

const date = new Date();
let todoDate = 0
if(date.getMonth() === 0) {
  todoDate = "Jan"
}
const DUMMY_TODOS = [
  // {
  //   item: "Wasif",
  //   category: "most-important",
  //   date: date.getFullYear() + " " + (date.getMonth() + 1) + " " + date.getDate(),
  //   id: "1"
  // },
];



function App() {
const [todos, setTodos] = useState(DUMMY_TODOS)
const acceptNewTodo = newTodo => {
  setTodos((preTodos) => {
    return [newTodo, ...preTodos]
  })
}

  return (
    <div className="App">
    <h1>Next Level Todo</h1>
      <NewTodo sendNewTodoToApp={acceptNewTodo}/>
      <div className="todos">
      <h1 className="heading">Todos Here</h1>
      <Todos todos={todos} />
      </div>
    </div>
  );
}

export default App;
