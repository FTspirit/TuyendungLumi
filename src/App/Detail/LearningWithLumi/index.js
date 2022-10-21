import Container from "react-bootstrap/Container";

import { Axios } from "axios";
//import Icon
import { BsChevronDoubleRight } from "react-icons/bs";

// import card
import LearningWithLumiCard from "../../Card/LearningWithLumiCard";

// import component
import Topic from "../../Component/Topic";

// import scss
import "./LearningWithLumiDetail.scss";
import { useState } from "react";
function LearningWithLumiDetail(props) {
  const [data, setData] = useState({
    formName: "",
    formEmail: "",
    formTel: "",
    formCom: "",
  });
  function handleInput(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }
  function Submit(e) {
    e.preventDefault();
    Axios.post({
      name: data.formName,
      email: data.formEmail,
      tel: data.formTel,
      company: data.formCom,
    });
  }
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
        <div className="LearningWithLumi-Heading">
          <h1>Learning with LUMI</h1>
        </div>

        <div className="LearningWithLumi-Description">
          <div className="LearningWithLumi-ListCard">
            <LearningWithLumiCard />
            <LearningWithLumiCard />
            <LearningWithLumiCard />
            <LearningWithLumiCard />
          </div>

          <div className="LearningWithLumi-Topic">
            <Topic />
          </div>
        </div>
      </Container>
    </>
  );
}
export default LearningWithLumiDetail;
