import React from "react";
import { useNavigate } from "react-router-dom";

import "./MobileFilter.scss";
import MinusIcon from "../../assets/Icons/minus.png";
import PlusIcon from "../../assets/Icons/plus.png";

// import Commerce from "../../library/commerce/Commerce";

function MobileFilter({ allProducts, setCurrentCategory, currentCategory }) {
  const navigate = useNavigate();

  return (
    <div className="filterComponent">
      <div className="leftSideCategories">
        <div className="brand">
          <p className="brandCount">Brend (4)</p>
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
                    style={{ marginRight: "8px" }}
                    onInput={() => {
                      setCurrentCategory(item.name.toLowerCase());
                      navigate(`/products/${item.name.toLowerCase()}`, {
                        replace: true,
                      });
                    }}
                  />
                  {item.name}
                </label>
              </li>
            ))}
          </ul>
          <div className="mainTypeDiv">
            <div className="types">
              <p>Type</p>
              <img className="incrementCount" src={PlusIcon} alt="plus" />
            </div>
            <div className="lineOfTypes"></div>
            <div className="types">
              <p>Category</p>
              <img className="incrementCount" src={PlusIcon} alt="plus" />
            </div>
            <div className="lineOfTypes"></div>
            <div className="types">
              <p>Rəng</p>
              <img className="incrementCount" src={PlusIcon} alt="plus" />
            </div>
            <div className="lineOfTypes"></div>
            <div className="types">
              <p>Qiymət</p>
              <img className="incrementCount" src={MinusIcon} alt="plus" />
            </div>
            <div className="lineOfTypes"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileFilter;
