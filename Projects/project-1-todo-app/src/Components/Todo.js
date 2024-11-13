import React from 'react'
import style from './Todo.module.css'

export default function Todo(props) {
    const {title,id,desc} = props.todo;
  return (
    <article className={style.todo}>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <div>
        <button className={style.btn}>
            <i className='fa fa-trash fa-2x'></i>
        </button>
      </div>
    </article>
  )
}
