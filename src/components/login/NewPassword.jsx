import React from "react";
import "./new-password.scss";
import NewPassPic from "../../assets/Images/newPassPic.png";
import LoginPic2 from "../../assets/Images/loginBgPic2.png";
function NewPassword() {
  return (
    <div className="container newPasswordMainDiv">
      <div className="leftSideNewPassword">
        <h6>Şifrəni yenilə</h6>
        <p className="configredNewCode">Hesabınıza yeni şifrə təyin edin</p>
        <p className="newPassTitle">Yeni Şifrə</p>
        <input
          className="newPasInput"
          type="password"
          placeholder="add your new password"
        />
        <br />
        <button className="sendButtonNewPass">Təsdiqlə</button>
      </div>
      <div className="rightSideLoginNewPassword">
        <img className="LoginPic1NewPass" src={NewPassPic} alt="bgPic1" />
        <img className="LoginPic2NewPass" src={LoginPic2} alt="bgPic2" />
      </div>
    </div>
  );
}

export default NewPassword;
