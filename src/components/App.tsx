import React from "react";
import "../styles/app.css";

export function App() {
  return (
    <div className="App">
      <header className="header">
        <p>Header - hoge</p>

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
    </div>
  );
}
