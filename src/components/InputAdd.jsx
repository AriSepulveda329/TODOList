import React, { useState, useEffect, useRef } from "react";
import "@/styles/InputAdd.css";

function InputAdd({
  onSubmit,
  editTodo = { id: null, text: "", date: null, isCompleted: false },
}) {
  const [taskInput, setTaskInput] = useState(
    editTodo.text ? editTodo.text : ""
  );
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();

    onSubmit({
      id: editTodo.id ? editTodo.id : Date.now(),
      text: taskInput,
      isCompleted: editTodo.isCompleted,
      date: editTodo.date ? editTodo.date : `${month}/${day}/${year}`,
    });

    setTaskInput("");
  };

  return (
    <div className="addSection">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="add task..."
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          ref={inputRef}
        />
        <button type="submit">{editTodo.id ? "EDIT" : "ADD"}</button>
      </form>
    </div>
  );
}

export default InputAdd;
