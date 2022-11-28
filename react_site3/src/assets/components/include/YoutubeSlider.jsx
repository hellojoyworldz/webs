import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const YoutubeSliderItem = ({ youtube }) => {
  return <img src={youtube.snippet.thumbnails.high.url} alt="" />;
};

const YoutubeSlider = ({ youtube }) => {
  return (
    <section className="movie__slider">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        initialSlide="3"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper">
        {youtube.map((youtube, index) => (
          <SwiperSlide key={index}>
            <YoutubeSliderItem key={index} youtube={youtube} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default YoutubeSlider;
