import React from "react";
import style from "./NewTodo.module.css";

export default function NewTodo() {
  return (
    <form className={style.form}>
      <div className={style["form-field"]}>
        <label htmlFor="title">Title : </label>
        <input type="text" id="title" name="name"></input>
      </div>
      <div className={style["form-field"]}>
        <label htmlFor="title">Description : </label>
        <textarea type="text" id="desc" name="desc"></textarea>
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
}
