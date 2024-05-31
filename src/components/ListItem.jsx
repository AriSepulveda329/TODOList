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
    <div className="listItem">
      <div className="checkboxContainer">
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => todoComplete(todo.id)}
        />
        <span className="checkmark"></span>
      </div>
      <div className="textSection">
        <p className="description">{todo.text}</p>
        <p className="date">{todo.date}</p>
      </div>
      <div className="iconSection">
        <button onClick={() => removeTodo(todo.id)}>
          <DeleteOutlineIcon />
        </button>
        <button onClick={() => setEdit(todo)}>
          <EditIcon />
        </button>
      </div>
    </div>
  );
}

export default ListItem;
