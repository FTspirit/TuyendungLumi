// Import Lib
import React, { Component } from "react";

import ReactFullpage from "@fullpage/react-fullpage";

// Import scss
import "./InternCarousel.scss";
import RecruitRoadmapImg from "../../Asset/image/cover13.png";

// Import Component
import Footer from "../../App/Footer/Footer";
import TrainingProcess from "../../App/Component/TrainingProcess";
import Tricks from "../../App/CardList/Tricks";
import TypicalFaceCards from "../../App/CardList/TypicalFaceCards";
import TrainingProcessDetail from "../../App/Component/TrainingProcessDetail";

class ScrollToTopOnMount extends Component {
  componentDidMount(prevProps) {
    window.scrollTo(0, 0);
  }
  render() {
    return null;
  }
}

const InternCarousel = () => (
  <ReactFullpage
    //fullpage options
    scrollingSpeed={1000} /* Options here */
    normalScrollElements={".TrainingProcessDetail"}
    render={({ state, fullpageApi }) => {
      return (
        <>
          <ScrollToTopOnMount />
          <ReactFullpage.Wrapper>
            <div className="section imagesInternCarousel1">
              <TypicalFaceCards />
            </div>
            <div
              className="section imagesInternCarousel2"
              onClick={() => fullpageApi.moveSectionDown()}
            >
              <img
                src={RecruitRoadmapImg}
                alt="Recruit-Roadmap"
                className="RecruitRoadmapImg"
              />
            </div>
            <div className="section imagesInternCarousel2 ">
              <TrainingProcessDetail />
            </div>
            <div className="section imagesInternCarousel3">
              <Tricks />
              <Footer />
            </div>
          </ReactFullpage.Wrapper>
        </>
      );
    }}
  />
);
export default InternCarousel;
