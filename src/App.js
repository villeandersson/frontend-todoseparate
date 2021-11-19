import React, { useState } from "react";
import "./App.css";
import Todotable from "./components/Todolist";

function App() {
  const [todo, setTodo] = useState({ kuvaus: "", pvm: "" });
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, [todo.kuvaus, todo.pvm]]);
  };

  const deleteItem = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  };

  return (
    <div className="App">
      <h1 className="App-header">TODOLIST</h1>
      <div className="App-input">
        <form onSubmit={addTodo}>
          Description:
          <input
            type="text"
            value={todo.kuvaus}
            name="kuvaus"
            onChange={inputChanged}
          />
          Date:
          <input
            type="date"
            value={todo.pvm}
            name="pvm"
            onChange={inputChanged}
          />
          <input type="submit" value="Add" />
        </form>
        <Todotable todos={todos} deleteItem={deleteItem} />
      </div>
    </div>
  );
}

export default App;
