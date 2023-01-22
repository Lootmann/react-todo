import React from "react";
import "../styles/app.css";
import { Form } from "./Form";

import { TodoModel } from "../models/TodoModel";

export function App() {
  const [todos, setTodos] = React.useState<TodoModel[]>([]);

  function showHoge(todoInput: string) {
    setTodos([...todos, new TodoModel(todoInput)]);
  }

  return (
    <div className="App">
      <header className="header">
        <p>Header - hoge</p>

        <Form showHoge={showHoge} />
      </header>

      <div className="todo-list">
        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                {todo.id}. {todo.content}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
