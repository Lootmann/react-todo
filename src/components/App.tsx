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

  function deleteTodo(todoId: number) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  }

  return (
    <div className="App">
      <header className="header">
        <p>Header - hoge</p>

        <Form updateTodo={updateTodo} />
      </header>

      {todos.length === 0 ? <h2>no toods</h2> : <h2>Todo List</h2>}

      <div id="todo-list">
        <ul>
          {todos.map((todo) => {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                deleteTodo={() => deleteTodo(todo.id)}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
