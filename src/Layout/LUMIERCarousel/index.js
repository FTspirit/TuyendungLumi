import React from "react";
import "./LUMIERCarousel.scss";
import Post from "../../App/Post";
import { useEffect } from "react";
import Footer from "../../App/Footer/FooterCarousel";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import LearnigWithLumiCard from "../../App/Card/LearningWithLumiCard";
import Blogcover1 from "../../Asset/image/blogcover5.jpg";
import Blogcover2 from "../../Asset/image/blogcover3.png";
import Blogcover3 from "../../Asset/image/blogcover4.png";
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
  const cardSmall = {
    height: "20rem",
  };
  const cardBig = {
    height: "57.9rem",
  };
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
      <Container className="post-container">
        <Row className="mb-5" md={12}>
          <Col md={8}>
            <Link to="/doisong/blog1">
              <LearnigWithLumiCard
                image={Blogcover1}
                style={cardBig}
                tiltle="Hoạt động Review Sách"
                description="Đến hẹn lại lên, buổi Book Review vừa qua đã mang tới những cuốn sách tâm đắc nhất mà các thành viên của team đã đọc trong tháng 07..."
                author="Phạm Thanh Mai"
                time="01/11/2022"
              />
            </Link>
          </Col>
          <Col md={4}>
            <Row>
              <Col>
                <Link to="/doisong/blog2">
                  <LearnigWithLumiCard
                    image={Blogcover2}
                    style={cardSmall}
                    tiltle="Hành trình ra khơi - Lumi Hạ Long 2022"
                    description="Hành trình tham gia với hơn 200 thành viên bao gồm CBNV Lumi và các NPP trên 62 tỉnh thành trên cả nước. Với điểm đến Hạ Long..."
                    author="Phạm Thanh Mai"
                    time="01/11/2022"
                  />
                </Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link to="/doisong/blog3">
                  <LearnigWithLumiCard
                    image={Blogcover3}
                    style={cardSmall}
                    tiltle="Trung thu yêu thương cùng Lumi"
                    description="Đến với vòng phỏng vấn tại Lumi, nghĩa là bạn đã vượt qua các vòng CV, test, chỉ còn vượt qua vòng phỏng vấn nữa thôi... "
                    author="Phạm Thanh Mai"
                    time="01/11/2022"
                  />
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}
export default LUMIERCarousel;
