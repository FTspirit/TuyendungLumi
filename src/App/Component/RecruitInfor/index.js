import HeadingSection from "../HeadingSection";
import RecruitCard from "../../Card/RecruitCard";

import "./RecruitInfor.scss";

import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";

import data from "../../../Asset/data/JD.json";
import PaginatedItems from "../../RecruitPagination";
function RecruitInfor() {
  const RecruitInforStyle = {
    color: "#333",
  };
  const uniqueTag = [...new Set(data.jobs.map((job) => job.tag))];
  const uniqueLocation = [...new Set(data.jobs.map((job) => job.diadiem))];
  const uniqueDepartment = [...new Set(data.jobs.map((job) => job.phongban))];
  return (
    <>
      <div className="RecruitInfor">
        <HeadingSection
          description={`Thông tin tuyển dụng`}
          style={RecruitInforStyle}
        />
        <Container className="RecruitInfor-Container">
          <div className="RecruitInfor-Search">
            <div className="RecruitInfor-Button">
              {uniqueTag.map((tag) => (
                <Button>{tag}</Button>
              ))}

              {/* {uniqueTag.map((tag) => (
                <Col key={tag}>
                  <Button>{tag}</Button>
                </Col>
              ))} */}
            </div>
            <Row>
              <div className="RecruitInfor-Form">
                <Form.Select aria-label="Default select example">
                  <option>Địa điểm</option>
                  {uniqueLocation.map((loc) => (
                    <option>{loc}</option>
                  ))}
                </Form.Select>
                <Form.Select
                  aria-label="Default select example"
                  className="form-phongban"
                >
                  <option>Phòng ban</option>
                  {uniqueDepartment.map((dep) => (
                    <option>{dep}</option>
                  ))}
                </Form.Select>
                <Form.Check
                  type="checkbox"
                  id="Thực tập sinh"
                  label="Thực tập sinh"
                />
              </div>
            </Row>
          </div>
          <div className="RecruitScroll">
            {data.jobs.length > 0
              ? data.jobs.map((job) => (
                  <RecruitCard
                    heading={job.name}
                    link={`/tuyendung/${job.id}`}
                    key={job.name}
                  />
                ))
              : null}
          </div>
          {/* <RecruitPagination /> */}
        </Container>
      </div>
    </>
  );
}
export default RecruitInfor;
