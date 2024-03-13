import React, { useState } from 'react'



export const EditTodoForm = ({editTodo, task}) => {

  const [inputValue, setInputValue] = useState(task.task);

  const handleInputChange = (e) => { 
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(inputValue, task.id);
    setInputValue("")

  }


  return (
    <form className='TodoForm' onSubmit={handleSubmit}>

         <input type='text' 
         className='todo-input' 
         value={inputValue}
         placeholder='Update Task' 
         onChange={handleInputChange}
         />

         <button type='submit' 
         className='todo-btn'>Update Task</button>

    </form>
  )
}
