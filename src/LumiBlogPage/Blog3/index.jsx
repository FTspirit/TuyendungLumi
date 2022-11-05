import { useEffect } from "react";
import { Container } from "react-bootstrap";
import "../Blog2/Blog2.scss";
import Navigation from "../../App/Navbar";
import HeadingNavigation from "../../App/HeadingNavigation";
import blogcover from "../../Asset/image/blogcover1.png";
import Footer from "../../App/Footer/FooterCarousel";
function Blog1() {
  const bgcolor = {
    transperant: {
      backgroundColor: "transparent",
    },
    color: {
      backgroundColor: "#fff",
    },
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navigation style={bgcolor.color} />

      <div className="trickdetail-container">
        <HeadingNavigation
          namelink={`doisong`}
          namebase={`Đời sống LUMIER`}
          namedirect={`Trung thu yêu thương cùng Lumi `}
        />
        <h1 className="trickdetail-heading">Trung thu yêu thương cùng Lumi </h1>

        <Container>
          <div className="trickdetail-des">
            <p className="trickdetail-author"> Phạm Thanh Mai</p>
            <p className="Description">
              Vậy là lại một dịp trăng rằm đã đến. Mỗi dịp Trung thu là mọi
              người đều quây quần bên những chiếc bánh nướng, bánh dẻo cùng ly
              trà thơm để hàn huyên và tâm sự cùng nhau.
              <br />
              Trung thu 2022, Lumi chúc toàn thể các gia đình, các em bé nhỏ
              thật nhiều sức khỏe, tràn ngập niềm vui, và có một ngày lễ đong
              đầy nhiều kỉ niệm.
            </p>
            <div className="des-img">
              <img
                src="https://lh3.googleusercontent.com/e47LgXlfda2UdckCBBL10errzLlKNmTMEJMkwmjc8vzRlDhmPqw2pF8KIOt2p0kTac_r40M5-rakT8qeFz7VLZveCXW8jqF1rOOariQhSusQZ1qV7E9_OIqCOWd4prTm4j2hGILSArDpIY6olO8fH2Ja6fFSu7i8CmPNZVSlfNhUcfRuucmZmQRrr0cDDQ"
                width="602"
                height="425"
              />
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}
export default Blog1;
