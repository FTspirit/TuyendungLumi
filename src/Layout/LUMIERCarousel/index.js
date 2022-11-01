import React from "react";
import "./LUMIERCarousel.scss";
import Post from "../../App/Post";
import { useEffect } from "react";
import Footer from "../../App/Footer/FooterCarousel";
// const LUMIERCarousel = () => (
//   <ReactFullpage
//     //fullpage options
//     scrollingSpeed={1000} /* Options here */
//     responsiveHeight={200}
//     render={({ state, fullpageApi }) => {
//       return (
//         <ReactFullpage.Wrapper>
//           <div className="section images5">
//             <h1 className="LUMIERCarousel-Heading">ĐỜI SỐNG LUMIER</h1>
//           </div>
//           <div className="section images6">
//             <Post />
//           </div>
//         </ReactFullpage.Wrapper>
//       );
//     }}
//   />
// );
// export default LUMIERCarousel;

function LUMIERCarousel() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // const styledContainer = {
  //   position: "relative",
  //   padding: "2rem",
  // };
  // const styledColor = {
  //   color: "#333",
  // };
  return (
    <>
      <div className="section images5" />
      <Post />
      <Footer />
    </>
  );
}
export default LUMIERCarousel;
