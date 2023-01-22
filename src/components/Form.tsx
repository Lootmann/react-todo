import React from "react";
import "../styles/form.css";

export function Form(props: any) {
  const [todo, setTodo] = React.useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(todo);
    props.showHoge(todo);
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
        />
      </form>
    </div>
  );
}
