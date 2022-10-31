import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Component
import Container from "react-bootstrap/Container";
import HeadingSection from "../../Component/HeadingSection";
import TrickCard from "../../Card/TrickCard";
import { BsChevronDoubleRight } from "react-icons/bs";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import { Autoplay } from "swiper";

// Import SCSS
import "./Tricks.scss";
function Tricks() {
  const TrickHeadingStyle = {
    color: "#1f1f1f",
  };
  return (
    <>
      <div>
        <HeadingSection description={`Mẹo hay`} style={TrickHeadingStyle} />
        <Container>
          <Swiper
            // navigation={true}
            modules={[Autoplay]}
            loop={true}
            // pagination={pagination}
            autoplay={{ delay: 2000 }}
            speed={1500}
            pauseOnMouseEnter={false}
            touchReleaseOnEdges={true}
            initialSlide={1}
            // disableOnInteraction
            // freeMode={{ enabled: true, sticky: true }}
            className="myTricksSwiper"
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={100}
          >
            <SwiperSlide>
              <TrickCard />
            </SwiperSlide>
            <SwiperSlide>
              <TrickCard />
            </SwiperSlide>
            <SwiperSlide>
              <TrickCard />
            </SwiperSlide>
            <SwiperSlide>
              <TrickCard />
            </SwiperSlide>
            <SwiperSlide>
              <TrickCard />
            </SwiperSlide>
            <SwiperSlide>
              <TrickCard />
            </SwiperSlide>
          </Swiper>
          <div className="Tricks-Link-Container">
            <a href="https://www.w3schools.com" className="Tricks-Link">
              Xem thêm <BsChevronDoubleRight />
            </a>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Tricks;
