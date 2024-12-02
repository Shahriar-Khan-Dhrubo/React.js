

import useFetch from "./useFetch";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function UseEffect() {
  const toastifyCheck = () => {
    toast("Toastify is working");
  };
  const { data, loading, errorMessage } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return (
    <div>
      <h1>Todos</h1>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        data &&
        data.map((todo) => {
          return <p key={todo.id}>{todo.title}</p>;
        })
      )}
      {!loading && <button onClick={toastifyCheck}>Toastify Check</button>}
      <ToastContainer />
    </div>
  );
}
