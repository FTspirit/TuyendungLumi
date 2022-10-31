import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "./RecruitCarousel.scss";
import RecruitmentProcess from "../../App/Component/RecruitmentProcess";
import FAQAccordion from "../../App/Accordion";
import RecruitInfor from "../../App/Component/RecruitInfor";
import RecruitmentTextInfor from "../../App/Component/RecruitmentTextInfor";
const RecruitCarousel = () => (
  <ReactFullpage
    //fullpage options
    scrollingSpeed={1000} /* Options here */
    responsiveHeight={600}
    normalScrollElements={".RecruitScroll"}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section images1"></div>
          <div className="section">
            <RecruitInfor />
          </div>
          <div className="section">
            <RecruitmentProcess />
          </div>
          <div className="section">
            <RecruitmentTextInfor />
          </div>
          <div className="section images4">
            <FAQAccordion />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);
export default RecruitCarousel;
