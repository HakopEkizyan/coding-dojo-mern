import React, { useState } from "react";
import './App.css';

import Todo from "./components/Todos";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleTodoSubmit = (event) => {
    event.preventDefault();
    if (newTodo.length === 0) {
      return;
    }
    const todoItem = {
      text: newTodo,
      complete: false,
    };
    setTodos([...todos, todoItem]);
    setNewTodo("");
  };

  const handleDelete = (delIdx) => {
    const filteredTodos = todos.filter((todo, i) => {
      return i !== delIdx;
    });
    setTodos(filteredTodos);
  };

  const handleComplete = (idx) => {
    const updatedTodos = todos.map((todo, i) => {
      if (idx === i) {
        //todo.complete = !todo.complete;
        const updatedTodo = { ...todo, complete: !todo.complete };
        return updatedTodo;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  return (
    <div>
      <form 
        onSubmit={(event) => {
          handleTodoSubmit(event);
        }}
      >
        <input 
          onChange={(event) => {
            setNewTodo(event.target.value);
          }}
          type="text" value={newTodo}
        />
        <div>
          <button>Add</button>
        </div>
      </form>

      {todos.map((todo, i) => {
        return (
          <Todo 
            key={i} i={i}
            todo={todo}
            handleComplete={handleComplete}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
}

export default App;
