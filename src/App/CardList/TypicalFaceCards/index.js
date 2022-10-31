import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Component
import Container from "react-bootstrap/Container";
import HeadingSection from "../../Component/HeadingSection";
import TypicalFaceCard from "../../Card/TypicalFaceCard";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import { Autoplay } from "swiper";

// Import SCSS
import "./TypicalFaceCards.scss";
import { Pagination } from "swiper";
function TypicalFaceCards() {
  const TypicalFaceStyle = {
    color: "#333",
  };
  return (
    <>
      <div>
        <HeadingSection
          description={`Những gương mặt tiêu biểu`}
          style={TypicalFaceStyle}
        />
        <Container className="TypicalFaceCards-Container">
          <Swiper
            // navigation={true}
            modules={[Autoplay, Pagination]}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000 }}
            speed={1500}
            pauseOnMouseEnter={false}
            touchReleaseOnEdges={true}
            initialSlide={1}
            // disableOnInteraction
            // freeMode={{ enabled: true, sticky: true }}
            className="myTricksSwiper"
            slidesPerView={1}
            centeredSlides={true}
            spaceBetween={50}
          >
            <SwiperSlide>
              <TypicalFaceCard />
            </SwiperSlide>
            <SwiperSlide>
              <TypicalFaceCard />
            </SwiperSlide>
            <SwiperSlide>
              <TypicalFaceCard />
            </SwiperSlide>
            <SwiperSlide>
              <TypicalFaceCard />
            </SwiperSlide>
            <SwiperSlide>
              <TypicalFaceCard />
            </SwiperSlide>
            <SwiperSlide>
              <TypicalFaceCard />
            </SwiperSlide>
          </Swiper>
        </Container>
      </div>
    </>
  );
}

export default TypicalFaceCards;
