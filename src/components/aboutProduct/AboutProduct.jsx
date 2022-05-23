import React, { useState } from "react";
import "./AboutProduct.scss";
import Commerce from "../../library/commerce/Commerce";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import star from "../../assets/Icons/star.png";
import whiteStar from "../../assets/Icons/whiteStar.png";
import shop from "../../assets/Icons/shop.png";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function AboutProduct() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(1);
  const [color, setColor] = useState("");
  const [ram, setRam] = useState("");
  const [open, setOpen] = React.useState(true);

  const dispatch = useDispatch();

  const decrementCount = () => {
    if (count === 1) {
      return;
    }
    setCount((prevState) => prevState - 1);
  };
  const incrementCount = () => {
    setCount((prevState) => prevState + 1);
  };
  const dicrementCount = () => {
    setCount((prevState) => prevState - 1);
  };
  const checkColor = (e) => {
    let selectedColor = e.target.getAttribute("class");
    setColor(selectedColor);
  };

  const checkRam = (e) => {
    setRam(e.target.textContent);
  };
  React.useEffect(() => {
    const fetchProduct = () => {
      Commerce.products
        .retrieve(productId)
        .then((product) => {
          setProduct(product);
          setOpen(false);
        })
        .catch((error) => {
          console.log("There was an error fetching the products", error);
        });
    };
    fetchProduct();
  }, [productId]);

  return (
    <>
      <Backdrop
        sx={{ color: "#000", opacity: "0.3", zIndex: "1", background: "white" }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className="container mainAboutDiv">
        <div className="swiperAboutPro">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {product?.assets?.map((item) => (
              <SwiperSlide>
                <img className="topImage" src={item.url} alt="pic" />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {product?.assets?.map((item) => (
              <SwiperSlide>
                <img className="buttomImage" src={item.url} alt="pic" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="rightSideAbout">
          <h6 className="nameOfProduct">
            {product.name}
            <span> {color.toUpperCase()}</span>
            <span> {ram}</span>
          </h6>
          <div className="commentsDiv">
            <img style={{ marginLeft: "0px" }} src={star} alt="starImage" />
            <img src={star} alt="starImage" />
            <img src={star} alt="starImage" />
            <img src={star} alt="starImage" />
            <img src={whiteStar} alt="starImage" />
            <span className="count226">(226)</span>
            <span className="countOfComments">57 rəy</span>
          </div>
          <div className="costs">
            <div>
              <span className="newCost">{product?.price?.formatted} $</span>
            </div>
            <div>
              <button
                onClick={() => dispatch(addToCart({ product, count }))}
                className="mobileButton"
              >
                Səbətə at
              </button>
            </div>
          </div>

          <div className="colorsDiv">
            <p>{product.variant_groups && product.variant_groups[0].name}:</p>
            <div>
              {product.variant_groups &&
                product.variant_groups[0].options.map((item, indexxx) => (
                  <div
                    onClick={checkColor}
                    key={indexxx}
                    className={item.name}
                  ></div>
                ))}
            </div>
          </div>
          <div className="mainMemoryDiv">
            <p>{product.variant_groups && product.variant_groups[1].name} :</p>
            <div>
              {product.variant_groups &&
                product.variant_groups[1].options.map((item, indexxxx) => (
                  <div key={indexxxx}>
                    <span onClick={checkRam}>{item.name}</span>
                  </div>
                ))}
            </div>
          </div>

          <div className="line"></div>
          <div className="incremenetAndDicrement">
            <span className="weight">Miqdar:</span>
            <button onClick={decrementCount} className="dicrement">
              -
            </button>
            <p className="count">{count}</p>
            <button onClick={incrementCount} className="increment">
              +
            </button>
          </div>
          <div className="addDiv">
            <img src={shop} alt="shop" />
            <button onClick={() => dispatch(addToCart({ product, count }))}>
              Səbətə at
            </button>
          </div>
        </div>
      </div>
      <p className="titleAdvantagesMobile">Məhsul haqqında</p>

      <p className="advantageTextMobile">
        {product?.description?.replace(/(<([^>]+)>)/gi, "")}
      </p>
      <div className="container commentsAndFeatures">
        <p className="techFeat">Texniki Xüsusiyyətləri</p>
        <p className="commentUnderSide">Rəylər</p>
      </div>
      <div className="container line2"></div>

      <div className="container mainAndAbout">
        <div className="hiMan">
          <p className="titleFeatures">Əsas göstəricilər</p>
          <div className="leftSideFeatures">
            <div>
              <p>Item Weight</p>
              <p>OS</p>
              <p>Form Factor</p>
              <p>Battery Power Rating </p>
            </div>
            <div>
              <p>14.9 ounces</p>
              <p>IOS 12</p>
              <p>Smartphone</p>
              <p>2815</p>
            </div>
          </div>
        </div>
        <div className="hiMan">
          {product?.description?.replace(/(<([^>]+)>)/gi, "")}
        </div>
      </div>

      <p className="titleFeaturesMobile">Əsas göstəricilər</p>
      <div className="leftSideFeaturesMobile">
        <div className="part1Left">
          <p>Item Weight</p>
          <p>OS</p>
          <p>Form Factor</p>
          <p>Battery Power Rating </p>
        </div>
        <div className="part1Right">
          <p>14.9 ounces</p>
          <p>IOS 12</p>
          <p>Smartphone</p>
          <p>2815</p>
        </div>
      </div>
    </>
  );
}

export default AboutProduct;
