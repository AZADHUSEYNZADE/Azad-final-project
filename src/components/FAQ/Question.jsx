import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./question.scss";

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="mainFaqDiv">
      <p>{title}</p>
      <button className="btn" onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </button>

      {showInfo ? <small>{info}</small> : ""}
    </article>
  );
};

export default Question;
