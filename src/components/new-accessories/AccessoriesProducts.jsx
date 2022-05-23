import React from "react";
import AccessoryItem from "../../components/new-accessories/AccessoryItem";
// import cabel from "../../assets/Images/cabel.svg";
// import loop from "../../assets/Images/loop.svg";
// import greenAirpods from "../../assets/Images/greenAirpods.svg";
// import airPodsPro from "../../assets/Images/airPodsPro.svg";
// import aznSymbol from "../../assets/Images/aznSymbol.svg";
import lookAllIcon from "../../assets/Images/lookAllIcon.svg";
import "../../components/new-accessories/accProducts.scss";

function AccessoriesProducts({accessory}) {
  return (
    <>
      <div className="acsTitles">
        <p className="myAccParagraph">Yeni gələn aksessuarlar</p>
        <p className="lookAllParagraph">
          Hamısına bax
          <img className="lookAllIcon" src={lookAllIcon} alt="lookAllIcon " />
        </p>
      </div>

      <div className="mainProducts container">
        {accessory.map((item, index) => (
          <AccessoryItem item={item} key={index} />
        ))}
      </div>
      <p className="lookAllParagraphMobile">
        Hamısına bax
        <img
          className="lookAllIconMobile"
          src={lookAllIcon}
          alt="lookAllIcon "
        />
      </p>
    </>
  );
}

export default AccessoriesProducts;
