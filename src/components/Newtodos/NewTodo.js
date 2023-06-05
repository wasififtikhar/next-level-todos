import React from "react";
import AddTodoForm from "./AddTodoForm";

const NewTodo = (props) => {
    const acceptTodo = todo => {
        const newtodo = {
            ...todo,
            id: Math.random().toString()
        }
        props.sendNewTodoToApp(newtodo);
    }
    return(
        <div className="">
            <AddTodoForm sendTodoToNewTodo={acceptTodo}/>
        </div>
    )
};

export default NewTodo;