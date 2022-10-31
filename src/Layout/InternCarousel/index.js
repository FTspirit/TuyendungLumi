// Import Lib
import React, { Component } from "react";

import ReactFullpage from "@fullpage/react-fullpage";

// Import scss
import "./InternCarousel.scss";

// Import Component
import Footer from "../../App/Footer";
import TrainingProcess from "../../App/Component/TrainingProcess";
import Tricks from "../../App/CardList/Tricks";
import TypicalFaceCards from "../../App/CardList/TypicalFaceCards";

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
    responsiveHeight={600}
    render={({ state, fullpageApi }) => {
      return (
        <>
          <ScrollToTopOnMount />
          <ReactFullpage.Wrapper>
            <div className="section imagesInternCarousel1">
              <TypicalFaceCards />
            </div>
            <div className="section imagesInternCarousel2">
              <Tricks />
            </div>
            <div className="section imagesInternCarousel3">
              <TrainingProcess />
              <Footer />
            </div>
          </ReactFullpage.Wrapper>
        </>
      );
    }}
  />
);
export default InternCarousel;
