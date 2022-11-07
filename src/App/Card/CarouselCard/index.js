import Card from "react-bootstrap/Card";
import "./CarouselCard.scss";
function CarouselCard({ title, description, image, imageAlt }) {
  return (
    <Card className="CarouselCard-Container">
      <Card.Title className="CarouselCard-Title">{title}</Card.Title>
      <Card.Img
        variant="top"
        src={`${image}`}
        alt="Roadmap logo"
        className="CarouselCard-Image"
      />
      <div>
        <Card.Text className="CarouselCard-Description">
          {description}
        </Card.Text>
      </div>
    </Card>
  );
}
export default CarouselCard;
