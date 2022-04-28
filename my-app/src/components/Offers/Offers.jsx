import React from "react";
import "./Offers.scss";

import offer1 from '../../assets/Images/offer-1.png'
import offer2 from '../../assets/Images/offer-2.png'

const Offers = () => {
  return (
    <div className="offers">
      <div className="col">
        <img src={offer1} alt="Iphone 11" />
      </div>
      <div className="col">
        <img src={offer2} alt="AirTag" />
      </div>
    </div>
  );
};

export default Offers;
