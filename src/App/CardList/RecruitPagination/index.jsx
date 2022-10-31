import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import RecruitCard from "../../Card/RecruitCard";
import data from "../../../Asset/data/JD.json";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./RecruitPagination.scss";

// import required modules
import { Pagination } from "swiper";

export default function RecruitPagination() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
        slidesPerView={3}
      >
        {/* {
          data.jobs.map((item, index) => {
            return (
              <SwiperSlide key={index}>
              
              </SwiperSlide>
            );
          }
        } */}
        {data.jobs.map((item) => (
          <SwiperSlide>
            <Link to={`/tuyendung/${item.id}`}>
              <RecruitCard heading={item.name} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
