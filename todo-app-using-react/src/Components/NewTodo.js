import React, { useState } from "react";

import style from "./newtodo.module.css";

export default function NewTodo(props) {
  const [todo, setTodo] = useState({ title: "", desc: "" });
  const { title, desc } = todo;
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim() || !desc.trim()) {
      setError("Both title and description are required!");
      return;
    }
    setError(""); // Clear error
    props.onAddTodo(todo);
    setTodo({ title: "", desc: "" });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    setTodo((oldTodo) => {
      return { ...oldTodo, [name]: event.target.value };
    });
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      {error && <p className={style.error}>{error}</p>}
      <div className={style["form-field"]}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </div>
      <div className={style["form-field"]}>
        <label htmlFor="desc">Description:</label>
        <textarea
          type="text"
          id="desc"
          name="desc"
          value={desc}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
}
