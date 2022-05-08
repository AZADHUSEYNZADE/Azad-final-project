import React from "react";
import "./user-information-profile.scss";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import LogoutIcon from "@mui/icons-material/Logout";
import EditIcon from "@mui/icons-material/Edit";
function UserInformationProfile() {
  return (
    <div className="container mainUserProfileDiv">
      <div className="leftSideProfileDiv">
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
      <div className="rightSideProfileDiv">
        <p className="myAccMobile">Profilim</p>
        <h6>Şəxsi məlumatlar</h6>
        <div className="rightSideProfileBottom">
          <div className="profInformation">
            <div>
              <p>Ad</p>
              <input type="text" placeholder="Adnızı daxil edin" />
            </div>
            <div className="address">
              <p>Soyad</p>
              <input type="text" placeholder="Soyadınızı daxil edin" />
            </div>
          </div>
          <div className="fillInformationProf">
            <div className="numberLoginDiv">
              <div>
                <p>Mobil nömrə</p>
                <div className="selectAndInput">
                  <select name="numbers" id="numbers">
                    <option value="volvo">077</option>
                    <option value="volvo">070</option>
                    <option value="saab">055</option>
                    <option value="opel">050</option>
                    <option value="audi">051</option>
                  </select>
                  <input placeholder="000 - 00 - 00" />
                </div>
              </div>
            </div>
            <div className="emailParagraph">
              <p>E-mail</p>
              <input
                className="emailInp"
                type="text"
                placeholder="E-mail adresinizi daxil edin"
              />
            </div>
          </div>
          <div className="dateDiv">
            <p>Doğum tarixi</p>
            <input
              type="date"
              id="birthday"
              name="birthday"
              placeholder="Doğum tarixinizi seçin"
            />
          </div>
          <div></div>
          <div className="editButton">
            <EditIcon className="editIcon" />
            <button>Məlumatları yenilə</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInformationProfile;
