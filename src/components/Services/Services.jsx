import React from "react";
import "./Services.scss";

import delivery from "../../assets/Images/delivery.png";
import card from "../../assets/Images/card-pos.png";
import medal from "../../assets/Images/medal-star.png";

const Services = () => {
  return (
    <div className="mainServiceDiv">
      <div className="service">
        <img className="serviceImg1" src={delivery} alt="#" />
        <h3>Çatdırılma</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit{" "}
        </p>
      </div>
      <div className="service">
        <img className="serviceImg" src={card} alt="#" />
        <h3>Kredit</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit{" "}
        </p>
      </div>
      <div className="service">
        <img className="serviceImg" src={card} alt="#" />
        <h3>Zəmanət</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit{" "}
        </p>
      </div>
    </div>
  );
};

export default Services;
