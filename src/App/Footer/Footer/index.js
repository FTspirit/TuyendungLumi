import { Container } from "react-bootstrap";
import "./Footer.scss";

//import logo
import facebooklogo from "../../../Asset/image/Facebooklogo.png";
import instagramlogo from "../../../Asset/image/Instagram.png";
import youtubelogo from "../../../Asset/image/youtube.png";
import printerestlogo from "../../../Asset/image/printerest.png";
function Footer() {
  return (
    <Container fluid className="Footer-Container">
      <div className="Footer-Container--Logo">
        <div className="logo">
          <a href="https://www.facebook.com/lumijsc">
            <img src={facebooklogo} alt="facebook logo" />
          </a>
        </div>
        <div className="logo">
          <a href="https://www.instagram.com/lumivietnam/">
            <img src={instagramlogo} alt="instagram logo" />
          </a>
        </div>
        <div className="logo">
          <a href="https://www.youtube.com/LumiSmartHomeOfficial">
            <img src={youtubelogo} alt="youtube logo" />
          </a>
        </div>
        <div className="logo">
          <a href="https://www.pinterest.com/lumivietnam/">
            <img src={printerestlogo} alt="printerest logo" />
          </a>
        </div>
      </div>
      <div className="Footer-Description">
        <p>© 2021 Lumi., JSC. All rights reserved.</p>
      </div>
    </Container>
  );
}
export default Footer;
