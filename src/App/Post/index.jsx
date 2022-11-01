import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import TrickCard from "../../App/Card/TrickCard";

import "./Post.scss";
function Post() {
  const cardSmall = {
    height: "20rem",
  };
  const cardBig = {
    height: "66rem",
  };
  //image, tiltle, description, style, author, time
  return (
    <>
      <Container className="post-container">
        <Row className="mb-5">
          <Col md={8}>
            <TrickCard
              style={cardBig}
              tiltle="Tên tiêu đề"
              description="Đến với vòng phỏng vấn tại Lumi, nghĩa là bạn đã vượt qua các vòng CV, test, chỉ còn vượt qua vòng phỏng vấn nữa thôi là bạn đã gia nhập đại gia đình Lumi rồi đấy. Vậy thì hãy nằm lòng bí kíp sau đây, tận dụng cơ hội phỏng vấn để gây ấn tượng với Ban Tuyển Dụng nhé"
              author="Phạm Thanh Mai"
              time="01/11/2022"
            />
          </Col>
          <Col md={4}>
            <Row>
              <Col>
                <TrickCard
                  style={cardSmall}
                  tiltle="Tên tiêu đề"
                  description="Đến với vòng phỏng vấn tại Lumi, nghĩa là bạn đã vượt qua các vòng CV, test, chỉ còn vượt qua vòng phỏng vấn nữa thôi là bạn đã gia nhập đại gia đình Lumi rồi đấy. Vậy thì hãy nằm lòng bí kíp sau đây, tận dụng cơ hội phỏng vấn để gây ấn tượng với Ban Tuyển Dụng nhé"
                  author="Phạm Thanh Mai"
                  time="01/11/2022"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <TrickCard
                  style={cardSmall}
                  tiltle="Tên tiêu đề"
                  description="Đến với vòng phỏng vấn tại Lumi, nghĩa là bạn đã vượt qua các vòng CV, test, chỉ còn vượt qua vòng phỏng vấn nữa thôi là bạn đã gia nhập đại gia đình Lumi rồi đấy. Vậy thì hãy nằm lòng bí kíp sau đây, tận dụng cơ hội phỏng vấn để gây ấn tượng với Ban Tuyển Dụng nhé"
                  author="Phạm Thanh Mai"
                  time="01/11/2022"
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col sm>
            <TrickCard
              style={cardSmall}
              tiltle="Tên tiêu đề"
              description="Đến với vòng phỏng vấn tại Lumi, nghĩa là bạn đã vượt qua các vòng CV, test, chỉ còn vượt qua vòng phỏng vấn nữa thôi là bạn đã gia nhập đại gia đình Lumi rồi đấy. Vậy thì hãy nằm lòng bí kíp sau đây, tận dụng cơ hội phỏng vấn để gây ấn tượng với Ban Tuyển Dụng nhé"
              author="Phạm Thanh Mai"
              time="01/11/2022"
            />
          </Col>
          <Col sm>
            <TrickCard
              style={cardSmall}
              tiltle="Tên tiêu đề"
              description="Đến với vòng phỏng vấn tại Lumi, nghĩa là bạn đã vượt qua các vòng CV, test, chỉ còn vượt qua vòng phỏng vấn nữa thôi là bạn đã gia nhập đại gia đình Lumi rồi đấy. Vậy thì hãy nằm lòng bí kíp sau đây, tận dụng cơ hội phỏng vấn để gây ấn tượng với Ban Tuyển Dụng nhé"
              author="Phạm Thanh Mai"
              time="01/11/2022"
            />
          </Col>
          <Col sm>
            <TrickCard
              style={cardSmall}
              tiltle="Tên tiêu đề"
              description="Đến với vòng phỏng vấn tại Lumi, nghĩa là bạn đã vượt qua các vòng CV, test, chỉ còn vượt qua vòng phỏng vấn nữa thôi là bạn đã gia nhập đại gia đình Lumi rồi đấy. Vậy thì hãy nằm lòng bí kíp sau đây, tận dụng cơ hội phỏng vấn để gây ấn tượng với Ban Tuyển Dụng nhé"
              author="Phạm Thanh Mai"
              time="01/11/2022"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Post;
