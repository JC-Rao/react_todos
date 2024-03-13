import React, { useState } from 'react'



export const TodoForm = ({addTodo}) => {

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => { 
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(inputValue)
    setInputValue("")

  }


  return (
    <form className='TodoForm' onSubmit={handleSubmit}>

         <input type='text' 
         className='todo-input' 
         value={inputValue}
         placeholder='What is the task today?' 
         onChange={handleInputChange}
         />

         <button type='submit' 
         className='todo-btn'>Add Task</button>

    </form>
  )
}
