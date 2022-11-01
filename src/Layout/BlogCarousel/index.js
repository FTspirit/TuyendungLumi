import React from "react";
import { useEffect } from "react";
// Import SCSS
import "./BlogCarousel.scss";

// Import Component
import HeadingSection from "../../App/Component/HeadingSection";
import Post from "../../App/Post";
import Footer from "../../App/Footer/FooterCarousel";
const colorHeading = {
  color: "#333",
};
function BlogCarousel() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="blog-container">
        <HeadingSection
          description={`Learning with LUMI`}
          style={colorHeading}
        />
        <Post />
        <Footer />
      </div>
    </>
  );
  // <ReactFullpage
  //   //fullpage options
  //   scrollingSpeed={1000} /* Options here */
  //   responsiveHeight={600}
  //   render={({ state, fullpageApi }) => {
  //     return (
  //       <ReactFullpage.Wrapper>
  //         <div className="section images9">
  //           <div className="Blog-container">
  //             <p className="Blog-Heading">Nơi Giao Lưu - Kết Nối - Chia Sẻ</p>
  //             <div className="Blog-Button">
  //               <p>Đăng bài viết</p>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="section images10">
  //           <Tricks />
  //         </div>
  //         <div className="section images11">
  //           <Tricks />
  //         </div>
  //       </ReactFullpage.Wrapper>
  //     );
  //   }}
  // />
}
export default BlogCarousel;
