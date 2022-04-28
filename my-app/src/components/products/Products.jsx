import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Products.scss";
import RightIcon from "../../assets/Icons/chevron-right.png";
import MinusIcon from "../../assets/Icons/minus.png";
import PlusIcon from "../../assets/Icons/plus.png";
import Siralama from "../../assets/Icons/siralama.png";
import Filter from "../../assets/Icons/filter .png";
import Commerce from "../../library/commerce/Commerce";
import MobileFilter from "../products/MobileFilter";

function Products({ products }) {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [currentCategory, setCurrentCategory] = useState(categoryId);
  const [allProducts, setAllProducts] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

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
      <div className="container">
        <ul className="mainGoHomeUl">
          <li>
            <span>Ana səhifə</span> <img src={RightIcon} alt="rightSide" />
          </li>
          <li>
            <span>Telefonlar</span> <img src={RightIcon} alt="rightSide" />
          </li>
          <li>
            <span>Apple</span>
          </li>
        </ul>
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
          allProducts={allProducts}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
        />
      )}
      <p className="countOfProducts">287 məhsul tapıldı</p>

      <div className="container productsAllDiv">
        <div className="leftSideCategories">
          <div className="brand">
            <p className="brandCount">Brend (4)</p>
            <img className="decrementCount" src={MinusIcon} alt="minus" />
          </div>
          <div className="lineOfBrand"></div>
          <div className="allNameCategory">
            <ul>
              {allProducts.map((item) => (
                <li>
                  <label
                    htmlFor={`category-${item.name}`}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <input
                      className="checkedInput"
                      type="checkbox"
                      id={`category-${item.name}`}
                      checked={currentCategory === item.name.toLowerCase()}
                      style={{ marginRight: "8px" }}
                      onInput={() => {
                        setCurrentCategory(item.name.toLowerCase());
                        navigate(`/products/${item.name.toLowerCase()}`, {
                          replace: true,
                        });
                      }}
                    />
                    {item.name}
                  </label>
                </li>
              ))}
            </ul>
            <div className="mainTypeDiv">
              <div className="types">
                <p>Type</p>
                <img className="incrementCount" src={PlusIcon} alt="plus" />
              </div>
              <div className="lineOfTypes"></div>
              <div className="types">
                <p>Category</p>
                <img className="incrementCount" src={PlusIcon} alt="plus" />
              </div>
              <div className="lineOfTypes"></div>
              <div className="types">
                <p>Rəng</p>
                <img className="incrementCount" src={PlusIcon} alt="plus" />
              </div>
              <div className="lineOfTypes"></div>
              <div className="types">
                <p>Qiymət</p>
                <img className="incrementCount" src={PlusIcon} alt="plus" />
              </div>
              <div className="lineOfTypes"></div>
            </div>
          </div>
        </div>
        <div className="imagesOfProduct">
          {products?.map((item, index) => (
            <Link to={`${item.id}`}>
              <div className="productCard">
                <img src={item.image.url} alt="pic" />
                <p className="itemName">{item.name}</p>
                <p className="itemPrice">{item.price.formatted} $</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
