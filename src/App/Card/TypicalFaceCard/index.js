// Import Image
import mockup1 from "../../../Asset/image/carouselmockup.png";

// Import SCSS
import "./TypicalFaceCard.scss";
function TypicalFaceCard() {
  return (
    <>
      <div className="TypicalFaceCard-Container">
        <div className="">
          <img
            src={mockup1}
            alt="ảnh thực tập sinh"
            className="TypicalFaceCard-Image"
          />
        </div>
        <div className="TypicalFaceCard-Body">
          <div className="TypicalFaceCard-Heading-Container">
            <div className="TypicalFaceCard-Heading">
              NGUYỄN TRÀNG TRUNG - NHÂN VIÊN TEAM IOT
            </div>
          </div>
          <div className="TypicalFaceCard-Description">
            Khi đi thực tập tại Lumi là một môi trường mà em cảm thấy mình học
            hỏi được nhiề. Không chỉ là kiến thức chuyên môn mà con văn hóa,
            cách ứng xử, kĩ năng mềm, kĩ năng thuyết trình, kĩ năng giao tiếp,…
            <br />
            Luôn luôn được các anh chia sẻ kinh nghiệm kiến thức về lập trình đã
            giúp em cải thiện rất nhiều về tư duy hay cách xử lí vấn đề
          </div>
        </div>
      </div>
    </>
  );
}
export default TypicalFaceCard;
