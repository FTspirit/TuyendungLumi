import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "./HomeCarousel.scss";

import HomeImageCarousel from "../../App/CardList/HomeCarousel";
import VideoYoutube from "../../App/Component/VideoYoutube";
import CarouselRoadmap from "../../App/CardList/Roadmap";
import Footer from "../../App/Footer";

const HomeCarousel = () => (
  <ReactFullpage
    //fullpage options
    scrollingSpeed={1000} /* Options here */
    responsiveHeight={600}
    allowTouchMove={false}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <HomeImageCarousel />
          </div>
          <div className="section images3">
            <CarouselRoadmap />
          </div>
          <div className="section images2">
            <VideoYoutube src="https://www.youtube.com/embed/dhbRRpxKGNk" />
            <Footer />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);
export default HomeCarousel;
