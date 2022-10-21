import "./HeadingSection.scss";
function HeadingSection({ description, style }) {
  return (
    <div className="CarouselHeading">
      <p className="CarouselDescription" style={style}>
        {description}
      </p>
    </div>
  );
}
export default HeadingSection;
