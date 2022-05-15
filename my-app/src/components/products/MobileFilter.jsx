import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./MobileFilter.scss";
import MinusIcon from "../../assets/Icons/minus.png";
import PlusIcon from "../../assets/Icons/plus.png";

function MobileFilter({ allProducts, setCurrentCategory, currentCategory }) {
  const navigate = useNavigate();
  const [cost, setCost] = useState(false);

  return (
    <div className="filterComponent">
      <div className="leftSideCategories">
        <div className="brand">
          <p className="brandCount">Brend ({allProducts.length})</p>
          <img className="decrementCount" src={MinusIcon} alt="minus" />
        </div>
        <div className="lineOfBrand"></div>
        <div className="allNameCategory">
          <ul>
            {allProducts.map((item) => (
              <li>
                <label
                  htmlFor={`category-${item.name}`}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <input
                    className="checkedInput"
                    type="checkbox"
                    id={`category-${item.name}`}
                    checked={currentCategory === item.name.toLowerCase()}
                    onInput={() => {
                      setCurrentCategory(item.name.toLowerCase());
                      navigate(`/products/${item.name.toLowerCase()}`, {
                        replace: true,
                      });
                    }}
                  />
                  <span className="nameOfCategory">{item.name}</span>
                </label>
              </li>
            ))}
          </ul>
          {/* <div className="mainTypeDiv">
            <div className="lineOfTypes"></div>

            <div className="lineOfTypes"></div>
            <div className="types">
              <p>Qiymət</p>

              <img
                onClick={() => {
                  setCost(!cost);
                }}
                className="incrementCount"
                src={cost ? MinusIcon : PlusIcon}
                alt="plus"
              />
            </div>
            <div className="lineOfTypes"></div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default MobileFilter;
