import Card from "react-bootstrap/Card";
import "./CarouselCard.scss";
function CarouselCard({ title, description, image, imageAlt }) {
  return (
    <Card className="CarouselCard-Container">
      <Card.Title className="CarouselCard-Title">12/09/2022</Card.Title>
      <Card.Img
        variant="top"
        src={image}
        alt={imageAlt}
        className="CarouselCard-Image"
      />
      <div>
        <Card.Title className="CarouselCard-Title">THÀNH LẬP</Card.Title>
        <Card.Text className="CarouselCard-Description">
          Bởi 3 cựu thành viên Robocon Đại học Bách Khoa Hà Nội
        </Card.Text>
      </div>
    </Card>
  );
}
export default CarouselCard;
