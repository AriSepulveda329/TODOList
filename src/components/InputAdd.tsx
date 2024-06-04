import React, { useState, useEffect, useRef, FormEventHandler } from "react";
import { Todo } from "./Todolist";

interface InputAddProperties {
  onSubmit(value: Todo): void;
  editTodo?: Todo;
}

function InputAdd({
  onSubmit,
  editTodo = { id: null, text: "", date: null, isCompleted: false },
}: InputAddProperties) {
  const [taskInput, setTaskInput] = useState(
    editTodo.text ? editTodo.text : ""
  );
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
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
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex gap-x-4">
        <input
          placeholder="add task..."
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          ref={inputRef}
          className="w-[88%] px-4 py-2.5 box-border border-none rounded-lg text-xl font-medium"
        />
        <button
          type="submit"
          className="w-[11%] no-underline border-none rounded-lg bg-cyan-500 text-white font-bold text-xl transition-all cursor-pointer hover:bg-cyan-600"
        >
          {editTodo.id ? "EDIT" : "ADD"}
        </button>
      </form>
    </div>
  );
}

export default InputAdd;
