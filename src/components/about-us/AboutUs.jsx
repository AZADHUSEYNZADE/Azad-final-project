import React from "react";
import "./about-us.scss";
import RightIconWhite from "../../assets/Images/chevron-right (2).png";
import Quality from "../../assets/Images/quality.png";
import Client from "../../assets/Images/client.png";
import Creativ from "../../assets/Images/creativ.png";
import Youth from "../../assets/Images/youth.png";
import Costs from "../../assets/Images/costs.png";
import Presents from "../../assets/Images/presents.png";

function AboutUs() {
  return (
    <>
      <div className="mainAboutUsDiv">
        <div className="greenSide">
          <div className="container">
            <ul className="mainGoHomeUl">
              <li>
                <span>Ana səhifə</span>
                <img src={RightIconWhite} alt="rightSide" />
              </li>
              <li>
                <span>Haqqımızda</span>
              </li>
            </ul>
          </div>
          <h2>Haqqımızda</h2>
        </div>
        <div className="telloDiv">
          <h5>Tello</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lectus
            eget dignissim quis cursus orci ipsum. Volutpat ut varius nunc
            fringilla habitasse netus. Eget lorem parturient sed purus leo,
            fringilla adipiscing nisl. Turpis dictumst amet, amet dictum turpis
            mauris suscipit sit. Enim risus tincidunt ipsum, nunc, sed cras. Est
            in venenatis lobortis quis laoreet velit. Consectetur malesuada
            pellentesque ac velit fringilla est venenatis. Enim, sagittis
            lobortis lacus, arcu commodo. Sagittis, varius ac nulla a. Dui nisl,
            blandit in id hendrerit. Risus diam risus, nec sit. Sed mi arcu
            gravida iaculis tellus mollis tempor ac.
          </p>
        </div>
        <h2 className="ourValues">Dəyərlərimiz</h2>
        <div
          className="wtf"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className="container qualityDiv mobileQuality">
            <div className="qualityImgSide">
              <img src={Quality} alt="Quality" />
              <span>Keyfiyyət</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
              laoreet commodo non magna ullamcorper tincidunt augue. Viverra
              porttitor arcu sed quisque.
            </p>
          </div>

          <div className="container clientDiv">
            <div className="qualityImgSide">
              <img src={Client} alt="Quality" />
              <span>Müştəri məmnuniyyəti</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
              laoreet commodo non magna ullamcorper tincidunt augue. Viverra
              porttitor arcu sed quisque.
            </p>
          </div>
          <div className="container qualityDiv">
            <div className="qualityImgSide">
              <img src={Creativ} alt="Quality" />
              <span>Kreativ yanaşma</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
              laoreet commodo non magna ullamcorper tincidunt augue. Viverra
              porttitor arcu sed quisque.
            </p>
          </div>
          <div className="container clientDiv">
            <div className="qualityImgSide">
              <img src={Youth} alt="Quality" />
              <span>Gənclər</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
              laoreet commodo non magna ullamcorper tincidunt augue. Viverra
              porttitor arcu sed quisque.
            </p>
          </div>
          <div className="container qualityDiv">
            <div className="qualityImgSide">
              <img src={Costs} alt="Quality" />
              <span>Ən yaxşı qiymətlər</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
              laoreet commodo non magna ullamcorper tincidunt augue. Viverra
              porttitor arcu sed quisque.
            </p>
          </div>
          <div className="container clientDiv">
            <div className="qualityImgSide">
              <img src={Presents} alt="Quality" />
              <span>Çoxlu hədiyyələr</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
              laoreet commodo non magna ullamcorper tincidunt augue. Viverra
              porttitor arcu sed quisque.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
