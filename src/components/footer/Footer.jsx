import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";

import FooterIcon from "../../assets/Icons/footerIcon.svg";
import instagramIcon from "../../assets/Icons/instagramIcon.svg";
import facebookIcon from "../../assets/Icons/facebookIcon.svg";
import twitterIcon from "../../assets/Icons/twitterIcon.svg";
import youtubeIcon from "../../assets/Icons/youtubeIcon.svg";
import locationIcon from "../../assets/Icons/locationIcon.svg";
import emailIcon from "../../assets/Icons/emailIcon.svg";
import phoneIcon from "../../assets/Icons/phoneIcon.svg";
import "../../myscssfolder/_variables.scss";
import "../../myscssfolder/_mixins.scss";
import iconFooter from "../../assets/Images/Group 5580.png";
function Footer() {
  return (
    <>
      <div className="mainFooterDiv">
        <div className="footerTitleImg">
          <img className="footerLogoPic" src={iconFooter} alt="hi" />
          <div className="socialIcons">
            <img className="instagramIcon" src={instagramIcon} alt="hi" />
            <img className="facebookIcon" src={facebookIcon} alt="hi" />
            <img className="youtubeIcon" src={youtubeIcon} alt="hi" />
            <img className="twitterIcon" src={twitterIcon} alt="hi" />
          </div>
        </div>
        <div className="footerTitleDiv">
          <h6 className="footerTitle">Menu</h6>
          <div>
            <ul className="menuUl">
              <li className="firstMenuLi">Yeni</li>
              <li className="menuLi">Endirimlər</li>
              <li className="menuLi">Aksessuarlar</li>
              <li className="menuLi">Bütün brendlər</li>
            </ul>
          </div>
        </div>
        <div className="footerTitleDiv">
          <h6 className="footerTitle">Kömək</h6>
          <div>
            <ul className="helpUl">
              <Link to="questions">
                <li className="firstHelpLi">Tez-tez soruşulan suallar</li>
              </Link>
              <li className="helpLi">Çatdırılma xidməti</li>
              <li className="helpLi">Geri qaytarılma şərtləri</li>
            </ul>
          </div>
        </div>
        <div className="footerTitleDiv">
          <h6 className="footerTitle">Əlaqə</h6>

          <div className="locationDiv">
            <div>
              <img src={locationIcon} alt="hi" />
            </div>
            <div className="address">
              M. K. Ataturk avenue 89, Baku,
              <br /> Azerbaijan
            </div>
          </div>
          <div className="emailDiv">
            <div className="emailImage">
              <img src={emailIcon} alt="hi" />
            </div>
            <div className="email">example@gmail.com</div>
          </div>
          <div className="phoneDiv">
            <div>
              <img src={phoneIcon} alt="hi" />
            </div>
            <div className="phone">*2108</div>
          </div>
        </div>
      </div>
      <div className="footerLine">
        <div className="protect">
          © <span>ProjectX 2021. Bütün hüquqlar qorunur.</span>
        </div>
        <div className="rulesAndSecury">
          <span className="rules">Qaydalar və şərtlər</span>
          <span className="security">Məxfilik siyasəti</span>
        </div>
      </div>
    </>
  );
}

export default Footer;
