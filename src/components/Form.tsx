import React from "react";
import "../styles/form.css";

export function Form() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("YOU SUBMITTED DUMMIES");
  }

  return (
    <div className="input-form">
      <form
        action=""
        method="post"
        onSubmit={(e) => handleSubmit(e)}
        className="form"
      >
        <input
          type="text"
          name="todo"
          id="todo-input"
          placeholder="input your todo"
          autoFocus
        />
      </form>
    </div>
  );
}
