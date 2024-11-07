import React from 'react'

import Todo from './Todo';

export default function Todos(props) {
    const {todos} = props;
  return (
    <div>
      {todos.map((todo,index)=>{
        return <Todo key={index} todo={todo}/>
      })}
    </div>
  )
}

