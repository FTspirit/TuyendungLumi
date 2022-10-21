import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Axios } from "axios";
//import Icon
import { BsChevronDoubleRight } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { MdPayment } from "react-icons/md";
import { VscSymbolStructure } from "react-icons/vsc";

import "./RecruitDetail.scss";
import { useState } from "react";
function RecruitDetail(props) {
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
      <Container className="RecruitDetail-Container">
        <div className="RecruitDetail-Navigation">
          <a>
            <p className="RecruitDetail-Navigation--home">Tuyển dụng</p>
          </a>
          <BsChevronDoubleRight />
          <p>Một công việc nào đó</p>
        </div>
        <div className="RecruitDetail-Description">
          <div className="RecruitDetail-Description--Jobdes">
            <div>
              <h1 className="RecruitDetail-Description--Heading">
                Tuyển dụng 01 Trade Marketing
              </h1>
            </div>
            <div>
              <div className="d-flex align-items-center RecruitDetail-Description--item">
                <span>
                  <MdLocationOn />
                </span>
                <p className="RecruitDetail-Description--items-heading">
                  Nơi làm việc: 38 Đỗ Đức Dục, Mễ Trì, Nam Từ Liêm, Hà Nội
                </p>
              </div>
              <div className="d-flex align-items-center RecruitDetail-Description--item">
                <span>
                  <AiOutlineCalendar />
                </span>
                <p className="RecruitDetail-Description--items-heading">
                  Thời gian: Từ Thứ 2 - Thứ 6, Sáng thứ 7
                </p>
              </div>
              <div className="d-flex align-items-center RecruitDetail-Description--item">
                <span>
                  <BsFillPersonFill />
                </span>
                <p className="RecruitDetail-Description--items-heading">
                  Số lượng: 01
                </p>
              </div>
              <div className="d-flex align-items-center RecruitDetail-Description--item">
                <span>
                  <MdPayment />
                </span>
                <p className="RecruitDetail-Description--items-heading">
                  Mức lương: Thỏa thuận
                </p>
              </div>
              <div className="d-flex align-items-center RecruitDetail-Description--item">
                <span>
                  <VscSymbolStructure />
                </span>
                <p className="RecruitDetail-Description--items-heading">
                  Phòng/ban: Phòng Marketing
                </p>
              </div>
            </div>
            <div className="RecruitDetail-Description--detail">
              <div>Mô tả công việc:</div>
              <p>
                Nhận các yêu cầu tư vấn sự kiện, tư vấn truyền thông, order
                thiết kế từ nhà phân phối về nhận diện thương hiệu (Trưng bày
                sản phẩm, chương trình khuyến mãi, tổ chức sự kiện, tài liệu bán
                hàng… Là đầu mối gửi các tài liệu bán hàng POSM, tư liệu truyền
                thông cho NPP, phòng kinh doanh (tư liệu kinh doanh) Thu thập
                thông tin thị trường về sản phẩm, dịch vụ của đối thủ chính yếu,
                đề xuất chương trình bán hàng, khuyến mãi cho khách hàng Đề xuất
                chương trình thi đua theo tháng, quý, năm, đề xuất hoạt động
                thúc đẩy kinh doanh của doanh nghiệp. Tổ chức sự kiện, hội nghị
                khách hàng (nếu có) Tìm kiếm đối tác cho các hoạt động của MKT,
                xử lý hồ sơ, hợp đồng giấy tờ giữa MKT với các đơn vị đối tác
                Lên kế hoạch seeding và điều phối nhân sự, kiểm soát hiệu quả
                seeding cho mỗi chiến dịch, sự kiện Phối hợp cùng content lên
                order thiết kế ấn phẩm marketing, POSM, Voucher,… Update các
                thông tin lên website khi có thay đổi về NPP hay sản phẩm mới
                Support sự kiện của phòng MKT và các hoạt động nội bộ Quản lý
                kho, chủ động in ấn các tài liệu phục vụ kinh doanh khi cần Yêu
                cầu Có kinh nghiệm làm trade marketing là một lợi thế. Ưu tiên
                các bạn ham học hỏi. Thành thạo tin học văn phòng (Microsoft
                Word, Excel, PowerPoint,…). Có hiểu biết sâu rộng về tiếp thị
                sản phẩm và nghiên cứu hành vi khách hàng. Có khả năng thu thập
                và xử lý khối lượng dữ liệu thông tin lớn. Có khả năng làm việc
                độc lập và kỹ năng làm việc nhóm. Quyết đoán và có kỹ năng giải
                quyết vấn đề tốt. Kỹ năng đàm phán, thương lượng tốt. Khả năng
                thích nghi với mọi môi trường làm việc. Kỹ năng sử dụng thành
                thạo các công cụ phục vụ cho công việc Hiểu cơ bản về công
                nghiệp in ấn Kỹ năng tin học văn phòng cơ bản. Quyền lợi: Thu
                nhập: Lương net: thoả thuận Phụ cấp ăn trưa: 700.000 Vnđ Làm
                việc từ T2- Sáng T7 BHYT, BHXH, nghỉ phép theo quy định Bộ luật
                Lao động. Thưởng Lễ, Tết, Tháng lương 13 Du lịch hằng năm 4 lần
                theo quy định công ty Quyền lợi nâng cao: Khám sức khỏe định kỳ
                1 lần / năm, cấp chăn gối văn phòng, miễn phí trà, cà phê, hoa
                quả…
              </p>
            </div>
          </div>

          <div className="RecruitDetail-Description--Form">
            <p className="RecruitDetail-Description--Form-heading">
              ĐƠN ỨNG TUYỂN
            </p>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label for="formCV">Tải lên CV của bạn</Form.Label>
                <Form.Control type="file" required id="formCV" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label for="formName">Họ &amp; tên bạn</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Họ &amp; tên bạn"
                  required
                  id="formName"
                  value={data.formName}
                  onChange={handleInput}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label for="formEmail">Địa chỉ email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Địa chỉ email"
                  required
                  id="formEmail"
                  value={data.formEmail}
                  onChange={handleInput}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label for="formTel">Số điện thoại của bạn</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Số điện thoại"
                  required
                  id="formTel"
                  value={data.formTel}
                  onChange={handleInput}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label for="formCom">Công ty hiện tại</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Cy hiện tại"
                  required
                  id="formCom"
                  value={data.formCom}
                  onChange={handleInput}
                />
              </Form.Group>

              <p className="RecruitDetail-Description--Form-heading pdt-32">
                LINKS
              </p>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Linkedln URL</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Twitter URL</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Github URL</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Portfolio URL</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Website Khác</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Thông tin thêm</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}
export default RecruitDetail;
