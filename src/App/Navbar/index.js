import { Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import LogoLumi from "../../Asset/image/logoLumi.png";
import "./Navbar.scss";

function Navigation() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="transparent"
      className="navbar"
      fixed="top"
    >
      <Container fluid className="navbarContainter">
        <Navbar.Brand className="navbarLogo">
          <NavLink
            as={Link}
            to="/"
            className="navbar__brand"
            key="Home"
            eventKey="Home"
          >
            <img src={LogoLumi} alt="logo" className="lumiLogo" />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
        >
          <Offcanvas.Header />
          <Offcanvas.Body>
            <Nav className="justify-content-center">
              <NavLink
                as={Link}
                to="/tuyendung"
                className={`navbar__link`}
                key="Recruit"
                eventKey="Recruit"
              >
                Tuyển dụng
              </NavLink>
              <NavLink
                as={Link}
                to="/thuctapsinh"
                className={`navbar__link`}
                key="Intern"
                eventKey="Intern"
              >
                Thực tập sinh
              </NavLink>
              <NavLink
                as={Link}
                to="/doisong"
                className={`navbar__link`}
                key="LumiLife"
                eventKey="LumiLife"
              >
                Đời sống LUMIER
              </NavLink>
              <NavLink
                as={Link}
                to="/blog"
                className={`navbar__link`}
                key="Blog"
                eventKey="Blog"
              >
                Blog
              </NavLink>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
export default Navigation;
