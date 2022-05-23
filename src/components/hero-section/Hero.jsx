import React from "react";
import "./hero.scss";
import heroImg from "../../assets/Images/image 1.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import '../../myscssfolder/_mixins.scss'
import '../../myscssfolder/_variables.scss'
function hero() {
  const pagination = {
    clickable: true,
  };

  return (
    <div className="mainHeroDiv">
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper2"
        loop={true}
      >
        <SwiperSlide>
          <div>
            <h3>
              Buy & Sell <br /> What's Now & Next
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feli
              <br /> malesuada et leo faucibus
            </p>
          </div>
          <div>
            <img src={heroImg} alt="heroImg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <h3>
              Buy & Sell <br /> What's Now & Next
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis
              <br /> malesuada et leo faucibus
            </p>
          </div>
          <div>
            <img src={heroImg} alt="heroImg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <h3>
              Buy & Sell <br /> What's Now & Next
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis
              <br /> malesuada et leo faucibus
            </p>
          </div>
          <div>
            <img src={heroImg} alt="heroImg" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default hero;
