import React from "react";
import { TodoModel } from "../models/TodoModel";
import "../styles/todo.css";

type TodoProps = {
  todo: TodoModel;
  deleteTodo: Function;
};

export function Todo(props: TodoProps) {
  function handleClick(
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    todoId: number
  ) {
    e.preventDefault();
    props.deleteTodo(todoId);
  }

  return (
    <li className="todo" onClick={(e) => handleClick(e, props.todo.id)}>
      {props.todo.id}.{props.todo.content}
    </li>
  );
}
