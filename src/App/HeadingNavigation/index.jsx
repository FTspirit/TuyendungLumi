import { Container } from "react-bootstrap";
import { BsChevronDoubleRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./HeadingNavigation.scss";
function HeadingNavigation({ namelink, namebase, namedirect }) {
  return (
    <>
      <Container>
        <div className="heading-navigation">
          <Link to={`/${namelink}`}>
            <p className="heading-navigation-home">{namebase}</p>
          </Link>
          <BsChevronDoubleRight />
          <p>{namedirect}</p>
        </div>
      </Container>
    </>
  );
}
export default HeadingNavigation;
