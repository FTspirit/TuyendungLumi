import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "./LUMIERCarousel.scss";

const LUMIERCarousel = () => (
  <ReactFullpage
    //fullpage options
    scrollingSpeed={1000} /* Options here */
    responsiveHeight={600}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section images5">
            <h1 className="LUMIERCarousel-Heading">ĐỜI SỐNG LUMIER</h1>
          </div>
          <div className="section images6"></div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);
export default LUMIERCarousel;
