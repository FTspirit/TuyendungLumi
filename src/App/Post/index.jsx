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
  return (
    <>
      <Container className="post-container">
        <Row className="mb-5">
          <Col md={8}>
            <TrickCard style={cardBig} />
          </Col>
          <Col md={4}>
            <Row>
              <Col>
                <TrickCard style={cardSmall} />
              </Col>
            </Row>
            <Row>
              <Col>
                <TrickCard style={cardSmall} />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col sm>
            <TrickCard style={cardSmall} />
          </Col>
          <Col sm>
            <TrickCard style={cardSmall} />
          </Col>
          <Col sm>
            <TrickCard style={cardSmall} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Post;
