import React, { useState, useEffect } from "react";
import InputAdd from "./InputAdd";
import ListItem from "./ListItem";

export interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
  date: string;
}

function Todolist() {
  const [todos, setTodos] = useState<Todo[]>();

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const addTodo = (todo: Todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const todoComplete = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      if (id === todo.id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const removeTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const updateTodo = (id: number, newTodo: Todo) => {
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
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <h1 className="text-3xl mb-3 font-medium">TODO LIST</h1>
      <div className="flex flex-col gap-y-4 w-1/2 h-2/3 bg-cyan-100 rounded-lg p-6 overflow-y-auto">
        <InputAdd onSubmit={addTodo} />
        {todos?.map((todo) => (
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
