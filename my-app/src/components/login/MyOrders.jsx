import React from "react";
import "./my-order.scss";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import LogoutIcon from "@mui/icons-material/Logout";
import BasketImg from "../../assets/Images/basketImg.png";
import { Link } from "react-router-dom";
function Basket() {
  return (
    <div className="container mainBasketDiv">
      <div className="leftSideBasket">
        <div className="myShoppingCart">
          <ShoppingCartOutlinedIcon className="shopIcon" />
          <span>Sifarişlərim</span>
        </div>
        <div className="myFavoriteCart">
          <FavoriteBorderOutlinedIcon className="favoriteIcon" />
          <span>Favorilərim</span>
        </div>
        <div className="myPersonCart">
          <PersonOutlineOutlinedIcon className="personIcon" />
          <span>Şəxsi məlumatlar</span>
        </div>
        <div className="myLocationCart">
          <AddLocationIcon className="personIcon" />

          <span>Çatdırılma ünvanı</span>
        </div>
        <div className="myLogOutCart">
          <LogoutIcon className="logOutIcon" />

          <span>Çıxış</span>
        </div>
      </div>

      <div className="rightSideBasket">
        <h5 className="mobileProf">Profilim</h5>
        <h6>Sifarişlərim (4 məhsul)</h6>
        <div className="mainAddedProduct">
          <div className="addedProductBox">
            <div className="addedProductImg">
              <img src={BasketImg} alt="basketImg" />
            </div>
            <div>
              <p className="orderedDateTitle">Sifariş tarixi:</p>
              <p className="orderedDate">12.04.2020</p>
              <p className="orderedStatusTitle">Status:</p>
              <p className="orderedStatus">Yoldadır</p>
              <p className="totatTitle">Ümumi məbləğ:</p>
              <p className="total">240 $</p>
              <Link to="/my-orders-detail">
                <button className="detailsOfOrder">Sifarişin detalları</button>
              </Link>
            </div>
          </div>
          <div className="addedProductBox">
            <div className="addedProductImg">
              <img src={BasketImg} alt="basketImg" />
            </div>
            <div>
              <p className="orderedDateTitle">Sifariş tarixi:</p>
              <p className="orderedDate">12.04.2020</p>
              <p className="orderedStatusTitle">Status:</p>
              <p className="orderedStatus">Yoldadır</p>
              <p className="totatTitle">Ümumi məbləğ:</p>
              <p className="total">240 $</p>
              <Link to="/my-orders-detail">
                <button className="detailsOfOrder">Sifarişin detalları</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basket;
