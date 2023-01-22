import React from "react";
import "../styles/app.css";
import { Button } from "./Button";

export function App() {
  const [hoge, setHoge] = React.useState("hage");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setHoge("YOU SUBMIT DUMMIES");
  }

  return (
    <div className="App">
      <header className="header">
        <p>Header - hoge</p>

        <div className="input-form">
          <form action="" method="post" onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              name="todo"
              id="todo-input"
              placeholder="input your todo"
              autoFocus
            />
          </form>
        </div>
      </header>

      <div className="test">
        {/* component :^) */}
        <Button message={"this message from Parent `App.tsx` :^)"} />
      </div>

      <div className="todo-list">
        <ul>
          <li>{hoge}</li>
          <li>{hoge}</li>
          <li>{hoge}</li>
          <li>{hoge}</li>
        </ul>
      </div>
    </div>
  );
}
