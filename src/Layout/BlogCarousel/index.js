import React from "react";
import { useEffect } from "react";
// Import SCSS
import "./BlogCarousel.scss";
import "../../App/Post/Post.scss";
// Import Component
import HeadingSection from "../../App/Component/HeadingSection";
import Footer from "../../App/Footer/FooterCarousel";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import TrickCard from "../../App/Card/TrickCard";
import Blogcover1 from "../../Asset/image/blogcover6.jpg";
import Blogcover2 from "../../Asset/image/blogcover7.png";
import Blogcover3 from "../../Asset/image/blogcover8.jpg";
const colorHeading = {
  color: "#333",
};
function BlogCarousel() {
  const styleBlogCarousel = {
    cardSmall: {
      height: "20rem",
    },
    styledDescription: {
      display: "flex",
    },
    cardBig: {
      height: "60rem",
    },
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
              <Link to="/blog/blogPage1">
                <TrickCard
                  image={Blogcover1}
                  style={styleBlogCarousel.cardBig}
                  tiltle="Hiệu ứng Dunning  Kruger và sự ảo tưởng sức mạnh mà lập trình viên nên tránh"
                  description="Hiệu ứng Dunning & Kruger (Dunning & Kruger Effect) là một trong những khái niệm mang tính nền tảng của Product Design (bao trùm luôn cả UX và UI Design)...."
                  author="Phạm Thanh Mai"
                  time="01/11/2022"
                />
              </Link>
            </Col>
            <Col md={4}>
              <Row>
                <Col>
                  <Link to="/blog/blogPage2">
                    <TrickCard
                      image={Blogcover2}
                      style={styleBlogCarousel.cardSmall}
                      tiltle="Khoảng trống kiến thức giữa sinh viên IT và Lập trình viên"
                      description="Do ngành IT đang dần thành một ngành hot ở Việt Nam (việc nhẹ lương cao, nhu cầu tuyển dụng nhiều), nhiều bạn sinh viên đổ xô vào chọn học các ngành công nghệ thông tin..."
                      author="Phạm Thanh Mai"
                      time="01/11/2022"
                    />
                  </Link>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Link to="/blog/blogPage3">
                    <TrickCard
                      image={Blogcover3}
                      style={styleBlogCarousel.cardSmall}
                      tiltle="Kỹ năng tìm kiếm thông tin"
                      description="Câu nói vui trước khi hỏi ai gì đó thì người được hỏi sẽ bảo bạn Đã GOOGLE chưa Lumi đánh giá đây là phần quan trọng nhất trong kỹ năng giải quyết vấn đề... "
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
