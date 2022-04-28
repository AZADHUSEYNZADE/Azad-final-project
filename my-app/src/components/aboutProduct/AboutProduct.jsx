import React, { useRef, useState } from "react";
import "./AboutProduct.scss";
import Commerce from "../../library/commerce/Commerce";
import { Link, useParams } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import star from "../../assets/Icons/star.png";
import whiteStar from "../../assets/Icons/whiteStar.png";
import greyColor from "../../assets/Icons/greyColor.png";
import blackColor from "../../assets/Icons/blackColor.png";
import whiteColor from "../../assets/Icons/whiteColor.png";
import blueColor from "../../assets/Icons/blueColor.png";
import shop from "../../assets/Icons/shop.png";
import productPhoto5 from "../../assets/Images/productPhoto5.webp";
import productPhoto3 from "../../assets/Images/productPhoto3.webp";
import productPhoto6 from "../../assets/Images/productPhoto6.webp";
import productPhoto7 from "../../assets/Images/productPhoto7.webp";
import productPhoto8 from "../../assets/Images/productPhoto8.webp";

function AboutProduct() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  const fetchProducts = () => {
    Commerce.products
      .retrieve(productId)
      .then((product) => {
        setProduct(product);
      })
      .catch((error) => {
        console.log("There was an error fetching the products", error);
      });
    console.log("salam");
  };

  const doNothing = () => {
    // console.log(product);
  };

  React.useEffect(() => {
    product && Object.keys(product).length !== 0
      ? doNothing()
      : fetchProducts();
  });

  // console.log(product);

  return (
    <>
      <div className="container mainAboutDiv">
        <div className="swiperAboutPro">
          <Swiper
            style={{
              "--swiper-navigation-color": "red",
              "--swiper-pagination-color": "blue",
            }}
            loop={true}
            spaceBetween={5}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
            id="firstSwiperAbout"
          >
            <SwiperSlide>
              {/* <img
                className="firstSwiperSlideAboutImage"
                src={productPhoto5}
                alt="hi"
              /> */}

              <Link to="/one-product">
                <img src={product.image && product.image.url} alt="pic" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="firstSwiperSlideAboutImage"
                src={productPhoto3}
                alt="hi"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="firstSwiperSlideAboutImage"
                src={productPhoto6}
                alt="hi"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="firstSwiperSlideAboutImage"
                src={productPhoto7}
                alt="hi"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="firstSwiperSlideAboutImage"
                src={productPhoto8}
                alt="hi"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="firstSwiperSlideAboutImage"
                src={productPhoto6}
                alt="hi"
              />
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={6}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
            id="secondSwiperAbout"
          >
            <SwiperSlide>
              <img
                className="secondSwiperSlideAboutImage"
                src={productPhoto5}
                alt="hi"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="secondSwiperSlideAboutImage"
                src={productPhoto3}
                alt="hi"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="secondSwiperSlideAboutImage"
                src={productPhoto6}
                alt="hi"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="secondSwiperSlideAboutImage"
                src={productPhoto7}
                alt="hi"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="secondSwiperSlideAboutImage"
                src={productPhoto8}
                alt="hi"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="secondSwiperSlideAboutImage"
                src={productPhoto6}
                alt="hi"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="rightSideAbout">
          <h6 className="nameOfProduct">
            iPhone 12, 64 GB, Bənövşəyi,{" "}
            <span className="longName">
              (MJNM3) Golden 5 G <br /> 8690604083886 0212042
            </span>
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
              <span className="oldCost">3012 azn</span>
              <span className="newCost">2089 azn</span>
            </div>
            <div>
              <button className="mobileButton">Səbətə at</button>
            </div>
          </div>
          <div className="colorsDiv">
            <span className="color"> Rəng:</span>

            <img className="colorsName" src={blueColor} alt="color" />
            <img className="colorsName" src={greyColor} alt="starImage" />
            <img className="colorsName" src={blackColor} alt="starImage" />
            <img className="colorsName" src={whiteColor} alt="starImage" />
          </div>
          <div className="mainMemoryDiv">
            <span className="memory">Yaddaş:</span>
            <span className="firstMemory">256GB</span>
            <span className="secondMemory">128GB</span>
            <span className="thirdMemory">64GB</span>
            <span className="fourthMemory">32GB</span>
          </div>
          <div className="line"></div>
          <div className="incremenetAndDicrement">
            <span className="weight">Miqdar:</span>{" "}
            <button className="dicrement">-</button>
            <p className="count">1</p>
            <button className="increment">+</button>
          </div>
          <div className="addDiv">
            <img src={shop} alt="shop" /> <button>Səbətə at</button>
          </div>
        </div>
      </div>
      <p className="titleAdvantagesMobile">Məhsul haqqında</p>

      <p className="advantageTextMobile">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit lobortis
        mi blandit aliquet sed placerat. Gravida nunc adipiscing donec aliquet
        sit. Arcu diam eget sit nunc ac quisque morbi.
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
              <p>İstehsalçı</p>
              <p>İstehsalçı</p>
              <p>İstehsalçı</p>
              <p>İstehsalçı</p>
            </div>
            <div>
              <p>Apple</p>
              <p>Apple</p>
              <p>Apple</p>
              <p>Apple</p>
            </div>
          </div>
          <p className="titleFeatures">Əsas göstəricilər</p>
          <div className="leftSideFeatures">
            <div>
              <p>İstehsalçı</p>
              <p>İstehsalçı</p>
              <p>İstehsalçı</p>
              <p>İstehsalçı</p>
            </div>
            <div>
              <p>Apple</p>
              <p>Apple</p>
              <p>Apple</p>
              <p>Apple</p>
            </div>
          </div>
          <p className="titleFeatures">Üstünlüklər</p>
          <div className="leftSideFeatures">
            <div>
              <p>İstehsalçı</p>
              <p>İstehsalçı</p>
              <p>İstehsalçı</p>
              <p>İstehsalçı</p>
            </div>
            <div>
              <p>Apple</p>
              <p>Apple</p>
              <p>Apple</p>
              <p>Apple</p>
            </div>
          </div>
        </div>
        <div className="mobileNoTitleAdv" style={{ width: "50%" }}>
          <p className="titleAdvantages">Məhsul haqqında</p>
          <p className="advantageText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
            <br />
            lobortis mi blandit aliquet sed placerat. Gravida nunc <br />{" "}
            adipiscing donec aliquet sit. Arcu diam eget sit nunc ac <br />{" "}
            quisque morbi. Bibendum commodo eget ac nunc ut. Justo
            <br /> venenatis vitae, pellentesque accumsan. Maecenas sed <br />{" "}
            rhoncus amet cursus venenatis, ipsum sollicitudin eget risus.
            <br /> Blandit vitae turpis eget arcu leo malesuada diam. At <br />{" "}
            semper nunc orci, accumsan, fringilla aliquam. Turpis quam <br />{" "}
            tortor nunc, est, sem nunc, lacus. Scelerisque adipiscing <br />{" "}
            libero, cras eu, donec nibh. Lacus aliquet pellentesque
            <br />
            morbi ullamcorper. Cursus tristique viverra et sed semper.
          </p>
        </div>
      </div>

      <p className="titleFeaturesMobile">Əsas göstəricilər</p>
      <div className="leftSideFeaturesMobile">
        <div className="part1Left">
          <p>İstehsalçı</p>
          <p>İstehsalçı</p>
          <p>İstehsalçı</p>
          <p>İstehsalçı</p>
        </div>
        <div className="part1Right">
          <p>Apple</p>
          <p>Apple</p>
          <p>Apple</p>
          <p>Apple</p>
        </div>
      </div>
      <p className="titleFeaturesMobile">Əsas göstəricilər</p>
      <div className="leftSideFeaturesMobile">
        <div className="part1Left">
          <p>İstehsalçı</p>
          <p>İstehsalçı</p>
          <p>İstehsalçı</p>
          <p>İstehsalçı</p>
        </div>
        <div className="part1Right">
          <p>Apple</p>
          <p>Apple</p>
          <p>Apple</p>
          <p>Apple</p>
        </div>
      </div>
      <p className="titleFeaturesMobile">Üstünlüklər</p>
      <div className="leftSideFeaturesMobile">
        <div className="part1Left">
          <p>İstehsalçı</p>
          <p>İstehsalçı</p>
          <p>İstehsalçı</p>
          <p>İstehsalçı</p>
        </div>
        <div className="part1RightLast">
          <p>Apple</p>
          <p>Apple</p>
          <p>Apple</p>
          <p>Apple</p>
        </div>
      </div>
    </>
  );
}

export default AboutProduct;
