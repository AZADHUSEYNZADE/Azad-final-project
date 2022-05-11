import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import Commerce from "../../library/commerce/Commerce";

import SearchBar from "../SearchBar/SearchBar";
import Sidebar from "../Sidebar/Sidebar";

import Tello from "../../assets/Icons/Tello-logo.svg";
import { Badge, IconButton } from "@mui/material";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Link } from "react-router-dom";
import subPic from "../../assets/Images/subPic.png";
import { selectCart } from "../../features/cartSlice";
import { useSelector } from "react-redux";
import { selectAllFavorites } from "../../features/favoriteSlice";
const Navbar = ({ setShowSidebar }) => {
  const cart = useSelector(selectCart);
  const favorites = useSelector(selectAllFavorites);
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [allProducts, setAllProducts] = useState([]);

  const cartCount = useSelector((state) => state.cart.cart.length);
  const fetchAllProducts = () => {
    Commerce.categories
      .retrieve("mehsullar", { type: "slug", depth: "3" })
      .then((category) => setAllProducts(category.children))
      .catch((error) => {
        console.log("There was an error fetching the products", error);
      });
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    windowWidth > 768 && setIsOpen(false);
    return () => {
      window.removeEventListener("resize", () =>
        setWindowWidth(window.innerWidth)
      );
    };
  }, [window.innerWidth]);

  return (
    <>
      <nav>
        <div className="container">
          <div className="row">
            <div className="nav-logo">
              <div
                className={`menu-icon ${isOpen && "open"}`}
                onClick={() => setIsOpen(!isOpen)}
              >
                <div></div>
                <div></div>
                <div></div>
              </div>
              <img src={Tello} alt="Tello" />
            </div>
            <div className="desktop-search">
              <SearchBar />
            </div>
            <div className="nav-elements">
              <Link to="login">
                <PersonOutlineOutlinedIcon />
              </Link>
              <Link to="my-orders">
                <IconButton aria-label="cart">
                  <Badge badgeContent={favorites?.lenght} color="secondary">
                    <FavoriteBorderOutlinedIcon />
                  </Badge>
                </IconButton>
              </Link>

              <Link to="basket">
                <Badge
                  // badgeContent={cart.reduce(
                  //   (prevValue, cartItem) => cartItem.count + prevValue,
                  //   0
                  // )}
                  badgeContent={cartCount}
                  color="primary"
                >
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </Link>
            </div>
          </div>
          <div className="row">
            <ul className="nav-links">
              {allProducts.map((item, i) => (
                <li className="parentLi" key={i}>
                  <Link to={`/products/${item.name.toLowerCase()}`}>
                    {item.name}
                  </Link>
                  <div className="mainSubDiv">
                    <ul className="menuSubCategories">
                      {item.children.map((subCategory) => {
                        return (
                          <li>
                            <Link
                              to={`/products/${subCategory.name.toLowerCase()}`}
                            >
                              <p className="subText">{subCategory.name}</p>
                            </Link>
                            {subCategory.children.map((sub) => {
                              return (
                                <li>
                                  <Link
                                    to={`/products/${sub.name.toLowerCase()}`}
                                  >
                                    <p className="subChildrenText">
                                      {sub.name}
                                    </p>
                                  </Link>
                                </li>
                              );
                            })}
                          </li>
                        );
                      })}
                      <img className="subImg" src={subPic} alt="pic" />
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="mobile-search">
            <SearchBar />
          </div>
        </div>
      </nav>
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        allProducts={allProducts}
      />
    </>
  );
};
export default Navbar;
