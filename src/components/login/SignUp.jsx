import React from "react";
import "./signup.scss";
import Facebook from "../../assets/Icons/facebookIcon.png";
import Google from "../../assets/Icons/googleIcon.png";
import LoginPic1 from "../../assets/Images/loginBgPic1.png";
import LoginPic2 from "../../assets/Images/loginBgPic2.png";
import { Link } from "react-router-dom";
function SignUp() {
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

          <div className="nameLoginDiv">
            <div>
              <p>Ad, Soyad</p>
              <input placeholder="add your name and surname" />
            </div>
          </div>
          <div className="emailLoginDiv">
            <div>
              <p>E-mail</p>
              <input placeholder="add your e-mail address" />
            </div>
          </div>
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
          <div className="passwordLoginDiv">
            <div>
              <p>Şifrə</p>
              <input type="password" placeholder="add your password" />
              <h6>Şifrəni unutmusunuz?</h6>
              <div className="userAgree">
                <input type="checkbox" />
                <span>İstifadəçi şərtləri</span>
                <span className="secondAgreeSpan">ilə razıyam</span>
              </div>
              <button>Qeydiyyat</button>
            </div>
          </div>
        </div>

        <div className="rightSideLogin">
          <img className="LoginPic1" src={LoginPic1} alt="bgPic1" />
          <img className="LoginPic2" src={LoginPic2} alt="bgPic2" />
        </div>
      </div>
      <div className="noAccountDivSign">
        <span className="noacc1">
          Artıq hesabınız var?
          <Link to="/login-again">
            <span className="noacc2">Daxil olun </span>
          </Link>
        </span>
      </div>
      <div className="mobileVersionLogin">
        <span className="noacc1Mobile">
          Artıq hesabınız var?
          <Link to="/login-again">
            <span className="noacc2Mobile">Daxil olun</span>
          </Link>
        </span>
      </div>
    </>
  );
}

export default SignUp;
