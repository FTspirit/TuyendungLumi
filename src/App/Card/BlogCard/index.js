// Import Lib
import Card from "react-bootstrap/Card";

// Import SCSS
import "./TrickCards.scss";
// Import Mockup Image
import Test from "../../../Asset/image/carouselmockup.png";
function BlogCard({ image, title, description }) {
  return (
    // <Card>
    //   <Card.Img variant="top" src={image} />
    //   <Card.Body>
    //     <Card.Title>{title}</Card.Title>
    //     <Card.Text>{description}</Card.Text>
    //   </Card.Body>
    // </Card>
    <Card className="BlogCard-Container">
      <Card.Img variant="top" src={Test} className="BlogCard-Image" />
      <Card.Body className="BlogCard-Body">
        <Card.Title className="BlogCard-Heading">Tiêu đề chính</Card.Title>
        <Card.Text className="BlogCard-Description">
          CSS Preprocessors là ngôn ngữ tiền xử lý CSS. Là một ngôn ngữ kịch bản
          mở rộng của CSS và được biên dịch thành cú pháp CSS giúp bạn viết CSS
          nhanh hơn và có cấu trúc rõ ràng hơn. CSS Preprocessor có thể giúp bạn
          tiết kiệm thời gian viết CSS, dễ dàng bảo trì và phát triển CSS.
        </Card.Text>
        <Card.Text>Tên tác giả | Ngày / tháng / năm</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BlogCard;
