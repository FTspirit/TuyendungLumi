import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

// Import SCSS
import "./BlogCarousel.scss";

// Import Component
import Tricks from "../../App/CardList/Tricks";
const BlogCarousel = () => (
  <ReactFullpage
    //fullpage options
    scrollingSpeed={1000} /* Options here */
    responsiveHeight={600}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section images9">
            <div className="Blog-container">
              <p className="Blog-Heading">Nơi Giao Lưu - Kết Nối - Chia Sẻ</p>
              <div className="Blog-Button">
                <p>Đăng bài viết</p>
              </div>
            </div>
          </div>
          <div className="section images10">
            <Tricks />
          </div>
          <div className="section images11">
            <Tricks />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);
export default BlogCarousel;
