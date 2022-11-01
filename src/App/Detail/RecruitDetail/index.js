import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
//import Icon
import { BsChevronDoubleRight } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { MdPayment } from "react-icons/md";
import { VscSymbolStructure } from "react-icons/vsc";

import "./RecruitDetail.scss";
import { useState, useRef } from "react";

function RecruitDetail({ props }) {
  const form = useRef(null);
  //   const [data, setData] = useState({
  //     formName: "",
  //     formEmail: "",
  //     formTel: "",
  //     formCom: "",
  //   });
  //   function handleInput(e) {
  //     const newdata = { ...data };
  //     newdata[e.target.id] = e.target.value;
  //     setData(newdata);
  //     console.log(newdata);
  //   }
  //   function Submit(e) {
  //     console.log(e);
  //     e.preventDefault();
  //     Axios.post(
  //       "10.10.50.81/api/cv/submit",
  //       {
  //         name: data.formName,
  //         email: data.formEmail,
  //         tel: data.formTel,
  //         company: data.formCom,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     )
  //       .then(function (response) {
  //         console.log(response);
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   }
  const [selectedFile, setSelectedFile] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  console.log(selectedFile);
  console.log(form.current);
  let handleSubmit = async (event) => {
    //   e.preventDefault();
    //   try {
    //     let res = await fetch("10.10.50.81/api/cv/submit", {
    //       method: "POST",
    //       body: JSON.stringify({
    //         cv_file: selectedFile,
    //         fullname: name,
    //         email: email,
    //         mobile_phone: mobileNumber,
    //       }),
    //     });
    //     let resJson = await res.json();
    //     if (res.status === 200) {
    //       setName("");
    //       setEmail("");
    //       setMessage("User created successfully");
    //     } else {
    //       setMessage("Some error occured");
    //     }
    //   } catch (err) {
    //     console.log(err);
    //   }

    event.preventDefault();
    const url = "10.10.50.81/api/cv/submit";
    const formData = new FormData();
    formData.append("cv_file", selectedFile);
    // formData.append("fileName", selectedFile.name);
    // formData.append("fullname", name);
    // formData.append("email", email);
    // formData.append("mobile_phone", mobileNumber);
    console.log(formData);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios
      .post(url, formData, config)
      .then((response) => {
        console.log(response.data);
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Container className="RecruitDetail-Container">
        <div className="RecruitDetail-Navigation">
          <Link to="/tuyendung">
            <p className="RecruitDetail-Navigation--home">Tuyển dụng</p>
          </Link>
          <BsChevronDoubleRight />
          <p>{props.name}</p>
        </div>
        <div className="RecruitDetail-Description">
          <div className="RecruitDetail-Description--Jobdes">
            <div>
              <h1 className="RecruitDetail-Description--Heading">
                {props.name}
              </h1>
            </div>
            <div>
              <div className="d-flex align-items-center RecruitDetail-Description--item">
                <span>
                  <MdLocationOn />
                </span>
                <p className="RecruitDetail-Description--items-heading">
                  Nơi làm việc: <span>{props.diadiem}</span>
                </p>
              </div>
              <div className="d-flex align-items-center RecruitDetail-Description--item">
                <span>
                  <AiOutlineCalendar />
                </span>
                <p className="RecruitDetail-Description--items-heading">
                  Thời gian: Từ thứ 2 - thứ 6, Sáng thứ 7
                </p>
              </div>
              <div className="d-flex align-items-center RecruitDetail-Description--item">
                <span>
                  <BsFillPersonFill />
                </span>
                <p className="RecruitDetail-Description--items-heading">
                  Số lượng: <span>{props.soluong}</span>
                </p>
              </div>
              <div className="d-flex align-items-center RecruitDetail-Description--item">
                <span>
                  <MdPayment />
                </span>
                <p className="RecruitDetail-Description--items-heading">
                  Mức lương: <span>{props.mucluong}</span>
                </p>
              </div>
              <div className="d-flex align-items-center RecruitDetail-Description--item">
                <span>
                  <VscSymbolStructure />
                </span>
                <p className="RecruitDetail-Description--items-heading">
                  Phòng/ban: <span>{props.phongban}</span>
                </p>
              </div>
            </div>
            <div className="RecruitDetail-Description--detail">
              <div>Mô tả công việc:</div>
              <p>{parse(`${props.motacongviec}`)}</p>
              <div>Yêu cầu ứng viên:</div>
              <p>{parse(`${props.yeucauungvien}`)}</p>
              <div>Mô tả công việc:</div>
              <p>{parse(`${props.quyenloi}`)}</p>
            </div>
          </div>

          <div className="RecruitDetail-Description--Form">
            <p className="RecruitDetail-Description--Form-heading">
              ĐƠN ỨNG TUYỂN
            </p>
            <Form
              action="10.10.50.81/api/cv/submit"
              method="POST"
              encType="multipart/form-data"
              onSubmit={handleSubmit}
              ref={form}
            >
              <Form.Group className="mb-3">
                <Form.Label for="formCV">Tải lên CV của bạn</Form.Label>
                <Form.Control
                  type="file"
                  required
                  id="formCV"
                  onChange={(e) => setSelectedFile(e.target.files[0])}
                  name="cv-file"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label for="formName">Họ &amp; tên bạn</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Họ &amp; tên bạn"
                  required
                  id="formName"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  nmame="fullname"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label for="formEmail">Địa chỉ email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Địa chỉ email"
                  required
                  id="formEmail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label for="formTel">Số điện thoại của bạn</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Số điện thoại"
                  required
                  id="formTel"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  name="mobile_phone"
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
              <Button type="submit">Nộp đơn ứng tuyển</Button>
            </Form>
          </div>
        </div>
      </Container>
    </>
  );
}
export default RecruitDetail;

// const formData = new FormData();
// formData.append("name", "hello world");

// axios({
//     url: 'postform',
//     method: "POST",
//     data: formData,
//     headers: {
//       'Content-Type': 'multipart/form-data'
//     }
// })
