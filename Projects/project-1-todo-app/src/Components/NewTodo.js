import React, { useState } from "react";
import style from "./NewTodo.module.css";

export default function NewTodo() {

  const [todo,setTodo]=useState({title:'',desc:''});
  const {title,desc} = todo;

  const handleSubmit=(event)=>{
    event.preventDefault();
  }
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style["form-field"]}>
        <label htmlFor="title">Title : </label>
        <input type="text" id="title" name="name" value={title} onChange={handleChange}></input>
      </div>
      <div className={style["form-field"]}>
        <label htmlFor="title">Description : </label>
        <textarea type="text" id="desc" name="desc" value={desc} onChange={handleChange}></textarea>
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
}
