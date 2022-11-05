import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "./RecruitCarousel.scss";
import RecruitmentProcess from "../../App/Component/RecruitmentProcess";
import FAQAccordion from "../../App/Accordion";
import RecruitInfor from "../../App/Component/RecruitInfor";
import RecruitmentTextInfor from "../../App/Component/RecruitmentTextInfor";
function RecruitCarousel() {
  return (
    <ReactFullpage
      //fullpage options
      scrollingSpeed={1000} /* Options here */
      normalScrollElements={".RecruitScroll"}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section images1"></div>
            <div className="section">
              <RecruitInfor />
            </div>
            <div className="section">
              <RecruitmentProcess
                OnClick={() => fullpageApi.moveSectionDown()}
              />
              <button
                className="recruitdetailbutton"
                onClick={() => fullpageApi.moveSectionDown()}
              >
                Xem chi tiết
              </button>
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
}
export default RecruitCarousel;
