import "./RecruitmentTextInfor.scss";
import Container from "react-bootstrap/Container";
function RecruitmentTextInfor() {
  return (
    <Container id="recruitmenttextinfor">
      <ul className="recruitmenttextinfor-container">
        <li>
          <p>B1: Lọc CV</p>
          <p>
            <span>&#8226;</span> HCNS lựa chọn CV phù hợp về yêu cầu chuyên môn,
            tư duy, kỹ năng mềm.
          </p>
        </li>
        <li>
          <p>B2: Phỏng vấn qua điện thoại </p>
          <p>
            <span>&#8226;</span>{" "}
            <span>
              Phỏng vấn qua điện thoại 10 - 15 phút. Tìm hiểu về định hướng,
              hiểu về Lumi và việc học hỏi, tích lũy các kiến thức, kỹ năng.
            </span>
          </p>
        </li>
        <li>
          <p>B3: Làm bài Test</p>
          <p>
            <span>&#8226;</span> Test về IQ, kiến thức, EQ (có thể online hoặc
            trực tiếp). Thời gian 20-60’.
          </p>
        </li>
        <li>
          <p>B4: Phỏng vấn trực tiếp</p>
          <p>
            <span>&#8226;</span> Thời gian từ 30-60’. Lumi mong muốn đây là buổi
            chia sẻ các giá trị bản thân của ứng viên, về định hướng, về phong
            cách thái độ làm việc, quan điểm sống, về kiến thức. Bạn có thể đặt
            bất cứ các câu hỏi tới Lumi để đánh giá được mức độ phù hợp với bản
            thân.
          </p>
        </li>
        <li>
          <p>B5: Trúng tuyển</p>
          <p>
            <span>&#8226;</span> “Chào mừng bạn đến với gia đình Lumi!” Chúc
            hành trình sự nghiệp mới của bạn có thật nhiều trải nghiệm thú vị và
            mở rộng thêm chân trời kiến thức.
          </p>
        </li>
      </ul>
    </Container>
  );
}

export default RecruitmentTextInfor;
