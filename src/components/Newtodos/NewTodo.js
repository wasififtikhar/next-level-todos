import React from "react";
import AddTodoForm from "./AddTodoForm";
import Search from "../Searching/Search";

const NewTodo = (props) => {
    const acceptTodo = todo => {
        const newtodo = {
            ...todo,
            id: Math.random().toString()
        }
        props.sendNewTodoToApp(newtodo);
    }

    const acceptSearchItem = searchItem => {
        // console.log(searchItem);
        props.sentSearchItemToApp(searchItem)
    }

    return(
        <div className="">
            <AddTodoForm sendTodoToNewTodo={acceptTodo}/>
            <Search sentSearchItemToNewTodo={acceptSearchItem}/>
        </div>
    )
};

export default NewTodo;