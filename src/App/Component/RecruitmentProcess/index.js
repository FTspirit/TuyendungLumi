import HeadingSection from "../HeadingSection";
import Container from "react-bootstrap/Container";
import process1 from "../../../Asset/image/process1.png";
import process2 from "../../../Asset/image/process2.png";
import process3 from "../../../Asset/image/process3.png";
import process4 from "../../../Asset/image/process4.png";
import process5 from "../../../Asset/image/process5.png";
import arrow from "../../../Asset/image/arrow.png";
// import vector from "../../../Asset/image/vector.png";

import "./RecruitmentProcess.scss";
const RecruitHeadingStyle = {
  color: "#333",
};
function RecruitmentProcess() {
  return (
    <div className="SectionContainer">
      <HeadingSection
        description={`Quy trình tuyển dụng`}
        style={RecruitHeadingStyle}
      />
      <Container className="RecruitmentProcess-Container">
        <div className="Process-Containers">
          <div className="Process-Container">
            <img src={process1} alt="process" className="Process-Image" />
            <p className="Process-Description">Lọc CV</p>
          </div>
          <img src={arrow} alt="arrow" className="Process-Arrow" />
          <div className="Process-Container">
            <img src={process2} alt="process" className="Process-Image" />
            <p className="Process-Description">Phỏng vấn qua điện thoại</p>
          </div>
          <img src={arrow} alt="arrow" className="Process-Arrow" />
          <div className="Process-Container">
            <img src={process3} alt="process" className="Process-Image" />
            <p className="Process-Description">Làm bài test</p>
          </div>
        </div>
        {/* <img src={vector} alt="vector" className="vector" /> */}
        <div className="Process-Containers">
          <div className="Process-Container">
            <img src={process5} alt="process" className="Process-Image" />
            <p className="Process-Description">Đi làm</p>
          </div>
          <img src={arrow} alt="arrow" className="Process-Arrow rotate" />
          <div className="Process-Container">
            <img src={process4} alt="process" className="Process-Image" />
            <p className="Process-Description">Phỏng vấn trực tiếp</p>
          </div>
          <img src={arrow} alt="arrow" className="Process-Arrow rotate" />
        </div>
      </Container>
    </div>
  );
}
export default RecruitmentProcess;
