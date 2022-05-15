import React from "react";
import "./basket.scss";
import BasketImg from "../../assets/Images/basketImg.png";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";

import {
  selectCart,
  incrementCount,
  decrementCount,
  deleteItem,
} from "../../features/cartSlice";

function Basket() {
  const cart = useSelector(selectCart);

  const dispatch = useDispatch();

  const total = cart.reduce((prev, { product, count }) => {
    return prev + product.price.raw * count;
  }, 0);

  const cartCount = useSelector((state) => state.cart.cart.length);
  return (
    <div className="container">
      <h6 className="countOfProductBasket">Səbət ({cartCount} məhsul)</h6>
      <div className="mainBasketDiv3">
        <div className="basketDivFlex">
          {cart.map(({ product, count }) => {
            return (
              <div className="mainBasketDivLeft" key={product.id}>
                <input type="checkbox" />
                <img src={product.assets[0].url} alt="img" />

                <div className="nameAndFeatures">
                  <p>{product.name}</p>
                  <ul>
                    <li>
                      <span className="color">Rəng:</span>
                      <span className="colorName">WHITE</span>
                      <span className="cost">
                        {count * product.price.formatted}
                      </span>
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
                <DeleteIcon
                  className="deleteIcon"
                  onClick={() => {
                    dispatch(deleteItem(product.id));
                  }}
                />
              </div>
            );
          })}
        </div>

        <div className="mainBasketDivRight">
          <h6>Ümumi</h6>
          <ul>
            <li>
              <span>Məbləğ </span>
              <span>{total} $</span>
            </li>
            <li>
              <span>Çatdırılma </span>
              <span> 0.00 $</span>
            </li>
            <li>
              <span>Hədiyyə paketi </span>
              <span>0.00 $</span>
            </li>
            <li>
              <span>Promo kod </span>
              <span>0.00 $</span>
            </li>
            <div className="totalLine"></div>
            <li className="totalLiDiv">
              <span className="totalName">Cəmi </span>
              <span className="total">{total} $</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mobileBasket">
        {cart.map(({ product, count }) => {
          return (
            <div className="flexBasket">
              <div className="firstPart">
                <input type="checkbox" />
                <img src={product.assets[0].url} alt="img" />
                <DeleteIcon
                  className="deleteIconMobile"
                  onClick={() => {
                    dispatch(deleteItem(product.id));
                  }}
                />
              </div>
              <h6>{product.name}</h6>
              <div className="secondPartBasket">
                <ul>
                  <li>
                    <span className="colorMobile">Rəng:</span>
                    <span className="colorNameMobile">Bənövşəyi</span>
                    <br />
                    <span className="costMobile">
                      {count * product.price.formatted}
                    </span>
                  </li>
                </ul>
                <div className="buttonsMobile">
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
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Basket;
