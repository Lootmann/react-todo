import React from "react";
import "../styles/app.css";
import { Button } from "./Button";
import { Form } from "./Form";

export function App() {
  const [hoge, setHoge] = React.useState("hage");

  return (
    <div className="App">
      <header className="header">
        <p>Header - hoge</p>

        <Form />
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
