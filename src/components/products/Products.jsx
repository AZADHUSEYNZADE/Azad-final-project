import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Products.scss";
import RightIcon from "../../assets/Icons/chevron-right.png";
import MinusIcon from "../../assets/Icons/minus.png";
import PlusIcon from "../../assets/Icons/plus.png";
import CancelIcon from "../../assets/Icons/cancel.png";
import Siralama from "../../assets/Icons/siralama.png";
import Filter from "../../assets/Icons/filter .png";
import Commerce from "../../library/commerce/Commerce";
import MobileFilter from "../products/MobileFilter";
import Cost from "../products/Cost";
import { Checkbox } from "@mui/material";
import { pink } from "@mui/material/colors";

import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import {
  handleFavorite,
  selectAllFavorites,
  setList,
} from "../../features/favoriteSlice";
function Products({ products, count, findItem }) {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [currentCategory, setCurrentCategory] = useState(categoryId);
  const [allProducts, setAllProducts] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [cost, setCost] = useState(false);

  const favs = useSelector(selectAllFavorites);

  React.useEffect(() => {
    const fetchAllProducts = () => {
      Commerce.categories
        .retrieve("mehsullar", { type: "slug", depth: "3" })
        .then((category) => setAllProducts(category.children))
        .catch((error) => {
          console.log("There was an error fetching the products", error);
        });
    };

    fetchAllProducts();
  }, []);

  return (
    <>
      <div>
        <div className="container">
          <ul className="mainGoHomeUl">
            <li>
              <span>Ana səhifə</span> <img src={RightIcon} alt="rightSide" />
            </li>
            <li>
              <span>Telefonlar</span> <img src={RightIcon} alt="rightSide" />
            </li>
            <Link to="/about-us">
              <li>
                <span>Haqqımızda</span>
              </li>
            </Link>
          </ul>
        </div>

        <div
          className="cancelDiv"
          onClick={() => {
            setIsVisible(false);
          }}
        >
          <img src={CancelIcon} alt="cancelImg" />
          <span> Filterləmələr</span>
        </div>

        <div className="mobileFilterMainDiv">
          <div className="siralama">
            <img src={Siralama} alt="siralama" />
            <span>Sıralama</span>
          </div>
          <div className="mobileFilterLine"></div>
          <div
            onClick={() => {
              setIsVisible(true);
            }}
            className="filter"
          >
            <img src={Filter} alt="filter" />
            <span>Filterləmələr</span>
          </div>
        </div>
        <div className="mobileFilterLine2"></div>

        {isVisible && (
          <MobileFilter
            className="mobileFilterOnly"
            allProducts={allProducts}
            setCurrentCategory={setCurrentCategory}
            currentCategory={currentCategory}
          />
        )}

        {count && <p className="countOfProducts">{count} Məhsul tapıldı</p>}
        <div className="container productsAllDiv">
          <div className="leftSideCategories">
            <div className="brand">
              <p className="brandCount">
                Brend <span>({allProducts.length})</span>
              </p>
              <img className="decrementCount" src={MinusIcon} alt="minus" />
            </div>
            <div className="lineOfBrand"></div>
            <div className="allNameCategory">
              <ul>
                {allProducts.map((item) => (
                  <li>
                    <label
                      htmlFor={`category-${item.name}`}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        position: "relative",
                      }}
                    >
                      <input
                        className="checkedInput"
                        type="checkbox"
                        id={`category-${item.name}`}
                        checked={currentCategory === item.name.toLowerCase()}
                        style={{
                          position: "absolute",
                          right: "10px",
                          bottom: "3px",
                        }}
                        onInput={() => {
                          setCurrentCategory(item.name.toLowerCase());
                          navigate(`/products/${item.name.toLowerCase()}`, {
                            replace: true,
                          });
                        }}
                      />
                    </label>
                    {item.name}
                  </li>
                ))}
              </ul>

              <div className="mainTypeDiv">
                <div className="types">
                  <p>Qiymət</p>

                  <img
                    onClick={() => {
                      setCost(!cost);
                    }}
                    className="incrementCount"
                    src={cost ? MinusIcon : PlusIcon}
                    alt="plus"
                  />
                </div>
                <div className="lineOfTypes"></div>
              </div>
            </div>

            {cost && <Cost findItem={findItem} />}
          </div>
          <div className="imagesOfProduct">
            {products &&
              products.map((item, index) => (
                <div className="productCard">
                  <div className="favoriteDiv">
                    {console.log(favs)}
                    <Checkbox
                      onClick={() => {
                        dispatch(handleFavorite(item));
                        dispatch(setList(item.id));
                      }}
                      checked={Boolean(favs.find((fav) => fav.id == item.id))}
                      icon={<FavoriteBorder color="inherit" />}
                      checkedIcon={<Favorite color="inherit" />}
                      sx={{
                        color: pink[800],
                        "&.Mui-checked": {
                          color: pink[600],
                        },
                        position: "absolute",
                        right: 0,
                      }}
                    />
                  </div>
                  <Link to={`/product-details/${item.id}`}>
                    <img src={item.image.url} alt="pic" />
                  </Link>
                  <p className="itemName">{item.name}</p>
                  <p className="itemPrice">{item.price.formatted} $</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
