import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Images
import cover1 from "../../../Asset/image/cover10.png";
import cover2 from "../../../Asset/image/cover20.png";
import cover3 from "../../../Asset/image/cover18.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import "./HomeCarousel.scss";
// import required modules
// import { Navigation } from "swiper";
import { Autoplay } from "swiper";
// import { FreeMode } from "swiper";
import { Pagination } from "swiper";

function HomeImageCarousel() {
  const pagination = {
    clickable: true,
  };
  return (
    <div className="HomeImageContainer">
      <Swiper
        // navigation={true}
        modules={[Autoplay, Pagination]}
        loop={true}
        pagination={pagination}
        autoplay={{ delay: 2000 }}
        speed={1500}
        pauseOnMouseEnter={false}
        touchReleaseOnEdges={true}
        initialSlide={1}
        // disableOnInteraction
        // freeMode={{ enabled: true, sticky: true }}
        className="mySwiper"
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={0}
      >
        <SwiperSlide>
          <img src={cover1} alt="Home carousel 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={cover2} alt="Home carousel 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={cover3} alt="Home carousel 1" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
export default HomeImageCarousel;
