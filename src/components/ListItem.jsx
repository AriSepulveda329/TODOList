import React, { useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import "@/styles/ListItem.css";
import InputAdd from "./InputAdd";

function ListItem({ todo, todoComplete, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    text: "",
    isCompleted: false,
    date: null,
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({ id: null, text: "" });
  };

  if (edit.id) {
    return <InputAdd editTodo={edit} onSubmit={submitUpdate} />;
  }

  return (
    <div className="flex flex-row bg-white rounded-lg">
      <div className="relative cursor-pointer group">
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => todoComplete(todo.id)}
          className="absolute opacity-0 z-10 top-[10px] left-[10px] cursor-pointer h-[45px] w-[45px] peer"
        />
        <span className="absolute top-[10px] left-[10px] h-[45px] w-[45px] rounded-md bg-slate-200 group-hover:bg-slate-300 peer-checked:bg-blue-500"></span>
        <span className="absolute hidden peer-checked:block left-7 top-4 w-[10px] h-[25px] border-t-0 border-r-[3px] border-b-[3px] border-l-0 border-white border-solid rotate-45"></span>
      </div>
      <div className="grow ml-16 my-1.5 leading-[0.4]">
        <p className="text-2xl">{todo.text}</p>
        <p className="text-sm">{todo.date}</p>
      </div>
      <div className="self-center py-0 px-5">
        <button
          className="ml-2 cursor-pointer p-0 bg-white border-none"
          onClick={() => removeTodo(todo.id)}
        >
          <DeleteOutlineIcon sx={{ fontSize: "35px" }} />
        </button>
        <button
          className="ml-2 cursor-pointer p-0 bg-white border-none"
          onClick={() => setEdit(todo)}
        >
          <EditIcon sx={{ fontSize: "35px" }} />
        </button>
      </div>
    </div>
  );
}

export default ListItem;
