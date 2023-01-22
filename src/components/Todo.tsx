import React from "react";
import { TodoModel } from "../models/TodoModel";

export function Todo(props: { todo: TodoModel }) {
  return (
    <li>
      {props.todo.id}.{props.todo.content}
    </li>
  );
}
