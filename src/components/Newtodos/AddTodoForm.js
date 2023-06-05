import React, { useState } from "react";

import "./AddTodoForm.css";

const AddTodoForm = (props) => {
  const [item, setItem] = useState("");
  const [category, setCatogory] = useState("");
  const [date, setDate] = useState("");

  const getItem = (event) => {
    setItem(event.target.value);
  };
  const getCategory = (event) => {
    setCatogory(event.target.value);
  };
  const getDate = (event) => {
    setDate(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // console.log(item, category, date);
    const newItem = {
        item: item,
        category: category,
        date: date,
      }

    props.sendTodoToNewTodo(newItem)
    setItem("");
    setCatogory("");
    setDate("");
  };

  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <div>
        <div className="fields">
          <label htmlFor="item">Add Item</label>
          <input id="item" type="text" onChange={getItem} value={item} />
        </div>

        <div className="fields">
          <label htmlFor="category">Select Category</label>
          <select value={category} id="category" onChange={getCategory}>
            <option value="">Select catogery</option>
            <option value="daily-work">Daily Work</option>
            <option value="reminder">Reminder</option>
            <option value="most-important">Most Important</option>
          </select>
        </div>

        <div className="fields">
          <label htmlFor="date">Date</label>
          <input type="date" id="date" onChange={getDate} value={date} />
        </div>

          <div className="btn-add">
            <button type="submit">Add</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddTodoForm;
