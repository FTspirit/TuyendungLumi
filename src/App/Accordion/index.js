import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import HeadingSection from "../Component/HeadingSection";
import Footer from "../Footer/Footer";
import "./Accordion.scss";

function FAQAccordion() {
  return (
    <>
      <HeadingSection description={`Những câu hỏi thường gặp`} />
      <Container className="FAQAccordion-Section-Container">
        <Accordion
          className="FAQAccordion-Container"
          defaultActiveKey={["0", "1"]}
          alwaysOpen
        >
          <Accordion.Item eventKey="0" className="FAQAccordion-item">
            <Accordion.Header className="FAQAccordion-heading">
              Làm sao để chuẩn bị tốt cho buổi phỏng vấn ?
            </Accordion.Header>
            <Accordion.Body className="FAQAccordion-body">
              Để chuẩn bị tốt nhất cho buổi phỏng vấn, bạn nên tìm hiểu kỹ các
              thông tin về công ty, về mô tả công việc đã ứng tuyển. Có rất
              nhiều thông tin về Lumi, hay các bài viết chia sẻ về chuyên môn,
              kỹ năng, tư duy đã được chia sẻ trên web tuyển dụng của chúng mình
              đó các bạn nhé. Ngoài ra, Lumi khuyến khích các bạn đưa những sản
              phẩm, dự án đã làm để chứng tỏ được khả năng của bản thân.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="FAQAccordion-item">
            <Accordion.Header className="FAQAccordion-heading">
              Lumi đánh giá ứng viên gồm những tiêu chí gì?
            </Accordion.Header>
            <Accordion.Body className="FAQAccordion-body">
              Những ứng viên có định hướng nghề nghiệp rõ ràng, có sự đam mê. Có
              tư duy, thái độ làm việc chuyên nghiệp, trách nhiệm, có sự tử tế,
              khả năng học hỏi cao và hào hứng với sự sáng tạo, đổi mới. Vì vậy,
              đối với các bạn Fresher và Thực tập sinh, thì đừng quá lo lắng về
              kinh nghiệm, nếu các bạn có tinh thần máu chiến, khả năng tự học
              tốt, và tự tin rằng mình sẽ chiếm lĩnh được những cơ hội, thử
              thách, thì chúc mừng bạn, bạn đã là một ứng viên cực kỳ sáng giá
              đó.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
      <Footer />
    </>
  );
}
export default FAQAccordion;
