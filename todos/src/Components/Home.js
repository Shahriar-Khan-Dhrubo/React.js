import React, { useState } from 'react'

import Todos from './Todos';
import NewTodo from './NewTodo';

export default function Home() {
    const dummyTodos = ["todo1","todo2","todo3"];
    const [todos,setTodos] = useState(dummyTodos);
    const handleNewTodo=(newTodo)=>{
        setTodos([...todos,newTodo]);
    }
  return (
    <div>
    <NewTodo onTodo={handleNewTodo}/>
      <Todos todos={todos}/>
    </div>
  )
}
