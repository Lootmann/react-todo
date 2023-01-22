import React from "react";
import "../styles/app.css";
import { Button } from "./Button";
import { Form } from "./Form";

export function App() {
  const [hoge, setHoge] = React.useState("hage");

  function showHoge(todoInput: string) {
    console.log(todoInput);
    setHoge(todoInput);
  }

  return (
    <div className="App">
      <header className="header">
        <p>Header - hoge</p>

        <Form showHoge={showHoge} />
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
