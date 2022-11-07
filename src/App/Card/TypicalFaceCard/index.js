// Import Image

// Import SCSS
import "./TypicalFaceCard.scss";
function TypicalFaceCard({ image, name, description }) {
  return (
    <>
      <div className="TypicalFaceCard-Container">
        <div>
          <img
            src={image}
            alt="ảnh thực tập sinh"
            className="TypicalFaceCard-Image"
          />
        </div>
        <div className="TypicalFaceCard-Body">
          <div className="TypicalFaceCard-Heading-Container">
            <div className="TypicalFaceCard-Heading">{name}</div>
          </div>
          <div className="TypicalFaceCard-Description">{description}</div>
        </div>
      </div>
    </>
  );
}
export default TypicalFaceCard;
