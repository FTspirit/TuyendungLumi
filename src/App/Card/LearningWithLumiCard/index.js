// Import Image
import mockup1 from "../../../Asset/image/carouselmockup.png";

// Import SCSS
import "./LearningWithLumiCard.scss";
function LearningWithLumiCard() {
  return (
    <>
      <div className="LearningWithLumiCard-Container">
        <div className="">
          <img
            src={mockup1}
            alt="ảnh thực tập sinh"
            className="LearningWithLumiCard-Image"
          />
        </div>
        <div className="LearningWithLumiCard-Body">
          <div className="LearningWithLumiCard-Heading-Container">
            <div className="LearningWithLumiCard-Heading">Tiêu đề chính</div>
          </div>
          <div className="LearningWithLumiCard-Description">
            Khi đi thực tập tại Lumi là một môi trường mà em cảm thấy mình học
            hỏi được nhiề. Không chỉ là kiến thức chuyên môn mà con văn hóa,
            cách ứng xử, kĩ năng mềm, kĩ năng thuyết trình, kĩ năng giao tiếp,…
            <br />
            Luôn luôn được các anh chia sẻ kinh nghiệm kiến thức về lập trình đã
            giúp em cải thiện rất nhiều về tư duy hay cách xử lí vấn đề
          </div>
          <div className="LearningWithLumiCard-Description-Date">
            Tên tác giả | Ngày / tháng / năm
          </div>
        </div>
      </div>
    </>
  );
}
export default LearningWithLumiCard;
