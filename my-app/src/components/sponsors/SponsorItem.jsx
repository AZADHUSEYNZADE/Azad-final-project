import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "./sponsorItem.scss";

function SponsorItem({ sponsor }) {
  const pagination = {
    clickable: true,
  };

  return (
    <div className="mainSponsorDiv">
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
        spaceBetween={40}
        slidesPerView={7}
      >
        {sponsor.map((item, index) => (
          <SwiperSlide className="sponsorSwiperSlide" key={index}>
            <img src={item.image.url} alt="pic" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SponsorItem;
