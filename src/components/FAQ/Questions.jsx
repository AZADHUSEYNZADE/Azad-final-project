import React, { useState } from "react";
import data from "../../data";
import Question from "../FAQ/Question";
import RightIconWhite from "../../assets/Icons/chevron-right.png";

function Questions() {
  const [questions, setQuestions] = useState(data);
  return (
    <div style={{ marginBottom: "60px" }}>
      <ul className="container mainGoHomeUl">
        <li>
          <span>Ana səhifə</span>
          <img src={RightIconWhite} alt="rightSide" />
        </li>
        <li>
          <span>Haqqımızda</span>
        </li>
      </ul>
      <h1 style={{ textAlign: "center", margin: "30px" }}>
        Tez-tez verilən suallar
      </h1>
      {questions.map((question) => {
        return <Question key={question.id} {...question} />;
      })}
    </div>
  );
}

export default Questions;
