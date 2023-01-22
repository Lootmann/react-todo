import React from "react";
import "../styles/app.css";
import { Button } from "./Button";

export function App() {
  const [hoge, setHoge] = React.useState("hage");

  return (
    <div className="App">
      <header className="header">
        <p>Header - hoge</p>

        <Button />

        <form action="" method="post">
          <input
            type="text"
            name="todo"
            id="todo-input"
            placeholder="input your todo"
            autoFocus
          />
        </form>
      </header>

      <div className="todo-list">
        <ul>
          <li>{hoge}</li>
          <li>todo</li>
          <li>todo</li>
          <li>todo</li>
        </ul>
      </div>
    </div>
  );
}
