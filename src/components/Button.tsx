import React from "react";
import "../styles/button.css";

export function Button(props: { message: string }) {
  return <button className="button">{props.message}</button>;
}
