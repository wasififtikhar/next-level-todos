import React, { useState } from 'react'

import './Search.css'

 function Search(props) {
  const [searchItem, setSearchItem] = useState('')

  const getSearchItem = (event) => {
    event.preventDefault();
    setSearchItem(event.target.value)
    props.sentSearchItemToNewTodo(searchItem)
  };
  return (
    <form>
        <div className='searching_box'>
        <h1 className='Srch_title'>Search Here</h1>
            <div className='by_name_search'>
                <label htmlFor="item">Search Your Item</label>
                <input id="item" type="text" onChange={getSearchItem} />
            </div>
            <div className='by_category_search'>
            <label htmlFor="category">Categorical Search</label>
          <select  id="category">
            <option value="">Select catogery</option>
            <option value="daily-work">Daily Work</option>
            <option value="reminder">Reminder</option>
            <option value="most-important">Most Important</option>
          </select>    
            </div>
        </div>
    </form>
  )
}

export default Search;