import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import Commerce from "../../library/commerce/Commerce";

import SearchBar from "../SearchBar/SearchBar";
import Sidebar from "../Sidebar/Sidebar";

import Tello from "../../assets/Icons/Tello-logo.svg";
import { Badge } from "@mui/material";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Link, useParams } from "react-router-dom";
import subPic from "../../assets/Images/subPic.png";
// import { Products } from "@chec/commerce.js/features/products";
const Navbar = ({ setShowSidebar }) => {
  const { categoryId } = useParams();

  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [allProducts, setAllProducts] = useState([]);

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
              <PersonOutlineOutlinedIcon />
              <FavoriteBorderOutlinedIcon />
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
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
