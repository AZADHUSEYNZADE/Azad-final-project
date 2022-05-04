import React from "react";
import "./basket.scss";
import BasketImg from "../../assets/Images/basketImg.png";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCart,
  incrementCount,
  decrementCount,
} from "../../features/cartSlice";
function Basket() {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h6 className="countOfProductBasket">Səbət (5 məhsul)</h6>
      <div className="mainBasketDiv3">
        <div className="basketDivFlex">
          {cart.map(({ product, count }) => {
            return (
              <div className="mainBasketDivLeft" key={product.id}>
                <input type="checkbox" />
                <img src={BasketImg} alt="img" />
                <div className="nameAndFeatures">
                  <p>{product.name}</p>
                  <ul>
                    <li>
                      <span className="color">Rəng:</span>
                      <span className="colorName">Bənövşəyi</span>
                      <span className="cost">240 $</span>
                    </li>
                  </ul>
                </div>
                <div className="buttons">
                  <button
                    onClick={() => {
                      dispatch(decrementCount({ productId: product.id }));
                    }}
                  >
                    -
                  </button>
                  <span>{count}</span>
                  <button
                    onClick={() => {
                      dispatch(incrementCount({ productId: product.id }));
                    }}
                  >
                    +
                  </button>
                </div>
                <DeleteIcon className="deleteIcon" />
              </div>
            );
          })}
        </div>
        <div className="mainBasketDivRight">
          <h6>Ümumi</h6>
          <ul>
            <li>
              <span>Məbləğ </span>
              <span>66.50</span>
            </li>
            <li>
              <span>Çatdırılma </span>
              <span>0.00 $</span>
            </li>
            <li>
              <span>Hədiyyə paketi </span>
              <span>5.00 $</span>
            </li>
            <li>
              <span>Promo kod </span>
              <span>-10.00 $</span>
            </li>
            <div className="totalLine"></div>
            <li className="totalLiDiv">
              <span className="totalName">Cəmi </span>
              <span className="total">65.50 $</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mobileBasket">
        <div className="firstPart">
          <input type="checkbox" />
          <img src={BasketImg} alt="img" />
          <DeleteIcon className="deleteIconMobile" />
        </div>
        <h6>
          iPhone 12, 64 GB, Bənövşəyi, (MJNM3) Golden 5 G 8690604083886 0212042
        </h6>
        <div className="secondPart">
          <ul>
            <li>
              <span className="colorMobile">Rəng:</span>
              <span className="colorNameMobile">Bənövşəyi</span>
              <br />
              <span className="costMobile">240 $</span>
            </li>
          </ul>
          <div className="buttonsMobile">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basket;
