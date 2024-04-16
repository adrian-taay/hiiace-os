import { useState } from "react";

function ToDoApp() {
  const [todoList, setTodoList] = useState([
    { id: 0, name: "Explore my Links", status: "ongoing" },
    { id: 1, name: "Play Mathel Memory", status: "completed" },
  ]);
  const [inputTodo, setInputTodo] = useState("");

  function handleAddTodo() {
    setTodoList((t) => [
      ...t,
      { id: todoList.length, name: inputTodo, status: "ongoing" },
    ]);
    setInputTodo("");
  }

  function handleToggleStatus(id) {
    setTodoList((items) =>
      items.map((item) =>
        item.id === id ? { ...item, status: "completed" } : item
      )
    );
  }

  console.log(todoList);

  return (
    <div className="flex justify-center items-center">
      <div>
        <input
          type="text"
          value={inputTodo}
          onChange={(e) => setInputTodo(e.target.value)}
        />
        <button onClick={() => handleAddTodo()}>Add</button>
      </div>
      <div>
        <h1>Ongoing Tasks</h1>
        <ul className="flex">
          {todoList
            .filter((item) => item.status === "ongoing")
            .map((item) => {
              return (
                <li key={item.id} onClick={() => handleToggleStatus(item.id)}>
                  {item.name}
                </li>
              );
            })}
        </ul>
      </div>
      <div>
        <h1>Completed Tasks</h1>
        <ul className="flex bg-slate-500">
          {todoList
            .filter((item) => item.status === "completed")
            .map((item) => {
              return <li key={item.id}>{item.name}</li>;
            })}
        </ul>
      </div>
    </div>
  );
}

export default ToDoApp;
