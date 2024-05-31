import React, { useState, useEffect } from "react";
import InputAdd from "./InputAdd";
import ListItem from "./ListItem";
import "@/styles/Todolist.css";

function Todolist() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const todoComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (id === todo.id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const updateTodo = (id, newTodo) => {
    if (!newTodo.text || /^\s*$/.test(newTodo.text)) {
      return;
    }

    setTodos((prev) => {
      const newTodos = prev.map((todo) => (todo.id === id ? newTodo : todo));
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  return (
    <div className="todoList">
      <h1>TODO LIST</h1>
      <div className="listContainer">
        <InputAdd onSubmit={addTodo} />
        {todos.map((todo) => (
          <ListItem
            key={todo.id}
            todo={todo}
            todoComplete={todoComplete}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default Todolist;
