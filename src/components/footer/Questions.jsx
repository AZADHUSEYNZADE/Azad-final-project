import React from "react";
import RightIcon from "../../assets/Icons/chevron-right.png";
import "./questions.scss";
import PlusIcon from "../../assets/Icons/plus.png";

function Questions() {
  return (
    <div>
      <div className="container">
        <ul className="mainGoHomeUl">
          <li>
            <span>Ana səhifə</span> <img src={RightIcon} alt="rightSide" />
          </li>
          <li>
            <span>Telefonlar</span> <img src={RightIcon} alt="rightSide" />
          </li>
          <li>
            <span>Apple</span>
          </li>
        </ul>
      </div>
      <h1 className="titleQuestions">Tez-tez verilən suallar</h1>
      <div>
        <ul className="questionUl">
          <li>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
              amet egestas interdum dui nibh ut . Mi ultrices phasellus massa
              lectus tellus sem?
            </span>
            <img src={PlusIcon} alt="plus" />
          </li>
          <li>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
              amet egestas ?
            </span>
            <img src={PlusIcon} alt="plus" />
          </li>
          <li>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
              amet egestas ?
            </span>
            <img src={PlusIcon} alt="plus" />
          </li>
          <li>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
              amet egestas ?
            </span>
            <img src={PlusIcon} alt="plus" />
          </li>
          <li>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
              amet egestas ?
            </span>
            <img src={PlusIcon} alt="plus" />
          </li>
          <li className="mobileLiQuestion">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
              amet egestas ?
            </span>
            <img src={PlusIcon} alt="plus" />
          </li>
          <li className="mobileLiQuestion">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
              amet egestas ?
            </span>
            <img src={PlusIcon} alt="plus" />
          </li>
          <li className="mobileLiQuestion">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
              amet egestas ?
            </span>
            <img src={PlusIcon} alt="plus" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Questions;
