import React from "react";
import "./Card.scss";
import { Paper } from "@mui/material";

const Card = ({ product }) => {
  return (
    <Paper className="card">
      <div className="card-img">
        <img src={product.image.url} alt={product.name} />
      </div>
      <div className="card-context">
        <h4 className="product-title">{product.name}</h4>
        {/* <h4 className="product-color"></h4>y */}
        <h4 className="product-price">{product.price.formatted_with_symbol}</h4>
      </div>
    </Paper>
  );
};

export default Card;
