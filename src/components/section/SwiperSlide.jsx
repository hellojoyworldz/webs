// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slide = () => {
  return (
    <section className="visual">
      <div className="in">
        <div className="visual__header">
          <h2 className="visual__tit">
            HOTELS
            <br />
            COMBINED
          </h2>
          <p className="visual__txt">
            너무 무리하지 말아요!
            <br />
            이미 당신은 해내고 있고
            <br />
            앞으로도 잘 할 수 있을거예요!
          </p>
          <span className="visual__view">
            <a href="#!">더 알아보기</a>
          </span>
        </div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500 }}
        loop
        Keyboard>
        <SwiperSlide>
          <img
            src="../assets/img/visual__img02.jpg"
            width="1918"
            height="700"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../assets/img/visual__img03.jpg"
            width="1918"
            height="700"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../assets/img/visual__img01.jpg"
            width="1918"
            height="700"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Slide;
