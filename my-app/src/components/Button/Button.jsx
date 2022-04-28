import React from "react";
import "./Button.scss";

const Button = ({ text, type }) => {
  return (
    <button className={`btn ${type === "outline" ? "btn-outline" : ""}`}>
      {text}
    </button>
  );
};

export default Button;
