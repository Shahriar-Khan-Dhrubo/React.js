import React, { useState } from 'react'

export default function NewTodo(props) {
    const [todo,setTodo] = useState("");
    const handleInput=(e)=>{
        setTodo(e.target.value);
    }
    const handleNewTodo =(e)=>{
        e.preventDefault();
        if (todo.trim()) {  // Check if the input is not empty
            props.onTodo(todo);
            setTodo(''); // Clear the input field after submission
          }
    }
  return (
    <form onSubmit={handleNewTodo}>
      <label htmlFor='newTodo'>New Todo : </label>
      <input type='text' id='newTodo' name={'newTodo'} value={todo} onChange={handleInput}></input>
      <button type='submit'>Add Todo</button>
    </form>
  )
}

