import Todo from "./Todo";

const dummyTodos = [
  {
    id: 1,
    title: "title 1",
    desc: "description for todo1",
  },
  {
    id: 2,
    title: "title 2",
    desc: "description for todo2",
  },
];
export default function Todos() {
  return (
    <section>
      <Todo todos={dummyTodos} />
    </section>
  );
}
