import React from "react";
import CkeckPhoto from "../../assets/Images/emailPic.png";
import "./check-email.scss";
import { Link } from "react-router-dom";
function CheckEmail() {
  return (
    <div className="container mainCheckDiv">
      <img src={CkeckPhoto} alt="emailPic" />
      <h5>
        E - poçt ünvanınızı yoxlayın.
        <br /> Göndərilmiş linkə keçid edib <br />
        <Link to="/new-password">şifrənizi yeniləyin!</Link>
      </h5>
    </div>
  );
}

export default CheckEmail;
