import Container from "react-bootstrap/Container";
//import Icon
import { BsChevronDoubleRight } from "react-icons/bs";

// import component
import HeadingSection from "../../Component/HeadingSection";

// import scss
import "./LearningWithLumiDetail.scss";

import Post from "../../Post";
function LearningWithLumiDetail(props) {
  const LearningWithLumiDetailHeadingColor = {
    color: "#333",
  };
  return (
    <>
      <Container className="LearningWithLumi-Container">
        <div className="LearningWithLumi-Navigation">
          <a href="...">
            <p className="LearningWithLumi-Navigation--home">Tuyển dụng</p>
          </a>
          <BsChevronDoubleRight />
          <p>Một công việc nào đó</p>
        </div>
        {/* <div className="LearningWithLumi-Heading">
          <h1>Learning with LUMI</h1>
        </div> */}
        <HeadingSection
          description={`Learning with LUMI`}
          style={LearningWithLumiDetailHeadingColor}
        />
        <Post />
      </Container>
    </>
  );
}
export default LearningWithLumiDetail;
