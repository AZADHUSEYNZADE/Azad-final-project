import React from "react";
import "./favorite.scss";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllFavorites } from "../../features/favoriteSlice";

function Favorite() {
  // const favorites = useSelector(favorites);
  const favorites = useSelector(selectAllFavorites);
  console.log(favorites, "+++++");
  return (
    <div className="container mainFavoriteDiv">
      <div className="leftSideBasket">
        <h6>Profilim</h6>

        <div className="myShoppingCart">
          <ShoppingCartOutlinedIcon className="shopIcon" />
          <span>Sifarişlərim</span>
        </div>
        <Link to="/my-favorite-products">
          <div className="myFavoriteCart">
            <FavoriteBorderOutlinedIcon className="favoriteIcon" />
            <span>Favorilərim</span>
          </div>
        </Link>
        <div className="myPersonCart">
          <Link to="/user-information">
            <PersonOutlineOutlinedIcon className="personIcon" />
            <span>Şəxsi məlumatlar</span>
          </Link>
        </div>
        <div className="myLocationCart">
          <AddLocationIcon className="personIcon" />

          <span>Çatdırılma ünvanı</span>
        </div>
        <div className="myLogOutCart">
          <LogoutIcon className="logOutIcon" />

          <span>Çıxış</span>
        </div>
      </div>
      <div className="rightSideFavorite">
        <h6>Favorilərim</h6>
        {favorites.map((elem) => (
          <h1>{elem.name}</h1>
        ))}
      </div>
    </div>
  );
}

export default Favorite;
