import React from "react";
import "./forgetted-password.scss";
import ConfigurePassword from "../../assets/Images/configurePassword.png";
import LoginPic2 from "../../assets/Images/loginBgPic2.png";
import { Link } from "react-router-dom";
function ForgettedPassword() {
  return (
    <div className="container passwordMainDiv">
      <div className="leftSidePassword">
        <h6>Şifrəmi unutdum</h6>
        <p className="configredCode">
          Doğrulama kodunu almaq üçün e - poçt <br /> ünvanınızı daxil edin
        </p>
        <p className="emailTitle">E-mail</p>
        <input
          className="emailInput"
          type="text"
          placeholder="add your e-mail address"
        />
        <br />
        <Link to="/check-email">
          <button className="sendButton">Göndər</button>
        </Link>
      </div>
      <div className="rightSideLoginPassword">
        <img className="LoginPic1" src={ConfigurePassword} alt="bgPic1" />
        <img className="LoginPic2" src={LoginPic2} alt="bgPic2" />
      </div>
    </div>
  );
}

export default ForgettedPassword;
