import { useContext, useRef, useState } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { TimeContext } from "../../providers/TimeProvider";
import { RxDotFilled } from "react-icons/rx";
import { IoMdCheckmarkCircle, IoMdCloseCircle } from "react-icons/io";
import moment from "moment";

function ToDoApp() {
  const { months, days, year, month, date, day } = useContext(TimeContext);
  const [todoList, setTodoList] = useState([
    { id: 0, name: "Explore my Links", status: "ongoing" },
    { id: 1, name: "Play Mathel Memory", status: "completed" },
  ]);
  const [inputTodo, setInputTodo] = useState("");

  const ref = useRef();
  const { events } = useDraggable(ref);

  function handleAddTodo() {
    if (inputTodo.trim() === "") return;

    setTodoList((t) => [
      ...t,
      {
        id: todoList.length,
        name: inputTodo,
        status: "ongoing",
        startTime: moment(Date.now()).format("h:mm a"),
        endTime: null,
      },
    ]);
    setInputTodo("");
  }

  function handleToggleStatus(id) {
    setTodoList((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              status: "completed",
              endTime: moment(Date.now()).format("h:mm a"),
            }
          : item
      )
    );
  }

  function handleDeleteTask(id) {
    setTodoList((items) => items.filter((item) => item.id !== id));
  }

  return (
    <div className="flex flex-col p-4">
      <div className="flex flex-col justify-center">
        <h1>What&apos;s on your plate today?</h1>
        <p className="text-xs">
          {days[day]}, {months[month]} {date} {year}
        </p>

        <div className="flex my-4 rounded-md overflow-hidden">
          <input
            type="text"
            value={inputTodo}
            onChange={(e) => setInputTodo(e.target.value)}
            className="pl-2"
          />
          <button
            className="px-4 py-1 bg-orange-500 text-white text-sm"
            onClick={() => handleAddTodo()}
          >
            Add
          </button>
        </div>
      </div>
      <div>
        <h1 className="text-sm mb-2">On-going Tasks</h1>
        <ul
          className="flex flex-col h-28 text-sm overflow-y-scroll scrollbar-hide"
          {...events}
          ref={ref}
        >
          {todoList
            .filter((item) => item.status === "ongoing")
            .sort((a, b) => a.startTime - b.startTime)
            .map((item) => {
              return (
                <li
                  className="flex my-1 items-center rounded-md p-1 bg-slate-50 hover:bg-gray-300 shadow-sm hover:shadow-md"
                  key={item.id}
                >
                  <RxDotFilled size={20} color="grey" />{" "}
                  <span className="flex-1">{item.name}</span>
                  <span className="text-xs mr-2">{item.startTime}</span>
                  <IoMdCheckmarkCircle
                    size={18}
                    color="grey"
                    className="hover:fill-green-600"
                    onClick={() => handleToggleStatus(item.id)}
                  />
                  <IoMdCloseCircle
                    size={18}
                    color="grey"
                    className="hover:fill-red-600"
                    onClick={() => handleDeleteTask(item.id)}
                  />
                </li>
              );
            })}
        </ul>
      </div>
      <div>
        <h1 className="text-sm my-2">Completed Tasks</h1>
        <ul
          className="flex flex-col text-sm overflow-y-scroll scrollbar-hide h-28"
          {...events}
          ref={ref}
        >
          {todoList
            .filter((item) => item.status === "completed")
            .sort((a, b) => a.endTime - b.endTime)
            .map((item) => {
              return (
                <li
                  className="flex my-1 items-center rounded-md p-1 bg-slate-50 hover:bg-gray-300 shadow-sm hover:shadow-md"
                  key={item.id}
                >
                  <RxDotFilled size={20} color="grey" />
                  <span className="flex-1 text-slate-400 line-through">
                    {item.name}
                  </span>
                  <span className="text-xs mr-2 text-slate-400">
                    {item.startTime} - {item.endTime}
                  </span>
                  <IoMdCloseCircle
                    size={18}
                    color="grey"
                    className="hover:fill-red-600"
                    onClick={() => handleDeleteTask(item.id)}
                  />
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default ToDoApp;
