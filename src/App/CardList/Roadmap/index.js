import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Images
import Roadmap from "../../../Asset/data/Roadmap";

// Import CarouselCard
import CarouselCard from "../../Card/CarouselCard";
import HeadingSection from "../../Component/HeadingSection";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import "./CarouselRoadmap.scss";
// import required modules
// import { Navigation } from "swiper";
import { Autoplay } from "swiper";
// import { FreeMode } from "swiper";
// import { Pagination } from "swiper";

function CarouselRoadmap() {
  return (
    <div className="CarouselRoadmapContainer">
      <HeadingSection description={`Hành trình phát triển`} />
      <Swiper
        // navigation={true}
        modules={[Autoplay]}
        loop={true}
        // pagination={pagination}
        autoplay={{ delay: 2000 }}
        speed={1500}
        touchReleaseOnEdges={true}
        initialSlide={1}
        // disableOnInteraction
        // freeMode={{ enabled: true, sticky: true }}
        className="myRoadmapCarousel"
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={50}
        breakpoints={{
          1: {
            // width: 576,
            slidesPerView: 1,
          },
          800: {
            slidesPerView: 2,
          },
          992: {
            // width: 768,
            slidesPerView: 3,
          },
        }}
      >
        {Roadmap.map((item) => (
          <SwiperSlide>
            <CarouselCard
              image={item.image}
              title={item.tiltle}
              description={item.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default CarouselRoadmap;
