import React from "react";
import "./user-information.scss";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Link } from "react-router-dom";
function UserInformation() {
  return (
    <div className="container userInfoMainDiv">
      <div className="userInfoLeftSide">
        <h5>Ödəmə</h5>
        <div className="infoLine"></div>
        <div className="fillInformation">
          <div>
            <h6>1.Şəxsi məlumatlar</h6>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "right",
              position: "relative",
            }}
          >
            <CheckCircleOutlineIcon className="checkIcon" />
            <CheckCircleOutlineIcon className="checkIconMobile" />
          </div>
        </div>
        <div className="fillInformation">
          <div>
            <p>Ad</p>
            <input type="text" placeholder="Adınızı daxil edin" />
          </div>
          <div>
            <p>Soyad</p>
            <input type="text" placeholder="Soyadınızı daxil edin" />
          </div>
        </div>
        <div className="fillInformation">
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
          <div>
            <p>E-mail</p>
            <input type="text" placeholder="E-mail adresinizi daxil edin" />
          </div>
        </div>
        <Link to="/delivery">
          <button className="saveButton">Yadda saxla </button>
        </Link>
        <div className="infoLine"></div>
        <div className="fillInformation">
          <div>
            <h6 style={{ color: "#828282" }}>2. Çatdırılma</h6>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "right",
              position: "relative",
            }}
          >
            <CheckCircleOutlineIcon className="checkIcon" />
            <CheckCircleOutlineIcon className="checkIconMobile" />
          </div>
        </div>
        <div className="infoLine"></div>
        <div className="fillInformation">
          <div>
            <h6 style={{ color: "#828282" }}> 3. Ödəmə üsulu</h6>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "right",
              position: "relative",
            }}
          >
            <CheckCircleOutlineIcon className="checkIcon" />
            <CheckCircleOutlineIcon className="checkIconMobile" />
          </div>
        </div>
      </div>
      <div className="userInfoRıghtSide">
        <h6>Ümumi</h6>
        <ul>
          <li>
            <span>Məbləğ </span>
            <span>65.00$</span>
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
  );
}

export default UserInformation;
