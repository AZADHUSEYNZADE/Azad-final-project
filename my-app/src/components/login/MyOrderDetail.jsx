import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import LogoutIcon from "@mui/icons-material/Logout";
import "./my-order-detail.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BasketImg from "../../assets/Images/basketImg.png";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
function BasketDetail() {
  return (
    <div className="container mainBasketDiv2">
      <div className="leftSideBasket">
        <h6>Profilim</h6>
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
      <div className="rightSideBasket2">
        <h5 className="myProfil2">Profilim</h5>

        <div className="arrowDiv">
          <ArrowBackIcon className="arrowIcon" />
          <h5 className="myProfil">Sifarişin detalları</h5>
        </div>
        <div className="rightSideBasketBottom">
          <div className="detailFirstPart">
            <div className="leftSide">
              <img src={BasketImg} alt="img" />
            </div>
            <div className="rightSide">
              <h5>
                iPhone 12, 64 GB, Bənövşəyi, (MJNM3) Golden 5 G 8690604083886
                0212042
              </h5>
              <ul className="firstUlDetail">
                <li>Rəng:</li>
                <li className="secondLiDetail">Yaddaş:</li>
                <li className="thirdLiDetail">Say:</li>
              </ul>
              <ul className="secondUlDetail">
                <li>Sarı</li>
                <li className="secondLiDetail2">128 GB</li>
                <li className="thirdLiDetail2">3</li>
              </ul>
              <ul className="thirdUlDetail">
                <li>Sifariş tarixi:</li>
                <li className="secondLiDetail3">Status:</li>
              </ul>
              <ul className="fourthUlDetail">
                <li>12.04.2020</li>
                <li className="secondLiDetail4">Yoldadır</li>
              </ul>
            </div>
          </div>
          <div className="detailLine"></div>
          <div className="detailsecondPart">
            <div>
              <h5 className="remake">
                Şəxsi məlumatlar <span>Düzəliş et</span>
              </h5>
              <ul>
                <li className="firstLi">Gunel</li>
                <li>Mammadova</li>
                <li>+994 77 566 73 27</li>
                <li>ulvinomerov1@gmail.com</li>
              </ul>
            </div>
            <div>
              <h5 className="takeAway">Çatdırılma ünvanı</h5>
              <ul>
                <li className="firstLi">Bakı şəhəri</li>
                <li>Nərimanov rayonu</li>
                <li>Atatürk pr. 19, İnnoland İnkubasiya Mərkəzi</li>
                <li>Egov, Giriş 2</li>
              </ul>
            </div>
            <div>
              <h5 className="lastTitle">Düzəliş et</h5>
            </div>
          </div>
          <div className="detailLine"></div>
          <div className="detailThirdPart">
            <div className="leftThirdPart">
              <h5>Ödəmə detalları</h5>
              <ul>
                <li className="firstLi">Ödəmə metodu</li>
                <li>Toplam məbləğ</li>
                <li>Təcili çatdırılma</li>
                <li>Promo kod</li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="secondLi">
                  <LocalAtmIcon className="icon" />
                  <span>Kart ilə</span>
                </li>
                <li className="last">1640 $</li>
                <li className="last">5 $</li>
                <li className="last">-60 $</li>
              </ul>
            </div>
          </div>
          <div className="detailLine"></div>
          <div className="lastDetailDiv">
            <p>Cəmi</p>
            <h6>1580 $</h6>
          </div>
          <div className="howMainButton">
            <button className="howProductButton">Məhsulu dəyərləndir</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasketDetail;
