import React from 'react'

import Todo from './Todo';

export default function Todos(props) {
  return (
    <section>
      {props.todos.map((todo)=>{
        return <Todo todo={todo} key={todo.id}/>
      })}
    </section>
  )
}
