import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import LogoLumi from "../../Asset/image/LogoSvg.svg";
import "./Navbar.scss";

function Navigation({ style }) {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="navbar"
      fixed="top"
      style={style}
    >
      <Container fluid className="navbarContainter">
        <Navbar.Brand className="navbarLogo">
          <NavLink to="/" className="navbar__brand" key="Home" eventKey="Home">
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
                to="/tuyendung"
                className={`navbar__link`}
                key="Recruit"
                eventKey="Recruit"
              >
                Tuyển dụng
              </NavLink>
              <NavLink
                to="/thuctapsinh"
                className={`navbar__link`}
                key="Intern"
                eventKey="Intern"
              >
                Thực tập sinh
              </NavLink>
              <NavLink
                to="/doisong"
                className={`navbar__link`}
                key="LumiLife"
                eventKey="LumiLife"
              >
                Đời sống LUMIER
              </NavLink>
              <NavLink
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
