import React from "react";
import "../styles/app.css";
import { Form } from "./Form";
import { Todo } from "./Todo";

import { TodoModel } from "../models/TodoModel";

export function App() {
  const [todos, setTodos] = React.useState<TodoModel[]>([]);

  function updateTodo(todoInput: string) {
    setTodos([...todos, new TodoModel(todoInput)]);
  }

  return (
    <div className="App">
      <header className="header">
        <p>Header - hoge</p>

        <Form updateTodo={updateTodo} />
      </header>

      <div id="todo-list">
        {todos.length == 0 ? <h2>no toods</h2> : <h2>Todo List</h2>}

        {/* TODO: when clicks todo, delete this todo */}
        <ul>
          {todos.map((todo) => {
            return <Todo key={todo.id} todo={todo} />;
          })}
        </ul>
      </div>
    </div>
  );
}
