import React, { useState } from "react";

import "./App.css";

import Todos from "./components/Todos";
import NewTodo from "./components/Newtodos/NewTodo";
import Search from "./components/Searching/Search";

// const date = new Date();

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
const [matchTodo, setMatchTodo] = useState();

const acceptNewTodo = newTodo => {
  setTodos((preTodos) => {
    return [newTodo, ...preTodos]
  })
}

const acceptSearchItem = searchItem => {
  // return searchItem
  console.log(searchItem);
}
const getTodoItem = todoItems => {
  const matchItem = [todoItems]
  setMatchTodo(matchItem)

  // setMatchTodo((preMatchTodos) => {
  //   return [todoItems, ...preMatchTodos]
  // })
}
console.log(matchTodo);


return (
  <div className="App">
  <h1>Next Level Todo</h1>
    <NewTodo sendNewTodoToApp={acceptNewTodo} sentSearchItemToApp={acceptSearchItem}/>
    <div className="todos">
    <h1 className="heading">Todos Here</h1>
    <Todos todos={todos} sentTodoItemToApp={getTodoItem}/>
    </div>
  </div>
);
}



export default App;
