import { useEffect, useState } from "react";

export default function TodoList() {
  const [toDoList, setToDoList] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((json) => setToDoList(json))
      .catch(() => {
        setErrorMsg("에러 발생...");
      });
  }, []);

  return (
    <>
      <h1>Todo</h1>
      {errorMsg && <p>{errorMsg}</p>}
      <ul>
        {toDoList.map((toDo) => (
          <li
            key={toDo.id}
            style={{
              textDecoration: toDo.completed ? "line-through" : undefined,
            }}
          >
            {toDo.title}
          </li>
        ))}
      </ul>
    </>
  );
}
