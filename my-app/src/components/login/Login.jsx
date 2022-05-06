import React from "react";
import "./login.scss";
import Facebook from "../../assets/Icons/facebookIcon.png";
import Google from "../../assets/Icons/googleIcon.png";
import LoginPic1 from "../../assets/Images/loginBgPic1.png";
import LoginPic2 from "../../assets/Images/loginBgPic2.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="container mainLoginDiv">
        <div className="leftSideLogin">
          <h6>Daxil ol</h6>
          <div className="SocialIconsDiv">
            <div className="fbSide">
              <div className="fbIcon">
                <img src={Facebook} alt="facebookIcon" />
              </div>
              <span>Facebook ilə</span>
            </div>
            <div className="googleSide">
              <div className="googleIcon">
                <img src={Google} alt="googleIcon" />
              </div>
              <span>Google ilə</span>
            </div>
          </div>
          <p className="orLogin">və ya</p>

          <div className="emailLoginDiv">
            <div>
              <p>E-mail</p>
              <input placeholder="add your e-mail address" />
            </div>
          </div>
          <div className="passwordLoginDiv">
            <div>
              <p>Şifrə</p>
              <input type="password" placeholder="add your password" />
              <Link to="/forgetted-password">
                <h6>Şifrəni unutmusunuz?</h6>
              </Link>
              <button>Daxil ol</button>
            </div>
          </div>
        </div>

        <div className="rightSideLogin1">
          <img className="LoginPic1" src={LoginPic1} alt="bgPic1" />
          <img className="LoginPic2" src={LoginPic2} alt="bgPic2" />
        </div>
      </div>
      <div className="noAccountDiv">
        <span className="noacc1">
          Hesabınız yoxdur?
          <Link to="/sign-up">
            <span className="noacc2">Qeydiyyatdan keçin</span>
          </Link>
        </span>
      </div>
      <div className="mobileVersionLogin">
        <span className="noacc1Mobile">
          Hesabınız yoxdur?
          <Link to="/sign-up">
            <span className="noacc2Mobile">Qeydiyyatdan keçin</span>
          </Link>
        </span>
      </div>
    </>
  );
}

export default Login;
