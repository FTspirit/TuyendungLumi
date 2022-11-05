import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Images
import test from "../../../Asset/image/carouselmockup.png";
import test1 from "../../../Asset/image/carouselmockup1.png";
import test2 from "../../../Asset/image/carouselmockup2.png";

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
        className="mySwiper"
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={50}
      >
        <SwiperSlide>
          <CarouselCard
            image={test}
            title="12-09-2002"
            description="Theo kết quả được công bố bởi Diễn đàn Kinh tế Thế giới (WEF) trong Báo Cáo Cạnh tranh toàn cầu 2019, Singapore được nhận định là thị trường cạnh tranh nhất thế giới. Điều gì đã khiến một thương hiệu nhà thông minh Made in Vietna"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            image={test1}
            title="12-09-2002"
            description="Theo kết quả được công bố bởi Diễn đàn Kinh tế Thế giới (WEF) trong Báo Cáo Cạnh tranh toàn cầu 2019, Singapore được nhận định là thị trường cạnh tranh nhất thế giới. Điều gì đã khiến một thương hiệu nhà thông minh Made in Vietna"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            image={test2}
            title="12-09-2002"
            description="Theo kết quả được công bố bởi Diễn đàn Kinh tế Thế giới (WEF) trong Báo Cáo Cạnh tranh toàn cầu 2019, Singapore được nhận định là thị trường cạnh tranh nhất thế giới. Điều gì đã khiến một thương hiệu nhà thông minh Made in Vietna"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            image={test1}
            title="12-09-2002"
            description="Theo kết quả được công bố bởi Diễn đàn Kinh tế Thế giới (WEF) trong Báo Cáo Cạnh tranh toàn cầu 2019, Singapore được nhận định là thị trường cạnh tranh nhất thế giới. Điều gì đã khiến một thương hiệu nhà thông minh Made in Vietna"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            image={test2}
            title="12-09-2002"
            description="Theo kết quả được công bố bởi Diễn đàn Kinh tế Thế giới (WEF) trong Báo Cáo Cạnh tranh toàn cầu 2019, Singapore được nhận định là thị trường cạnh tranh nhất thế giới. Điều gì đã khiến một thương hiệu nhà thông minh Made in Vietna"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            image={test2}
            title="12-09-2002"
            description="Theo kết quả được công bố bởi Diễn đàn Kinh tế Thế giới (WEF) trong Báo Cáo Cạnh tranh toàn cầu 2019, Singapore được nhận định là thị trường cạnh tranh nhất thế giới. Điều gì đã khiến một thương hiệu nhà thông minh Made in Vietna"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            image={test2}
            title="12-09-2002"
            description="Theo kết quả được công bố bởi Diễn đàn Kinh tế Thế giới (WEF) trong Báo Cáo Cạnh tranh toàn cầu 2019, Singapore được nhận định là thị trường cạnh tranh nhất thế giới. Điều gì đã khiến một thương hiệu nhà thông minh Made in Vietna"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            image={test2}
            title="12-09-2002"
            description="Theo kết quả được công bố bởi Diễn đàn Kinh tế Thế giới (WEF) trong Báo Cáo Cạnh tranh toàn cầu 2019, Singapore được nhận định là thị trường cạnh tranh nhất thế giới. Điều gì đã khiến một thương hiệu nhà thông minh Made in Vietna"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
export default CarouselRoadmap;
