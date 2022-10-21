// Import Boostrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Import Component
import HeadingSection from "../HeadingSection";

// Import Image
import prc1 from "../../../Asset/image/1.png";
import prc2 from "../../../Asset/image/2.png";
import prc3 from "../../../Asset/image/3.png";
import prc4 from "../../../Asset/image/4.png";
import prc5 from "../../../Asset/image/5.png";
import prc6 from "../../../Asset/image/6.png";
import prc7 from "../../../Asset/image/7.png";
import prc8 from "../../../Asset/image/8.png";
import prc9 from "../../../Asset/image/9.png";
import prc10 from "../../../Asset/image/10.png";

// Import SCSS
import "./TrainingProcess.scss";
function TrainingProcess() {
  const InternHeadingStyle = {
    color: "#1f1f1f",
  };
  return (
    <>
      <div>
        <HeadingSection
          description={`Quy trình đào tạo thực tập sinh`}
          style={InternHeadingStyle}
        />
        <Container className="TrainingProcess-Container">
          <Row className="TrainingProcess-Row">
            <Col className="TrainingProcess-Item">
              <img src={prc1} alt="test" className="TrainingProcess-Image" />
            </Col>
            <Col className="TrainingProcess-Item">
              <img src={prc2} alt="test" className="TrainingProcess-Image" />
            </Col>
            <Col className="TrainingProcess-Item">
              <img src={prc3} alt="test" className="TrainingProcess-Image" />
            </Col>
            <Col className="TrainingProcess-Item">
              <img src={prc4} alt="test" className="TrainingProcess-Image" />
            </Col>
            <Col className="TrainingProcess-Item">
              <img src={prc5} alt="test" className="TrainingProcess-Image" />
            </Col>
          </Row>
          <Row className="TrainingProcess-Row">
            <Col className="TrainingProcess-Item">
              <img src={prc6} alt="test" className="TrainingProcess-Image" />
            </Col>
            <Col className="TrainingProcess-Item">
              <img src={prc7} alt="test" className="TrainingProcess-Image" />
            </Col>
            <Col className="TrainingProcess-Item">
              <img src={prc8} alt="test" className="TrainingProcess-Image" />
            </Col>
            <Col className="TrainingProcess-Item">
              <img src={prc9} alt="test" className="TrainingProcess-Image" />
            </Col>
            <Col className="TrainingProcess-Item">
              <img src={prc10} alt="test" className="TrainingProcess-Image" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
export default TrainingProcess;
