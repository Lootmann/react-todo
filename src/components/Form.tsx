import React from "react";
import "../styles/form.css";

export function Form(props: any) {
  const [todo, setTodo] = React.useState("");

  // Lifting State Up
  // this todo input goes to Parent(App.tsx) From this Form.tsx
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    props.updateTodo(todo);
    setTodo("");
  }

  // controlled component
  // every input changes run this handleChange Function
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setTodo(e.target.value);
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
          onChange={(e) => handleChange(e)}
          value={todo}
        />
      </form>
    </div>
  );
}
