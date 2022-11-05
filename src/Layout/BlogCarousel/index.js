import React from "react";
import { useEffect } from "react";
// Import SCSS
import "./BlogCarousel.scss";
import "../../App/Post/Post.scss";
// Import Component
import HeadingSection from "../../App/Component/HeadingSection";
import Post from "../../App/Post";
import Footer from "../../App/Footer/FooterCarousel";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import TrickCard from "../../App/Card/TrickCard";
import Blogcover1 from "../../Asset/image/blogcover5.jpg";
import Blogcover2 from "../../Asset/image/blogcover3.png";
import Blogcover3 from "../../Asset/image/blogcover4.png";
const colorHeading = {
  color: "#333",
};
function BlogCarousel() {
  const cardSmall = {
    height: "20rem",
  };
  const cardBig = {
    height: "66rem",
  };
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

        <Container className="post-container">
          <Row className="mb-5" md={12}>
            <Col md={8}>
              <TrickCard
                image={Blogcover1}
                style={cardBig}
                tiltle="Hoạt động Review Sách"
                description="Đến hẹn lại lên, buổi Book Review vừa qua đã mang tới những cuốn sách tâm đắc nhất mà các thành viên của team đã đọc trong tháng 07. Từ những trang sách, qua mỗi góc nhìn, các thành viên team marketing đã dẫn dắt mọi người đi qua những câu chuyện khác nhau..."
                author="Phạm Thanh Mai"
                time="01/11/2022"
              />
            </Col>
            <Col md={4}>
              <Row>
                <Col>
                  <TrickCard
                    image={Blogcover2}
                    style={cardSmall}
                    tiltle="Hành trình ra khơi - Lumi Hạ Long 2022"
                    description="Hành trình tham gia với hơn 200 thành viên bao gồm CBNV Lumi và các NPP trên 62 tỉnh thành trên cả nước. Với điểm đến Hạ Long, là món quà tuyệt diệu của thiên nhiên mang lại, đây là địa danh vô cùng ý nghĩa nhân dịp kỷ niệm 10 năm thành lập của Lumi..."
                    author="Phạm Thanh Mai"
                    time="01/11/2022"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <TrickCard
                    image={Blogcover3}
                    style={cardSmall}
                    tiltle="Trung thu yêu thương cùng Lumi"
                    description="Đến với vòng phỏng vấn tại Lumi, nghĩa là bạn đã vượt qua các vòng CV, test, chỉ còn vượt qua vòng phỏng vấn nữa thôi là bạn đã gia nhập đại gia đình Lumi rồi đấy. Vậy thì hãy nằm lòng bí kíp sau đây, tận dụng cơ hội phỏng vấn để gây ấn tượng với Ban Tuyển Dụng nhé. Bạn hãy chuẩn bị kỹ càng những bước sau đây... "
                    author="Phạm Thanh Mai"
                    time="01/11/2022"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

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
