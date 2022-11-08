// Import Lib
import Card from "react-bootstrap/Card";

// Import SCSS
import "./LearningWithLumiCard.scss";
// Import Mockup Image
import Mockup from "../../../Asset/image/test6.png";
function LearnigWithLumiCard({
  image,
  tiltle,
  description,
  style,
  author,
  time,
  styleDescription,
}) {
  console.log(style);
  return (
    // <Card>
    //   <Card.Img variant="top" src={image} />
    //   <Card.Body>
    //     <Card.Title>{title}</Card.Title>
    //     <Card.Text>{description}</Card.Text>
    //   </Card.Body>
    // </Card>
    <Card className="LearningWithLumiCard-Container ">
      {image === "" ? (
        <Card.Img
          variant="top"
          src={Mockup}
          className="LearningWithLumiCard-Image"
          style={style}
        />
      ) : (
        <Card.Img
          variant="top"
          src={image}
          className="LearningWithLumiCard-Image"
          style={style}
        />
      )}
      <Card.Body className="LearningWithLumiCard-Body">
        <Card.Title className="LearningWithLumiCard-Heading">
          {tiltle}
        </Card.Title>
        <Card.Text
          className="LearningWithLumiCard-Description"
          style={styleDescription}
        >
          {description}
        </Card.Text>
        <Card.Text className="LearningWithLumiCard-Date">
          <span>{author}</span> | <span>{time}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default LearnigWithLumiCard;
