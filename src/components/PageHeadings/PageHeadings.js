import React from "react";
import "./PageHeadings.scss";
export default function Header(props) {
  return <h1 className="PageHeadings">{props.name}</h1>;
}
