import React from "react";
import style from "./Home.module.css";

import Todos from "./Todos";
import NewTodo from "./NewTodo";

const dummyTodos = [
  {
    id: 1,
    title: "todo title 1",
    desc: "todo 1 description is here...",
  },
  {
    id: 2,
    title: "todo title 2",
    desc: "todo 2 description is here...",
  },
];
export default function Home() {
  return (
    <div className={style.container}>
      <h1>Todo App</h1>
      <NewTodo />
      <Todos todos={dummyTodos} />
    </div>
  );
}
