import React from "react";
import "../styles/app.css";
import { Form } from "./Form";

export function App() {
  const [todos, setTodos] = React.useState<string[]>([]);

  function showHoge(todoInput: string) {
    setTodos([...todos, todoInput]);
  }

  return (
    <div className="App">
      <header className="header">
        <p>Header - hoge</p>

        <Form showHoge={showHoge} />
      </header>

      <div className="todo-list">
        <ul>
          {todos.map((todo, index) => {
            return <li key={index}>{todo}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
