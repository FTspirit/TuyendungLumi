// Import Lib
import Card from "react-bootstrap/Card";

// Import SCSS
import "./TrickCards.scss";
// Import Mockup Image
import Test from "../../../Asset/image/test6.png";
function TrickCard({ image, tiltle, description, style, author, time }) {
  return (
    // <Card>
    //   <Card.Img variant="top" src={image} />
    //   <Card.Body>
    //     <Card.Title>{title}</Card.Title>
    //     <Card.Text>{description}</Card.Text>
    //   </Card.Body>
    // </Card>
    <Card className="TrickCard-Container ">
      <Card.Img
        variant="top"
        src={Test}
        className="TrickCard-Image"
        style={style}
      />
      <Card.Body className="TrickCard-Body">
        <Card.Title className="TrickCard-Heading">{tiltle}</Card.Title>
        <Card.Text className="TrickCard-Description">{description}</Card.Text>
        <Card.Text className="TrickCard-Date">
          <span>{author}</span> | <span>{time}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TrickCard;
