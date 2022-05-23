import React from "react";
import "../../components/new-accessories/accessory.scss";
function AccessoryItem({ item }) {
  return (
    <div className="accessoryMainDiv">
      <div className="imgContainer">
      <img className="accessoryImage" src={item.image.url} alt="product" />

      </div>
      <div className="cardBody">
        <ul className="ulOfAccessory">
          <li className="nameOfAccessory"  key="name">
            {item.name}
          </li>
          <li className="priceOfAccessory" key="price">
            {item.price.formatted} 
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AccessoryItem;
